<template >
    <header class="header">
        <div class="container">
            <router-link to="/"><img :src="images.logo" alt="logo" class="header__logo"></router-link>
            <button class="header__menu-button" :class="{open: menuOpen}" @click="toggleButton">
                <span></span>
            </button>
            <!-- <div class="header__search-box">
                <icon-component class="header__search-image"/>
                <input type="text" placeholder="Поиск" class="header__search">
            </div> -->
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
import iconComponent from "../ui/iconComponent.vue"

export default {
    components: {
        iconComponent
    },
    props: {
        menuOpen: {
            type: Boolean,
            required:true,
            default: false
        }
    },
    data() {
        return {
            images: {
                logo: headerLogo,
                profile: headerProfile
            },
        }
    },
    methods: {
        toggleButton() {
            this.$emit('openMenu', open)
        },
    }
}
</script>
<style lang="sass">
    .header
        width: 100%
        background-color: var(--gray-dark)
        padding: 22px 0
        overflow-x: hidden
        flex: none
        .container
            max-width: none
            display: flex
            align-items: center
        &__logo
            display: block
            width: 152px
            @media (max-width: 760px)
                display: none
        &__menu
            &-button
                width: 30px
                height: 100%
                position: relative
                border: none
                cursor: pointer
                background: none
                display: none
                @media (max-width: 760px)
                    display: block
                span
                    height: 2px
                    width: 100%
                    top: 0px
                    left: 0
                    background-color: #fff
                    border-radius: 2px
                    position: absolute
                    transition-duration: 0.25s
                    transition-delay: 0.25s
                    &:before
                        left: 0
                        position: absolute
                        top: -8px
                        height: 2px
                        width: 100%
                        background-color: #fff
                        content: ""
                        border-radius: 2px
                        transition-duration: 0.25s
                        transition: transform 0.25s, top 0.25s 0.25s
                    &:after
                        left: 0
                        position: absolute
                        top: 8px
                        height: 2px
                        width: 100%
                        background-color: #fff
                        content: ""
                        border-radius: 2px
                        transition-duration: 0.25s
                        transition: transform 0.25s, top 0.25s 0.25s
                &.open
                    span
                        transition-duration: 0.1s
                        transition-delay: 0.25s
                        background: transparent
                        &:before
                            transition: top 0.25s, transform 0.25s 0.25s
                            top: 0px
                            transform: rotateZ(-45deg)
                        &:after
                            transition: top 0.4s, transform 0.25s 0.25s
                            top: 0px
                            transform: rotateZ(45deg)
        &__search
            display: block
            max-width: 400px
            width: 100%
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
                flex: 1
                @media (max-width: 760px)
                    margin-left: 20px
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