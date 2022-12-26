<template >
    <div class="orders">
        <order-list-component :sorting= true :date="date" :filtered="filtered"/>
        <div class="filters">
            <span class="filters__title">
                <icon-component width="24" height="24" name="filter" class="filters__title-icon"/>
                Фильтр
            </span>
            <div class="filters__list">
                <div class="filters__item filter">
                    <div class="filter__title-box">
                        <span class="filter__title">Выбрать дату</span>
                        <icon-component class="filter__title-icon" width="16" height="10" name="arrow"/>
                    </div>
                    <div class="filter__content">
                        <Datepicker menu-class-name="filter__date"  v-model="date"  inline auto-apply range @update:model-value="filtered = true" :enable-time-picker="false" locale="ru">
                            <template #calendar-header="{ index, day }">
                                <div class="date__day" :class="index === 5 || index === 6 ? 'gold-color' : ''">
                                  {{ day }}
                                </div>
                              </template>
                        </Datepicker>
                    </div>
                </div>
                <!-- <div class="filters__item filter">
                    <div class="filter__title-box">
                        <span class="filter__title">Статус заказа</span>
                        <icon-component class="filter__title-icon" width="16" height="10" name="arrow"/>
                    </div>
                    <div class="filter__content">
                        <div class="filter__list">
                            <checkbox-component checkText="В работе"/>
                        </div>
                    </div>
                </div> -->
                <button-component class="filters__button" button-text="Сбросить фильтры" @click="clearFilters"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import orderListComponent from '../ui/orderListComponent.vue';
import iconComponent from '../ui/iconComponent.vue';
import buttonComponent from '../ui/buttonComponent.vue';
import checkboxComponent from '../ui/checkboxComponent.vue';
export default {
    components: {
        orderListComponent,
        iconComponent,
        buttonComponent,
        checkboxComponent
    },
    data() {
        return {
            date: [],
            filtered: false
        }
    },
    methods: {
        clearFilters() {
            this.date = []
            this.filtered = false
        }
    }
}
</script>
<style lang="sass">
    .orders
        display: flex
        @media (max-width: 1140px)
            flex-direction: column-reverse
    .filters
        width: 288px
        margin-left: auto
        background-color: var(--gray-light)
        border-radius: 5px
        padding-bottom: 20px
        height: fit-content
        flex: none
        @media (max-width: 1140px)
            margin-left: 0
            margin-bottom: 50px
        &__title
            display: flex
            align-items: center
            justify-content: center
            padding: 18px 0
            width: 100%
            border-radius: 5px 5px 0px 0px
            background: var(--brown)
            font-family: 'Roboto'
            font-weight: 500
            font-size: 18px
            color: var(--white)
            &-icon
                display: block
                margin-right: 5px
                color: var(--white)
        &__button
            padding: 11px 54px
            margin: 0 auto
            margin-top: 50px
            color: var(--white)
            background: var(--brown)
            border-radius: 3px
            font-size: 14px
            text-transform: uppercase
    .filter
        padding: 21px 23px
        border-bottom: 1px solid var(--gray-prelight)
        &__title
            font-family: 'Roboto'
            font-weight: 400
            font-size: 16px
            color: var(--brown)
            &-box
                display: flex
                align-items: center
                width: 100%
            &-icon
                display: block
                margin-left: auto
                color: var(--brown)
        &__content
            margin-top: 30px
        &__date
            min-width: 200px
            border: none
            &:focus
                border: none
            .dp__range_between
                color: var(--gold)
</style>