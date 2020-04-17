<template>
    <div>

        <!-- Spinner -->
        <spinner-plugin v-show="spinner" class="spinner" size="huge" />

        <!-- Overlay -->
        <div v-show="spinner" class="spinner-overlay"></div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SpinnerPlugin  from 'vue-simple-spinner';

    export default {
        name: 'Spinner',
        components: {
            SpinnerPlugin
        },
        computed: mapGetters({
            spinner: 'core/spinner/spinner',
        }),
    }
</script>

<style>
    .spinner {
        position: fixed;
        top: 50vh;
        left: calc(50vw - 48px);
        z-index: 1;
    }
    .spinner-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #ffffff;
        z-index: 1;
    }
</style>