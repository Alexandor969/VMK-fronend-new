import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import page from "../pages/Page.vue"
import Authorization from "../pages/Authorization.vue"
import login from "../components/loginComponent.vue"
import createOrder from "../components/createOrderComponent.vue"
import main from "../components/mainComponent.vue"
import orders from "../components/ordersComponent.vue"
import users from "../components/usersComponent.vue"
import settings from "../components/settingsComponent.vue"
import profile from "../components/profileComponent.vue"
function getCookie(name: any) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/main',
        component: page,
        children: [
            {
                path: '/',
                alias: '/main',
                name: 'main',
                component: main,
            },
            {
                path: '/createOrder',
                name: 'createOrder',
                component: createOrder,
            },
            {
                path: '/orders',
                name: 'orders',
                component: orders,
            },
            {
                path: '/users',
                name: 'users',
                component: users,
            },
            {
                path: '/settings',
                name: 'settings',
                component: settings,
            },
            {
                path: '/profile',
                name: 'profile',
                component: profile,
            },
        ]
    },
    {
        path: '/auth',
        component: Authorization,
        children: [
            {
                path: '/auth',
                name: 'login',
                component: login,
            },
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    const accessToken = getCookie('access_token')

    if(to.name !== 'login') {
        if(!accessToken) {
            return next({
                name: 'login'
            })
        }
    }
    if(to.name === 'login' && accessToken) {
        return next({
            name: 'main'
        })
    }

    next();
})

export default router