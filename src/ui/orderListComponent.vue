<template>
    <div class="order-list" :class="{mt: margin}">
        <div class="order-list__title-box">
            <h2 class="order-list__title">Список заказов</h2>
            <a href="#" class="order-list__link" v-if="link">смотреть все</a>
            <div class="order-list__sort-box" v-if="sorting">
                <div class="order-list__select-box">
                    <icon-component class="order-list__icon" name="select" width="20" height="20"/>
                    <v-select v-model="selected" :options="sort" label="title" :searchable="false"/>
                </div>
                <div class="order-list__sort">
                    <icon-component class="order-list__icon" name="sort" width="20" height="20"/>
                    <button class="order-list__sort-button">по возрастанию</button>
                </div>
            </div>
        </div>
        <ul class="order-list__list">
            <li class="order-list__item">
                <div class="order-list__content">
                    <span class="order-list__text">№1</span>
                    <span class="order-list__text">Иванов Иван Иванович</span>
                    <span class="order-list__text order-list__text_gray">Благоустройство могилы</span>
                    <span class="order-list__text">#12235673</span>
                    <span class="order-list__text">В работе</span>
                </div>
                <div class="order-list__action-box">
                    <button class="order-list__action">
                        <icon-component class="order-list__icon" name="action" width="32" height="32"/>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
export default {
    components: {
        iconComponent
    },
    props: {
        margin: {
            type: Boolean
        },
        link: {
            type: Boolean
        },
        sorting: {
            type: Boolean
        }
    },
    data() {
        return {
            sort: [
                {title: "по ФИО"},
                {title: "по логину"},
                {title: "по Email"},
                {title: "по дате создания"},
            ],
            selected: "Сортировка"
        }
    }
}
</script>
<style lang="sass">
    .mt
        margin-top: 80px
    .order-list
        max-width: 1010px
        width: 100%
        &__title
            display: block
            font-family: 'Roboto'
            font-weight: 500
            font-size: 32px
            color: var(--brown)
            &-box
                width: 100%
                display: flex
                align-items: center
                gap: 30px
        &__link
            display: block
            font-family: 'Roboto'
            font-weight: 400
            font-size: 20px
            color: var(--gold)
            text-decoration: underline
        &__sort
            display: flex
            align-items: center
            gap: 10px
            &-box
                display: flex
                align-items: center
                gap: 40px
            &-button
                display: block
                background: none
                border: none
                font-family: 'Roboto'
                font-weight: 400
                font-size: 16px
                color: var(--brown)
        &__icon
            display: block
            color: var(--brown)
        &__select
            &-box
                display: flex
                align-items: center
                gap: 10px
        .vs__dropdown-toggle
            width: 200px
            height: 30px
            border: none
        .vs__search
            display: none
        .vs__actions
            flex: none
        .vs__clear
            display: none
        &__list
            display: block
            margin-top: 30px
            width: 100%
        &__item
            width: 100%
            display: flex
            align-items: center
            padding: 24px 30px
            border-bottom: 1px solid var(--gray-light)
        &__content
            display: flex
            align-items: center
            gap: 40px
        &__text
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            color: var(--brown)
            &_gray
                color: var(--gray)
        &__action
            border: none
            background: none
            &-box
                margin-left: auto
</style>