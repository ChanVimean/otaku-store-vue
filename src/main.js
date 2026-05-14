import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './routes'
import '@/assets/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
