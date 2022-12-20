import axios from "axios";
import router from "../router/router";
function getCookie(name: any) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

// import store from '@/store';

const instance: any = axios.create({
    baseURL: 'http://localhost:3001/api',
    withCredentials: false,
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
    if(error.response.status === 401) {
        router.push({name: 'login'})
    }
    throw error
})

// instance.interceptors.response.use((response: any) => {
//     return response;
// }, (err: any) => {
//     // const {response: {status, data}} = err;
//     // console.log(status);
//     // console.log(data);
//     // store.state.auth.isRefreshing = true;
//     // console.log(store.state.auth.isRefreshing)
//     // if(status == 401 && data.notificationType == 'userNotFound'){
//     //     console.log('interceptors err => '+err);
//     // }
//     throw err;
// })

export default instance