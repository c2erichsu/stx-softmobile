import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)
app.use(VueLazyLoad, {})
app.use(router)
app.mount('#app')
