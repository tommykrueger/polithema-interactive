<footer class="footer">

	<div class="container large">

		<div class="footer-primary">

			<?php include_once('elements/socials.php'); ?>

		 	<ul class="menu footermenu primary">
		    <li><a class="active" href="./privacy.php">Privacy</a></li>
		    <li><a href="./news.php">News</a></li>
		    <li><a href="./credits.php">Credits</a></li>
		    <li><a href="./imprint.php">Imprint</a></li>
		    <li><a href="./contact.php">Contact</a></li>
		  </ul>


      <div class="footer-copyright">
				<p>Polithema Interaktiv ist ein Service von Polithema</p>
        <p> &copy; 2016 - <?php echo date('Y') ?></p>
    	</div>


		 </div>

	</div>


</footer>



<script type="text/javascript" src="./js/vendor.js"></script>
<script type="text/javascript" src="./js/app.js"></script>
<script>require('js/app')</script>



<script>

/*

  var d = {
    // near huelva
    lat: 37.25,
    lon: -6.95,

    voyage: {
      start: '1492-08-03',
      waypoints: [

        // Palos de Huelva
        [37.14928, -6.99775],
        //[33.063924198120645, -17.263828125],
        [28.116667, -17.233333],
        [25.71733, -45.21767],
        [27.55911, -47.40189],
        [25.67340, -49.77493],
        [27.20502, -67.77054],
        [24.31628, -75.10941],
        [23.26149, -74.91410],
        [22.00410, -76.24177],
        [22.22801, -77.20857],
        [21.51433, -76.48347],
        [20.36515, -73.07771],
        [19.54446, -69.11606],
        [20.97703, -67.63291],
        [21.44816, -66.31455],
        [21.08114, -66.21057],
        [21.96008, -65.24377],
        [22.02120, -63.55187],
        [28.13679, -59.96922],
        [29.59913, -50.47703],
        [29.75186, -43.97312],
        [31.75474, -49.21188],
        [38.16749, -45.28633],
        [38.30556, -32.80586],
        [37.75172, -31.92696],
        [36.20716, -26.56563],
        [38.58092, -22.96211],
        [37.71859, -16.61133],
        [38.53575, -9.36902]
      ],
      events: [
        {
          id: 1,
          date: '1492-08-03',
          name: 'The Voyage Begins',
          desc: 'Columbus sets sail for direction South-West. With 3 Karacks one of the most modern European Ships at that time. First target are the Canarias',
          location: [37.14928, -6.99775]
        },
        {
          id: 2,
          date: '1492-10-12',
          name: 'Repair at La Gomera',
          desc: 'ooo',
          location: [28.116667, -17.233333]
        },
        {
          id: 3,
          date: '1492-10-12',
          name: 'Discovery of the New World',
          desc: 'Christoph Kolumbus arrives the Bahamas in the Karibian. The Island is named San Salvador (The Holy Salvation).'
        },
        {
          id: 4,
          date: '1492-10-12',
          name: 'Discovery of the New World',
          desc: 'Christoph Kolumbus arrives the Bahamas in the Karibian. The Island is named San Salvador (The Holy Salvation).'
        }
      ]
    },


    zoom: 5,

    driver: {

      // https://wiki.openstreetmap.org/wiki/OpenTopoMap
      // https://a.tile.opentopomap.org/1/1/1.png
      otm: {
        url: 'https://a.tile.opentopomap.org//{z}/{x}/{y}.png',
        id: ''
      },
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
    }
  }

  // near huelva
	var mymap = L.map('map-interactive').setView([d.lat, d.lon], d.zoom);


	L.tileLayer(d.driver.stamen.url, {
		maxZoom: 12,
    minZoom: 2,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: d.driver.stamen.id
	}).addTo(mymap);

	*/

  //other

    /*
    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: '<a href="http://www.dartotalsolutions.com">Dar total solutions</a>',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(mymap);
    */



		/*

  mymap.locate({setView: true, maxZoom: 5});


  var marker = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [10, 0],
    shadowSize: [0, 0],
    className: 'animated-icon my-icon-id'
  });



  d.voyage.events.forEach(function(event){

    if (event.location !== undefined) {

      var marker = L.marker(event.location).addTo(mymap);
      marker.bindPopup("<b>" + event.name + "</b><br>" + event.date + "" + event.desc + "");

    }

  });


  d.voyage.waypoints.forEach(function(wp, index){

    console.log(index);

  });

	*/

  /*
  L.Polyline.Arc([37.14928, -6.99775], [28.116667, -17.233333], {
   color: 'red',
   vertices: 10
  }).addTo(mymap);
  */


	/*
  var ll = L.latLng(d.lat, d.lon)

  // create marker
  var marker = L.marker(ll, {
    icon: marker,
    title: 'look at me!'
  })

  marker.addTo(mymap);



  var polyline = L.polyline([ d.voyage.waypoints ],
    {
        color: 'white',
        weight: 4,
        opacity: .5,
        dashArray: '4,4',
        lineJoin: 'round'
    }
  ).addTo(mymap);



  L.polylineDecorator(d.voyage.waypoints, {
        patterns: [{
          offset: 150,
          repeat: 500,
          symbol: L.Symbol.arrowHead({
            pixelSize: 12,
            pathOptions: {
              fillOpacity: 0.5,
              color: 'white',
              stroke: false,
              weight: 2
            }
          })
        }]
    }).addTo(mymap);


  mymap.on('click', function(e) {
    var latlon = [e.latlng.lat.toFixed(5), e.latlng.lng.toFixed(5)]
    console.log(latlon)
  });




  setInterval(function(){

    d.lat -= 0.001;
    d.lon -= 0.2;

    // mymap.panTo(new L.LatLng(d.lat, d.lon));

    marker.setLatLng(new L.LatLng(d.lat, d.lon));

  }, 500);


*/

</script>
