// import store from '@/store'
export default function(instance: any) {
    return {
        signIn(payload: {login: string, password: string}) {
            // store.dispatch('updateLoadApp', true);
            return instance.post('login', payload);
        },
        authologin() {
            return instance.post('authologin');
        },
        // userData() {
        //     return instance.get('user/data');
        // },
        login(payload: {login: string, password: string}) {
            return instance.post('login', payload);
        },
    }
}