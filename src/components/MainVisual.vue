<template>
  <!-- メインビジュアル -->
  <div class="py-4">
    <div class="container border">
      <!-- カルーセル 外枠 -->
      <div id="main_visual" class="carousel slide" data-ride="carousel">
        <!-- インジケーター -->
        <ol class="carousel-indicators border">
          <li data-target="#main_visual" data-slide-to="0" class="active"></li>
          <li data-target="#main_visual" data-slide-to="1"></li>
          <li data-target="#main_visual" data-slide-to="2"></li>
        </ol><!-- /インジケーター -->

        <!-- カルーセル内枠 -->
        <div class="carousel-inner">
          <!-- スライド01 -->
          <div class="carousel-item active">
            <img src="../assets/slide_01.jpg" class="img-fluid" alt="コーヒー写真">
            <div class="carousel-caption d-none d-md-block border">
              <h2>Mr.M COFFEEのこだわり</h2>
              <p>店主が世界中のコーヒー豆を厳選し、コーヒー豆の種類にあわせ、心を込めて焙煎、抽出しております。</p>
            </div>
          </div><!-- /スライド01 -->
          <!-- スライド02 -->
          <div class="carousel-item">
            <img src="../assets/slide_02.jpg" class="img-fluid" alt="ランチ写真">
            <div class="carousel-caption d-none d-md-block">
              <h2>Mr.M COFFEEのメニュー</h2>
              <p>コーヒーはもちろん、モーニングやワンプレートランチ、季節のスイーツなどもご好評頂いております。</p>
            </div>
          </div><!-- /スライド02 -->
          <!-- スライド03 -->
          <div class="carousel-item">
            <img src="../assets/slide_03.jpg" class="img-fluid" alt="店内写真">
            <div class="carousel-caption d-none d-md-block">
              <h2>Mr.M COFFEEの空間</h2>
              <p>座り心地の良いソファとちょうど良い高さのテーブル。くつろぎ空間を満喫してください。</p>
            </div>
          </div><!-- /スライド03 -->
        </div><!-- /カルーセル内枠 -->

        <!-- コントローラー -->
        <a href="#main_visual" class="carousel-control-prev border" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">前に戻る</span>
        </a>
        <a href="#main_visual" class="carousel-control-next border" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">次に進む</span>
        </a><!-- コントローラー -->
      </div><!-- /カルーセル外枠-->
    </div>
  </div><!-- /メインビジュアル -->
</template>
