import Model from '../app/model';
//import FleetView from '../views/fleet';

//import CombatComponent from '../game/components/combat/combat';


/**
 * A Fleet is a collection of ships.
 * A Fleet is more likely a group of ships
 */
export default class Fleet extends Model {


	constructor ( options = {} ) {

    super(options);

		console.log(options.properties);

		// flag for changed data set
		this.changedDataFlag = true;

		this.locked = false;

		this.strategicIcons = {
			aircraft_carrier: 'M59,59H5c0,0,0-5.625,0-12c0-14.912,12.088-27,27-27s27,12.088,27,27C59,52.195,59,59,59,59z M16.104,51.908l16.971-16.971 M48.278,52.025L31.308,35.055',
			merchant: 'M59,59H5c0,0,0-5.625,0-12c0-14.912,12.088-27,27-27s27,12.088,27,27C59,52.195,59,59,59,59z M16,37h32 M32,42v10',
			battleship: 'M59,59H5c0,0,0-5.625,0-12c0-14.912,12.088-27,27-27s27,12.088,27,27C59,52.195,59,59,59,59z M11,51h42 M15,43h34 M19,35h26',
			destroyer: 'M59,59H5c0,0,0-5.625,0-12c0-14.912,12.088-27,27-27s27,12.088,27,27C59,52.195,59,59,59,59z M16,37h32 M32,42v10',
			submarine: 'M59,32c0,14.912-12.088,27-27,27S5,46.912,5,32c0-6.375,0-12,0-12h54C59,20,59,26.805,59,32z M16,33h32 M32,38v10',
			heavy_cruiser: 'M59,32c0,14.912-12.088,27-27,27S5,46.912,5,32c0-6.375,0-12,0-12h54C59,20,59,26.805,59,32z M16,33h32 M32,38v10'
		}

		this.renderView();
		this.initEvents();
		this.setPosition();

	}


	renderView () {

		let fleetIcon = this.setFlagship();

		this.$el = $('<div class="fleet" data-locale="' + this.get('country') + '"></div>');

		var myIcon = L.divIcon({
	    iconSize: new L.Point(50, 50),
	    html: 'foo bar'
		});


		this.$view = $(`
			<span class="fleet-units country-${this.get('country')}">
				<span class="fleet-size">${this.get('units').length}</span>
			</span>
			<span class="fleet-icon fleet-icon-${fleetIcon}"></span>
			<span class="fleet-name">${this.get('name')}</span>
			<svg class="icon" width="16px" height="16px" viewBox="0 0 64 64">
				<path d="${this.strategicIcons[fleetIcon]}"/>
			</svg>
		`);


		var myIcon = L.divIcon({
    	iconSize: new L.Point(50, 50),
    	html: '<i><b>UNIT FLEET</b></i>'
		});


		$('body').append( this.$el.html(this.$view) );

		this.$el.css({
			'margin-left': -( this.$el.width()/2 ),
			'margin-top': -( this.$el.height()/2 )
		});

	}


	renderWaypoints () {

		this.game.components.map.clearFleetWaypoints();

		if (this.get('waypoints').length) {
			let p = [this.get('position')];
			let path = [...p, ...this.get('waypoints')];

			this.game.components.map.addFleetPath(path);
		}

	}


	initEvents () {

		this.$el.on('click', (e) => {

			this.game.interface.components.detail.setData( this.getData() );
			this.renderWaypoints();
			this.game.selectedModel = this;

		});

	}


	getData () {

		return {
			name: this.get('name'),
			units: this.get('units'),
			icon: this.setFlagship()
		}

	}


	getView () {

		return this.$view;

	}



	setPosition ( pos = {} ) {

		if (pos.x)
			this.position = pos;

		// console.log('newpos', this.position);
		pos = this.get('position');
		// pos = this.game.components.map.projection([pos[1], pos[0]]);
		// console.log(pos[0]);

		// this.$el.css({ 'transform': 'translate('+ pos[0] + 'px' +','+ pos[1] + 'px' +')' });

		if (this.mode == 'selected') {
			this.renderWaypoints();
		}


	}


	isMoving () {

		return (this.get('waypoints').length >= 1);

	}

	isLocked () {

		return this.locked;

	}



	/*
	 * Calculate the position between the current position and the first waypoint
	 * the fleet is moving to. The position is influenced by the fleets speed
	 */
	calculateCurrentPosition (dtFrame) {

		// one hour in game is one second in real time
		let speed = 15 * (dtFrame / 1000); // km per hour
		let pos = this.get('position');
		let waypoints = this.get('waypoints');
		let newPos = pos;

		// calculate moving only if waypoints are set
		if (waypoints.length) {

			let distance = this.game.components.map.distanceBetween(pos, waypoints[0]);

			//console.log('distance to next point: ', distance);
			//console.log('next waypoint: ', waypoints[0]);

			// waypoint was reached
			if (distance <= speed) {

				this.get('waypoints').shift();

			} else {

				// distance percentage by speed
				let dP = speed * 100 / distance;

				let vecDist = [waypoints[0][0] - pos[0], waypoints[0][1] - pos[1]];

				// get deltaDistance
				vecDist[0] *= (dP/100);
				vecDist[1] *= (dP/100);

				newPos = [pos[0] + vecDist[0], pos[1] + vecDist[1]];

				this.set('position', newPos);

			}

		}

		return newPos;

	}



  // update this model with data
  update (dtFrame) {

		if (this.isMoving()) {

			// console.log('fleet moving', fleet.get('name'));
			// try to calculate the current position of the fleet
			//let newPos = this.calculateCurrentPosition(dtFrame);
			//console.log('new pos', fleet.get('position'));

			//this.setPosition();

		}

  }



	// TODO to be implemented
	setFlagship() {

		//let units = this.get('units');
		//let flagship = units.reduce((prev, current) => { return (prev.weight > current.weight) ? prev : current; });

		// return flagship.type.toLowerCase();
		return 'battleship';

	}


}
