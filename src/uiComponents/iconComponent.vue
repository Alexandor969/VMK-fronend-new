<template >
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
        <use :xlink:href="`/src/assets/img/svg/icon/${ name }.svg#${name}`" />
    </svg>
</template>
<script lang="ts">
export default {
    props: {
        width: {
            type: String,
            default: "24"
        },
        height: {
            type: String,
            default: "24"
        },
        name: {
            type: String,
            default: "search"
        }
    }
}
</script>
<style lang="sass">

</style>