<template>
    <div class="page">
        <header-component/>
        <main class="main">
            <sidebar-component/>
            <div class="content">
                <main-component/>
            </div>
        </main>
    </div>
</template>
<script lang="ts">


import sidebarComponent from "../components/sidebarComponent.vue"
import headerComponent from "../components/headerComponent.vue";
import mainComponent from "../components/mainComponent.vue";
export default {
    components: {
        sidebarComponent,
        headerComponent,
        mainComponent
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="sass">
    .page
        position: relative
        overflow-y: hidden
    .main
        height: 90vh
        display: flex
    .content
        width: 100%
        padding: 40px 20px 0px 40px
        overflow-y: auto
</style>