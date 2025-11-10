import { createApp } from 'vue'
import App from './App.vue'
// Adjust path to your dist folder correctly
import llibreriaVue from '../../../dist/llibreriaVue.es.js' 

const app = createApp(App)
app.use(llibreriaVue)  // Important: register your library globally
app.mount('#app')
