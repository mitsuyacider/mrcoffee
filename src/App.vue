<template>
  <div id="app">
    <!-- ヘッダー -->
    <header class="py-4">
      <div class="container text-center border">
        <h1><a href="index.html"><img src="./assets/logo.png" alt="カフェ Mr.M COFFEE"></a></h1>
      </div>
    </header><!-- /ヘッダー -->

    <!-- ナビゲーションメニュー -->
    <nav-container />

    <!-- メイン -->
    <main>
      <!-- メインビジュアル -->
      <main-visual />

      <!-- コンテンツ01 -->
      <news-list />

      <!-- コンテンツ02 -->
      <about-section />

      <!-- コンテンツ03 -->
      <menu-section />

      <!-- コンテンツ04 -->
      <coupon-section />

      <!-- コンテンツ05 -->
      <info-section />
    </main><!-- /メイン -->

    <!-- フッター -->
    <footer class="py-4">

    </footer><!-- /フッター -->
  </div>
</template>

<script>
import NavContainer from './components/NavContainer.vue'
import MainVisual from './components/MainVisual.vue'
import NewsList from './components/NewsList.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'
import CouponSection from './components/CouponSection.vue'
import InfoSection from './components/InfoSection.vue'

export default {
  name: 'app',
  components: {
    NavContainer,
    MainVisual,
    NewsList,
    AboutSection,
    MenuSection,
    CouponSection,
    InfoSection
  },
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
