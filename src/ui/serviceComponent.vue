<template>
    <div class="service__item">
        <buttonComponent class="service__delete" buttonText="Удалить услугу" :order=true size="20" name="delete" @click.prevent="remove" />
        <span class="service__index">{{index}}</span>
        <span class="service__title">Наименование услуги</span>
        <v-select :disabled="disabled" v-model="ServiceGravelOrder.name" placeholder="Ограда" :options="serviceNameList" @option:selected="select" />
        <div class="service__parametrs">
            <input-component :disabled="disabled" v-model:meaning="ServiceGravelOrder.quantity" inputType="number" inputName="size" inputContent="100" inputLabel="Размер"/>
            <input-component :disabled="disabled" v-model:meaning="ServiceGravelOrder.measurement" inputType="text" inputName="units" inputContent="п/м" inputLabel="Ед. изм."/>
            <input-component :disabled="disabled" v-model:meaning="ServiceGravelOrder.priceMeasurement" inputType="number" inputName="price" inputContent="1600" inputLabel="Цена за ед., руб."/>
            <input-component :disabled="disabled" v-model:meaning="ServiceGravelOrder.price" inputType="number" inputName="amount" inputContent="1600" inputLabel="Сумма, руб."/>
        </div>
    </div>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
import inputComponent from './inputComponent.vue';
import buttonComponent from './buttonComponent.vue';
import service from '../types/types';

export default {
 components: {
    inputComponent,
    iconComponent,
    buttonComponent
 },
 props: {
    index: {
        type: Number
    },
    service: {
        type: Array<service>,
    },
    serviceName: {
        type: Array<String>
    },
    disabled: {
        type: Boolean
    }
 },
 emits: {
    remove: null,
    ready: null
 },
 data() {
        return {
            ServiceGravelOrder: {
                name: "",
                gravelServiceListId: this.index,
                measurement: "" as string | undefined,
                priceMeasurement: "" as string,
                price: "",
                quantity: "" as string,
                description: "",
            },
            serviceNameList: [] as any
        }
    },
 methods: {
    remove() {
        this.$emit("remove")
    },
    select() {
        if(this.ServiceGravelOrder.name != "") {
            this.ServiceGravelOrder.measurement = this.service?.find(item => item.name == this.ServiceGravelOrder.name)?.measurement
        }
    }
 },
 computed: {
 },
 watch: {
    service() {
        //@ts-ignore
        let obj = [...this.service]
        //@ts-ignore
        obj = obj.map(({name, ...obj}: object) => {
        return name
        })
        this.serviceNameList = obj
    },
    ServiceGravelOrder: {
      handler(newValue, oldValue) {
        if(this.ServiceGravelOrder.name != ""){
            let summ  = +this.ServiceGravelOrder.priceMeasurement * +this.ServiceGravelOrder.quantity
            this.ServiceGravelOrder.price = summ.toString()
        }
      },
      deep: true
    }
 },
 mounted() {
    this.$emit('ready', this.ServiceGravelOrder)
    //@ts-ignore
    let obj = [...this.service]
        //@ts-ignore
        obj = obj.map(({name, ...obj}: object) => {
        return name
        })
        this.serviceNameList = obj
 }
}
</script>
<style lang="sass">
    .service
        &__item
            width: 100%
            padding: 20px
            border: 2px solid var(--gold)
            .vs__dropdown-toggle
                width: 100%
                height: 48px
                border: none
                background-color: var(--gray-light)
                margin-top: 10px
                padding: 14px
                align-items: center
            .vs__search
                &::placeholder
                    color: var(--gray)
            .vs__actions
                flex: none
            .vs__clear
                display: none
        &__delete
            padding: 5px 10px
            width: 100%
            border: 1px solid var(--gray)
            border-radius: 3px
            background: none
            display: flex
            justify-content: center
            align-items: center
            gap: 10px
            font-family: 'Roboto'
            font-weight: 500
            font-size: 14px
            color: var(--gray)
        &__title
            display: block
            margin-top: 30px
            color: var(--brown)
            font-family: 'Roboto'
            font-weight: 300
            font-size: 18px
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
            @media (max-width: 400px)
                grid-template-columns: 100%
</style>