import Component from '../../../app/component';

export default class MapDriver extends Component {

  constructor ( options = {} ) {

    super(options);

  }

  init () {

    this.driver = {

      // https://wiki.openstreetmap.org/wiki/OpenTopoMap
      // https://a.tile.opentopomap.org/1/1/1.png

      otm: { url: 'https://a.tile.opentopomap.org//{z}/{x}/{y}.png', id: '' },
      osm: {
        url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        id: 'mapbox.streets'
      },
      wtc: {
        url: 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
        id: ''
      },

      // http://maps.stamen.com/#terrain/10/37.7186/-122.6205
      stamen: {
        url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}@2x.png',
        id: ''
      },
      //
      stamenbg: {
        url: 'http://c.tile.stamen.com/terrain-background/{z}/{x}/{y}@2x.png',
        id: ''
      },

      worldoceanbase: {
        url: 'http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
        id: ''
      },

      satellite: {
        url: '  http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        id: ''
      },

      worldphysical: {
        url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        id: ''
      }

    }

  }


  get ( which ) {

    if (this.driver[which] !== undefined)
      return this.driver[which];

    console.warn(`Map Driver ${which} is not available`);

  }

}