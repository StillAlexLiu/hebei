import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    p1: null,
    p2: {},
    p3: {},
    p4: {},
    p5: {},
    p6: {},
    p7: {},
    p8: {},
    p9: {},
    p10: {},
    globalMapSelect: {}
  },
  mutations: {
    setPageData (state, params) {
      // console.log(state, params)
      state[params.key] = params.data
    }
  },
  actions: {
    setPageData (context, params) {
      // console.log(context, params)
      context.commit('setPageData', params)
    }
  },
  getters: {}
})

export default store
