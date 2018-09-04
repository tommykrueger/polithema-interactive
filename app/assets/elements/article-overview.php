<?php include_once ('./data/articles.php') ?>

<main class="main">

<div class="content">


<div class="article-list-wrapper">

  <ul class="filter-list">
    <li class="filter-list__item filter-list__item--is-active">Neueste</li>
    <li class="filter-list__item">Beliebteste</li>
    <li class="filter-list__item">Meist gelesen</li>
  </ul>

  <div class="article-teasers">


    <?php foreach ($articles as $article): ?>

      <?php global $data; $data = (object)$article ?>
      <?php include('./elements/partials/article-teaser.php'); ?>

    <?php endforeach ?>


    <?php foreach ($articles as $article): ?>

      <?php global $data; $data = (object)$article ?>
      <?php include('./elements/partials/article-teaser.php'); ?>

    <?php endforeach ?>


    <?php foreach ($articles as $article): ?>

      <?php global $data; $data = (object)$article ?>
      <?php include('./elements/partials/article-teaser.php'); ?>

    <?php endforeach ?>


    <!-- 
    <p>Geschichte mal anders erleben</p>

    <p>Es geht nicht darum historische Zeitangaben aneinanderzureihen oder wichtige Peronsnen der Zeitgeschichte aufzulisten.</p>
    <p>Es geht vielmehr darum Zusammenhänge historischer Ereignisse und Entwicklungen zu erkennen und zu beschreiben.</p>

    <p>Wussten Sie zum Beispiel dass die Hexenverfolgung in Europa nicht im Mittelalter stattfand sondern in der Neuzeit?</p>
    <p>Christoph Kolumbus war auch nicht der erste Europäer der Amerika entdeckte.</p>

    <p>Geschichte passiert nicht zufällig. Sie</p>

    <p>Neuster Artikel:</p>
    <p>1492: Christoph Kolumbus entdeckt Amerika</p>
    
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

    -->

  </div>

</div>

</div>

</main>