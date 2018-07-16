<?php include_once('./data/articles.php') ?>

<?php

$article = isset($_GET['article']) ? (int)$_GET['article'] : false;

if ($article < 10) {
  $article = '00' . $article;
}
elseif ($article < 100) {
  $article = '0' . $article;
}

?>


<main class="main">

  <div class="content">

    <?php 
    
      if ( !$article ) {

        include_once('./elements/article-overview.php');

      }

      else {

        include_once('./elements/articles/article_'. $article .'.php');
       
      }
    
    ?>

  </div>

</main>
