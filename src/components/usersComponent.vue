<template>
    <div class="users">
        <form method="post" @submit.prevent="validate" class="create-user">
            <h3 class="create-user__title">Создание нового пользователя</h3>
            <ul class="create-user__list">
                <li class="create-user__item">
                    <span class="create-user__text">Email</span>
                    <input class="create-user__field" :class="{error: errors.email}" @input="errors.email =''" v-model="createUser.email" type="email" placeholder="testmail@mail.ru">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Логин</span>
                    <input class="create-user__field" :class="{error: errors.login}" @input="errors.login =''" v-model="createUser.login" type="text" placeholder="nickname">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Пароль</span>
                    <span class="create-user__text_gray">генерируется автоматически</span>
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Роль</span>
                    <div class="create-user__role">
                        <checkbox-component value="USER" v-model="user" checkText="пользователь" />
                        <checkbox-component v-for="item in roles"  :value="item.value" v-model="role" :checkText="item.label" />
                    </div>
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">ФИО</span>
                    <input class="create-user__field" :class="{error: errors.fullName}" @input="errors.fullName =''" v-model="createUser.fullName" type="text" placeholder="Иванов Иван Иванович">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Номер телефона</span>
                    <input class="create-user__field" :class="{error: errors.phone}" @input="errors.phone =''" v-model="createUser.phone" type="tel" placeholder="+7 (999) 999-99-99">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Регион</span>
                    <div class="create-user__role create-user__role_reg">
                        <label v-for="item in region">
                            <input type="radio" v-model="createUser.region" :value="item.value" >
                            {{item.label}}
                        </label>
                    </div>
                </li>
            </ul>
            <button-component class="create-user__button" buttonText="создать пользователя"/>
        </form>
        <users-list-component/>
    </div>
</template>
<script lang="ts">
import buttonComponent from '../ui/buttonComponent.vue';
import checkboxComponent from '../ui/checkboxComponent.vue';
import usersListComponent from '../ui/usersListComponent.vue';
import { POSITION, useToast } from "vue-toastification";
import axios from '../api'
import {createUserShema} from '../shemas/userShema';
export default {
    components: {
    buttonComponent,
    checkboxComponent,
    usersListComponent,
},
    data() {
        return {
            createUser: {
                email: '',
                login: '',
                fullName: '',
                phone: '',
                region: '',
            },
            errors: {
                email: '',
                login: '',
                fullName: '',
                phone: '',
                region: '',
            },
            roles: [
                {
                    value: "MANAGER",
                    label: "Менеджер"
                },
                {
                    value: "ADMIN",
                    label: "Администратор"
                },
            ],
            role: [] as string[],
            region: [
                {
                    value: "VN",
                    label: "В. Новгород"
                },
                {
                    value: "PS",
                    label: "Псков"
                },
                {
                    value: "TV",
                    label: "Тверь"
                },
                {
                    value: "VG",
                    label: "Вологда"
                },
                {
                    value: "HP",
                    label: "Череповец"
                },
                {
                    value: "SPB",
                    label: "СПб"
                },
            ],
            user: true,
            toast: useToast(),

        }
    },
    methods: {
      validate() {
        createUserShema
        .validate(this.createUser, { abortEarly: false })
          .then(() => {
            this.errors = {
                email: '',
                login: '',
                fullName: '',
                phone: '',
                region: '',
            }
            // this.createUser.roles = this.role.join(' ')
            axios.users.createNewUser({...this.createUser, roles: this.role.join(',')})
            .then((res: any) => {
                this.toast.success('Пользователь создан', {
                position: POSITION.BOTTOM_RIGHT,
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
              })
            }
            )
            .catch( (res: any) => {
              this.toast.error(`${res.response.data.message}`, {
                position: POSITION.BOTTOM_RIGHT,
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
            if (this.errors.region != "") {
                this.toast.error(this.errors.region, {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                })
            }
          })
      }
    },
    watch: {
        'createUser.region'() {
            if(this.createUser.region != "") {
                this.errors.region = ''
            }
        }
    }
}
</script>
<style lang="sass">
    .create-user
        max-width: 906px
        width: 100%
        display: block
        &__title
            display: block
            width: 100%
            padding: 22px 30px
            background: var(--brown)
            font-family: 'Roboto'
            font-weight: 500
            font-size: 22px
            color: var(--white)
            border-radius: 5px 5px 0 0
        &__list
            background-color: var(--gray-light)
            padding: 0 30px
            width: 100%
            border-radius: 0 0 5px 5px
        &__item
            display: flex
            gap: 230px
            align-items: center
            height: 80px
            &:not(:last-child)
                border-bottom: 1px solid var(--gray-prelight)
            @media (max-width: 980px)
                flex-direction: column
                align-items: stretch
                gap: 30px
                padding: 10px
                height: auto
        &__text
            font-family: 'Roboto'
            font-weight: 600
            font-size: 18px
            color: var(--brown)
            width: 63px
            &_gray
                width: auto
                font-weight: 400
                color: var(--gray)
        &__field
            display: block
            border: 1px solid var(--brown)
            background: none
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            color: var(--brown)
            padding: 14px
            max-width: 387px
            width: 100%
            border-radius: 3px
            &:placeholder
                color: var(--gray)
            &:focus
                border-color: var(--gold)
            &.error
                border: 1px solid var(--red)
        &__role
            display: flex
            align-items: center
            flex-wrap: wrap
            gap: 30px
            &_reg
                max-width: 300px
                width: 100%
                padding: 20px 0
                gap: 15px 30px
        &__button
            margin: 0 auto
            margin-top: 20px
            background: var(--gold)
            padding: 11px 53px
            color: var(--white)
            font-size: 14px
            text-transform: uppercase
</style>