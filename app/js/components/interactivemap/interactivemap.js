import Component from '../../app/component';

import DateTime from '../datetime';
import EventTimeline from '../eventtimeline';

import Fleet from '../../models/fleet';


import MapDriver from './components/mapdriver';
//import EventManager from './components/eventmanager';

export default class InteractiveMap extends Component {


  constructor ( options = {} ) {

    super(options);

    console.log(options);

    this.MapDriver = new MapDriver();
    this.MapDriver.init();

    this.config = {

      // define if this map view is interactive or not
      interactive: true,
      center: [37.25, -6.95],
      zoom: 1

    };


    this.fleets = [];

    // 1.0, 2.0, 3.0
    // default: 1 second in real time is one hour in game
    this.speed = 1.0;
    this.stateRunning = true;

    this.$map = $('#map-interactive');
    this.data = this.$map.data('json');

    console.log(this.data);

    /*
    this.eventTimeline = new EventTimeline({
      map: this,
      data: this.data
    });
    */

    // this.$map.append(this.eventTimeline.render());

    this.data = Object.assign(this.config, this.data);

    this.datetime = new DateTime();
    this.datetime.setStartDate(this.data.start);

    console.log(this.datetime);
    console.log(this.MapDriver.get('osm'));

    this.populateMapData();
    this.initMap();

    // this.registerFleets();
    this.registerWaypoints();
    this.registerEvents();

    // start the render loop
    // this.render();

    this.initEvents();


  }


  populateMapData () {

    this.setMapCenter(this.data.map.center);
    this.setMapZoom(this.data.map.zoom);

  }



  init () {

    this.initEvents();

  }


  initEvents () {

    let $globeButton = $('<button class="globe-button">View Globe</button>');
    $(this.node).append($globeButton);

  }


  initMap () {

    this.map = L.map('map-interactive', {worldCopyJump: true}).setView( this.getCenter(), this.getZoom() );

    L.tileLayer( this.MapDriver.get('worldoceanbase').url, {
  		maxZoom: 12,
      minZoom: 2,
  		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  		id: this.MapDriver.get('worldoceanbase').id
  	}).addTo(this.map);


    this.map.locate({setView: true, maxZoom: 5});


    var marker = L.divIcon({
      iconSize: [30, 30],
      iconAnchor: [10, 10],
      popupAnchor: [10, 0],
      shadowSize: [0, 0],
      className: 'animated-icon my-icon-id'
    });


    this.map.on('click', (e) => {
      var latlon = [parseFloat(e.latlng.lat.toFixed(5)), parseFloat(e.latlng.lng.toFixed(5))]
      console.log(latlon);
    });

  }



  // private map logic function
  setMapCenter (center = []) {

    if (center.length) {
      this.config.center = center;
    }

  }

  setMapZoom (zoom = 1) {

    if (zoom) {
      this.config.zoom = zoom;
    }

  }



  getCenter () {
    return this.data.center;
  }

  getZoom () {
    return this.data.zoom;
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

      console.warn('This interactive map does not have any events defined');
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

    if ( this.data.events === undefined ) return;

    if ( !this.data.events.length ) {

      console.warn('This interactive map does not have any events defined');
      return false;
    }

    this.data.events.forEach( (event) => {

      if ( event.location === undefined || !event.location.length) {
        
        console.warn(`The event ${event.name} does not have any location`);

      } else {

        let marker = L.marker(event.location).addTo(this.map);
        marker.bindPopup("<b>" + event.name + "</b><br>" + event.date + "" + event.text + "");

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
