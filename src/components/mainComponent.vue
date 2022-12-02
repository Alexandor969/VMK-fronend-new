<template>
    <div class="page-card">
        <div class="order-card__list">
            <order-card-component class="order-card_vertical" text="Создать заказ" size="70" name="paperAdd"/>
            <order-card-component class="order-card_vertical" text="Черновики" size="70" name="paperBig"/>
        </div>
    </div>

</template>
<script lang="ts">
import orderCardComponent from '../uiComponents/orderCardComponent.vue';
export default {
    components: {
        orderCardComponent
    }
}
</script>
<style lang="sass">
 .order-card
    &__list
        display: flex
        gap: 30px
    &_vertical
        display: flex
        flex-direction: column
        align-items: center
        gap: 22px
        max-width: 386px
</style>