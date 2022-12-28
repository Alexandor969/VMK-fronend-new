import axios from "axios";
import router from "../router/router";
import { POSITION, useToast } from "vue-toastification";
function getCookie(name: any) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

const instance: any = axios.create({
    baseURL: 'https://martzakaz.ru/api',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        accept: 'aplication/json',
    }
});

instance.interceptors.request.use( (config: any) => {
    if(getCookie('access_token')) {
        config.headers.authorization = `Bearer ${getCookie('access_token')}`
    }
    return config
}, (error: any) => {})

instance.interceptors.response.use( (config: any) => {
    return config
}, (error: any) => {
    let originalRequest = error.config
    if(error.response.data.errorType == 'Expired') {
        instance.post('https://martzakaz.ru/api/refresh', {}, {
        }).then((res: any) => {
            document.cookie = `access_token=${res.data.accessToken}; max-age=3600`
            localStorage.setItem("roles", res.data.user.roles)
            originalRequest = error.config.headers.authorization = `Bearer ${res.data.accessToken}`
        }).catch((err: any) => {
            document.cookie = "access_token=;max-age=-1";
            localStorage.removeItem("roles")
            router.push({name: 'login'})
        })
        return instance.request(originalRequest)

    }
    if(error.response.status === 401) {
        router.push({name: 'login'})
    }
    throw error
})
export default instance