<template>
    <button class="button">
        {{buttonText}}
    </button>
</template>
<script lang="ts">
export default {
    props: {
        buttonText: {
            type: String,
            required: true,
            default: false,
        }
    },
    data() {
        return {
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
        border: none
        border-radius: 3px
        background: none
</style>