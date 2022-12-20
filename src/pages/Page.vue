<template>
    <div class="page">
        <header-component @openMenu="openMenu" :menuOpen="menu"/>
        <main class="main">
            <sidebar-component :menu="menu"/>
            <div class="content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
<script lang="ts">


import sidebarComponent from "../components/sidebarComponent.vue"
import headerComponent from "../components/headerComponent.vue";
import store from '../store';
export default {
    components: {
        sidebarComponent,
        headerComponent,
    },
    data() {
        return {
            menu: false
        }
    },
    methods: {
        openMenu() {
            this.menu = !this.menu
        }
    },
    mounted() {
        store.commit('getUser')
    }
}
</script>
<style lang="sass">
    .page
        height: 100vh
        position: relative
        overflow-y: hidden
        display: flex
        flex-direction: column
        @media (max-width: 330px)
            height: 105vh
    .main
        display: flex
        height: 100%
        flex-grow: 1
    .content
        width: 100%
        padding: 40px 20px 80px 40px
        overflow-x: hidden
        overflow-y: auto
        @media (max-width: 560px)
            padding-left: 20px
</style>