import { createApp } from 'vue'
import App from './App.vue'

import VueDeferred from '../src/index'

const app = createApp(App)
app.use(VueDeferred, {
  logs: true,
})
app.mount('#app')
