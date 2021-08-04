import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

import App from '@/App.vue'
import UtilPlugin from '@/lib/util.js'
import router from '@/router'
import store from '@/store'
import authUtil from '@/modules/auth/util'


Vue.config.devtools = true
Vue.config.productionTip = false


Object.defineProperty(Vue.prototype, 'axios', { value: axios })
authUtil.initialize()  // Must be called after Axios is assigned to $http


Vue.use(BootstrapVue)
Vue.use(UtilPlugin)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
