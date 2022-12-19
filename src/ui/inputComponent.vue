<template lang="">
  <div class="input__box">
    <span class="input__name">{{ inputLabel }} <b v-if="required">*</b></span>
    <input
      :value="meaning"
      @input="$emit('update:meaning', $event.target.value)"
      :type="inputType"
      class="input"
      :class="{input__error: inputError}"
      :name="inputName"
      :placeholder="inputContent"
      :autocomplete="inputAutocomplete"
      :disabled="disabled"
    />
    <span class="input__error-text" v-if="inputError">{{ inputError }}</span>
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
    },
    inputError: {
      type: String,
      required: false,
    },
    inputAutocomplete: {
      type: String,
      required: false,
      default: "off",
    },
    meaning: {
      type: [ String, Number ],
      default: "",
    },
    required: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      selection: false,
    };
  }
};
</script>
<style lang="sass">
.input
    margin-top: 10px
    width: 100%
    padding: 14px
    border: none
    border-radius: 3px
    background-color: var(--gray-light)
    color: var(--gray-dark)
    font-family: 'Roboto'
    font-weight: 400
    font-size: 18px
    &::placeholder
        color: var(--gray)
    &__name
        color: var(--brown)
        font-family: 'Roboto'
        font-weight: 300
        font-size: 18px
        b
          color: var(--red)
    &__error
        border: 1px solid var(--red)
        &-text
            display: block
            color: var(--red)
            margin-top: 5px
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
    &__box
      position: relative
      z-index: 1
</style>
