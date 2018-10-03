<template>
  <div class="py-4 bg-light">
    <section id="about">
      <div class="container">

        <!-- 上段 -->
        <div class="row md-4 border">
          <div class="col-md-8 mb-3 border">
            <h3 class="mb-3">Mr. M COFFEEについて</h3>
            <p class="text-left">Mr. M COFFEE(ミスターえむコーヒー)は、店主が焙煎した
              こだわりのコーヒーを最高の空間とおもてなしで提要する自家焙煎のカフェです。
              店主が世界中のコーヒー豆を厳選し、コーヒー豆の種類に合わせ、心を込めて焙煎、抽出しております。
              また、女性にちょうど良いボリュームのワンプレートランチ、季節のスイーツなどもご好評いただいております。
            </p>
            <a href="#" class="btn btn-info">メニューを見る</a>
            <a href="#" class="btn btn-info">店舗情報を見る</a>
          </div>
          <div class="col-md-4 border">
            <img src="../assets/about01.jpg" alt="店主が焙煎したこだわりのコーヒー" class="img-fluid">
          </div>
        </div><!-- /上段 -->

        <!-- 下段 -->
        <div class="row border">
          <div class="col-md-4 border">
            <!-- カード01 -->
            <div class="card mb-3">
              <img src="../assets/about02-thumb.jpg" alt="" class="img-fluid">
              <!-- カードの本文エリア -->
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">くつろぎの空間</h4>
                <button type="button" class="btn btn-secondary" data-toggle="modal"
                  data-target="#modal01">詳しく見る</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 border">
            <!-- カード01 -->
            <div class="card mb-3">
              <img src="../assets/about03-thumb.jpg" alt="" class="img-fluid">
              <!-- カードの本文エリア -->
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">雑貨コーナー</h4>
                <button type="button" class="btn btn-secondary" data-toggle="modal"
                  data-target="#modal02">詳しく見る</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 border">
            <!-- カード01 -->
            <div class="card mb-3">
              <img src="../assets/about04-thumb.jpg" alt="" class="img-fluid">
              <!-- カードの本文エリア -->
              <div class="card-body d-flex justify-content-between">
                <h4 class="card-title">キッズドリンク</h4>
                <button type="button" class="btn btn-secondary" data-toggle="modal"
                  data-target="#modal03">詳しく見る</button>
              </div>
            </div>
          </div>
        </div><!-- 下段 -->

        <!-- モーダル -->
        <!-- モーダル 01 -->
        <div class="modal fade" id="modal01" tabindex="-1" role="dialog"
             aria-labelleadby="modal01-label"aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal01-label">くつろぎの空間</h5>
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="text-center"> <img src="../assets/about02.jpg" class="img-fluid" alt="#"></p>
                <p class="text-left">店主がこだわった家具たちです。座り心地のよいソファとちょうど良い高さのテーブル
                  くつろぎの空間を満喫してください。
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div><!-- /モーダル01 -->

        <!-- モーダル 02 -->
        <div class="modal fade" id="modal02" tabindex="-1" role="dialog"
             aria-labelleadby="modal01-label"aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal02-label">雑貨コーナー</h5>
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="text-center"> <img src="../assets/about03.jpg" class="img-fluid" alt="#"></p>
                <p class="text-left">店主がこだわった家具たちです。座り心地のよいソファとちょうど良い高さのテーブル
                  くつろぎの空間を満喫してください。
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div><!-- /モーダル02 -->

        <!-- モーダル 03 -->
        <div class="modal fade" id="modal03" tabindex="-1" role="dialog"
             aria-labelleadby="modal01-label"aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal03-label">キッズドリンク</h5>
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p class="text-center"> <img src="../assets/about04.jpg" class="img-fluid" alt="#"></p>
                <p class="text-left">店主がこだわった家具たちです。座り心地のよいソファとちょうど良い高さのテーブル
                  くつろぎの空間を満喫してください。
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div><!-- /モーダル03 -->

      </div>
    </section>
  </div><!-- /コンテンツ02 -->
</template>
