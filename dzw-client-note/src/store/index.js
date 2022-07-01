import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createpersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import task from './modules/task'
import plan from './modules/plan'

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
    user,
    task,
    plan
  },
  plugins:[
    createpersistedstate(
    {
      key:'vuex-data',
      paths:['user','task']
    },
    {
      key:'vuex-plan',
      paths:['plan']
    }
    )
  ]
})
