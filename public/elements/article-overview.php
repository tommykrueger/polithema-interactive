<article class="article">

  <div class="article-main">

    <p>Geschichte mal anders erleben</p>

    <p>Es geht nicht darum historische Zeitangaben aneinanderzureihen oder wichtige Peronsnen der Zeitgeschichte aufzulisten.</p>
    <p>Es geht vielmehr darum Zusammenhänge historischer Ereignisse und Entwicklungen zu erkennen und zu beschreiben.</p>

    <p>Wussten Sie zum Beispiel dass die Hexenverfolgung in Europa nicht im Mittelalter stattfand sondern in der Neuzeit?</p>
    <p>Christoph Kolumbus war auch nicht der erste Europäer der Amerika entdeckte.</p>

    <p>Geschichte passiert nicht zufällig. Sie</p>

    <p>Neuster Artikel:</p>
    <p>1492: Christoph Kolumbus entdeckt Amerika</p>

    <h3>Kategorie:</h3>

    <p>Die Zeit der Entdeckungen</p>

    <img src="img/Columbus_landing_on_Hispaniola_adj.jpg" alt="Kolumbus landet auf Hispaniola 1492" />

    <ul>
      <li>Der Europäische Kolonialismus von 1492 bis 2000</li>
      <li>Russland: Der Aufstieg eines Riesenreiches</li>
      <li>Der 30-Jährige Krieg</li>
      <li>Der Aufstieg Hollands zur globlen Handels- und Kolonialmacht</li>
    </ul>

    <ol class="article-list">

      <?php foreach ($articles as $article):?> 

        <li> 
          <a href="./<?php echo $article['url']?>"><?php echo $article['name'] ?></a>
        </li>

      <?php endforeach?>

    </ol>

  </div>

</article>