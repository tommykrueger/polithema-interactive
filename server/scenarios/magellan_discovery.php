<?php


$scenario = [

  'name'    => 'Magellans Weltumseglung 1519 - 1522',
  
  'map' => [
    'center'  => [-5.64742, -3.3728],
    'zoom'    => 1,
    'type'    => 'historic'
  ],
  
  
  'voyage' => [
    'start' => '1492-08-03',
    'waypoints' => [

      [35.71864, -7.42538],
      [28.116667, -17.233333],
      [-24.91633, -44.75006],
      [-35.55988, -55.82256],
      [-52.61556, -68.13515],
      [-52.61556, -75.1664],
      [13.29934, 144.71998],
      [9.71007, 125.20595],
      [9.34169, 124.28309],
      [10.31593, 124.15126],
      [8.60979, 117.91454],
      [5.22934, 114.97021],
      [-8.6002, 125.38765],
      [-34.56503, 18.4142],
      [15.92832, -23.59726]
    ],
  ],

  
  'countries' => [

    [
      "type" => "Feature",
      "properties" => [
        "name" => "Portugal"
      ],
      "geometry" => [
        "type" => "Polygon",
        "coordinates" => [[[-9.034818,41.880571],[-8.671946,42.134689],[-8.263857,42.280469],[-8.013175,41.790886],[-7.422513,41.792075],[-7.251309,41.918346],[-6.668606,41.883387],[-6.389088,41.381815],[-6.851127,41.111083],[-6.86402,40.330872],[-7.026413,40.184524],[-7.066592,39.711892],[-7.498632,39.629571],[-7.098037,39.030073],[-7.374092,38.373059],[-7.029281,38.075764],[-7.166508,37.803894],[-7.537105,37.428904],[-7.453726,37.097788],[-7.855613,36.838269],[-8.382816,36.97888],[-8.898857,36.868809],[-8.746101,37.651346],[-8.839998,38.266243],[-9.287464,38.358486],[-9.526571,38.737429],[-9.446989,39.392066],[-9.048305,39.755093],[-8.977353,40.159306],[-8.768684,40.760639],[-8.790853,41.184334],[-8.990789,41.543459],[-9.034818,41.880571]]]
      ],
      "id" => "PRT"
    ] 

  ],
    
    
  'events' => [
    [
      'date' => '1492-08-03',
      'name' => 'The Voyage Begins',
      'text' => 'First',
      'location' => [35.71864, -7.42538]
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
      'text' => '',
      'location' => [-24.91633, -44.75006]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => '',
      'location' => [-35.55988, -55.82256]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => '',
      'location' => [-52.61556, -68.13515]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => '',
      'location' => [-52.61556, -75.1664]
    ],

    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Guam',
      'location' => [13.29934, 144.71998]
    ],

    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Phillipines',
      'location' => [9.71007, 125.20595]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Phillipines',
      'location' => [9.34169, 124.28309]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Phillipines',
      'location' => [10.31593, 124.15126]
    ],

    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Palawan',
      'location' => [8.60979, 117.91454]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Brunei',
      'location' => [5.22934, 114.97021]
    ],

    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Timor',
      'location' => [-8.6002, 125.38765]
    ],

    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Cape of Good Hope',
      'location' => [-34.56503, 18.4142]
    ],
    [
      'date' => '1492-10-12',
      'name' => 'Discovery of the New World',
      'text' => 'Cap Verde ISlands',
      'location' => [15.92832, -23.59726]
    ]
    

  ]
  

];

?>

