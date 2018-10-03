<template>
  <div id="app">
    <!-- ヘッダー -->
    <header class="py-4">
      <div class="container text-center border">
        <h1><a href="index.html"><img src="./assets/logo.png" alt="カフェ Mr.M COFFEE"></a></h1>
      </div>
    </header><!-- /ヘッダー -->

    <!-- ナビゲーション -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <!-- サブコンテナ -->
      <div class="container">
        <!-- ブランド名 -->
        <a href="index.html" class="navbar-brand">Mr.M COFFEE</a>
        <!-- 切り替えボタン -->
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=
        "#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label=
        "Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div><!-- /サブコンテナ -->

      <!-- ナビゲーション -->
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a href="#">Top <span class="sr-only">(current)</span> </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Menu</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Coupon</a>
          </li>
          <!-- ドロップダウン -->
          <li class="nav-item dropdown">
            <a href="#" class="dropdown-toggle btn nav-link" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a href="#" class="dropdown-item">Shop</a>
              <a href="#" class="dropdown-item">Access</a>
            </div>
          </li>
        </ul>

        <!-- 右側メニュー : Contactページへのリンク -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="contact.html" class="nav-link btn btn-info">Contact</a>
          </li>
        </ul>
      </div>
    </nav><!-- /ナビゲーション -->

    <!-- メイン -->
    <main>
      <!-- メインビジュアル -->
      <div class="py-4">
        <div class="container">
          <!-- カルーセル 外枠 -->
          <div id="main_visual" class="carousel slide" data-ride="carousel">
            <!-- インジケーター -->
            <ol class="carousel-indicators">
              <li data-target="#main_visual" data-slide-to="0" class="active"></li>
              <li data-target="#main_visual" data-slide-to="1"></li>
              <li data-target="#main_visual" data-slide-to="2"></li>
            </ol><!-- /インジケーター -->

            <!-- カルーセル内枠 -->
            <div class="carousel-inner">
              <!-- スライド01 -->
              <div class="carousel-item active">
                <img src="./assets/slide_01.jpg" class="img-fluid" alt="コーヒー写真">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Mr.M COFFEEのこだわり</h2>
                  <p>店主が世界中のコーヒー豆を厳選し、コーヒー豆の種類にあわせ、心を込めて焙煎、抽出しております。</p>
                </div>
              </div><!-- /スライド01 -->
              <!-- スライド02 -->
              <div class="carousel-item">
                <img src="./assets/slide_02.jpg" class="img-fluid" alt="ランチ写真">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Mr.M COFFEEのメニュー</h2>
                  <p>コーヒーはもちろん、モーニングやワンプレートランチ、季節のスイーツなどもご好評頂いております。</p>
                </div>
              </div><!-- /スライド02 -->
              <!-- スライド03 -->
              <div class="carousel-item">
                <img src="./assets/slide_03.jpg" class="img-fluid" alt="店内写真">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Mr.M COFFEEの空間</h2>
                  <p>座り心地の良いソファとちょうど良い高さのテーブル。くつろぎ空間を満喫してください。</p>
                </div>
              </div><!-- /スライド03 -->
            </div><!-- /カルーセル内枠 -->

            <!-- コントローラー -->
            <a href="#main_visual" class="carousel-control-prev" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">前に戻る</span>
            </a>
            <a href="#main_visual" class="carousel-control-next" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">次に進む</span>
            </a><!-- コントローラー -->
          </div><!-- /カルーセル外枠-->
        </div>
      </div><!-- /メインビジュアル -->


      <!-- コンテンツ01 -->
      <div class="py-4">

      </div><!-- /コンテンツ01 -->

      <!-- コンテンツ02 -->
      <div class="py-4">

      </div><!-- /コンテンツ02 -->


      <!-- コンテンツ03 -->
      <div class="py-4">

      </div><!-- /コンテンツ03 -->

      <!-- コンテンツ04 -->
      <div class="py-4">

      </div><!-- /コンテンツ04 -->

      <!-- コンテンツ05 -->
      <div class="py-4">

      </div><!-- /コンテンツ05 -->
    </main><!-- /メイン -->

    <!-- フッター -->
    <footer class="py-4">

    </footer><!-- /フッター -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
