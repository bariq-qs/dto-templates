import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import definePlugin from './config/plugins/plugins'

import '@/assets/styles/css/tailwind.css'
import '@/assets/styles/scss/main.scss'
import 'primevue/resources/themes/saga-blue/theme.css'// theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons

const app = createApp(App)
app.config.performance = true
app.use(store)
app.use(router)
app.use(PrimeVue, { ripple: true })
definePlugin(app)
app.mount('#app')