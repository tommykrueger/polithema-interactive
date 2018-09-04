<div class="breadcrumb">

  <div class="breadcrumb__inner">
    <ol class="breadcrumb__list">
      <li><a href="/">Home</a></li>
      <li><a href="#"><?= $article->category ?></a></li>

      <?php if (isset($article->subcategory)): ?>
      <li><a href="#"><?= $article->subcategory ?></a></li>
      <?php endif ?>

    </ol>

    <div class="article-header-group">
    
      <h1 class="page-title">
        <span class="subtitle"><?= $article->subtitle ?></span>
        <span class="title"><?= $article->title ?></span>
      </h1>

      <ul class="article-teaser__info-list">
        <li>
          <i class="fas fa-eye fa-xs"></i> 
          <span class="article-teaser__info-list-text"><?= $article->views ?></span> 
        </li>
        <li>
          <i class="fas fa-comments fa-xs"></i> 
          <span class="article-teaser__info-list-text"><?= $article->comments ?></span> 
        </li>
        <li>
          <i class="fas fa-heart fa-xs"></i> 
          <span class="article-teaser__info-list-text"><?= $article->likes ?></span> 
        </li>
      </ul>

    </div>

  </div>

</div>
