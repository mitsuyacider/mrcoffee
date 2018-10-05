<template>
  <div class="contact-page">
    <!-- ヘッダー -->
    <header class="py-4">
      <div class="container text-center border">
        <h1><a href="index.html"><img src="../assets/logo.png" alt="カフェ Mr.M COFFEE"></a></h1>
      </div>
    </header><!-- /ヘッダー -->

    <!-- ナビゲーションメニュー -->
    <nav-container />

    <!-- パンくずリスト -->
    <nav aria-label="breadcrumb">
      ここにパンくずリストが入ります。
    </nav> <!-- /パンくずリスト -->

    <!-- メイン -->
    <main>
      <div class="container">
        <h2>Contact</h2>
        <p>カフェ Mr. M COFFEE(ミスターえむコーヒー)へのお問い合わせは、
          こちらのフォームをご利用ください
        </p>
      </div>
      <!-- お問い合わせフォーム -->
      <div class="py-3">
        <div class="container">
          <h3 class="mb-3">お問い合わせフォーム</h3>
          <!-- フォーム -->
          <form class="" action="index.html" method="post">
            ここにフォームが入ります。
          </form><!-- /フォーム -->
        </div>
      </div><!-- /お問い合わせフォーム -->
    </main>

  </div>
</template>

<script>
import NavContainer from '../components/NavContainer.vue'

export default {
  components: {
    NavContainer
  }
}
</script>

<style lang="css">
</style>
