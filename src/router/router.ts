import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import page from "../pages/Page.vue"
import Authorization from "../pages/Authorization.vue"
import login from "../components/loginComponent.vue"
import createOrder from "../components/createOrderComponent.vue"
import main from "../components/mainComponent.vue"
import orders from "../components/ordersComponent.vue"
import users from "../components/usersComponent.vue"
import settings from "../components/settingsComponent.vue"



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/main',
        component: page,
        children: [
            {
              path: '/',
              alias: '/main',
              component: main
            },
            {
              path: '/createOrder',
              component: createOrder
            },
            {
              path: '/orders',
              component: orders
            },
            {
              path: '/users',
              component: users
            },
            {
              path: '/settings',
              component: settings
            },
        ]
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