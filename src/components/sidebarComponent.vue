<template>
    <aside class="sidebar" :class="{open: menu}">
        <nav class="sidebar__list">
            <router-link to="/" class="sidebar__item">
                <icon-component class="sidebar__icon" name="home"/>
                <span>Главная страница</span>
            </router-link>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="profile"/>
                <span>Мой профиль</span>
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="paper"/>
                <span>Список заказов</span>
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="users"/>
                <span>Пользователи</span>
            </a>
            <a href="#" class="sidebar__item sidebar__item_mt">
                <icon-component class="sidebar__icon" name="settings"/>
                <span>Настройки</span>
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="basket"/>
                <span>Корзина</span>
            </a>
            <a href="https://mart53.ru/" class="sidebar__item sidebar__item_link">
                <icon-component class="sidebar__icon" name="browser"/>
                <span>Перейти на сайт</span>
            </a>
        </nav>
    </aside>
</template>
<script lang="ts">
import iconComponent from '../uiComponents/iconComponent.vue';
export default {
    components: {
        iconComponent
    },
    props: {
        menu: {
            type: Boolean,
            required: true,
        }
    }
}
</script>
<style lang="sass">
    .sidebar
        width: 300px
        flex: none
        height: 100%
        @media (max-width: 760px)
            position: relative
            width: 84px
            &.open
                .sidebar__list
                    width: 300px
                    @media (max-width: 360px)
                        width: 100%
                .sidebar__item span
                    opacity: 1
        @media (max-width: 560px)
            width: 0px
        @media (max-width: 360px)
            position: fixed
            width: 100%
        &__list
            display: flex
            flex-direction: column
            height: 100%
            background-color: var(--gray-light)
            overflow-x: hidden
            overflow-y: auto
            transition: .3s ease-in-out
            transition-property: width
            @media (max-width: 760px)
                width: 84px
                position: absolute
            @media (max-width: 560px)
                width: 0px
        &__item
            display: flex
            align-items: center
            padding: 28px 30px
            border-bottom: 1px solid var(--grey-prelight)
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            color: var(--brown)
            transition: .3s ease-in-out
            transition-property: background-color, color
            @media (max-width: 760px)
            padding: 28px 25px
            span
                display: block
                flex-shrink: 0
                margin-left: 10px
                transition: .3s ease-in-out
                transition-property: opacity
                @media (max-width: 760px)
                    opacity: 0
            &_mt
                margin-top: auto
                @media (max-width: 360px)
                    margin-top: 0
            &_link
                color: var(--gold)
                text-decoration: underline
            &:hover
                @media (min-width: 540px)
                    background-color: var(--gold-ligth)
                    color: var(--gold)
                    .sidebar__icon
                        color: var(--gold)
        &__icon
            color: var(--gold)
            margin-right: 16px
            transition: .3s ease-in-out
            transition-property: color
            flex: none
            @media (max-width: 760px)
                margin-right: 0
        </style>