<template>
    <div class="order-list" :class="{mt: margin}">
        <div class="order-list__title-box">
            <h2 class="order-list__title">Список заказов</h2>
            <router-link to="/orders" class="order-list__link" v-if="link">смотреть все</router-link>
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
            <li class="order-list__item" v-for="(item, index) in filteredOrders" :key="index">
                <div class="order-list__content">
                    <span class="order-list__text order-list__index">№{{ index + 1 }}</span>
                    <span class="order-list__text order-list__name">{{ item.customerName }}</span>
                    <span class="order-list__text order-list__text_gray order-list__type">Благоустройство могилы</span>
                    <span class="order-list__text order-list__id">{{ item.orderID }}</span>
                    <span class="order-list__text order-list__status">В работе</span>
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
import axios from '../api';
import { graveOrder } from '../types/types';
import iconComponent from './iconComponent.vue';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { boolean } from 'yup';
dayjs.extend(isBetween)
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
        },
        date: {
            type: Array
        },
        filtered: {
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
            orders: [] as unknown as graveOrder,
            filteredOrders: [] as unknown as graveOrder,
            selected: "Сортировка",
            role: localStorage.getItem("roles")
        }
    },
    watch: {
        date: {
            handler(newValue, oldValue) {
                if(this.filtered == true ) {
                    //@ts-ignore
                    this.filteredOrders = this.orders.filter( item => dayjs(item.createdAt).isBetween(this.date[0], this.date[[this.date.length - 1]]))
                } else {
                    this.filteredOrders = this.orders
                }
            },
            deep: true
        }
    },
    mounted() {
        axios.order.getOrderList()
        .then((res: any) => {
            if(this.role == "USER") {
                this.orders = res.data.orders.userGraveOrder
            } else {
                this.orders = res.data.orders.graveOrder
            }
            this.filteredOrders = this.orders
        })
        .catch((err: any) => {

        })
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
                flex-wrap: wrap
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
            flex-wrap: wrap
            gap: 10px
            &-box
                display: flex
                align-items: center
                gap: 40px
                @media (max-width: 500px)
                    flex-wrap: wrap
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
            &_gray
                color: var(--gray)
        &__action
            border: none
            background: none
            &-box
                margin-left: auto
        &__name
            width: 280px
        &__index
            width: 40px
        &__type
            width: 217px
        &__id
            width: 50px
        &__status
            width: 74px
</style>