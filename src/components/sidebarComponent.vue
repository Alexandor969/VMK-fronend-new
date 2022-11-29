<template>
    <aside class="sidebar">
        <nav class="sidebar__list">
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="home"/>
                Главная страница
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="profile"/>
                Мой профиль
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="paper"/>
                Список заказов
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="users"/>
                Пользователи
            </a>
            <a href="#" class="sidebar__item sidebar__item_mt">
                <icon-component class="sidebar__icon" name="settings"/>
                Настройки
            </a>
            <a href="#" class="sidebar__item">
                <icon-component class="sidebar__icon" name="basket"/>
                Корзина
            </a>
            <a href="https://mart53.ru/" class="sidebar__item sidebar__item_link">
                <icon-component class="sidebar__icon" name="browser"/>
                Перейти на сайт
            </a>
        </nav>
    </aside>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
export default {
    components: {
        iconComponent
    }
}
</script>
<style lang="sass">
    .sidebar
        width: 300px
        height: 100%
        background-color: var(--gray-light)
        &__list
            display: flex
            flex-direction: column
            height: 100%
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
            &_mt
                margin-top: auto
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
        </style>