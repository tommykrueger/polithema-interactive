<?php

$data = [

  [
    'id' => 1,
    'title' => '1492 - Die Entdeckung der Neuen Welt',
    'subtitle' => 'Christoph Kolumbus entdeckt Amerika',
    'url' => 'http://localhost/polithema-interactive/public/index.php?article=1',
    'image' => 'img/Columbus_landing_on_Hispaniola_adj.jpg',
    'excerpt'
  ],

  [
    'id' => 2,
    'title' => 'Die Erste Weltumseglung durch Ferdinand Magellán',
    'subtitle' => 'Christoph Kolumbus entdeckt Amerika',
    'url' => 'http://localhost/polithema-interactive/public/index.php?article=2',
    'image' => 'img/Columbus_landing_on_Hispaniola_adj.jpg',
    'excerpt'
  ],

  

]

?>



<div class="article-teasers">

<?php foreach ($data as $d): ?>

  <?php $d = (object)$d ?>

  <article class="article article--teaser">

    <a href="<?= $d->url ?>"> 
      
      <figure class="article__image-wrapper">
        
        <img class="article__image" src="<?= $d->image ?>" alt="Kolumbus lands on Hispaniola" />

      </figure>

    </a>

    <div class="article--teaser__content">

      <span class="article__subtitle"><?= $d->subtitle ?></span>
      <h3 class="article__title"><?= $d->title ?></h3>

      <div class="article__excerpt">
        <p>
          <?= $d->excerpt ?>
          Die Entdeckung der "Neuen Welt" durch Christoph Kolumbus gilt als einer der wichtigsten historischen Ereignisse 
          der Europäischen Geschichte. Mit der Entdeckung Amerikas beginnt eine rund 500 Jahre andauernde Zeit der Kolonialisierung
          der Welt durch die Europäischen Großmächte.
        </p>
      </div>

    </div>

  </article>

<?php endforeach ?>

</div>