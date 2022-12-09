<template >
    <div page-card>
        <h2 class="create-order__title">Наряд-заказ на благоустройство могилы</h2>
        <span class="create-order__required">* — поля, обязательные для заполнения</span>
        <form action="" class="create-order__form">
            <div class="create-order__item information" >
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
                    <service-component v-for="item in counter" :key="item" :index=item @remove="removeOrderService"/>
                </div>
                <button-component button-text="+ Добавить услугу" class="create-order__button" @click.prevent="addOrderService"/>
            </div>
            <div class="create-order__item additional-service">
                <h3 class="create-order__title_min">Список оказываемых услуг</h3>
                <textarea class="additional-service__field" placeholder="Описание дополнительных услуг"></textarea>
            </div>
            <div class="create-order__item payment">
                <div class="col">
                    <div class="cost">
                        <h3 class="create-order__title_min">Расчёт стоимости</h3>
                        <div class="cost__list">
                            <div class="col">
                                <div class="payment__value-box">
                                    <span class="payment__label">Сумма заказа</span>
                                    <div class="payment__value">64 000 руб.</div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="payment__value-box">
                                    <span class="payment__label">Тип оплаты</span>
                                    <div class="radio__list">
                                        <label class="radio__item">
                                            <input type="radio">
                                            авансовый платёж
                                        </label>
                                        <label class="radio__item">
                                            <input type="radio">
                                            полный расчёт
                                        </label>
                                        <label class="radio__item">
                                            <input type="radio">
                                            без предоплаты
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="discount">
                        <div class="col">
                            <span class="payment__label">скидка</span>
                            <div class="payment__value-box payment__value_flex">
                                <input-component  inputType="number" inputName="discount" inputContent="15" />
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input type="radio">
                                        %
                                    </label>
                                    <label class="radio__item">
                                        <input type="radio">
                                        руб
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <span class="payment__label">размер аванса</span>
                            <div class="payment__value-box payment__value_flex">
                                <input-component  inputType="number" inputName="discount" inputContent="50" />
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input type="radio">
                                        %
                                    </label>
                                    <label class="radio__item">
                                        <input type="radio">
                                        руб
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="create-order__item pay">
                        <div class="col">
                            <div class="payment__value-box">
                                <span class="payment__label payment__label_big">К оплате</span>
                                <div class="payment__value payment__value_gold">34 000 руб.</div>
                            </div>
                            <div class="payment__value-box payment__value_mt">
                                <span class="payment__label">Способ оплаты</span>
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input type="radio">
                                        банковской картой
                                    </label>
                                    <label class="radio__item">
                                        <input type="radio">
                                        наличными
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="payment__value-box">
                                <span class="payment__label">остаток</span>
                                <div class="payment__value">~34 000 руб.</div>
                            </div>
                        </div>
                    </div>
                    <button-component class="create-order__submit" button-text="Подтвердить заказ"/>
                    <button-component class="create-order__remove" button-text="Вернуться к редактированию заказа"/>
                </div>
                <div class="col">
                    <h3 class="create-order__title_min">Сроки выполнения работ</h3>
                    <div class="create-order__date">
                        <div class="col">
                            <span class="payment__label">Начало работ</span>
                            <Datepicker class="create-order__date-item" auto-apply  v-model="date.beginning" :enable-time-picker="false" locale="ru">
                                <template #calendar-header="{ index, day }">
                                    <div class="date__day" :class="index === 5 || index === 6 ? 'gold-color' : ''">
                                      {{ day }}
                                    </div>
                                  </template>
                            </Datepicker>
                        </div>
                        <div class="col">
                            <span class="payment__label">Окончание работ</span>
                            <Datepicker class="create-order__date-item" auto-apply v-model="date.end" :enable-time-picker="false" locale="ru">
                                <template #calendar-header="{ index, day }">
                                    <div class="date__day" :class="index === 5 || index === 6 ? 'gold-color' : ''">
                                      {{ day }}
                                    </div>
                                  </template>
                            </Datepicker>
                        </div>
                    </div>
                    <div class="create-order__item create-order__comment">
                        <div class="create-order__item additional-service">
                            <h3 class="create-order__title_min">Комментарий к заказу</h3>
                            <textarea class="additional-service__field" placeholder="Текст комментария"></textarea>
                        </div>
                        <!-- <input type="file" class="create-order__button"> -->
                    </div>
                    <div class="create-order__item create-order__signature">
                        <h3 class="create-order__title_min">Подпись заказчика</h3>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import inputComponent from '../ui/inputComponent.vue';
import serviceComponent from '../ui/serviceComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import { useToast } from "vue-toastification";

export default {
    components: {
        inputComponent,
        serviceComponent,
        buttonComponent
    },
    data() {
        return {
            cemetryList: ["Ермолинское кладбище", "Западное кладбище", "Рождественское кладбище", "Петровское кладбище"],
            counter: 1,
            date: {
                beginning: new Date(),
                end: new Date(),
            },
            toast: useToast(),
        }
    },
    methods: {
        addOrderService() {
            this.counter +=1
        },
        removeOrderService() {
            if (this.counter == 1) {
                this.toast.error("Невоможно удалить единственную услугу", {
                    // @ts-ignore
                    position: "bottom-right",
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
              })
            } else {
                this.counter -=1
            }
        }
    },
}
</script>
<style lang="sass">
    .create-order
        &__title
            font-family: 'Roboto'
            font-weight: 500
            font-size: 32px
            color: var(--brown)
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
        &__button
            display: flex
            gap: 5px
            padding: 12px 28px
            border: 2px solid var(--gold)
            color: var(--gold)
            font-family: 'Roboto'
            font-weight: 500
            font-size: 14px
            margin-top: 30px
        &__submit
            background: var(--gold)
            padding: 14px 30px
            min-width: 386px
            margin-top: 60px
            font-family: 'Roboto'
            font-weight: 600
            font-size: 18px
            color: var(--white)
        &__remove
            margin-top: 60px
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
            color: var(--gray)
            text-decoration: underline
        &__date
            display: grid
            grid-template-columns: repeat(2, calc( 50% - 30px ))
            gap: 30px
            margin-top: 30px
            &-item
                margin-top: 14px
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
    .additional-service
        &__field
            width: 100%
            height: 150px
            margin-top: 20px
            padding: 14px
            display: block
            resize: none
            background: var(--gray-light)
            border: none
            border-radius: 3px
            color: var(--gray-dark)
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            &::placeholder
                color: var(--gray)
    .payment
        display: grid
        grid-template-columns: repeat(2, 594px)
        gap: 30px
        &__label
            display: block
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
            color: var(--brown)
            &_big
                font-family: 'Roboto'
                font-weight: 500
                font-size: 24px
                color: var(--brown)
        &__value
            margin-top: 15px
            font-family: 'Roboto'
            font-weight: 500
            font-size: 24px
            color: var(--brown)
            &_gold
                font-size: 30px
                color: var(--gold)
            &_flex
                display: flex
                gap: 16px
                align-items: start
            &_mt
                margin-top: 30px
    .cost
        &__list
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(2, 200px)
            gap: 30px
    .radio
        &__list
            margin-top: 14px
            flex: none
        &__item
            display: flex
            align-items: center
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            color: var(--gray-dark)
            input
                width: 20px
                height: 20px
                margin-right: 8px
            &:not(:first-child)
                margin-top: 14px
    .discount
        margin-top: 30px
        display: grid
        grid-template-columns: repeat(2, 178px)
        gap: 30px
    .pay
        margin-top: 30px
        display: grid
        grid-template-columns: repeat(2, 200px)
        gap: 30px
</style>