import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs'
import './style.css'
import App from './App.vue'

createApp(App)
  .use(TroisJSVuePlugin)
  .mount('#app')
