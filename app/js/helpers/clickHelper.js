
/**
 * Helper class to define custom geometries used for THREE.js rendering
 */
export default class ClickHelper {


  constructor ( options = {} ) {

    this.app = options.app;
    this.mouse = new THREE.Vector2();
    //this.projector = new THREE.Projector();

    this.points = [];
    this.mesh = null;
    this.helperPlane = options.plane || null;
    this.connectPoints = true;

    if (!this.helperPlane)
      this.renderHelperPlane();

    this.initClickEvents();

  }


	initClickEvents () {

    document.addEventListener( 'mousedown', (e) => this.onDocumentMouseDown(e), false );

	}


  renderHelperPlane() {

    this.groundFloor = new THREE.PlaneGeometry(10000, 10000, 1);

		this.helperPlane = new THREE.Mesh(
			this.groundFloor,
			new THREE.MeshLambertMaterial({
	  		color: 0x00ff00
	  	})
		);

		this.helperPlane.rotation.x = -Math.PI/2;
    this.app.scene.add(this.helperPlane);

  }


  get3dPointZAxis(event) {
      var vector = new THREE.Vector3(
                  ( event.clientX / window.innerWidth ) * 2 - 1,
                  - ( event.clientY / window.innerHeight ) * 2 + 1,
                  0.5 );

      vector.unproject( this.app.camera );
      var dir = vector.sub( this.app.camera.position ).normalize();
      var distance = - this.app.camera.position.z / dir.z;
      var pos = this.app.camera.position.clone().add( dir.multiplyScalar( distance ) );
      return pos;
  }

  renderPoints() {

    if (this.points) {

      this.app.scene.remove(this.mesh);

			var shape = new THREE.Shape( this.points );
      // var geometry = new THREE.ShapeGeometry( shape );

      shape.autoClose = true;
			var points = shape.createPointsGeometry();
			var spacedPoints = shape.createSpacedPointsGeometry( 50 );

      this.mesh = new THREE.Line( points, new THREE.LineBasicMaterial({ color: 0xce0000, linewidth: 3 }) );
					//line.position.set( this.mouse.x, 10, this.mouse.y );
			this.mesh.rotation.x = Math.PI/2;
			this.mesh.scale.set( 1, 1, 1 );


			this.app.scene.add(this.mesh);

      var p = JSON.stringify(this.points);
      console.log(p);


    }

  }


  onDocumentMouseDown(e) {

		e.preventDefault();
		this.updateMousePosition(e);

    console.log('clickHelper clicked at', this.mouse);

    if (this.connectPoints) {

      var pos = this.get3dPointZAxis(e);
      console.log(pos);

      this.points.push( new THREE.Vector3(pos.x, -pos.y, 0) );

      this.renderPoints();

    }

    var intersects = this.app.raycaster.intersectObject( this.helperPlane );

    if ( intersects.length && intersects[0].object ) {

      console.log('intersecting plane', intersects);

    }

	}


	updateMousePosition ( e ) {

    this.mouse.x = ( e.clientX / $('#webgl-scene').width() ) * 2 - 1;
		this.mouse.y = - ( e.clientY / $('#webgl-scene').height() ) * 2 + 1;

	}

}
