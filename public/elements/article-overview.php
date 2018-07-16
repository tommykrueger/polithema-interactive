<article class="article">

  <div class="article-main">

    <ol class="article-list">

      <?php foreach ($articles as $article):?> 

        <li> 
          <a href="./<?php echo $article['url']?>"><?php echo $article['name'] ?></a>
        </li>

      <?php endforeach?>

    </ol>

  </div>

</article>