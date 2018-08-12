<?php


$scenario = [

  'name'    => '1492 - Die Entdeckung Amerikas: Die Reisen des Christoph Kolumbus',
  
  // [31.92419, -40.44067]
  'map' => [
    'lat'     => 37.25,
    'lon'     => -6.95,
    'zoom'    => 5,
    'type'    => 'historic'
  ],


  'series' => [

    [
      'id' => 1,
      'name' => 'First voyage',

      // near arrival in the carrabean
      'route' => [
        [37.08895,-6.84101],[28.25694,-17.34166],[28.10236,-17.35936],[22.56652,-73.60641],
        [22.47156, -72.32549],
        [22.48171, -73.39116],
        [22.50201, -73.5999],
      ]

    ],

    [
      'id' => 2,
      'name' => 'Second voyage',

      // near arrival in the carrabean
      'route' => [
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
      ]

    ]

  ],
  
  
  'voyage' => [
    'start' => '1492-08-03',
    'waypoints' => [

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
  ],
    
    
  'events' => [
    [
      'date' => '1492-08-03',
      'name' => 'The Voyage Begins',
      'text' => 'Columbus sets sail for direction South-West. With 3 Karacks one of the most modern European Ships at that time. First target are the Canarias',
      'location' => [37.14928, -6.99775]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Repair at La Gomera',
      'text' => 'ooo',
      'location' => [28.116667, -17.233333]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Christoph Kolumbus arrives the Bahamas in the Karibian. The Island is named San Salvador (The Holy Salvation).'
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Christoph Kolumbus arrives the Bahamas in the Karibian. The Island is named San Salvador (The Holy Salvation).'
    ]

  ]
  

];

?>

