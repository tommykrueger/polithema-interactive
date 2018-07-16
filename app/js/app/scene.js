export var __useDefault = true;

import Utils from './utils';

export default class Scene {

  constructor (options = {}) {

    this.options = options;
    this.utils = new Utils();

    // init Three.js specific objects
    this.renderer = null;
    this.scene = new THREE.Scene();
    this.raycaster = new THREE.Raycaster();
  	this.mouse = new THREE.Vector2();
		this.camera = null;
		this.cameraControls = null;
		this.controls = null;

    // timing
    this.startTime = _.now();
		this.clock = new THREE.Clock();
		this.delta = 0;

    this.prepareScene();
    this.init();

  }


  prepareScene() {

  	if (this.utils.isWebGLSupported()) {

			this.renderer = new THREE.WebGLRenderer({
        alpha: true,
				antialias: true
			});

			//this.renderer.setClearColor( 0x000000, 1 );

		} else {

			let message = new Message({text: 'No WebGL', state: 'info'});
					message.render();

			return;
		}


  }


  init() {

    this.initRenderer();
    this.initCamera();
    this.initControls();
    this.initLighting();

    if (this.options.debug)
	  	this.renderStats();


    this.animate();

  }


  initRenderer() {

    this.renderer.setSize( $('#webgl-scene').width(), 400  );
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio( window.devicePixelRatio );

		this.container = document.getElementById('webgl-scene');
		this.container.appendChild(this.renderer.domElement);

  }


  initCamera (target) {

    // the position which the camera is currently looking at
    this.cameraTarget = new THREE.Vector3(0, 0, 0);

    //this.scene.fog = new THREE.Fog(0xffffff, 0.015, 3500);

  	var self = this;

  	if (target !== undefined || target != null)
  		self.cameraTarget = target;

  	var width = $(window).width();
  	var height = $(window).height();

  	// add the camera to the scene
		this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 10000 );
		//this.camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
		//this.camera.updateProjectionMatrix();

		//this.cameraHelper = new THREE.CameraHelper(this.camera);
		//this.scene.add(this.cameraHelper);

		this.utils.debug('current camera target', self.cameraTarget);

		this.cameraPos = {
			x: 0,
			y: 250,
			z: 350
		};

		console.log('rendering camera at:', this.cameraPos);

		this.camera.position.set( this.cameraPos.x, this.cameraPos.y, this.cameraPos.z );


		this.scene.add(this.camera);

  }


  initControls (target) {

    // this.controls = new THREE.TrackballControls( this.camera, this.container );
		this.controls = new THREE.OrbitControls( this.camera, this.container );

		//var vector = new THREE.Vector3( this.controls.target.x, this.controls.target.y, this.controls.target.z );
  			//vector.applyQuaternion( this.camera.quaternion );

  	this.cameraTarget = this.controls.target;

		if (target !== undefined || target != null) {
			// window.utils.debug('defining new camera target', target);

			// define the camera position
			// this.cameraHelper.setCameraPosition(target);

			// define the target which the camera shoul look at
			//this.cameraHelper.setCameraTarget(target);

		} else {

			this.camera.lookAt(this.cameraTarget);
			//this.cameraHelper.setCameraTarget( self.cameraTarget );
		}


		this.cameraPosition = new THREE.Vector3();
		this.cameraPosition = this.cameraPosition.setFromMatrixPosition( this.camera.matrixWorld );
		this.cameraPositionOld = this.cameraPosition;

	  this.controls.rotateSpeed = .5;
	  this.controls.zoomSpeed = 1.8;
	  this.controls.panSpeed = .3;


	  // limit line
	  this.controls.maxPolarAngle = Math.PI/2;

	  this.controls.minDistance = 20;
    this.controls.maxDistance = 4500;

	  //this.controls.noZoom = false;
	  //this.controls.noPan = false;

	  this.controls.enableDamping = false;
	  this.controls.dampingFactor = 0.3;

	  this.controls.enableKeys = false;
	  this.controls.keys = [];
	  this.controls.addEventListener( 'change', this.render() );


    console.log('init controls');

    // add event listeners
	  document.addEventListener( 'mousedown', (e) => this.onDocumentMouseDown(e), false );
	  document.addEventListener( 'mousemove', (e) => this.onDocumentMouseMove(e), false );
	  document.addEventListener( 'mouseover', (e) => this.onDocumentMouseMove(e), false );

    window.addEventListener('resize', (e) => {

      let w = window.innerWidth;
      let h = window.innerHeight;

      this.renderer.setSize( w, h );
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    });


  }


  initLighting() {

    // add a very light ambient light
	  var globalLight = new THREE.AmbientLight(0xffffff);

	  globalLight.color.setRGB(
	  	.521,
	  	.521,
	  	.521
	  );

	  this.scene.add( globalLight );


	  //directional light
		this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
		this.directionalLight.position.set(-102, 102, 110);
		this.directionalLight.target.position.set(1, 2, 0);

		this.directionalLight.castShadow = true;
		//this.directionalLight.shadowCameraVisible = true;
		//this.directionalLight.shadowDarkness = 0.5;

		this.directionalLight.shadow.mapSize.width = 512 * 2;
    this.directionalLight.shadow.mapSize.height = 512 * 2;

		this.directionalLight.shadow.camera.near = 0;
		this.directionalLight.shadow.camera.far = 1000;

		this.directionalLight.shadow.camera.left = -500;
		this.directionalLight.shadow.camera.right = 1000;
		this.directionalLight.shadow.camera.top = 500;
		this.directionalLight.shadow.camera.bottom = -1000;

		this.scene.add(this.directionalLight);

		//var lightHelper3 = new THREE.DirectionalLightHelper( this.directionalLight );
		//this.scene.add( lightHelper3 );

  }


  renderStats ( container = $('body') ) {

  	this.stats = new Stats();
    this.rendererStats = new THREEx.RendererStats();


  	$(this.stats.domElement).attr('class', 'stats');
  	$(this.stats.domElement).css({
			'position': 'absolute',
			'bottom': '0',
			'z-index': 99
		});

    $(this.rendererStats.domElement).attr('class', 'renderer-stats');

		container.append( this.stats.domElement );
    container.append( this.rendererStats.domElement );

  }


  animate() {

    // loop on request animation loop
		// - it has to be at the begining of the function
		// - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
		requestAnimationFrame( this.animate.bind( this ) );
		this.controls.update();


    // do the render
		this.render(step);

		// update stats
		if (this.options.debug)
			this.stats.update();
  }


  render (step) {

    this.delta = this.clock.getDelta();
		this.timeElapsed = this.clock.getElapsedTime();

    if (this.rendererStats)
      this.rendererStats.update( this.renderer );

		this.renderer.render( this.scene, this.camera );
  }


  onDocumentMouseDown(e) {

    console.log(e);

  }


  onDocumentMouseMove(e) {

		e.preventDefault();

		this.updateMousePosition(e);

    this.camera.updateMatrixWorld();

		//var self = this;
		//var vector = new THREE.Vector3( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight ) * 2 + 1, .5 );
		//this.projector.unprojectVector( vector, this.camera );

		//vector.unproject(this.camera);

		//var rayCaster = new THREE.Raycaster( this.camera.position, vector.sub( this.camera.position ).normalize() );

    this.raycaster.setFromCamera( this.mouse, this.camera );
		//this.scene.remove( marker );

    this.meshes.forEach((mesh) => {
      // mesh.material.color.setHex(0xe9e9e9);
    });

    this.$tooltip.hide();


		var intersects = this.raycaster.intersectObjects( this.meshes );

    //console.log(intersects);

    if ( intersects.length && intersects[0].object ) {

      console.log('intersecting ', intersects[0].object.name);

      intersects[0].object.material.color.setHex(0xce0000);

      this.$tooltip.updatePosition({x: e.clientX, y: e.clientY});
      this.$tooltip.show();

      /*
      var h = 50 * 0.5;

			var geometry = new THREE.Geometry();

				geometry.vertices.push(
					new THREE.Vector3( -h, -h, -h ),
					new THREE.Vector3( -h, h, -h ),

					new THREE.Vector3( -h, h, -h ),
					new THREE.Vector3( h, h, -h ),

					new THREE.Vector3( h, h, -h ),
					new THREE.Vector3( h, -h, -h ),

					new THREE.Vector3( h, -h, -h ),
					new THREE.Vector3( -h, -h, -h ),


					new THREE.Vector3( -h, -h, h ),
					new THREE.Vector3( -h, h, h ),

					new THREE.Vector3( -h, h, h ),
					new THREE.Vector3( h, h, h ),

					new THREE.Vector3( h, h, h ),
					new THREE.Vector3( h, -h, h ),

					new THREE.Vector3( h, -h, h ),
					new THREE.Vector3( -h, -h, h ),

					new THREE.Vector3( -h, -h, -h ),
					new THREE.Vector3( -h, -h, h ),

					new THREE.Vector3( -h, h, -h ),
					new THREE.Vector3( -h, h, h ),

					new THREE.Vector3( h, h, -h ),
					new THREE.Vector3( h, h, h ),

					new THREE.Vector3( h, -h, -h ),
					new THREE.Vector3( h, -h, h )
				 );

      geometry.computeLineDistances();

      var object = new THREE.LineSegments(
        geometry,
        new THREE.LineDashedMaterial({
          color: 0xe97700,
          dashSize: 3,
          gapSize: 1,
          linewidth: 2
        })
      );

      */

      // this.scene.add(object);

    }

	  // this vector caries the mouse click cordinates
	  //var mouse_vector = new THREE.Vector3(0,0,0);
	  		//mouse_vector.set( mouse.x, mouse.y, mouse.z );

	 	// this.projector.unprojectVector( mouse_vector, this.camera );

	  //mouse_vector.unproject(this.camera);

	  //var direction = mouse_vector.sub( this.camera.position ).normalize();
	  //rayCaster.set( this.camera.position, direction );

		// self.canvasElement.hideViewHelper();

	}


	updateMousePosition ( e ) {

		this.mouse.x = ( e.clientX / $('#webgl-scene').width() ) * 2 - 1;
		this.mouse.y = - ( e.clientY / $('#webgl-scene').height() ) * 2 + 1;

	}


  updateCamera (lookAt) {

    let newPosY = this.cameraPos.y + lookAt;

    this.camera.position.y = newPosY;

    //this.camera.position.set( this.cameraPos.x, newPosY, this.cameraPos.z );
    this.controls.target.set(0, lookAt, 0);

	}


  stop () {

    this.isRunning = false;

  }


}
