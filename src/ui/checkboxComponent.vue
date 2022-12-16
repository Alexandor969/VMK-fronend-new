<template>
    <label>
        <input type="checkbox" class="checkbox" :value="value" v-model="model" >
        <span class="checkbox__text">{{checkText}}</span>
    </label>
</template>
<script lang="ts">
export default {
    props: {
        checkText: {
            type: String
        },
        modelValue: {
            type: [Array, Boolean]
         },
        value: {
            type: [Boolean, Object, String]
         },
    },
    computed: {
        model:{
         get() {
            return this.modelValue;
          },
          set(value: any) {
            this.$emit("update:modelValue", value);
          }
        }
    }
}
</script>
<style lang="sass">
    .checkbox
        display: none
        &:checked ~ .checkbox__text:before
            background: url(../assets/img/svg/icon/chekedGold.svg) no-repeat center center
        &__text
            display: flex
            align-items: center
            font-family: 'Roboto'
            font-weight: 400
            font-size: 14px
            &:before
                display: block
                content: ''
                width: 15px
                height: 15px
                border: 2px solid var(--gold)
                margin-right: 10px
</style>