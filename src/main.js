import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.apiUrl = 'http://127.0.0.1:8000'

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
