<template>
    <div class="profile">
        <div class="profile__image-box">
            <img :src="image.avatar" alt="avatar" class="profile__image">
            <span class="profile__name" v-if="userInfo">{{userInfo.fullName}}</span>
            <span class="profile__role" v-if="role">{{role}}</span>
        </div>
        <ul class="profile__information" v-if="userInfo">
            <li class="profile__item">
                <span class="profile__text">Полное имя</span>
                <span class="profile__text profile__text_gray">{{userInfo.fullName}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__text">Email для связи</span>
                <span class="profile__text profile__text_gray">{{userInfo.contactEmail}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__text">Номер телефона</span>
                <span class="profile__text profile__text_gray">{{userInfo.phone}}</span>
            </li>
            <li class="profile__item">
                <span class="profile__text">Дата рождения</span>
                <span class="profile__text profile__text_gray">{{userInfo.dateBirth}}</span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import axios from '../api';
import { user } from '../types/types';
import iconComponent from '../ui/iconComponent.vue';
import avatar from '../assets/img/avatar.png'
export default {
    components: {
        iconComponent
    },
    data() {
        return {
            image: {
                avatar: avatar
            },
            userInfo: {} as user,
            role: ""
        }
    },
    mounted() {
        axios.users.getUserInfo({} as user)
            .then((res: any) => {
                this.userInfo = res.data.userInfo
            })
            .catch((err: any) => {

            })
        let roles = null
        roles = localStorage.getItem('roles')?.split(',')
        //@ts-ignore
        this.role = roles[roles.length - 1]
        switch(this.role) {
            case "USER":
                this.role = "Пользователь"
            break;
            case "MANAGER":
                this.role = "Менеджер"
            break;
            case "ADMIN":
                this.role = "Администратор"
            break;
        }
    }
}
</script>
<style lang="sass">
    .profile
        display: grid
        grid-template-columns: 386px 9fr
        gap: 19px
        &__image
            display: block
            width: 180px
            height: 180px
            background-color: var(--white)
            border-radius: 50%
            &-box
                padding: 20px 30px
                background-color: var(--gray-light)
                width: 100%
                display: flex
                flex-direction: column
                align-items: center
        &__information
            padding: 0 30px
            background-color: var(--gray-light)
            width: 100%
        &__item
            height: 80px
            width: 100%
            display: flex
            align-items: center
            gap: 80px
            &:not(:last-child)
                border-bottom: 1px solid var(--gray-prelight)
        &__text
            display: block
            font-family: 'Roboto'
            font-weight: 600
            font-size: 18px
            color: var(--brown)
            max-width: 143px
            width: 100%
            &_gray
                color: var(--gray)
                max-width: 420px
                width: 100%
        &__name
            display: block
            width: 100%
            font-family: 'Roboto'
            font-weight: 500
            font-size: 20px
            text-align: center
            padding-top: 20px
            color: var(--brown)
        &__role
            padding-top: 10px
            font-family: 'Roboto'
            font-weight: 400
            font-size: 16px
            text-align: center
            color: var(--gray)
</style>