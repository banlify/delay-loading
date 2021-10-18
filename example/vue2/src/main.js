import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { DelayLoading } from '../../../dist'

Vue.use(DelayLoading, {
  delay: 1000,
  color: '#fff',
  background: '#000'
})

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
