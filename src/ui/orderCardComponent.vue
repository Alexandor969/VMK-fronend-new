<template >
    <button class="order-card">
        <icon-component class="order-card__icon" :width="size" :height="size" :name="name"/>
        <span class="order-card__text">{{text}}</span>
    </button>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';


export default {
    components: {
        iconComponent
    },
    props: {
        size: {
            type: String,
        },
        name: {
            type: String,
        },
        text: {
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="sass">
    .order-card
        padding: 20px
        width: 100%
        background: var(--gold)
        border: none
        border-radius: 3px
        color: var(--gold-light)
        cursor: pointer
        display: flex
        align-items: center
        gap: 22px
        &__icon
            display: block
            flex: none
        &__text
            display: block
            font-family: 'Roboto'
            font-weight: 400
            font-size: 24px
            text-align: left
            @media (max-width: 585px)
                font-size: 18px
            @media (max-width: 400px)
                text-align: center

</style>