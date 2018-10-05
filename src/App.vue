<template>
  <div id="app">
    <router-view />
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
import TopFooter from './components/TopFooter.vue'

export default {
  name: 'app',
  components: {
    NavContainer,
    MainVisual,
    NewsList,
    AboutSection,
    MenuSection,
    CouponSection,
    InfoSection,
    TopFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
$spacer: 85px;

section {
  margin-top: -$spacer;
  padding-top: $spacer;
}

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
