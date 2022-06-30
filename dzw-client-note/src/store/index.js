import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createpersistedstate from 'vuex-persistedstate'
import user from './modules/user'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  plugins:[
    createpersistedstate({
      key:'vuex-data',
      paths:['user']
    })
  ]
})
