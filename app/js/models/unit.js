
// base classes
import Model from '../app/model';


export default class Unit extends Model {


	constructor ( options = {} ) {

    super(options);

		// the properties data template
		this.properties = {
			id: 1,
			name: 'Bismarck',
			type: 'battleship',
			category: 'warship', // warhsip or merchant
			country: 2,

			// id of the place / home harbor
			origin: 1,

			// date of construction (entering service)
			date: '1940-08-11',

			// for merchant ships
			cargo: {
				type: 'Wheat',
				amount: 8000
			},

			// grand register tons
			grt: 1000,

			// list of planes of that unit (for CVs)
			planes: []
		};


		// populate the properties
		this.properties = Object.assign({}, this.properties, options.properties);


		// add the unit to the global units data set
		this.game.addDataSet('units', this.properties);

	}

	getPosition () {

		return this.position;

	}


}
