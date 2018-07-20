export var __useDefault = true;

/**
 * Utility class to be used for global functions
 */
export default class Arithemics { 

	constructor() {}


	/*
   * Return a random number between min and max.
   * Can be int or float
   */
	random (min = 0.0, max = 1.0) {

		return Math.floor(Math.random() * (max - min + 1) + min);

	}


	/*
   * Check if a given percent value is set as true against 100%
   */
	chance (chance = 50) {

		return (Math.random() * 100 <= chance);

	}

  /*
   * Convert to radians
   */
	toRad() {

		return Math.PI / 180;

	}


  // taken from: http://stackoverflow.com/questions/3177855/how-to-format-numbers-similar-to-stack-overflow-reputation-format
	numberFormat(number) {
		var repString = number.toString();

	  if ( number < 1000 ) {
			repString = number;
	  } else if ( number < 1000000 ) {
			repString = (Math.round((number / 1000) * 10) / 10) + ' K'
	  } else if ( number < 1000000000 ) {
			repString = (Math.round((number / 1000000) * 10) / 10) + ' Mio'
	  } else if ( number < 1000000000000000000 ) {
			repString = (Math.round((number / 1000000000) * 10) / 10) + ' Bio'
	  }

	  return repString;
	}



	getDimensionToTen ( min, max ) {

		var size = Math.ceil( max * 100000 ) / 100000;

		if( max < 0.001 )
			size = Math.ceil( max * 10000 ) / 10000;
		else if( max < 0.01 )
			size = Math.ceil( max * 1000 ) / 1000;
		else if( max < 0.1 )
			size = Math.ceil( max * 100 ) / 100;
		else if( max < 1 )
			size = Math.ceil( max * 10 ) / 10;

		else {
			size = Math.ceil( max );
		}

		return {
			size: size,
			max: max,
			min: min,
			minPercent: Math.round(min * 100 / size) / 100,
			maxPercent: Math.round(max * 100 / size) / 100
		}

	}


}
