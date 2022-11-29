<template >
    <header class="header">
        <div class="container">
            <img :src="images.logo" alt="logo" class="header__logo">
            <div class="header__search-box">
                <icon-component class="header__search-image"/>
                <input type="text" placeholder="Поиск" class="header__search">
            </div>
            <div class="header__content">
                <div class="header__icon-list"></div>
                <a href="#" class="header__profile">
                    <img :src="images.profile" alt="">
                </a>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import headerLogo from "../assets/img/svg/headerLogo.svg"
import headerProfile from "../assets/img/svg/headerProfile.svg"
import IconComponent from "./iconComponent.vue"

import iconComponent from "./iconComponent.vue"

export default {
    components: {
        iconComponent
    },
    data() {
        return {
            images: {
                logo: headerLogo,
                profile: headerProfile
            },
        };
    },
}
</script>
<style lang="sass">
    .header
        width: 100%
        background-color: var(--gray-dark)
        padding: 22px 0
        .container
            max-width: none
            display: flex
            align-items: center
        &__logo
            display: block
            width: 152px
        &__search
            display: block
            width: 400px
            padding: 15px 14px
            padding-left: 52px
            background-color: var(--brown-light)
            border: none
            border-radius: 50px
            color: var(--gray-light)
            font-family: 'Roboto'
            font-weight: 400
            font-size: 18px
            &::placeholder
                color: var(--gray)
            &-box
                position: relative
                margin-left: 50px
            &-image
                position: absolute
                left: 14px
                top: 14px
        &__content
            margin-left: auto
            display: flex
            align-items: center
        &__icon
            &-list
                display: flex
                align-items: center
                gap: 12px
        &__profile
            display: block
            margin-left: 24px
            width: 40px
            img
                display: block
                width: 100%
</style>