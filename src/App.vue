<template>
  <div class="app">
    <div class="login__container">
      <img src="./assets/img/svg/logo.svg" alt="Март" class="login__logo">
      <h2 class="login__title">Вход в приложение</h2>
      <form action="" class="login__form">
        <input-component v-model:meaning="login" inputType="text" inputName="login" inputContent="admin" inputLabel="Логин" :inputErrorText="errorLogin" />
        <input-component v-model:meaning="password" inputType="password" inputName="password" inputContent="********" inputLabel="Пароль" :inputErrorText="errorPassword" />
        <label class="login__save-box">
          <input type="checkbox" class="login__save">
          <span class="login__save-text">Запомнить меня</span>
        </label>
        <div class="login__button-box">
          <button-component buttonText="Начать работу" class="login__button"/>
          <a href="" class="login__link">Забыли пароль?</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import inputComponent from './components/inputComponent.vue';
import buttonComponent from './components/buttonComponent.vue';
import * as yup from "yup"
import { useToast } from "vue-toastification";
export default {
  components: {
    inputComponent,
    buttonComponent,
  },
  data() {
    return {
      toast: useToast(),
      login: "",
      password: "",
      errorLogin:"",
      errorPassword:"",
      loginShema: yup.object({
        login: yup.string().required('Введите логин'),
        password: yup.string().required('Введите пароль'),
      })
    }
  },
  methods: {
  }
}
</script>
<style lang="sass">
  .app
    padding: 100px 0
  .login
    &__container
      max-width: 426px
      width: 100%
      margin: 0 auto
      padding: 0 20px
    &__logo
      width: 230px
      margin: 0 auto
    &__title
      margin-top: 100px
      color: var(--brown)
      font-family: 'Roboto'
      font-weight: 500
      font-size: 24px
      text-align: center
    &__form
      margin-top: 30px
      width: 100%
      display: flex
      flex-direction: column
      gap: 30px
    &__save
      display: block
      &-box
        display: flex
        align-items: center
      &-text
        display: block
        margin-left: 10px
        color: var(--brown)
        font-family: 'Roboto'
        font-weight: 400
        font-size: 18px
    &__button
      width: 100%
      text-align: center
      padding: 14px 20px
      background-color: var(--gold)
      color: var(--white)
      text-transform: uppercase
    &__link
      display: block
      margin-top: 15px
      width: 100%
      text-align: center
      font-family: 'Roboto'
      font-weight: 400
      font-size: 18px
      padding: 14px 20px
      border: 1px solid var(--gray)
      border-radius: 3px
      color: var(--gray)
</style>
