<template>
    <button class="button" :class="{buttonClass}">
        {{buttonText}}
    </button>
</template>
<script lang="ts">
export default {
    data() {
        return {
            buttonText: "" as any,
            buttonClass: "",
        }
    }
}
</script>
<style lang="sass">
    .button
        display: block
        font-family: 'Roboto'
        font-weight: 600
        font-size: 18px
        text-align: center
        text-transform: uppercase
        border-radius: 3px
        @media screen and (max-width: var(--sm))
        font-size: 14px
</style>