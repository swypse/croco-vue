import Vue from 'vue'
import Router from 'vue-router'
import AppMainScreen from '@/components/AppMainScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMainScreen',
      component: AppMainScreen
    }
  ]
})
