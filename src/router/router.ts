import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Main from "../pages/Main.vue"
import Login from "../pages/Login.vue"



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/Main',
        name: 'Main',
        component: Main
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router