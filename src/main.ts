import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'

import Toast, { PluginOptions } from "vue-toastification";
import Datepicker from '@vuepic/vue-datepicker';
import vSelect from 'vue-select'
import router from './router/router';
import FloatingVue from 'floating-vue'
import Vue3Signature from "vue3-signature"

const options: PluginOptions = {};

createApp(App)
            .use(Toast, options)
            .use(FloatingVue)
            .component('Vue3Signature', Vue3Signature)
            .component('Datepicker', Datepicker)
            .component("v-select", vSelect)
            .use(router)
            .mount('#app')

