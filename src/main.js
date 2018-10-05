import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import routes from'./router/routes'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter(
  {
    mode: 'history',
    routes: routes
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
