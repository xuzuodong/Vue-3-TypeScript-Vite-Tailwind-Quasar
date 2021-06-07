import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { Quasar } from 'quasar'
import qusarConfig from './qusar.config'
import '@/styles/index.scss'

createApp(App).use(router).use(Quasar, qusarConfig).mount('#app')
