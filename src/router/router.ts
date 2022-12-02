import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Main from "../pages/Page.vue"
import Authorization from "../pages/Authorization.vue"
import login from "../components/loginComponent.vue"




const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/Main',
        component: Main
    },
    {
        path: '/auth',
        component: Authorization,
        children: [
            {
              path: '/auth',
              component: login
            },
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})


export default router