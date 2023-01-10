import axios from "axios";
import router from "../router/router";
import toast from "../hooks/errorToast";
import getCookie from "../utils/UseCookie";

const url = {
    local: 'http://localhost:3001/api',
    server: 'https://martzakaz.ru/api'
}

const instance: any = axios.create({
    baseURL: url.local,
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
}, async (error: any) => {
    let originalRequest = error.config
    if(error.code == "ERR_NETWORK") {
        toast('error', "Отсутствие соединения")
        return
    }
    if(error.response?.data.errorType == 'Expired' && !originalRequest.retry) {
        try {
            originalRequest.retry = true
            const res = await instance.post(`${url.local}/refresh`, {}, {
            })
            document.cookie = `access_token=${res.data.accessToken}; max-age=3600`
            localStorage.setItem("roles", res.data.user.roles)
            return instance.request(originalRequest)
        } catch (error) {
            console.log(error)
            document.cookie = "access_token=;max-age=-1";
            localStorage.removeItem("roles")
            router.push({name: 'login'})
        }
    }
    if(error.response?.status === 401) {
        toast('error', "Вы не авторизованны")
        router.push({name: 'login'})
    }
    throw error
})
export default instance