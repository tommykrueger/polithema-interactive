<!DOCTYPE html>
<html lang="en">

<?php include_once('elements/head.php'); ?>

<body>

  <div class="page">

    <?php 
    
    include_once('elements/header.php');

    $articleID = isset($_GET['article']) ? (int)$_GET['article'] : false;
    
    if ( !$articleID ) {

      include_once('elements/subheader.php'); 
      include_once('elements/article-overview.php');

    }

    else {

      include_once('elements/article.php');

    }

    include_once('elements/footer.php'); 
    
    ?>

  </div>

</body>
</html>
