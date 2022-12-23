<template>
    <div class="page-card">
        <div class="order-card__list">
            <order-card-component @click="isOrderTypeOpen" class="order-card_vertical" text="Создать заказ" size="70" name="paperAdd"/>
            <order-card-component class="order-card_vertical" text="Черновики" size="70" name="paperBig"/>
        </div>
        <order-list-component :margin= true :link= true />
        <popup-component :isOpen="isOrderType" @close="(isOrderType = false)">
            <template #title>
                    Выберите тип заказа
            </template>
            <template #content>
                <div class="order-card__list order-card__list_popup">
                    <router-link to="/createOrder">
                        <order-card-component class="order-card_horizontal" text="Благоустройство могилы" size="120" name="grave"/>
                    </router-link>
                    <order-card-component class="order-card_horizontal" text="Благоустройство могилы" size="120" name="grave"/>
                    <order-card-component class="order-card_horizontal" text="Благоустройство могилы" size="120" name="grave"/>
                </div>
            </template>
        </popup-component>
    </div>

</template>
<script lang="ts">
import orderCardComponent from '../ui/orderCardComponent.vue';
import popupComponent from '../ui/popupComponent.vue';
import orderListComponent from '../ui/orderListComponent.vue';
export default {
    components: {
        orderCardComponent,
        popupComponent,
        orderListComponent
    },
    data() {
        return {
            isOrderType: false
        }
    },
    methods: {
        isOrderTypeOpen() {
            this.isOrderType = true
        }
    }
}
</script>
<style lang="sass">
 .order-card
    &__list
        display: flex
        gap: 30px
        &_popup
            @media (max-width: 886px)
                flex-direction: column
    &_vertical
        flex-direction: column
        max-width: 386px
    &_horizontal
        max-width: 386px
        @media (max-width: 1310px)
            flex-direction: column
</style>