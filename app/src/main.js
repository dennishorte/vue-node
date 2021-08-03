import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import UtilPlugin from './lib/util.js'
import router from './router'
import store from './store'


Vue.config.devtools = true
Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(UtilPlugin)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
