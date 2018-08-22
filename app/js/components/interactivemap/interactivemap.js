import Component from '../../app/component';

import DateTime from '../datetime';
//import EventTimeline from '../eventtimeline';

import Fleet from '../../models/fleet';

import Globe from '../globe';
import MapDriver from './components/mapdriver';
//import EventManager from './components/eventmanager';

import * as d3 from "d3";

export default class InteractiveMap extends Component {


  constructor ( options = {} ) {

    super(options);

    console.log(options);

    this.MapDriver = new MapDriver();
    this.MapDriver.init();

    this.config = {

      // define if this map view is interactive or not
      interactive: true,
      map: {
        center: [37.25, -10.95],
        zoom: 1
      }
    
    };


    this.datasetColors = ['#ce0000', '#00ce00', '#cece00', '#0000ce'];


    this.isViewToggled = false;


    this.fleets = [];

    // 1.0, 2.0, 3.0
    // default: 1 second in real time is one hour in game
    this.speed = 1.0;
    this.stateRunning = true;

    this.$map = $('#map-interactive');
    this.$mapLeaflet = $('<div class="map-leaflet" id="map-leaflet"></div>');
    this.$mapGlobe = $('<div class="map-globe" id="map-globe"></div>');

    this.$map.append(this.$mapLeaflet);
    this.$map.append(this.$mapGlobe);

    this.data = this.$map.data('json').data;
    this.movingMarkers = [];

    /*
    this.eventTimeline = new EventTimeline({
      map: this,
      data: this.data
    });
    */

    // this.$map.append(this.eventTimeline.render());

    this.data = Object.assign(this.config, this.data);
    console.log(this.data);

    this.datetime = new DateTime();
    this.datetime.setStartDate(this.data.start);

    //console.log(this.datetime);
    //console.log(this.MapDriver.get('osm'));

    this.populateMapData();
    this.initMap();

    //this.registerFleets();
    //this.registerWaypoints();
    this.registerEvents();

    this.addDataSeries();

    // start the render loop
    // this.render();

    this.$globeLayer = this.$mapGlobe;
    //$(this.node).before(this.$globeLayer);

    this.init();
    // this.initEvents();


    //this.$mapLeaflet.append('<img class="image-overlay" src="img/Columbus_first_voyage.jpg">');

    // 2 = editor mode
    //this.mode = 2;


  }


  populateMapData () {

    this.setMapCenter(this.data.map.center);
    this.setMapZoom(this.data.map.zoom);

  }


  init () {

    this.initEvents();

    setTimeout(() => {

      this.initGlobe();

      this.loadStuff();

    }, 1000);

  }


  initEvents () {

    let colors = this.datasetColors;

    this.$template = $(`
      
        <div class="map-views">
          <span class="button button-2d is-active" title="View map as a mercator projection">2D</span>
          <span class="button button-3d" title="View map as an orthographic projection">3D</span>
        </div>
        <div class="map-legend">
          ${this.data.series.map((d, i) => {
            return `<span class="dataset" data-id="${i}"><span style="background-color:${colors[i]};"></span>${d.name}</span>`;
          }).join(" ")}
        </div>
      
    `);


    $(this.node).append( this.$template );


    this.$template.find('.button-play').on('click', (e) => {

      this.movingMarker.start();

    });


    this.$template.find('.dataset').on('click', (e) => {

      this.movingMarkers[ $(e.currentTarget).data('id') ].start();

    });


    //let $globeButton = $('<button class="globe-button">View Globe</button>');
    //$(this.node).append($globeButton);

    // this.$template.find('.button-3d')
    this.$template.find('.button-3d').on('click', (e) => {
      
      this.$mapGlobe.show();
      this.$mapLeaflet.hide(); 

      this.$template.find('.button-2d').removeClass('is-active');
      $(e.currentTarget).toggleClass('is-active');

    });

    this.$template.find('.button-2d').on('click', (e) => {

      this.$mapGlobe.hide();
      this.$mapLeaflet.show(); 

      this.$template.find('.button-3d').removeClass('is-active');
      $(e.currentTarget).toggleClass('is-active');

    });

  }


  initMap () {

    console.log('center', this.getCenter());

    this.map = L.map('map-leaflet', /*{worldCopyJump: true}*/ ).setView( this.getCenter(), this.getZoom() );

    L.tileLayer( this.MapDriver.get('worldoceanbase').url, {
  		maxZoom: 12,
      minZoom: 2,
  		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  		id: this.MapDriver.get('worldoceanbase').id
  	}).addTo(this.map);


    this.map.locate({setView: true, maxZoom: 5});

    /*
    var marker = L.divIcon({
      iconSize: [30, 30],
      iconAnchor: [10, 10],
      popupAnchor: [10, 0],
      shadowSize: [0, 0],
      className: 'animated-icon my-icon-id'
    });
    */


    this.map.on('click', (e) => {
      var latlon = [parseFloat(e.latlng.lat.toFixed(5)), parseFloat(e.latlng.lng.toFixed(5))]
      console.log(latlon);

      console.log( this.map.getCenter() );
      console.log( this.map.getZoom() );

    });


    this.data.countries = [];
    this.data.countries.push({
      "type":"Feature","properties":{"name":"Portugal"},"geometry":{"type":"Polygon","coordinates":[[[-9.034818,41.880571],[-8.671946,42.134689],[-8.263857,42.280469],[-8.013175,41.790886],[-7.422513,41.792075],[-7.251309,41.918346],[-6.668606,41.883387],[-6.389088,41.381815],[-6.851127,41.111083],[-6.86402,40.330872],[-7.026413,40.184524],[-7.066592,39.711892],[-7.498632,39.629571],[-7.098037,39.030073],[-7.374092,38.373059],[-7.029281,38.075764],[-7.166508,37.803894],[-7.537105,37.428904],[-7.453726,37.097788],[-7.855613,36.838269],[-8.382816,36.97888],[-8.898857,36.868809],[-8.746101,37.651346],[-8.839998,38.266243],[-9.287464,38.358486],[-9.526571,38.737429],[-9.446989,39.392066],[-9.048305,39.755093],[-8.977353,40.159306],[-8.768684,40.760639],[-8.790853,41.184334],[-8.990789,41.543459],[-9.034818,41.880571]]]},"id":"PRT"}
    );


    if (this.data.countries) {

      let country = this.data.countries[0];

      L.geoJSON(country.geometry, {
        className: 'map__country',
        style: {
          "color": "#15830B",
          "stroke": "#05730B",
          "weight": 5,
          "opacity": 0.8
        }
      }).addTo(this.map);

    }

  }


  loadStuff() {

    var self = this;

    $.ajax({
      url: "json/japan.geojson-simple.json", 
      dataType: 'json',
      success(d) {

        console.log('miao', d);

        L.svg().addTo(self.map);	
        var svg = d3.select("#map-leaflet").select("svg");
    
        let defs = svg.append('defs');
        defs.append('marker')
          .attr('id', 'arrow')
          .attr('markerUnits', 'strokeWidth')
          .attr('markerWidth', '12')
          .attr('markerHeight', '12')
          .attr('viewBox', '0 0 12 12')
          .attr('refX', '6')
          .attr('refY', '6')
          .attr('orient', 'auto')

        defs
          .append('path')
            .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2')
            .attr('fill', '#f00000');

        defs.append('path')
          .attr('id', 'arrowhead')
          .attr('d', 'M7,0 L-7,-5 L-7,5 Z');



        var g = svg.append('g');


        function projectPoint(x, y) {

          console.log(x,y);
          if (x && y) {
            let point = self.map.latLngToLayerPoint(new L.LatLng(x, y));
            //console.log(point);
            this.stream.point(point.x, point.y);
          }
          
        }

      
        var transform = d3.geoTransform({point: projectPoint});
        var path = d3.geoPath().projection(transform);
    
        var featureElement = svg.selectAll(".jap")
            .data(d.features)
            .enter()
            .append("path")
            .attr('class', '.jap')
            .attr("stroke", "gray")
            .attr("fill", "green")
            .attr("fill-opacity", 0.6);


        var lineGenerator = d3.line()
          .curve(d3.curveCardinal);

        var s = { "features": [ { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [ [46.35238, -3.38533], [44.56479, -9.7574], [41.15152, -11.99862], [47.99521, -16.96444], [43.42201, -16.77132] ] }} ] };
        

        var pathData = lineGenerator([
          [33.21112, -36.21094], [39.02772, -45.79102], [32.99024, -39.02344], [40.84706, -32.43164]
        ]);

        console.log(s.features);

        var p = g.selectAll('.line-path')
          .data(s.features)
          .enter()
          .append('path')
          .attr('class', 'line-path')
          .attr("stroke", "gray")
          .attr("fill", "red")
          .attr("fill-opacity", 0.8);


        var u = g.append("use")
          .attr("xlink:href", "#arrowhead");
          //.attr("marker-end","url(#arrow)"); 


        p.attr('d', path);


        // Approximate tangent

        function pointAtLength(l) {

          var xy = path.getPointAtLength(l);
          return [xy.x, xy.y];
      
        }

        
        function angleAtLength(l) {

          var a = pointAtLength(Math.max(l - 0.01,0)), // this could be slightly negative
              b = pointAtLength(l + 0.01); // browsers cap at total length

          return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;

        }
    

        self.map.on("moveend", () => {
    
          featureElement.attr("d", path);

          p.attr("d", (d) => { 
            let p = path(d);
            let py = p.split('L');
            let arr = [];

            py.forEach( (pp) => {

              let ppp = pp.split(',');

              ppp[0] = ppp[0].replace('M', '');

              arr.push([ppp[0], ppp[1]]);

            });
            return lineGenerator(arr);
          
          });
    
        });

      }

    });
  }



  initGlobe () {

    var self = this;

    this.globe = new Globe({
      map: 'json/world-110m.json',
      //file: 'json/alcohol-worldwide.json',
      color: {
        domain: [100, 1000000, 20000000],
        range: ["green", "yellow", "red"]
      },
      afterRender: function(){

        // define the color ranges for the data series
        this.colors = {};

        /*
        this.colors = {
          total: d3.scale
            .linear()
            .domain([0, 7.5, 10, 15])
            .interpolate(d3.interpolateRgb)
            .range(["#EED447", "#D29C50", "#C48A54", "#A66D55"]),
            //.range(["#fff0f0", "#f09999", "#f06060", "#f02020"]),

          beer: d3.scale
            .linear()
            .domain([0, 2, 4, 6, 8, 10, 12])
            .interpolate(d3.interpolateRgb)
            .range(["#F3F300", "#F3F300", "#DC9F00", "#CA8312", "#B86B20", "#8B4323", "#73301F"]),
        }
        */

      },
      draw: function() {

        console.log('drawing', this.countries.objects.land);

        // var self = this;

        this.land = this.g
          .insert("path", ".land")
          .datum(topojson.feature(this.countries, this.countries.objects.land))
          .attr("class", "land")
          //.attr('mask', 'url(#myMask)')
          .attr("d", this.path);



        let country = {"type":"Feature","properties":{"name":"Portugal"},"geometry":{"type":"Polygon","coordinates":[[[-9.034818,41.880571],[-8.671946,42.134689],[-8.263857,42.280469],[-8.013175,41.790886],[-7.422513,41.792075],[-7.251309,41.918346],[-6.668606,41.883387],[-6.389088,41.381815],[-6.851127,41.111083],[-6.86402,40.330872],[-7.026413,40.184524],[-7.066592,39.711892],[-7.498632,39.629571],[-7.098037,39.030073],[-7.374092,38.373059],[-7.029281,38.075764],[-7.166508,37.803894],[-7.537105,37.428904],[-7.453726,37.097788],[-7.855613,36.838269],[-8.382816,36.97888],[-8.898857,36.868809],[-8.746101,37.651346],[-8.839998,38.266243],[-9.287464,38.358486],[-9.526571,38.737429],[-9.446989,39.392066],[-9.048305,39.755093],[-8.977353,40.159306],[-8.768684,40.760639],[-8.790853,41.184334],[-8.990789,41.543459],[-9.034818,41.880571]]]},"id":"PRT"};

        this.country = this.g
          .insert("path", ".country")
          .datum(country.geometry)
          .attr("class", "country")
          .attr('mask', 'url(#myMask)')
          .attr("d", this.path);

        this.featureGroup = this.g.append('g').attr("class", "features");

        console.log(self);
        this.routeData = self.data.series[0].route;
        console.log(this.routeData);

        /*
        
        [[37.14928, -6.99775],
          [28.116667, -17.233333],
          [25.71733, -45.21767],
          [27.55911, -47.40189],
          [25.67340, -49.77493],
          [27.20502, -67.77054],
          [24.31628, -75.10941],
          [23.26149, -74.91410],
          [22.00410, -76.24177],
          [22.22801, -77.20857],
          [21.51433, -76.48347],
          [20.36515, -73.07771],
          [19.54446, -69.11606],
          [20.97703, -67.63291],
          [21.44816, -66.31455],
          [21.08114, -66.21057],
          [21.96008, -65.24377],
          [22.02120, -63.55187],
          [28.13679, -59.96922],
          [29.59913, -50.47703],
          [29.75186, -43.97312],
          [31.75474, -49.21188],
          [38.16749, -45.28633],
          [38.30556, -32.80586],
          [37.75172, -31.92696],
          [36.20716, -26.56563],
          [38.58092, -22.96211],
          [37.71859, -16.61133],
          [38.53575, -9.36902]];

          */



        this.routeData = this.arrayHelper.switchLatLonFromArray(this.routeData);

        this.g
          .append("path")
          .datum({type: "LineString", coordinates: this.routeData})
          .attr('class', 'route-path')
          .attr('d', this.path);

      },

      redraw: function(){

        this.land.attr("d", this.path);

        this.country.attr("d", this.path);

        d3.select('.route-path').attr('d', this.path);

        //d3.select('.route-path2').attr('d', this.path);
      
      }

    });
    
    this.globe.init();

  }


  // private map logic function
  setMapCenter (center = []) {

    if (center.length) {
      this.data.map.center = center;
    }

  }

  setMapZoom (zoom = 1) {

    if (zoom) {
      this.data.map.zoom = zoom;
    }

  }



  getCenter () {

    return this.data.map.center;

  }

  getZoom () {

    return this.data.map.zoom;

  }



  addDataSeries() {

    let colors = this.datasetColors;


    if ( this.data.series === undefined || !this.data.series.length ) {
      console.warn('This interactive map does not have any data series defined');
      return false;
    }


    this.data.series.forEach( (serie, i) => {

      //console.log(serie, i);

      if (serie.route) {

        let polyline = L.polyline([ serie.route ],
          {
              color: colors[i],
              weight: 10,
              opacity: 1.0,
              // dashArray: '4,4',
              lineJoin: 'round',
              smoothFactor: 0
          }
        ).addTo(this.map);

        /*
        L.polylineDecorator(serie.route, {
          patterns: [{
            offset: 150,
            repeat: 500,
            symbol: L.Symbol.arrowHead({
              pixelSize: 12,
              pathOptions: {
                fillOpacity: 0.5,
                color: 'white',
                stroke: false,
                weight: 2
              }
            })
          }]
      }).addTo(this.map);
      */


        // let animatedMarker = L.animatedMarker(polyline.getLatLngs()).addTo(this.map);
        let movingMarkerSpeed = [];

        serie.route.forEach( (r, i) => {

          if (i < serie.route.length-1) {
            //let d = L.GeometryUtil.distance(this.map, r, serie.route[i+1]);
            //console.log(d + 'px');
            let latlonA = L.latLng(r[0], r[1]);
            let latlonB = L.latLng(serie.route[i+1][0], serie.route[i+1][1]);

            let meters = latlonA.distanceTo(latlonB);
            let km = meters / 1000;

            //console.log( km.toFixed(0) + 'km', latlonA);

            let baseSpeed = 5;
            let segmentSpeed = 100 * km / 50;
            //console.log('segmentSpeed', segmentSpeed);
            movingMarkerSpeed.push( segmentSpeed * baseSpeed );
          } 

        }); 

        let marker = L.divIcon({ className: 'moving-marker' });

        this.movingMarkers.push(
          L.Marker.movingMarker(this.data.series[0].route, movingMarkerSpeed, { icon: marker, autostart: false }).addTo(this.map)
        );
        

      }

    });


    

  }



  registerFleets() {

    if ( this.data.events === undefined || !this.data.events.length ) {
      console.warn('This interactive map does not have any units defined');
      return false;
    }

    this.data.fleets.forEach( (fleet) => {

      if (!fleet.waypoints.length) {
        console.log.warn('this fleet does not have geo location')
      } else {

        let f = new Fleet(fleet);
        this.fleets.push(f);

        let wp = [];

        fleet.waypoints.forEach((waypoint) => {
          if (waypoint.geo.length > 2) {

            waypoint.geo.forEach((g) => {
              console.log(g);
              wp.push(g);
            });


          } else {
            wp.push(waypoint.geo);
          }

        });

        var polyline = L.polyline([ wp ],
          {
              color: 'white',
              weight: 4,
              opacity: .5,
              dashArray: '4,4',
              lineJoin: 'round',
              smoothFactor: 10
          }
        ).addTo(this.map);


        L.polylineDecorator(wp, {
              patterns: [{
                offset: 150,
                repeat: 500,
                symbol: L.Symbol.arrowHead({
                  pixelSize: 12,
                  pathOptions: {
                    fillOpacity: 0.5,
                    color: 'white',
                    stroke: false,
                    weight: 2
                  }
                })
              }]
          }).addTo(this.map);

      }

    });

  }


  registerWaypoints () {

    if ( this.data.voyage.waypoints === undefined ) return;

    if ( !this.data.voyage.waypoints.length ) {

      console.warn('This interactive map does not have any waypoints defined');
      return false;
    }

    let waypoints = [];


    this.data.voyage.waypoints.forEach( (waypoint) => {

      let w = [
        waypoint[0],
        waypoint[1]
        //L.Util.wrapNum(waypoint[1], [0, 360], true)
      ];
      
      if (waypoint[1] < 0) {
        //w[1] += 360;
      }

      console.log(w);

      waypoints.push( w );

    });

    var Geodesic = L.geodesic([waypoints], {
      weight: 3,
      opacity: 0.8,
      color: 'blue',
      steps: 50
    }).addTo(this.map);

    //var berlin = new L.LatLng(52.5, 13.35);
    //var losangeles = new L.LatLng(33.82, -118.38);
    //Geodesic.setLatLngs([[berlin, losangeles]]);

    /*
    var polyline = L.polyline([ waypoints ],
      {
          color: 'white',
          weight: 4,
          opacity: .5,
          dashArray: '4,4',
          lineJoin: 'round',
          smoothFactor: 10
      }
    ).addTo(this.map);
    */

  }


  registerEvents () {

    if ( this.data.events === undefined || !this.data.events.length ) {

      console.warn('This interactive map does not have any events defined');
      return false;
    }

    this.data.events.forEach( (event) => {

      if ( event.location === undefined || !event.location.length) {
        
        console.warn(`The event ${event.name} does not have any location`);

      } else {

        let divIcon = L.divIcon({ className: 'mapicon-event' });

        let marker = L.marker(event.location, { icon: divIcon, draggable:true }).addTo(this.map);
        marker.bindPopup("<b>" + event.name + "</b><br>" + event.date + "" + event.text + "");

        marker.on('dragend', (e) => {
          let position = marker.getLatLng();
          console.log( position );
        });

      }

    });

  }



  render () {

    let startTime = null,
        isRunning = false,
        timeElapsed = 0,
        pause = false,
        pTime = 0;

    this.startDate = Date.now();
    this.currentTime = this.startDate;
    // this.elapsedPaused = 0;

    //this.elapsed = 0;
    this.secondsElapsed = 0;
    // this.secondsFiveElapsed = 5;
    // this.secondsTenElapsed = 10;

    this.counter = 0;


    this.frameCount = 0;

    let step = 0;
    let start = [47.34164617, -7.26147461];
    let end = [30.94034, -29.90990];

    // this.components.map.drawLine(start, end, 'line');
    let dtFrame = 0;
    let tFrameOld = 0;
    let dTime = 0;
    let deltaElapsed = 0;

    // d3 timer uses requestAnimationFrame internally if available. The desired
    // framerate should be 60fps maximum
    // tFrame = time in ms since timer start
    this.timer = d3.timer((tFrame) => {

      if (this.stateRunning) {


        // the time in ms per tick (ideally 17ms max (1000/60))
        dtFrame = (tFrame - tFrameOld) * this.speed;
        tFrameOld = tFrame;

        // elapsed time in milliseconds since game start
        timeElapsed = (tFrame - startTime) - pTime;
        timeElapsed += (dtFrame);

        deltaElapsed += dtFrame;

        // check if a new event has occured

        this.fleets.forEach( (fleet) => {
          fleet.update(dtFrame);
        });


        // process calculation after every second
        if (this.secondsElapsed != Math.round( (timeElapsed) / 1000) ) {

          console.log('calculate per second');
          this.secondsElapsed++;
          this.frameCount = 0;

        }

        this.datetime.update(deltaElapsed);


        this.counter++;

        // print this every second frame only
        if (this.counter % 100 == 0) {

          step++;

          let p = 0.1 * step; // 10 percent between
          let endStep = [
            start[0] - (Math.abs(end[0] - start[0]) * p),
            start[1] - (Math.abs(end[1] - start[1]) * p)
          ];

          // line between
          //this.components.map.drawLine(start, endStep, 'line2');

          //p = 0.5;
          //endStep = [];
          //this.components.map.drawLine(start, endStep);

        }


        this.elapsed = Date.now();

        // let dt = this.elapsed - this.startDate;
        // this.startDate = this.elapsed;
        // console.log(dt);

        // this.elapsedTime = (new Date(this.elapsed)).getSeconds();

        this.frameCount++;

      }

      // the game is not running
      else {

        pTime = (tFrame - startTime) - timeElapsed;
        timeElapsed = (tFrame - startTime) - pTime;

        tFrameOld = tFrame;

      }

      // this.stats.end();

    });

  }


}
