<template>
    <div class="service__item">
        <button class="service__delete">
            Удалить услугу
            <icon-component name="delete" width="20" height="20" class="service__delete-icon"/>
        </button>
        <span class="service__index">2</span>
        <input-component  inputType="text" inputName="service" inputContent="Ограда" inputLabel="Наименование услуги" class="service__checklist"/>
        <div class="service__parametrs">
            <input-component  inputType="number" inputName="size" inputContent="100" inputLabel="Размер"/>
            <input-component  inputType="number" inputName="units" inputContent="п/м" inputLabel="Ед. изм."/>
            <input-component  inputType="number" inputName="price" inputContent="1600" inputLabel="Цена за ед., руб."/>
            <input-component  inputType="number" inputName="amount" inputContent="1600" inputLabel="Сумма, руб."/>
        </div>
    </div>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
import inputComponent from './inputComponent.vue';

export default {
 components: {
    inputComponent,
    iconComponent
 }
}
</script>
<style lang="sass">
    .service
        &__item
            width: 100%
            padding: 20px
            border: 2px solid var(--gold)
        &__delete
            padding: 5px 10px
            width: 100%
            border: 1px solid var(--gray)
            border-radius: 3px
            background: none
            display: flex
            justify-content: center
            align-items: center
            font-family: 'Roboto'
            font-weight: 500
            font-size: 14px
            color: var(--gray)
            &-icon
                display: block
                margin-left: 10px
        &__index
            display: block
            width: 100%
            margin-top: 10px
            padding: 5px
            text-align: center
            background-color: var(--brown)
            color: var(--white)
            font-family: 'Roboto'
            font-weight: 600
            font-size: 18px
            border-radius: 3px
        &__checklist
            margin-top: 30px
        &__parametrs
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(2, calc( 50% - 15px ))
            gap: 30px
</style>