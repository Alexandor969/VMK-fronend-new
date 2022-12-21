export default function(instance: any) {
    return {
        signIn(payload: {login: string, password: string}) {
            return instance.post('login', payload);
        },
        refresh() {
            return instance.post('refresh');
        },
        // userData() {
        //     return instance.get('user/data');
        // },
        login(payload: {login: string, password: string}) {
            return instance.post('login', payload);
        },
        logout() {
            return instance.post('logout');
        },
    }
}