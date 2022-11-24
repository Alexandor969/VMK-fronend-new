import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'

import Toast, { PluginOptions } from "vue-toastification";

const options: PluginOptions = {};

createApp(App)
            .use(Toast, options)
            .mount('#app')

