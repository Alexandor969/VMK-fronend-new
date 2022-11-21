<template lang="">
    <div class="input__box">
        <span class="input__name">{{inputLabel}}</span>
        <input v-bind:type="inputType" class="input" v-bind:name="inputName" v-bind:placeholder="inputContent"/>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        inputType: {
            type: String,
            required: true,
            default: false,
        },
        inputName: {
            type: String,
            required: true,
            default: false,
        },
        inputContent: {
            type: String,
            required: true,
            default: false,
        },
        inputLabel: {
            type: String,
            required: true,
            default: false,
        },
    },
    data() {
        return { }
    }
}
</script>
<style lang="sass">
    .input
        width: 100%
        padding: 14px
        border: none
        border-radius: 3px
        background-color: var(--gray-light)
        color: #000
        font-family: 'Roboto'
        font-weight: 400
        font-size: 18px
        &:placeholder
            color: var(--gray)
        &__box
        &__name
            margin-top: 10px
            color: var(--brown)
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
</style>