<template>
  <!-- /コンテンツ03 -->
  <div class="py-4">
    <section id="menu">
      <div class="container">
        <h3 class="mb-3">Menu</h3>
        <p>カフェ Mr. M COFFEEのメニューです。掲載していない季節限定メニューはMr.M COFFEEの
        <a href="#">ブログ</a>にて紹介します。</p>

        <!-- タブ型ナビゲーション -->
        <div class="nav nav-tabs" id="tab-menus" role="tablist">
          <!-- タブ01 -->
          <a href="#panel-menu01" class="nav-item nav-link active" id="tab-menu01"
            data-toggle="tab" role="tab" aria-controls="panel-menu01"
            aria-selected="true">
            コーヒー
          </a>
          <!-- タブ02 -->
          <a href="#panel-menu02" class="nav-item nav-link" id="tab-menu02"
             data-toggle="tab" role="tab" aria-controls="panel-menu02"
             aria-selected="false">
             モーニング
          </a>
          <!-- タブ03 -->
          <a href="#panel-menu03" class="nav-item nav-link" id="tab-menu03"
             data-toggle="tab" role="tab" aria-controls="panel-menu03"
             aria-selected="false">
             ランチ
          </a>
          <!-- タブ04 -->
          <a href="#panel-menu04" class="nav-item nav-link" id="tab-menu04"
             data-toggle="tab" role="tab" aria-controls="panel-menu04"
             aria-selected="false">
             ケーキ
          </a>
        </div><!-- /タブ型ナビゲーション -->

        <!-- タブパネル　コンテンツ -->
        <div class="tab-content" id="panel-menus">
          <!-- パネル01 -->
          <div class="tab-pane fade show active border border-top-0" id="panel-menu01"
                role="tabpanel" aria-labelledby="tab-menu01">
                (コーヒーのメニュー表)
          </div>
          <!-- パネル02 -->
          <div class="tab-pane fade border border-top-0" id="panel-menu02"
                role="tabpanel" aria-labelledby="tab-menu02">
                (コーヒーのメニュー表2)
          </div>
          <!-- パネル03 -->
          <div class="tab-pane fade border border-top-0" id="panel-menu03"
                role="tabpanel" aria-labelledby="tab-menu03">
                (コーヒーのメニュー表3)
          </div>
          <!-- パネル04 -->
          <div class="tab-pane fade border border-top-0" id="panel-menu04"
                role="tabpanel" aria-labelledby="tab-menu04">
                (コーヒーのメニュー表4)
          </div>
        </div><!-- /タブパネル　コンテンツ -->
      </div>
    </section>
  </div><!-- /コンテンツ03 -->
</template>
