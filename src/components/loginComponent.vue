<template >
    <div class="login__container">
        <img src="@/assets/img/svg/logo.svg" alt="Март" class="login__logo">
        <h2 class="login__title">Вход в приложение</h2>
        <form @submit.prevent="submit" action="" method="post" class="login__form">
          <input-component v-model:meaning="values.login" @input="errors.login= ''" inputType="text" inputName="login" inputContent="admin" inputLabel="Логин" :inputError="errors.login" />
          <input-component v-model:meaning="values.password" @input="errors.password= ''"  inputType="password" inputName="password" inputAutocomplete="on" inputContent="********" inputLabel="Пароль" :inputError="errors.password" />
          <label class="login__save-box">
            <input v-model="cheked" type="checkbox" class="login__save">
            <span class="login__save-text">Запомнить меня</span>
          </label>
          <div class="login__button-box">
            <button-component buttonText="Начать работу" class="login__button" />
            <a href="" class="login__link">Забыли пароль?</a>
          </div>
        </form>
    </div>
</template>
<script setup lang="ts">

import inputComponent from '../ui/inputComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import * as yup from "yup"
import { POSITION, useToast } from "vue-toastification";
import toast from "../hooks/errorToast"
import axios from '../api'
import { ref } from "vue"
import router from '../router/router';

// const toast = useToast()
const values = ref({
  login: "",
  password: "",
})
const errors = ref({
  login: "",
  password: "",
})
const loginShema = yup.object({
  login: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
})
let cheked = ref(false)

const login = async () => {
    try {
      const res = await axios.auth.login(values.value)
      if(cheked.value == true) {
        document.cookie = `access_token=${res.data.accessToken}; max-age=3600`
      } else {
        document.cookie = `access_token=${res.data.accessToken}; max-age=3600`
      }
      localStorage.setItem("roles", res.data.user.roles)
      router.push({name: 'main'})
      toast('success', "Вы учспешно авторизовались")
    }
    catch (err: any) {
      toast('error', err.response.data.message)
    }
}

async function submit() {
        try {
          await loginShema.validate(values.value, { abortEarly: false })
          errors.value = {
              login: "",
              password: ""
          }
          return await login()
        }
        catch(err: any) {
          // @ts-ignore
          err.inner.forEach((error) => {
          // @ts-ignore
          errors.value[error.path] = error.message;
          });
        }
  }
</script>
<style lang="sass">
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
        display: none
        &:checked ~ .login__save-text::before
          background: url(../assets/img/svg/icon/cheked.svg) no-repeat center center
          border-color: var(--gold)
        &-box
            display: flex
            align-items: center
        &-text
            display: block
            color: var(--brown)
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            display: flex
            align-items: center
            &::before
              display: block
              content: ''
              width: 18px
              height: 18px
              border: 2px solid var(--brown)
              border-radius: 3px
              margin-right: 10px
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