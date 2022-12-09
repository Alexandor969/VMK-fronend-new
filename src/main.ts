import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'

import Toast, { PluginOptions } from "vue-toastification";
import Datepicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select'
import router from './router/router';

const options: PluginOptions = {};

createApp(App)
            .use(Toast, options)
            .component('Datepicker', Datepicker)
            .component("v-select", vSelect)
            .use(router)
            .mount('#app')

