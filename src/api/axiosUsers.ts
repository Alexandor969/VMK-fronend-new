import {createUserType} from './../shemas/userShema';
function getCookie(name: any) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


export default function(instance: any) {
    return {
        // //Информация о пользователе
        // getUserInfo(payload) {
        //     return instance.get('userInfo', payload);
        // },
        // updateUserInfo(payload) {
        //     return instance.post('updateUserInfo', payload);
        // },
        createNewUser(payload: createUserType) {
            return instance.post('createUser', payload, {
                headers: {
                    'authorization': `Bearer ${getCookie('access_token')}`
                }
            });
        },
        // getUsersList(payload) {
        //     return instance.get('users', payload);
        // },
        // deleteUesrList(payload) {
        //     return instance.post('deleteUser', payload);
        // }
    }
}

export {
}