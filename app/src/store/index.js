import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: null,
  },
  getters: {
    isLoggedIn(state) {
      return state.authToken !== null
    },
  },
  mutations: {
    login(state, token) {
      state.authToken = token
    },
    logout(state) {
      state.authToken = null
    },
  },
})
