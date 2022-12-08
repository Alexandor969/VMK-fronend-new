<template>
    <button class="button">
        <icon-component :class="{reverse: order}" v-if="name" :name="name" :width="size" :height="size"/>
        {{buttonText}}
    </button>
</template>
<script lang="ts">
import iconComponent from './iconComponent.vue';
export default {
    components: {
        iconComponent
    },
    props: {
        buttonText: {
            type: String,
            required: true,
            default: false,
        },
        name: {
            type: String,
        },
        size: {
            type: String,
        },
        order: {
            type: Boolean,
        }
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="sass">
    .button
        display: block
        font-family: 'Roboto'
        font-weight: 600
        font-size: 18px
        border: none
        border-radius: 3px
        background: none
    .reverse
        order: 1
</style>