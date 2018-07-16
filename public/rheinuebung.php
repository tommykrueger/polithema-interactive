<?php include_once('../server/rheinuebung.php')?>


<!DOCTYPE html>
<html lang="en">

<?php include_once('elements/head.php'); ?>

<body>

  <div class="page">

    <?php include_once('elements/header.php'); ?>

    <main class="main">

      <div class="content">

        <article class="article">

          <header class="article-header">

            <div class="map-container">

              <div class="datetime">
                <span class="datetime-weekday"></span>
                <span class="datetime-date"></span>
                <span class="datetime-time"></span>
              </div>

              <div id="map-interactive" data-json='<?php echo json_encode($data)?>'></div>
            </div>

          </header>


          <div class="article-main">

            <p>Thema: Zweiter Weltkrieg</p>
            <p>Tags: Seekrieg, Seeschlacht, Handelskrieg, Atlantikschlacht, Bismarck, Hood, Kriegsmarine, Royal Navy.</p>

            <h3>Strategische Bedeutung der Operation Rheinübung</h3>
            <p>Der Erste Kampfeinsatz der Bismarck war gleichzeitig ihr letzter. Nach der Operation Rheinübung vom Mai 1941 stellte die Deutsche Marineleitung auf Befehl Hitlers alle Aktivitäten Deutscher Großkampfverbände im Atlantik ein. Von nun operierten nur noch die U-Boote im Atlantik. Gleichzeitig wurde der U-Bootkrieg in den folgenden Kriegsjahren intensiviert. In den Jahren 1942/43 erreichte der U-Bootkrieg im Atlantik seinen Höhepunkt.</p>

          </div>

        </article>

      </div>

    </main>

    <?php include_once('elements/footer.php'); ?>

  </div>

</body>
</html>
