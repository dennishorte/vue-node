import Vue from 'vue'
import Vuex from 'vuex'

import authConfig from '@/modules/auth/store'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    auth: authConfig,
  },
})
