import Vue from 'vue'
import Vuex from 'vuex'
import global from './global.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    global
  }
})

export default store