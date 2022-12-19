import {createUserType} from './../shemas/userShema';

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
            return instance.post('createUser', payload);
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