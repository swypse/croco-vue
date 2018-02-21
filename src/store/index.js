import Vue from 'vue'
import Vuex from 'vuex'
import croco from './modules/croco'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {croco}
})