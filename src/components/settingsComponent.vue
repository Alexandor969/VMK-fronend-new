<template>
    <div class="settings">
        <h3 class="settings__title">Безопасность</h3>
        <ul class="settings__list">
            <li class="settings__item">
                <div class="settings__text-box">
                    <span class="settings__text">Email</span>
                    <span class="settings__text_gray">testmail@mail.ru</span>
                </div>
            </li>
            <li class="settings__item">
                <div class="settings__text-box">
                    <span class="settings__text">Пароль</span>
                    <span class="settings__text_gray">********</span>
                </div>
                <button-component class="settings__password" buttonText="сменить"/>
            </li>
        </ul>
        <button-component buttonText="Выйти из профиля" name="logout" size="24" class="logout" @click="logout"/>
    </div>
</template>
<script lang="ts">
import buttonComponent from '../ui/buttonComponent.vue';
import axios from '../api';
export default {
    components: {
        buttonComponent
    },
    methods: {
        logout() {
            axios.auth.logout()
            .then((res: any) => {
                document.cookie = "access_token=;max-age=-1";
                localStorage.removeItem("roles")
                this.$router.push({name: 'login'})
                }
            )
        }
    }
}
</script>
<style lang="sass">
    .settings
        max-width: 906px
        width: 100%
        display: block
        &__title
            display: block
            width: 100%
            padding: 22px 30px
            background: var(--brown)
            font-family: 'Roboto'
            font-weight: 500
            font-size: 22px
            color: var(--white)
            border-radius: 5px 5px 0 0
        &__list
            background-color: var(--gray-light)
            padding: 0 30px
            width: 100%
            border-radius: 0 0 5px 5px
        &__item
            display: flex
            align-items: center
            height: 80px
            &:not(:last-child)
                border-bottom: 1px solid var(--gray-prelight)
            @media (max-width: 1030px)
                height: auto
                padding: 10px
            @media (max-width: 460px)
                flex-direction: column
                align-items: stretch
                gap: 30px
        &__text
            font-family: 'Roboto'
            font-weight: 600
            font-size: 18px
            color: var(--brown)
            width: 63px
            &_gray
                width: auto
                font-weight: 400
                color: var(--gray)
            &-box
                display: flex
                align-items: center
                gap: 230px
                @media (max-width: 1030px)
                    flex-direction: column
                    gap: 30px
                    align-items: stretch
        &__password
            background-color: var(--brown)
            font-size: 14px
            color: var(--white)
            padding: 11px 27px
            margin-left: auto
            @media (max-width: 460px)
                margin-left: 0
    .logout
        gap: 10px
        color: var(--gold)
        margin-top: 60px
        font-weight: 400
        display: flex
        align-items: center
        &:hover
            @media (min-width: 540px)
                text-decoration: underline
</style>