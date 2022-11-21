<template>
    <button class="button">
        {{buttonText}}
    </button>
</template>
<script lang="ts">
export default {
    data() {
        return {
            buttonText: "",
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
        border-radius: 3px
        @media screen and (max-width: var(--sm))
        font-size: 14px
</style>