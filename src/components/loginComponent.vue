<template >
    <div class="login__container">
        <img :src="images.logo" alt="Март" class="login__logo">
        <h2 class="login__title">Вход в приложение</h2>
        <form @submit.prevent="validate" action="" method="post" class="login__form">
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
<script lang="ts">
import logo from "../assets/img/svg/logo.svg"

import inputComponent from '../uiComponents/inputComponent.vue';
import buttonComponent from '../uiComponents/buttonComponent.vue';
import * as yup from "yup"
import { useToast } from "vue-toastification";
import axios from '../api'
export default {
    components: {
      inputComponent,
      buttonComponent,
    },
    data() {
      return {
        images: {
          logo: logo
        },
        toast: useToast(),
        values: {
          login: "",
          password: "",
        },
        errors: {
          login: "",
          password: "",
        },
        loginShema: yup.object({
          login: yup.string().required('Введите логин'),
          password: yup.string().required('Введите пароль'),
        }),
        cheked: false
      }
    },
    methods: {
      validate() {
        this.loginShema
        .validate(this.values, { abortEarly: false })
          .then(() => {
            this.errors = {
              login: "",
              password: ""
            }
            axios.auth.login(this.values)
            .then((res: any) => {
              if(this.cheked == true) {
                document.cookie = `"access_token" = ${res.data.accessToken}; samesite=strict; secure=true; max-age=3600`
              } else {
                document.cookie = `"access_token" = ${res.data.accessToken}; samesite=strict; secure=true; max-age=3600`
              }
              localStorage.setItem("roles", res.data.user.roles)

            }
            )
            .catch( (res: any) => {
              this.toast.error(`${res.response.data.message}`, {
                // @ts-ignore
                position: "bottom-center",
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
              })
            }
            )
          })
          .catch((err: any) => {
            // @ts-ignore
            err.inner.forEach((error) => {
              // @ts-ignore
              this.errors[error.path] = error.message;
            });
          })
      }
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