<template>
    <div class="page">
        <header-component/>
        <main class="main">
            <sidebar-component/>
            <div class="content">
            </div>
        </main>
    </div>
</template>
<script lang="ts">


import sidebarComponent from "../components/sidebarComponent.vue"
import headerComponent from "../components/headerComponent.vue";
export default {
    components: {
        sidebarComponent,
        headerComponent
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
    .main
        height: 90vh
        display: flex
    .content
        width: 100%
        padding: 40px 20px 0px 40px
</style>