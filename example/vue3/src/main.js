import { createApp } from 'vue'
import App from './App.vue'

import directive from '../../../index'

const app = createApp(App)

app.use(directive, {
  delay: 300,
  zIndex: 100
})

app.mount('#app')
