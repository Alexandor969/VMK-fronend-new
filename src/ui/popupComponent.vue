<template>
    <div @click="close" class="popup__backdrop" :class="{open: isOpen}">
        <div class="popup" @click.stop>
            <button @click="close" class="popup__close">
                <icon-component name="close" width="32" height="32" class="popup__close-icon"/>
            </button>
            <h3 class="popup__title">
                <slot name="title" >
                </slot>
            </h3>
            <div class="popup__content">
                <slot name="content" :close="close" :confirm="confirm">
                </slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    emits: {
        close: null,
        confirm: null
    },
    components: {
        iconComponent
    },
    methods: {
        close() {
            this.$emit("close")
        },
        confirm() {
            this.$emit("confirm")
        }
    }
}
</script>
<style lang="sass">
    .popup
        padding: 40px
        background-color: var(--white)
        position: relative
        margin: auto
        cursor: default
        &__backdrop
            position: fixed
            top: 0
            right: 0
            bottom: 0
            left: 0
            z-index: 10
            background-color: rgba(105, 100, 94, 0.2)
            display: flex
            padding: 20px
            cursor: pointer
            opacity: 0
            pointer-events: none
            transition: .3s ease-in-out
            transition-property: opacity
            overflow: auto
            &.open
                opacity: 1
                pointer-events: auto
        &__title
            font-family: 'Roboto'
            font-weight: 500
            font-size: 24px
            color: var(--brown)
            max-width: 260px
            width: 100%
        &__content
            margin-top: 30px
        &__close
            position: absolute
            top: 10px
            right: 10px
            border: none
            background: none
            cursor: pointer
            &-icon
                display: block
                color: var(--brown)
</style>