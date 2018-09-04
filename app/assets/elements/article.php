<?php 

if (isset($articleID)) {

  include_once ('./data/articles.php');
  $article = (object) $articles[ $articleID-1 ]; 
  // var_dump($article);

}
?>


<?php include_once('elements/partials/breadcrumb.php') ?>

<main class="main">

<div class="content">

<article class="article">

  <header class="article-header">

    <div id="map-interactive" 
      data-component="InteractiveMap" 
      data-json='<?php echo file_get_contents('http://localhost/polithema-interactive/server/index.php?model=scenario&action=get&id=1') ?>'>
      
    </div>

  </header>


  <div class="article-main">

    <div class="article-sidebar">

      <div class="article-facts">

        <ul class="key-facts">
          <li class="key-facts__item">
            <span class="key-facts__title">4 Monate</span>
            <span class="key-facts__text">
              dauerte die Überfahrt von La Gomera auf den Kanarischen Inseln bis in die Karibik.
            </span>
          </li>
          <li class="key-facts__item">
            <span class="key-facts__title">5.600 KM</span>
            <span class="key-facts__text">
              legte Kolumbus bei der Überfahrt zurück
            </span>
          </li>
        </ul>

      </div>

    </div>

    <div class="article-content">

       Selbst heute in Zeiten von GPS, modernen Schiffen ist eine Atlantiküberfaht mit einem Segelschiff gefährlich.
    Vor 500 Jahren war glich eine Seereise von über 5600 Kilometern ohne Pause ein Himmelfahrtskommando.
    Jeder Teilnehmer der Reise musst damit rechnen nicht mehr lebendig nach Europa zurückzukehren.
    <!--
    <span class="article-subtitle">Christoph Kolumbus entdeckt Amerika</span>
    <h1 class="article-title">1492 - Die Entdeckung der Neuen Welt</h1>
    -->

      <ol>
        <li>Kolumbus segelte zusammen mit seinen Leuten über 5600 Kilometer in unbekanntem Gebiet quer über den Atlantik.</li>
        <li>Kolumbus hat nie den Boden Nord-Amerikas betreten. Das Land der heutigen USA blieb Kolumbus völlig unbekannt</li>
        <li>Christoph Kolumbus war nicht der Erste Europäer in Amerika. Die Wikinger entdeckten New Fundland in Nordamerika bereits 500 Jahre früher als Kolumbus. Eine dauerhafte Besiedelung schlug aber fehl.</li>
        <li>Kolumbus erwies sich als unfähiger Gouverneur in der Neuen Welt</li>
        <li>Kolumbus errichtete in der Neuen Welt eine regelrechte Terrorherrschaft. </li>
        <li>Kolumbus wird heute oft als nostalgische Figur der Geschichte betrachtet. </li>
        <li>Die Crew</li>
        <li>Das Land Kolumbien wurde von den Spanischen Eroberern Anfang des 16. Jhd. in Anlehnung an Christoph Kolumbus bennant.</li>
        <li>Kolumbus hatte hervorragende Kenntnisse über die Konstellation der Sterne was ihm erlaubte eine relativ präzise Navigation durchzuführen</li>
        <li>Bis heute ist unklar auf welcher Insel Kolumbus 1492 in der Karibik landete. In seinen Aufzeichnungen erwähnt er eine bewaldete Insel mit einem großen See ind er Mitte. DIese BEschreibung trifft auf hunderte Inseln in den Bahamas zu.</li>
      </ol>

      <p>
        Die Entdeckung der "Neuen Welt" durch Christoph Kolumbus gilt als einer der wichtigsten historischen Ereignisse 
        der Europäischen Geschichte. Mit der Entdeckung Amerikas beginnt eine rund 500 Jahre andauernde Zeit der Kolonialisierung
        der Welt durch die Europäischen Großmächte. Welche Motive       
      </p>

      <p>
        Frauen wurden zum rbeitsdienst gezwungen und konnten ihre Babies und Kinder nicht mehr versorgen. Eingeschleppte Krankheiten verbreiteten sich
        unter den Einwohnern rasend schnell. Eine medizinische Versorgung gab es nicht. Die Bevölkerung reduzierte sich innerhalb weniger Jahre
        von Millionen auf einige tausend. 
        Kolumbus löste in der Karibik eine humanitäte Katastrophe aus. Aus heutiger Sicht würde man das als Völkermord betrachten 
        und Kolumbus müsste sich vor einem internationalen Gerichtshof verantworten, 
        da er als Gouverneor in höchster Verantwortung war. 
        Aber damals gab es keine Gerichte, damals gab es auch keine starke Macht, die die Einwohner hätte schützen können.
      </p>

      <p>
        Das Logbuch des Kolumbus gilt als eine der wichtigsten Zeugnisse von Seefahrten und Entdeckungsreisen der damaligen Zeit.
        Es ist wie ein Tagebuch zu verstehen in dem Eindrücke, Entdeckungen aber auch Verhaltensweisen
        anderer Protagonsiten aus der Sicht Kolumbus beschrieben werden. Als Leser dieses Bordbuches bekommt man eine Vorstellung für Gedankengänge und Wertvorstellungen
        von damals.
      </p>

      <p>
        Kolumbus war demnach nicht nur ein hervorrangender Navigator, Schiffsführer und Entdecker sondern er war auch
        ein rücksichtsloser Eroberer, ein skrupeloser Machtmensch und gnadenloser Sklaventreiber. 
        Die Gier nach Gold, Macht und Anerkennung trieb ihn unersättlich an. Es musste immer weiter gehen bis man die Ziele 
        erreicht haben würde. Ohne Rücksicht auf Verluste koste es was es wolle. Nur so war es überhaupt möglich eine so gefährliche Reise in einem Holzboot
        durchzuführen. Eine Kombination aus genialem Entdeckergeist und gnadenloser Skrupelosigkeit.
        Die Überfahrt über den Atlantik kam Ende des 14. Jahrhunderts einem Himmelfahrtskomamdo gleich. Jeder Teilnehmer dieser Reise
        musste realistisch damit rechnen nicht mehr lebend nach Hause zu kommen.
      </p>


      <h3>Historische Einordnung</h3>

      <p>
      
        Die Entdeckung Amerikas durch Spanien Ende des 15. Jahrhunderts war die Grundlage für den Aufstieg Spaniens zur Kolonialmacht.
        Vor der Entdeckung Amerikas war Spanien eher eine Regionalmacht in Europa. 50 Jahre nache Kolumbus war Spanien zu einer der 
        reichsten Kolonialmächte mit globalem Machtanspruch aufgestiegen. Die gesamte Strategie der spanischen Politik wurde Kolonialisierung neuer Territorien in Übersee. Im 16. Jahrhundert übernahm
        die Spanische Krone sogar Teile Europas in seinen Machtbereich auf. 
        
        Die Kolonialisierung Süd- und Nordamerikas war die Folge. Christoph Kolumbus war der Wegbereiter.
        Nach der Entdeckung Amerikas begann die Zeit der Spanischen Eroberer. Bereits 1519 nicht einmal 30 Jahre nach Kolumbus 
        eroberte Hernan Cortez das Reich der Azteken im heutigen Venezuela. Cortez legte damit den Grundstein für eine breite Expansion der Spanischen Krone nach Mittel- und Südamerika. 
        Die Eroberung Amerikas beschleunigte sich rasant. Innerhalb weniger Jahrzehnte war der größte von Spanien in Besitz genommen worden. Nebenbei wurden die Königreiche der 
        Maya, die Inka und die Azteken fast vollständig ausgelöscht. 

        So ist die Spanische Sprache in ganz Mittelamerika und Südamerika verbreitet. Mit Ausnahme von Brasilien wird fast überall
        Spanisch als Amtssprache geführt. Die meisten Sprachen der einheimischen Bevölkerung sind entweder ausgestorben oder werden
        nur regional begrenzt gesprochen. Das ist das Vermächtnis der Spanischen Kolonialisierung Amerikas.

      </p>


      <h3>Fragen</h3>
      <ul>
        <li>War Kolumbus der Erster Europäer in Amerika? -> Nein!</li>
        <li>Kolumbien wurde nach Christoph Kolumbus benannt. Durch die Spanischen Eroberer Anfang des 16. Jahrhunderts. Kolumbus selbst gelangte nicht nach Kolumbien.</li>
        <li>War die Entdeckung Amerikas ein Fluch oder Segen? -> Beides</li>
        <li></li>
      </ul>


      <div class="timeline">

        <span class="timeline__start">1492</span>


        <span class="timeline-marker"></span>
        <span class="timeline-limits"></span>


        <ol class="timeline-events">

          <li class="timeline-events-item timeline-events-item-right" data-date="1492-08-03">

            <span class="timeline-event-date">August 3, 1492</span>
            <div class="timeline-events-item-header">
              <h3 class="timeline-event-name">The Travel Begins</h3>
            </div>

            <div class="timeline-event-text">

              <p>
                Es gibt viele Mythen die sich um die Person Christoph Kolumbus bis heute halten. Auch in den Schulen 
                wird die Rolle Christoph Kolumbus innerhalb der Geschichte oft falsch dargestellt.
                Kolumbus war Zeit seines Lebens mit Sicherheit nicht der nette freundliche Entdecker der die Welt in eine bessere Zeit führen wollte.
                Er war ein besessener Eroberer. Mitunter war ihm jedes Mittel Recht sein Ziel zu erreichen.
                Als Gouveneur der neu entdeckten Inseln in der Karibik zeigte er seine Unfähigkeit Politik zu betreiben.
                Die Gier nach Gold und Reichtum trieben ihn beinahe in den vollständigen Ruin.
              </p>

              <p>
                Die Eroberung der Neuen Welt war für die Einheimische Bevölkerung kein Segen sondern. Spanische und Portugisische
                Eroberer die nach Kolumbus nach Kolumbus. die letztendlich zur vollständigen Eroberung Mittel- und Südam 
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


          <li class="timeline-events-item timeline-events-item-left" data-date="1492-09-09">

            <span class="timeline-event-date">
              <div class="icon">
                <?php include './svg/icon-battleship.html' ?>
              </div>
              September 9, 1492
            </span>

            <div class="timeline-events-item-header">
              <h3 class="timeline-event-name">Ship Repairs at La Gomera</h3>
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

          <li class="timeline-events-item timeline-events-item-right" data-date="1492-09-14">

            <span class="timeline-event-date">September 14, 1492</span>
            <div class="timeline-events-item-header">

              
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


          <li class="timeline-events-item timeline-events-item-left" data-date="1492-09-21">

            <span class="timeline-event-date">Sep 21</span>
            <div class="timeline-events-item-header">

              
              <h3 class="timeline-event-name">Westbound Over the Atlantic Ocean</h3>

            </div>

            <div class="timeline-event-text">

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>

            </div>

          </li>

          <li class="timeline-events-item timeline-events-item-left" data-date="1492-09-25">

            <span class="timeline-event-date">Sep 25</span>
            <div class="timeline-events-item-header">
              <h3 class="timeline-event-name">Westbound Over the Atlantic Ocean</h3>
            </div>

            <div class="timeline-event-text">

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>

            </div>

          </li>

          <li class="timeline-events-item timeline-events-item-right" data-date="1492-10-12">

            <span class="timeline-event-date">Oct 12</span>
            <div class="timeline-events-item-header">

              
              <h3 class="timeline-event-name">Arriving the "New World"</h3>

            </div>

            <div class="timeline-event-text">

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>

            </div>

          </li>


          <li class="timeline-events-item timeline-events-item-left">

            <span class="timeline-event-date">Oct 12</span>
            <div class="timeline-events-item-header">
              <h3 class="timeline-event-name">Landung in der "Neuen Welt"</h3>

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


          <li class="timeline-events-item timeline-events-item-left" data-date="1493-03-15">

            <span class="timeline-event-date">Mar 15</span>
            <div class="timeline-events-item-header">

              
              <h3 class="timeline-event-name">Return to Spain</h3>

            </div>

            <div class="timeline-event-text">

              <p>Rückkehr nach Spanien</p>

            </div>

          </li>



        </ol>

      </div>


    </div>

   

  </div>


  <aside class="article-secondary">

    Dieser Artikel ist Teil einer Artikelserie. Lesen Sie weiter:

    <ol>
      <li>Kolumbus Zweite Reise nach Amerika - Jamaica und Puerto Rico</li>
      <li>Kolumbus Dritte Reise nach Amerika - </li>
      <li>Kolumbus Vierte Reise nach Amerika - Die Entdeckung Panamas und des Pazifiks</li>
      <li>Das Vermächtnis Kolumbus</li>
    </ol>

  </aside>

</article>

</div>

</main>
