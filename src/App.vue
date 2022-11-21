<template>
  <div class="app">
    <div class="login__container">
      <img src="" alt="Март" class="login__logo">
      <h1 class="login__title"></h1>
      <form action="" class="login__form">
        <input-component inputType="text" inputName="login" inputContent="admin" inputLabel="Логин"/>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import inputComponent from './components/inputComponent.vue';
export default {
  components: {
    inputComponent
  }
}
</script>
<style lang="sass">
  .app
    padding: 100px 0
  .login
    &__container
    &__logo
    &__title
    &__form
</style>
