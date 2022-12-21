import axios from "axios";
import router from "../router/router";
import { POSITION, useToast } from "vue-toastification";
function getCookie(name: any) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

const instance: any = axios.create({
    baseURL: 'http://localhost:3001/api',
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
    if(getCookie('access_token')) {
        config.headers.authorization = `Bearer ${getCookie('access_token')}`
    }
    return config
}, (error: any) => {
    if(error.response.data.errorType == 'Expired') {
        axios.put('http://localhost:3001/api/refresh', {}, {
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    if(error.response.status === 401) {
        router.push({name: 'login'})
    }
    throw error
})
export default instance