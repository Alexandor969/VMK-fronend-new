<template>
    <div class="users-list">
        <div class="users-list__title-box">
            <h2 class="users-list__title">Список пользователей</h2>
            <div class="users-list__sort-box">
                <div class="users-list__select-box">
                    <icon-component class="users-list__icon" name="select" width="20" height="20"/>
                    <v-select v-model="selected" :options="sort" label="title" :searchable="false"/>
                </div>
                <div class="users-list__sort">
                    <icon-component class="users-list__icon" name="sort" width="20" height="20"/>
                    <button class="users-list__sort-button">по возрастанию</button>
                </div>
            </div>
        </div>
        <ul class="users-list__list">
            <li class="users-list__item" v-for="(item, index) in users" :key="index">
                <div class="users-list__content">
                    <span class="users-list__text users-list__index">№{{ index + 1 }}</span>
                    <span class="users-list__text users-list__name" v-if="item.user_info">{{item.user_info.fullName}}</span>
                    <span class="users-list__text users-list__text_gold users-list__text_min">{{item.username}}</span>
                    <span class="users-list__text users-list__email">{{ item.email }}</span>
                    <span class="users-list__text users-list__text_min">Менеджер</span>
                </div>
                <div class="users-list__action-box">
                    <button class="users-list__action">
                        <icon-component class="users-list__icon" name="action" width="32" height="32"/>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
import axios from '../api'
import { users } from '../types/types';
export default {
    components: {
        iconComponent
    },
    data() {
        return {
            sort: [
                {title: "по ФИО"},
                {title: "по логину"},
                {title: "по Email"},
                {title: "по дате создания"},
            ],
            selected: "Сортировка",
            users: [] as unknown as users
        }
    },
    mounted() {
        axios.users.getUsersList([{}] as users)
        .then((res: any) => {
            this.users = res.data.users
            console.log(this.users.map(item => item.user_info.fullName))
        })
        .catch((err: any) => {

        })
    }
}
</script>
<style lang="sass">
    .users-list
        max-width: 1050px
        width: 100%
        margin-top: 60px
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
            max-width: 1010px
        &__item
            width: 100%
            display: flex
            align-items: center
            padding: 24px 30px
            border-bottom: 1px solid var(--gray-light)
            &:hover
                @media (min-width: 540px)
                    background-color: var(--gold-light)
        &__content
            display: flex
            align-items: center
            flex-wrap: wrap
            gap: 20px
        &__text
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            color: var(--brown)
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            &_gold
                color: var(--gold)
            &_min
                width: 121px
        &__action
            border: none
            background: none
            &-box
                margin-left: auto
                flex: none
        &__name
            width: 280px
        &__email
            width: 220px
        &__index
            width: 40px

</style>