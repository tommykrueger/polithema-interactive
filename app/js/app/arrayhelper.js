
export default class Arrayhelper {

	constructor() {}


	/*
   * Return a random number between min and max.
   * Can be int or float
   */
	switchLatLonFromArray ( array ) {

		for ( var i = 0; i < array.length; i++ ) {
            
			let temp = array[i][0];
			array[i][0] = array[i][1];
			array[i][1] = temp;
			
		}

		return array;

	}

}
