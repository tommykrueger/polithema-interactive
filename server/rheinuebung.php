<?php

  $data = [

    'id'      => 1,
    'name'    => 'Unternehmen Rheinübung',
    'start'   => '1941-05-18 21:18:00',
    'end'     => '1941-06-01',
    'center'  => [54.5173, 18.5399], // the fleet id which has the focus
    'zoom'    => 6,


    'units'   => [

      [
        'id'        => 1,
        'name'      => 'Prinz Eugen',
        'type'      => 'heavy_cruiser',
        'country'   => 'de'
      ],
      [
        'id'        => 2,
        'name'      => 'Bismarck',
        'type'      => 'battleship',
        'country'   => 'de'
      ],
      [
        'id'        => 3,
        'name'      => 'HMS Hood',
        'type'      => 'battlecruiser',
        'country'   => 'gb'
      ],
      [
        'id'        => 4,
        'name'      => 'Prince of Wales',
        'type'      => 'battleship',
        'country'   => 'gb'
      ]

    ],


    'fleets'  => [
      [
        'id'      => 1,
        'name'    => '',
        'country' => 'de',
        'units'   => [1],
        'waypoints' => [
          [
            'date'  => '1941-05-18 21:18:00',
            'geo'   => [
              [54.5173, 18.5399],
              [55.00994, 18.51904],
              [55.41111, 15.21216],
              [55.35494, 14.66284]
            ]
          ],
          [
            'date'  => '1941-05-19 11:00:00',
            'geo'   => [54.6765, 13.437861]
          ],
          [
            'date'  => '1941-05-28 12:00:00',
            'geo'   => [42.083333333333336, -39.05]
          ]
        ]
      ],
      [
        'id'      => 2,
        'name'    => '',
        'country' => 'de',
        'units'   => [1],
        'waypoints' => [
          [
            'date'  => '1941-05-19 02:00:00',
            'geo'   => [54.5173, 18.5399] // Gotenhafen
          ],
          [
            'date'  => '1941-05-19 11:00:00',
            'geo'   => [54.6765, 13.437861]
          ],
          [
            'date'  => '1941-05-19 22:34:00',
            'geo'   => [54.32934, 11.53564]
          ],
          [
            'date'  => '1941-05-20 00:00:00',
            'geo'   => [54.71119, 10.85882]
          ],

        ]
      ],

      [
        'id'      => 3,
        'name'    => '',
        'country' => 'gb',
        'units'   => [2,3],
        'waypoints' => [
          [
            'date'  => '1941-05-19 02:00:00',
            'geo'   => [54.5173, 18.5399] // Gotenhafen
          ],
          [
            'date'  => '1941-05-19 11:00:00',
            'geo'   => [54.6765, 13.437861]
          ],
          [
            'date'  => '1941-05-19 22:34:00',
            'geo'   => [54.32934, 11.53564]
          ],
          [
            'date'  => '1941-05-20 00:00:00',
            'geo'   => [54.71119, 10.85882]
          ],

        ]
      ]
    ],

    'events'  => [
      [
        'id'    => 1,
        'name'  => 'Auslaufen der Bismarck und Prinz Eugen',
        'date'  => '1941-05-19 02:00:00',
        'geo'   => [54.5173, 18.5399],
        'text'  => ''
      ],
      [
        'id'    => 2,
        'name'  => 'Rendevouz am Kap Arkona',
        'date'  => '1941-05-19 11:00:00',
        'geo'   => [54.6765, 13.437861],
        'text'  => 'Die Bismarck und die Prinz Eugen treffen sich nördlich vom Kap Arkona auf Rügen. Zusammen mit 2 Zerstörern bilden sie einen Kampfverband der sich Richtung Norwegen in Bewegeung setzt. Die Zerstörer sichern den Kampfverband dabei gegen feindliche Britische U-Boote.'
      ],
      [
        'id'    => 3,
        'name'  => 'Rendevouz am Kap Arkona',
        'date'  => '1941-05-19 22:34:00',
        'geo'   => [54.32934, 11.53564],
        'text'  => 'Die Bismarck und die Prinz Eugen treffen sich nördlich vom Kap Arkona auf Rügen. Zusammen mit 2 Zerstörern bilden sie einen Kampfverband der sich Richtung Norwegen in Bewegeung setzt. Die Zerstörer sichern den Kampfverband dabei gegen feindliche Britische U-Boote.'
      ],
      [
        'id'    => 4,
        'name'  => 'Südlicher Belt',
        'date'  => '1941-05-20 00:00:00',
        'geo'   => [54.71119, 10.85882],
        'text'  => 'Der Kampfverband erreicht den südlichen Eingang zum Großen Belt.'
      ],

      [
        'id'    => 4,
        'name'  => 'HMS Hood versenkt',
        'date'  => '1941-05-24 06:37:00',
        'geo'   => [61.516661, -31.883336],
        'text'  => 'Nach kurzem Gefecht mit der Bismarck explodiert das Munitionsmagazin der Hood. Der Schlachtkreuzer sank innerhalb weniger Minuten in den kalten Gewässern des Nordatlantik.'
      ],

      [
        'id'    => 4,
        'name'  => 'Bismarck versenkt',
        'date'  => '1941-05-27 10:40:00',
        'geo'   => [48.166667, -16.2],
        'text'  => 'Selbstversenkung'
      ]


    ]

  ];

?>
