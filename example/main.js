import { createApp } from 'vue'
import './assets/style-example.scss'
import App from './App.vue'

import VueDeferred from '../src/index'

const app = createApp(App)
app.use(VueDeferred, {
  name: 'observerContent', // default: deferred
})
app.mount('#app')
