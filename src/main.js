import Vue from 'vue'
import App from './App'

import Axios from 'axios'
Vue.prototype.$http=Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
