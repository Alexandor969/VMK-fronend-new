<template>
    <div users>
        <form method="post" class="create-user">
            <h3 class="create-user__title">Создание нового пользователя</h3>
            <ul class="create-user__list">
                <li class="create-user__item">
                    <span class="create-user__text">Email</span>
                    <input class="create-user__field" type="email" placeholder="testmail@mail.ru">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Логин</span>
                    <input class="create-user__field" type="text" placeholder="nickname">
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Пароль</span>
                    <span class="create-user__text_gray">генерируется автоматически</span>
                </li>
                <li class="create-user__item">
                    <span class="create-user__text">Роль</span>
                    <div class="create-user__role">
                        <checkbox-component checkText="Пользователь"/>
                        <checkbox-component checkText="Менеджер"/>
                        <checkbox-component checkText="Администратор"/>
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
export default {
    components: {
        buttonComponent,
        checkboxComponent,
        usersListComponent
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
        &__role
            display: flex
            align-items: center
            gap: 30px
        &__button
            margin: 0 auto
            margin-top: 20px
            background: var(--gold)
            padding: 11px 53px
            color: var(--white)
            font-size: 14px
            text-transform: uppercase
</style>