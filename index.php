<?php header('Location: public/index.php'); ?>



<!DOCTYPE html>
<html lang="en">
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">

  <title>Interactiv # polthema.de</title>

  <meta name="description" content="3D globe shows the locations of sunken ships during World War 2">

  <meta property="og:title" content="GlobeWW2 - Ships lost during World War Two 1939 - 1945"/>
  <meta property="og:type" content="article"/>
  <meta property="og:url" content="http://globeww2.tommykrueger.com/"/>
  <meta property="og:image" content="http://tommykrueger.com/wp-content/uploads/visualisierung-der-schiffssverluste-zweiter-weltkrieg.jpg"/>
  <meta property="og:site_name" content="GlobeWW2"/>
  <meta property="og:description" content="3D globe shows the locations of sunken ships during World War 2"/>

  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="shortcut icon" href="http://tommykrueger.com/wp-content/themes/tommykrueger.com/images/layout/favicon.png" />

  <link rel="canonical" href="http://globeww2.tommykrueger.com/" />
  <link rel="stylesheet" href="./css/styles.css">

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
   integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
   crossorigin=""/>

   <!-- Make sure you put this AFTER Leaflet's CSS -->
  <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
   integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
   crossorigin=""></script>
  <script src="./js/leaflet.polylineDecorator.js"></script>
  <script src='//unpkg.com/leaflet-arc/bin/leaflet-arc.min.js'></script>

</head>

<body>

<div class="page">

  <header class="header">

    <h1 class="page-title">Polithema <em>Interactive</em></h1>

    <nav class="header-menu">
      <ul>
        <li><a href="http://polithema.de">Polithema</a></li>
        <li><a href="http://polithema.de/datenschutz">Datenschutz</a></li>
        <li><a href="http://polithema.de/impressum">Impressum</a></li>
        <li><a href="http://interaktiv.polithema.de/kontakt">Kontakt</a></li>
      </ul>
    </nav>

  </header>

  <main class="main">

    <div class="content">

      <article class="article">

        <header class="article-header">

          <div id="map-interactive"></div>

        </header>

        <div class="article-content">

          <div class="timeline timeline-vertical">

            <span class="timeline-marker"></span>

            <ol class="timeline-events">

              <li class="timeline-events-item timeline-events-item-left">

                <h1 class="article-title">1492 - Die Entdeckung Amerikas: Die Reise des Christoph Kolumbus</h1>

              </li>

              <li class="timeline-events-item timeline-events-item-right">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Aug 03</span>
                  <h3 class="timeline-event-name">The Travel Begins</h3>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                  <p>
                    Das Logbuch des Kolumbus gilt als eine der wichtigsten Zeugnisse von Seefahrten und Entdeckungsreisen der damaligen Zeit.
                    Es ist wie ein Tagebuch zu verstehen in dem Eindrücke, Entdeckungen aber auch Verhaltensweisen
                    anderer Protagonsiten aus der Sicht Kolumbus beschrieben werden. Als Leser dieses Bordbuches bekommt man eine Vorstellung für Gedankengänge und Wertvorstellungen
                    von damals.
                    <br/>
                    Eine schriftliche Überlieferung aus der Sicht der Eingeborenen der Karibik gibt es nicht.
                  </p>

                </div>

              </li>

              <li class="timeline-events-item timeline-events-item-left">

                <div class="timeline-events-item-header">

                  <h3 class="timeline-event-name">Ship Repairs at La Gomera</h3>
                  <span class="timeline-event-date">Sep 09</span>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntpsum dolor sit amet. </p>
                  </p>

                  <p>
                    <figure class="figure">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/ColombusMap.jpg" />
                    </figure>
                  </p>

                </div>

              </li>

              <li class="timeline-events-item timeline-events-item-right">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Sep 14</span>
                  <h3 class="timeline-event-name">Westbound Over the Atlantic Ocean</h3>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                  <p>
                    Ein sehr interessanter Aspekt ist, dass die Fahrt von Beginn an eine Alles-oder-Nichts Reise war. Unter damaligen Verhältnissen glich
                    die Seereise einem Himmelfahrtskommando. Die Warscheinlich nicht mehr lebend zurückzukehren war sehr hoch.
                    Denn ließs ich Kolumbus in seiner Entschlossenheit nicht beirren. Das Ziel den Westlichen Seeweg nach Indien zu finden
                    und so zu Ruhm und Reichtum zu kommen war zu groß in ihm.

                    Jedoch zeigte sich während der Fahrt im Atlantik, dass die berechneten Entfernungen viel größer waren als Kolumbus
                    fälschlicherweise annahm. Die Welt war größer als er damals dachte.
                    So gab Kolumbus gegenüber seinen Seeleuten veränderte Seemeilen an die man zurückgelegt hatte.
                  </p>

                </div>

              </li>


              <li class="timeline-events-item timeline-events-item-left">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Sep 21</span>
                  <h3 class="timeline-event-name">Westbound Over the Atlantic Ocean</h3>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </li>

              <li class="timeline-events-item timeline-events-item-left">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Sep 25</span>
                  <h3 class="timeline-event-name">Westbound Over the Atlantic Ocean</h3>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </li>

              <li class="timeline-events-item timeline-events-item-right">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Oct 12</span>
                  <h3 class="timeline-event-name">Arriving the "New World"</h3>

                </div>

                <div class="timeline-event-text">

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>

                </div>

              </li>


              <li class="timeline-events-item timeline-events-item-left">

                <div class="timeline-events-item-header">

                  <span class="timeline-event-date">Oct 12</span>
                  <h3 class="timeline-event-name">Arriving the "New World"</h3>

                </div>

                <div class="timeline-event-text">

                  <figure class="figure">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Waldseemuller_map_2.jpg/1024px-Waldseemuller_map_2.jpg" />
                  </figure>

                  <ul>
                    <li>Die Karte zeigt Nord- und Südamerika als getrennte Kontinente</li>
                    <li>Die Karte stellt die Atlantischen Küstengebiete Amerikas für damalige Verhältnisse erstaunlich korrekt dar</li>
                  </ul>

                </div>

              </li>



            </ol>

          </div>

        </div>


      </article>

    </div>

  </main>

  <footer class="footer"></footer>

</div>


</body>
</html>
