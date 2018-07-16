import Arithmetics from './arithmetics';

/**
 * Base Component Class
 */
export default class Component {


	constructor ( options = {} ) {

    this.app 		= options.app;
		this.node 	= options.node;

		this.arithmetics = new Arithmetics();

	}


  // to be implemented
	init () {

    console.warn(`implement init() in component ${this.constructor.name}`);

	}


}
