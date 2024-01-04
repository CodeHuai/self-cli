import {createApp} from 'vue/dist/vue.esm-bundler'

import App from './vue/app.vue'

import './js/element'

import './font/AlimamaAgileVF-Thin.ttf'
import './font/AlimamaAgileVF-Thin.woff2'
import './font/AlimamaAgileVF-Thin.woff'


const app = createApp(App)
app.mount('#app')

console.log(123123222)