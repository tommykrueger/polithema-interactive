
// base classes
import Model from '../app/model';

// views
import Modal from '../views/modal';


export default class Scenario extends Model {


	constructor ( options = {} ) {

    super(options);

		// the properties data template
		this.properties = {};


		// populate the properties
		this.properties = Object.assign({}, this.properties, options.properties);	

		this.model = 'dataset';
		this.action = null;

		this.server = '../server/';


		this._template2 = ({scenarios}) => `

			<div class="scenario-list">
				${scenarios}
			</div>
		
		`;


		this._template = ({scenarios}) => `

			<div class="scenario-list">
				${scenarios}
			</div>
		
		`;

	}



	buildUrl () {

		return this.server + '?model=' + this.model + '&action=' + this.action;

	}


	getTemplate (data) {

		return this._template(data)

	}


	/**
	 * Get a list of all existing scenarios
	 */
	getAll () {

		this.action = 'getAll';

		fetch(this.buildUrl())
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);

				this.modal = new Modal();
				this.modal.setTemplate( this.getTemplate(data) );
				this.modal.render();

			})
			.catch((error) => {
				console.error(error);
			});

	}


	save () {

		fetch(this.buildUrl(), {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'dataset',
				action: 'getAll',
			})
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
		
	}


}
