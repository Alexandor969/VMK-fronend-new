import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'

import Toast, { PluginOptions } from "vue-toastification";
import router from './router/router';

const options: PluginOptions = {};

createApp(App)
            .use(Toast, options)
            .use(router)
            .mount('#app')

