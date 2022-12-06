<template lang="">
  <div class="input__box">
    <span class="input__name">{{ inputLabel }} <b v-if="required">*</b></span>
    <input
      :value="meaning"
      @focus="selection = true"
      @input="$emit('update:meaning', $event.target.value), selection = false"
      :type="inputType"
      class="input"
      :class="{input__error: inputError}"
      :name="inputName"
      :placeholder="inputContent"
      :autocomplete="inputAutocomplete"
    />
    <div class="input__select" :class="{open: selection}" v-if="selectList" >
      <div class="input__select-box" v-for="item in selectList" ::key="item">
        <button @click.prevent="meaning = item, selection = false" class="input__select-item">{{item}}</button>
      </div>
    </div>
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
      required: true,
      default: false,
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
      type: String,
      default: "",
    },
    required: {
      type: Boolean
    },
    selectList: {
      type: Array
    },
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
    &__select
      width: 100%
      background: var(--white)
      border: 1px solid #b0b0b0ad
      border-radius: 3px
      position: absolute
      z-index: 2
      opacity: 0
      pointer-events: none
      transition: .3s ease-in-out
      transition-property: opacity
      &.open
        opacity: 1
        pointer-events: auto
      &-item
        font-family: 'Roboto'
        font-weight: 400
        font-size: 16px
        display: block
        color: var(--brown)
        padding: 10px
        border: none
        background: none
        cursor: pointer
        &:not(:first-child)
            margin-top: 10px
</style>
