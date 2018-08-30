<?php global $data; ?>



<article class="article-teaser">

  <a href="<?= $data->url ?>"> 
    
    <figure class="article__image-wrapper">
      
      <img class="article-teaser__image" src="<?= $data->image ?>" alt="Kolumbus lands on Hispaniola" />

    </figure>

  </a>

  <div class="article-teaser__content">

    <!-- <span class="article__subtitle"><?= $data->subtitle ?></span> -->
    <h3 class="article-teaser__title"><?= $data->title ?></h3>

    <ul class="article-teaser__info-list">
      <li><i class="fas fa-eye fa-xs"></i> <span class="article-teaser__info-list-text"><?= $data->views ?></span> </li>
      <li><i class="fas fa-comments fa-xs"></i> <span class="article-teaser__info-list-text"><?= $data->comments ?></span> </li>
      <li><i class="fas fa-heart fa-xs"></i> <span class="article-teaser__info-list-text"><?= $data->likes ?></span> </li>
    </ul>
    

    <div class="article-teaser__excerpt">
      <p>
        <?= $data->excerpt ?>
        Die Entdeckung der "Neuen Welt" durch Christoph Kolumbus gilt als einer der wichtigsten historischen Ereignisse 
        der Europäischen Geschichte. Mit der Entdeckung Amerikas beginnt eine rund 500 Jahre andauernde Zeit der Kolonialisierung
        der Welt durch die Europäischen Großmächte.
      </p>
    </div>

  </div>

</article>
