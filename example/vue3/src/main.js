import { createApp } from 'vue'
import App from './App.vue'

import directive from '../../../index'

const app = createApp(App)

app.use(directive, {
  delay: 1000,
  zIndex: 100,
  color: '#f00',
  background: '#000'
})

app.mount('#app')
