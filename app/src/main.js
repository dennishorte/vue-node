import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import UtilPlugin from './lib/util.js'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(UtilPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
