<template >
    <div page-card>
        <h2 class="create-order__title">Наряд-заказ на благоустройство могилы</h2>
        <span class="create-order__required">* — поля, обязательные для заполнения</span>
        <form action="" type="POST" class="create-order__form">
            <div class="create-order__item information" >
                <h3 class="create-order__title_min">Контактная информация</h3>
                <div class="information__list">
                    <input-component :disabled="disabled" v-model:meaning="createOrder.customer.customerName" @input="errors.customercustomerName= ''" inputType="text" inputName="customer" inputContent="Иванов Иван Иванович" inputLabel="Ф.И.О. заказчика" :required=true :inputError="errors.customercustomerName" />
                    <input-component :disabled="disabled" v-model:meaning="createOrder.customer.customerPhone" @input="errors.customercustomerPhone= ''" inputType="tel" inputName="phone" inputContent="+7 (999) 999-99-99" inputLabel="Номер телефона" :required=true :inputError="errors.customercustomerPhone" />
                    <input-component :disabled="disabled" v-model:meaning="createOrder.customer.customerAddress" inputType="text" inputName="adress" inputContent="г. Великий Новгород, ул. Луговая, 7" inputLabel="Адрес" />
                    <input-component :disabled="disabled" v-model:meaning="createOrder.customer.customerEmail" inputType="email" inputName="email" inputContent="email@mail.ru" inputLabel="Email"/>
                    <input-component :disabled="disabled" v-model:meaning="createOrder.deceased.deceasedName" @input="errors.deceaseddeceasedName= ''" inputType="text" inputName="deceased" inputContent="Петров Пётр Петрович" inputLabel="Ф.И.О. покойного" :required=true :inputError="errors.deceaseddeceasedName" />
                    <VDropdown
                    :distance="6"
                    :disabled="disabled || createOrder.deceased.deceasedInstallationAddress != ''"
                    @click="errors.deceaseddeceasedInstallationAddress= ''"
                    >
                    <input-component :disabled="disabled" v-model:meaning="createOrder.deceased.deceasedInstallationAddress" @input="errors.deceaseddeceasedInstallationAddress= ''" inputType="text" inputName="cemetery" inputContent="Ермолинское кладбище" inputLabel="Место установки" :required=true :inputError="errors.deceaseddeceasedInstallationAddress" />
                        <template #popper>
                            <div class="information__select">
                                <button class="information__select-item" v-for="item in cemetryList" :key="item" @click="addDecaced(item)">{{item}}</button>
                            </div>
                        </template>
                    </VDropdown>
                    <div class="information__list_sub">
                        <input-component :disabled="disabled" v-model:meaning="createOrder.deceased.deceasedRegion" @input="errors.deceaseddeceasedRegion= ''" inputType="number" inputName="location" inputContent="№ участка" inputLabel="Участок" :required=true :inputError="errors.deceaseddeceasedRegion" />
                        <input-component :disabled="disabled" v-model:meaning="createOrder.deceased.deceasedRow" @input="errors.deceaseddeceasedRow= ''" inputType="number" inputName="row" inputContent="№ ряда" inputLabel="Ряд" :required=true :inputError="errors.deceaseddeceasedRow" />
                        <input-component :disabled="disabled" v-model:meaning="createOrder.deceased.deceasedPlace" @input="errors.deceaseddeceasedPlace= ''" inputType="number" inputName="place" inputContent="№ места" inputLabel="Место" :required=true :inputError="errors.deceaseddeceasedPlace" />
                    </div>
                </div>
            </div>
            <div class="create-order__item service">
                <h3 class="create-order__title_min">Список оказываемых услуг</h3>
                <div class="service__list">
                    <service-component :disabled="disabled" :service=serviceList v-for="item in counter" :key="item" :index=item @remove="removeOrderService" @ready="ServiceGravelOrder => { createOrder.addedServiceGravelOrder.push(ServiceGravelOrder) }"/>
                </div>
                <button-component button-text="+ Добавить услугу" class="create-order__button" @click.prevent="addOrderService"/>
            </div>
            <div class="create-order__item additional-service">
                <h3 class="create-order__title_min">Список оказываемых услуг</h3>
                <textarea :disabled="disabled" class="additional-service__field" v-model="createOrder.additionalServices" placeholder="Описание дополнительных услуг"></textarea>
            </div>
            <div class="create-order__item payment">
                <div class="col">
                    <div class="cost">
                        <h3 class="create-order__title_min">Расчёт стоимости</h3>
                        <div class="cost__list">
                            <div class="col">
                                <div class="payment__value-box">
                                    <span class="payment__label">Сумма заказа</span>
                                    <div class="payment__value">{{createOrder.amount}}</div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="payment__value-box">
                                    <span class="payment__label">Тип оплаты <b>*</b></span>
                                    <div class="radio__list">
                                        <label class="radio__item">
                                            <input :disabled="disabled" type="radio" v-model="createOrder.paymentType" value="Prepayment">
                                            авансовый платёж
                                        </label>
                                        <label class="radio__item">
                                            <input :disabled="disabled" type="radio" v-model="createOrder.paymentType" value="payment">
                                            полный расчёт
                                        </label>
                                        <label class="radio__item">
                                            <input :disabled="disabled" type="radio" v-model="createOrder.paymentType" value="withoutPrepayment">
                                            без предоплаты
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="discount">
                        <div class="col" v-if="discount">
                            <span class="payment__label">скидка</span>
                            <div class="payment__value-box payment__value_flex">
                                <input-component  inputType="number" inputName="discount" inputContent="15" v-model:meaning=createOrder.discount />
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.discountType" value="percent">
                                        %
                                    </label>
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.discountType" value="currency">
                                        руб
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col" v-if="prepayment">
                            <span class="payment__label">размер аванса</span>
                            <div class="payment__value-box payment__value_flex">
                                <input-component  inputType="number" inputName="discount" inputContent="50" v-model:meaning=createOrder.prepayment />
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.prepaymentType" value="percent">
                                        %
                                    </label>
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.prepaymentType" value="currency">
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
                                <div class="payment__value payment__value_gold">{{createOrder.finalCost}}</div>
                            </div>
                            <div class="payment__value-box payment__value_mt">
                                <span class="payment__label">Способ оплаты <b>*</b></span>
                                <div class="radio__list">
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.paymentMethod" value="card">
                                        банковской картой
                                    </label>
                                    <label class="radio__item">
                                        <input :disabled="disabled" type="radio" v-model="createOrder.paymentMethod" value="cash">
                                        наличными
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col">
                            <div class="payment__value-box">
                                <span class="payment__label">остаток</span>
                                <div class="payment__value">~34 000 руб.</div>
                            </div>
                        </div> -->
                    </div>
                    <button-component class="create-order__submit" @click.prevent="openSigntaure = true" v-if="!image" button-text="Создать заказ"/>
                    <button-component class="create-order__submit" @click.prevent="validate" v-if="image" button-text="Подтвердить заказ"/>
                    <button-component class="create-order__remove" @click.prevent="image = ''" v-if="image" button-text="Вернуться к редактированию заказа"/>
                </div>
                <div class="col">
                    <h3 class="create-order__title_min">Сроки выполнения работ</h3>
                    <div class="create-order__date">
                        <div class="col">
                            <span class="payment__label">Начало работ <b>*</b></span>
                            <Datepicker :disabled="disabled" class="create-order__date-item" @internal-model-change="dateStart" auto-apply format="dd/MM/yyyy" v-model="start" :enable-time-picker="false" locale="ru">
                                <template #calendar-header="{ index, day }">
                                    <div class="date__day" :class="index === 5 || index === 6 ? 'gold-color' : ''">
                                      {{ day }}
                                    </div>
                                  </template>
                            </Datepicker>
                        </div>
                        <div class="col">
                            <span class="payment__label">Окончание работ <b>*</b></span>
                            <Datepicker :disabled="disabled" class="create-order__date-item" @internal-model-change="dateEnd" auto-apply format="dd/MM/yyyy" v-model="end" :enable-time-picker="false" locale="ru">
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
                            <textarea :disabled="disabled" class="additional-service__field" v-model="createOrder.orderComment" placeholder="Текст комментария"></textarea>
                        </div>
                        <!-- <input type="file" class="create-order__button"> -->
                    </div>
                    <div class="create-order__item create-order__signature" v-if="image">
                        <h3 class="create-order__title_min">Подпись заказчика</h3>
                        <img :src="image" alt="" width="280" height="300">
                    </div>
                </div>
            </div>
            <popup-component :is-open="openSigntaure" :mt="false" @close="(closeSignature)" >
                <template #content>
                    <div class="signature-box">
                        <Vue3Signature ref="signature" :w="'280px'" :h="'300px'"></Vue3Signature>
                        <button @click.stop.prevent="clearSignature" class="signature__undo-box">
                            <icon-component width="24" height="24" name="undo" class="signature__undo"/>
                        </button>
                    </div>
                    <div class="signature__button-box">
                        <button-component @click.prevent="createSignature" class="signature__button" button-text="ок"/>
                        <button-component @click.prevent="closeSignature" class="signature__button signature__button_gray" button-text="отмена"/>
                    </div>
                </template>
            </popup-component>
        </form>
    </div>
</template>
<script lang="ts">
import inputComponent from '../ui/inputComponent.vue';
import serviceComponent from '../ui/serviceComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import popupComponent from '../ui/popupComponent.vue';
import Vue3Signature from 'vue3-signature';
import iconComponent from '../ui/iconComponent.vue';

import serviceList from '../json/serviceList.json'
import { POSITION, useToast } from "vue-toastification";
import axios from '../api'
import {createOrderShema} from '../shemas/createOrderShema';

export default {
    components: {
    inputComponent,
    serviceComponent,
    buttonComponent,
    popupComponent,
    Vue3Signature,
    iconComponent
},
    data() {
        return {
            cemetryList: ["Ермолинское кладбище", "Западное кладбище", "Рождественское кладбище", "Петровское кладбище"],
            counter: 1,
            createOrder: {
                customer: {
                    customerName: "",
                    customerPhone: "",
                    customerAddress: "",
                    customerEmail: "",
                },
                deceased: {
                    deceasedName: "",
                    deceasedInstallationAddress: "",
                    deceasedRegion: "",
                    deceasedRow: "",
                    deceasedPlace: "",
                },
                addedServiceGravelOrder: [] as {
                    name: string
                    gravelServiceListId: number,
                    measurement: string | undefined,
                    priceMeasurement: string,
                    price: string,
                    quantity: string,
                    description: string,
                }[],
                //Дополнительные услуги
                additionalServices: '',
                //Цена и вариант оплаты
                amount: 0,
                paymentType: '',
                //Скидка и вариант скидки
                discount: 0,
                discountType: '',
                //Аванс и вариант аванса
                prepayment: 0,
                prepaymentType: '',
                //Дедлайн
                startDate: new Date().toLocaleDateString(),
                endedDate: "",
                //Комментарий заказа
                orderComment: '',
                //Загруженное изображение
                uploadImage: '',
                //Финальная стоимость заказа "К ОПЛАТЕ"
                finalCost: 0,
                //Способ оплаты
                paymentMethod: '',
                //Подтверждение заказа
                orderСonfirmation: false,
                //Подпись заказчика
                signatureImgUrl: '',
            },
            errors: {
                customercustomerName: "",
                customercustomerPhone: "",
                deceaseddeceasedName: "",
                deceaseddeceasedInstallationAddress: "",
                deceaseddeceasedRegion: "",
                deceaseddeceasedRow: "",
                deceaseddeceasedPlace: "",
                paymentType: "",
                startDate: "",
                endedDate: "",
                paymentMethod: "",
            },
            toast: useToast(),
            addServiceList: [] as string[],
            serviceList: serviceList,
            discount: false,
            prepayment: false,
            discountPrice: 0,
            prepay: 0,
            openSigntaure: false,
            image: "",
            disabled: false,
            start: new Date(),
            end: new Date(),
        }
    },
    methods: {
        addOrderService() {
            this.counter +=1
        },
        removeOrderService() {
            if (this.counter == 1) {
                this.toast.error("Невоможно удалить единственную услугу", {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
              })
            } else {
                this.counter -=1
                this.createOrder.addedServiceGravelOrder.pop()
            }
        },
        addDecaced(item: string) {
            this.createOrder.deceased.deceasedInstallationAddress = item
        },
        createSignature() {
            //@ts-ignore
            if(this.$refs.signature.isEmpty()) {
                //@ts-ignore
                this.$refs.signature.clear()
                this.image = ""
            } else {
                //@ts-ignore\
                this.image = this.$refs.signature.save('image/png')
                //@ts-ignore
                this.$refs.signature.clear()
                this.openSigntaure = false
            }
        },
        clearSignature() {
            //@ts-ignore
            this.$refs.signature.clear()
            this.image = ""
        },
        closeSignature() {
            //@ts-ignore
            this.$refs.signature.clear()
            this.openSigntaure = false
        },
        validate() {
        createOrderShema
        .validate(this.createOrder, { abortEarly: false })
          .then(() => {
            this.createOrder.signatureImgUrl = this.image
            this.createOrder.orderСonfirmation = true
            this.errors = {
                customercustomerName: "",
                customercustomerPhone: "",
                deceaseddeceasedName: "",
                deceaseddeceasedInstallationAddress: "",
                deceaseddeceasedRegion: "",
                deceaseddeceasedRow: "",
                deceaseddeceasedPlace: "",
                paymentType: "",
                startDate: "",
                endedDate: "",
                paymentMethod: "",
            }
            axios.order.createOrderGraveImprovement(this.createOrder)
            .then((res: any) => {
                this.toast.success('Заказ создан создан', {
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
                this.errors[error.path.replace( /\./g, '' )] = error.message;
                if (error.path.includes("addedServiceGravelOrder")) {
                    this.toast.error("выберите услугу", {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                })
                }
            });
            if(this.errors.paymentType != "") {
                this.toast.error(this.errors.paymentType, {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                })
            }
            if(this.errors.paymentMethod != "") {
                this.toast.error(this.errors.paymentMethod, {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                })
            }
            if(this.errors.startDate != "") {
                this.toast.error(this.errors.startDate, {
                    position: POSITION.BOTTOM_RIGHT,
                    timeout: 2000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                })
            }
            if(this.errors.endedDate != "") {
                this.toast.error(this.errors.endedDate, {
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
    computed: {
        dateStart() {
            this.createOrder.startDate = this.start.toLocaleDateString()
        },
        dateEnd() {
            this.createOrder.endedDate = this.end.toLocaleDateString()
        }
    },
    watch: {
        ['createOrder.addedServiceGravelOrder']: {
            handler(newVal:typeof this.createOrder.addedServiceGravelOrder) {
                this.createOrder.amount = newVal.reduce<number>((old, curr) => {
                    return old +  +curr.price
                }, 0);
                let arr = [...this.createOrder.addedServiceGravelOrder].map(({name, ...obj}) => {
                return name
                })
                this.addServiceList = arr
                this.serviceList = serviceList.filter(item => !this.addServiceList.includes(item.name))
            },
            deep: true
        },
        'createOrder.paymentType'() {
            switch(this.createOrder.paymentType) {
                case "Prepayment":
                    this.discount = true,
                    this.prepayment = true
                    this.createOrder.discountType = "currency"
                    this.createOrder.prepaymentType = "currency"
                    break;
                case "payment":
                    this.discount = true,
                    this.prepayment = false
                    this.createOrder.discountType = "currency"
                    this.discountPrice = this.createOrder.amount
                    break;
                default:
                    this.discount = false,
                    this.prepayment = false
            }
        },
        'createOrder.prepayment'() {
            if (this.createOrder.prepaymentType == "percent") {
                if(this.discount == true) {
                    this.prepay = +(this.discountPrice * this.createOrder.prepayment / 100).toFixed(2)
                } else {
                    this.prepay = +(this.createOrder.amount * this.createOrder.prepayment / 100).toFixed(2)
                }
            } else {
                this.prepay = this.createOrder.prepayment
            }
        },
        createOrder: {
            handler(newValue, oldValue) {
                if(this.prepayment == true) {
                this.createOrder.finalCost = this.prepay
                } else if(this.discount == true) {
                    if (this.createOrder.discountType == "percent") {
                        let disc = +(this.createOrder.amount * this.createOrder.discount / 100).toFixed(2)
                        this.discountPrice = +(this.createOrder.amount - disc).toFixed(2)
                    } else if (this.createOrder.discountType == "currency") {
                        this.discountPrice = this.createOrder.amount - this.createOrder.discount
                    } else {
                        this.discountPrice = this.createOrder.amount
                    }
                    this.createOrder.finalCost = this.discountPrice
                } else {
                    this.createOrder.finalCost = 0
                }
            },
            deep: true
        },
        image() {
            if(this.image != "") {
                this.disabled = true
            } else {
                this.disabled = false
            }
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
            max-width: 386px
            width: 100%
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
            @media (max-width: 450px)
                grid-template-columns: 100%
    .information
        &__list
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(3, 4fr)
            gap: 30px
            @media (max-width: 1200px)
                grid-template-columns: repeat(2, 6fr)
            @media (max-width: 1200px)
                grid-template-columns: 100%
            &_sub
                display: grid
                grid-template-columns: repeat(3, 120px)
                gap: 13px
                @media (max-width: 430px)
                    grid-template-columns: 100%
        &__select
            max-width: 360px
            width: 100%
            padding: 20px
            &-item
                display: block
                background: none
                width: 100%
                border: none
                color: var(--brown)
                font-size: 18px
                &:not(:first-child)
                    margin-top: 20px
    .service
        &__list
            margin-top: 30px
            display: grid
            grid-template-columns: repeat(3, 4fr)
            gap: 30px
            @media (max-width: 1450px)
                grid-template-columns: repeat(2, 4fr)
                gap: 30px
            @media (max-width: 990px)
                grid-template-columns: 100%
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
        grid-template-columns: repeat(2, 6fr)
        gap: 30px
        @media (max-width: 1230px)
            display: flex
            flex-direction: column-reverse
            width: 100%
        &__label
            display: block
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
            color: var(--brown)
            b
                color: var(--red)
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
            @media (max-width: 450px)
                grid-template-columns: 100%
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
        @media (max-width: 450px)
                grid-template-columns: 100%
    .pay
        margin-top: 30px
        display: grid
        grid-template-columns: repeat(2, 200px)
        gap: 30px
        @media (max-width: 450px)
                grid-template-columns: 100%
    .v-popper__arrow-container
        display: none
    .signature
        &-box
            border: 1px solid var(--gray)
            border-radius: 5px
            overflow: hidden
            position: relative
        &__undo
            height: 20px
            &-box
                position: absolute
                top: 5px
                right:5px
                z-index: 2
                border: none
                background: none
        &__button
            text-transform: uppercase
            color: var(--white)
            background: var(--gold)
            width: 100%
            padding: 13px 10px
            &_gray
                background: none
                color: var(--gray)
                border: 1px solid var(--gray)
                margin-top: 20px
            &-box
                width: 100%
                margin-top: 20px
</style>