import axios from 'axios'

import { AUTH_LOCAL_TOKEN } from '../util'


export default {
  namespaced: true,

  state: () => ({
    status: '',
    token: localStorage.getItem('auth.token') || '',
    user: {},
  }),

  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },

  mutations: {
    auth_error(state) {
      state.status = 'error'
    },

    auth_request(state) {
      state.status = 'loading'
    },

    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
      localStorage.setItem(AUTH_LOCAL_TOKEN, token)
      axios.defaults.headers.common['Authorization'] = token
    },

    logout(state) {
      state.status = ''
      state.token = ''
      state.user = {}
      localStorage.removeItem(AUTH_LOCAL_TOKEN)
      delete axios.defaults.headers.common['Authorization']
    }
  },

  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: '/api/login',
          method: 'POST',
          data: user,
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('logout')
            commit('auth_error')
            reject(err)
          })
      })
    },

    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        resolve()
      })
    },
  },
}
