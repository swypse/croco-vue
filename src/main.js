import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  store,
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})