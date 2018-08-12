import Component from '../app/component';
import DateTime from './datetime';
import MapDriver from './interactivemap/components/mapdriver';

export default class MapEditor extends Component {


  constructor ( options = {} ) {

    super(options);

    this.MapDriver = new MapDriver();
    this.MapDriver.init();

    this.config = {

      // define if this map view is interactive or not
      interactive: true,
      center: [37.25, -6.95],
      zoom: 5

    };

  
    this.$mapLeaflet = $('<div class="map-leaflet" id="map-leaflet"></div>');
    this.$editorControls = $('<div class="mapeditor-controls"></div>');

    this.$map = $('#mapeditor');
    this.$map.append(this.$mapLeaflet);
    this.$map.append(this.$editorControls);

    this.data = this.$map.data('json') || {};
    this.data = Object.assign(this.config, this.data);

    this.datetime = new DateTime();
    this.datetime.setStartDate(this.data.start);

    this._mode = false;

    this.polyline = false;

    // holds all routes => there should be only one route
    this.routes = [];

    // holds all markers registered for the editor
    this.markers = [];


    this.datasets = [];


    this.populateMapData();

    this.loadDataSets();

    this.initMap();
    this.init();    

  }


  populateMapData () {

    //this.setMapCenter(this.data.map.center);
    //this.setMapZoom(this.data.map.zoom);

  }


  loadDataSets () {

    $.ajax({
      url: '../server/',
      data: { 
        model: 'dataset',
        action: 'getAll'
      }, 
      dataType: 'json',
      success: (d) => {
        
        console.log(d);
        this.datasets = d.data;
        this.renderDatasets(d.data);

      }

    })

  }


  renderDatasets (data) {

    let $dropdown = $('<select name="datasets"></select>');

    $dropdown.append('<option>Choose</option>');

    data.forEach( d => {

      let $option = $(`<option value="${d.id}">${d.name}</option>`);
      $dropdown.append( $option );

    });
    
    this.$editorControls.append( $dropdown );

    $dropdown.on('change', (e) => {

      let val = $(e.currentTarget).find(":checked").val();

      if (val) {
        let dataset = this.datasets.filter( (d) => { return d.id == val });
        console.log(dataset[0]);
        this.addDatasetToMap(dataset[0]);
      }

    });

  }


  saveDataset () {

    let route = this.getMarkerPositions();

    if (!route.length) {
      route = [
        [37.08895,-6.84101],
        [28.25694,-17.34166],
        [28.10236,-17.35936],
        [22.56652,-73.60641],
        [22.47156, -72.32549],
        [22.48171, -73.39116],
        [22.50201, -73.5999]
      ];

    }

    console.log(route);

    $.ajax({
      url: '../server/',
      data: { 
        model: 'dataset',
        action: 'save',
        id: '123',
        data: {
          id: 123,
          name: 'First Voyage',
          route: route
        }
      }, 
      dataType: 'json',
      success: (d) => {
        console.log(d);
      }

    })

  }



  addDatasetToMap (dataset) {

    dataset.route.forEach(route => {
      this.addMarker(route);
    });

  } 



  init () {

    this.initEvents();

  }


  initEvents () {

    // Add Editor Buttons

    this.buttonAddRoute = $('<button class="button button-add-route">New Route</button>');

    this.buttonAddRoute.on('click', (e) => {

      $(e.currentTarget).toggleClass('is-active');

      this._mode = 'add-route';
      //this.showEditorInforText( 'add-route' );

    });

    this.$editorControls.append( this.buttonAddRoute );



    this.buttonAddMarker = $('<button class="button button-add-marker">Add Marker</button>');

    this.buttonAddMarker.on('click', (e) => {

      $(e.currentTarget).toggleClass('is-active');

      this._mode = 'add-marker';
      //this.showEditorInforText( 'add-marker' );

    });

    this.$editorControls.append( this.buttonAddMarker );



    this.buttonGetData = $('<button class="button button-add-marker">Get Route Data</button>');

    this.buttonGetData.on('click', (e) => {

      let positions = this.getMarkerPositions();

      let string = '';

      positions.forEach( (pos) => {

        string += '[' + pos[0].toFixed(5) + ',' + pos[1].toFixed(5) + '],'; 

      });

      alert(string);
      // this.showDataWindow(string);

    });

    this.$editorControls.append( this.buttonGetData );




    this.buttonSaveData = $('<button class="button button-save-dataset">Save Dataset</button>');

    this.buttonSaveData.on('click', (e) => {

      this.saveDataset();

    });

    this.$editorControls.append( this.buttonSaveData );





    this.map.on('click', (e) => {

      var location = [parseFloat(e.latlng.lat.toFixed(5)), parseFloat(e.latlng.lng.toFixed(5))]
      console.log(location);

      if ( this._mode == 'add-marker') {

        this.addMarker(location);

      }

    });

  }



  showDataWindow (data) {



  }


  initMap () {

    this.map = L.map('map-leaflet', { worldCopyJump: true }).setView( this.getCenter(), this.getZoom() );

    L.tileLayer( this.MapDriver.get('osm').url, {
  		maxZoom: 12,
      minZoom: 2,
  		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  		id: this.MapDriver.get('osm').id
  	}).addTo(this.map);


    this.map.locate({ 
      setView: true, 
      maxZoom: 10 
    });


    if (this.data.countries) {

      let country = this.data.countries[0];

      L.geoJSON(country.geometry, {
        style: {
          "color": "#15830B",
          "weight": 5,
          "opacity": 0.8
        }
      }).addTo(this.map);

    }

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


  getMarkerPositions () {

    let wp = [];

    this.markers.forEach((marker) => {

      let pos = marker.getLatLng();
      wp.push( [pos.lat, pos.lng] );

    });

    return wp;

  }


  addMarker ( location ) {

    let divIcon = L.divIcon({ className: 'mapicon-event' });

    let marker = L.marker(location, { icon: divIcon, draggable:true }).addTo(this.map);
    marker.bindPopup("<b>Marker At "+ location +"</b>");

    marker.on('dragend', (e) => {
      let position = marker.getLatLng();
      console.log( position );

      this.addPolyline( this.getMarkerPositions() );
    });


    this.markers.push( marker );

    this._mode = false;
    this.addPolyline( this.getMarkerPositions() );

  }



  addPolyline ( points ) {

    if (this.polyline)
      this.removePolyline();

    this.polyline = L.polyline([ points ],
      {
          color: 'white',
          weight: 4,
          opacity: .5,
          // dashArray: '4,4',
          lineJoin: 'round',
          smoothFactor: 5
      }
    ).addTo(this.map);

  }



  removePolyline () {

    this.map.removeLayer(this.polyline);

  }

}
