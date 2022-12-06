<template >
    <div page-card>
        <h2 class="create-order__title">Наряд-заказ на благоустройство могилы <span>№2131541</span></h2>
        <span class="create-order__required">* — поля, обязательные для заполнения</span>
        <form action="" class="create-order__form">
            <div class="create-order__item information">
                <h3 class="create-order__title_min">Контактная информация</h3>
                <div class="information__list">
                    <input-component  inputType="text" inputName="customer" inputContent="Иванов Иван Иванович" inputLabel="Ф.И.О. заказчика" :required=true />
                    <input-component  inputType="tel" inputName="phone" inputContent="+7 (999) 999-99-99" inputLabel="Номер телефона" :required=true />
                    <input-component  inputType="text" inputName="adress" inputContent="г. Великий Новгород, ул. Луговая, 7" inputLabel="Адрес" />
                    <input-component  inputType="email" inputName="email" inputContent="email@mail.ru" inputLabel="Email"/>
                    <input-component  inputType="text" inputName="deceased" inputContent="Петров Пётр Петрович" inputLabel="Ф.И.О. покойного" :required=true />
                    <input-component  inputType="text" inputName="cemetery" inputContent="Ермолинское кладбище" inputLabel="Место установки" :selectList="cemetryList" :required=true />
                    <div class="information__list_sub">
                        <input-component  inputType="number" inputName="location" inputContent="№ участка" inputLabel="Участок" :required=true />
                        <input-component  inputType="number" inputName="row" inputContent="№ ряда" inputLabel="Ряд" :required=true />
                        <input-component  inputType="number" inputName="place" inputContent="№ места" inputLabel="Место" :required=true />
                    </div>
                </div>
            </div>
            <div class="create-order__item service">
                <h3 class="create-order__title_min">Список оказываемых услуг</h3>
                <div class="service__list">
                    <service-component/>
                </div>
                <button class=""></button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import inputComponent from '../uiComponents/inputComponent.vue';
import serviceComponent from '../uiComponents/serviceComponent.vue';
export default {
    components: {
        inputComponent,
        serviceComponent
    },
    data() {
        return {
            cemetryList: ["Ермолинское кладбище", "Западное кладбище", "Рождественское кладбище", "Петровское кладбище"]
        }
    }
}
</script>
<style lang="sass">
    .create-order
        &__title
            font-family: 'Roboto'
            font-weight: 500
            font-size: 32px
            color: var(--brown)
            span
                color: var(--gold)
            &_min
                font-family: 'Roboto'
                font-weight: 500
                font-size: 24px
                color: var(--brown)
        &__required
            display: block
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
            color: var(--red)
            margin-top: 10px
        &__item
            margin-top: 60px
    .information
        &__list
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(3, 386px)
            gap: 30px
            &_sub
                display: grid
                grid-template-columns: repeat(3, 120px)
                gap: 13px
    .service
        &__list
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(3, 386px)
            gap: 30px
</style>