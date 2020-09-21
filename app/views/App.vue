<template>
    <div>

        <app-header></app-header>

        <!-- Error Notification -->
        <alert></alert>

        <!-- Spinner -->
        <spinner></spinner>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Spinner   from './common/Spinner.vue';
    import Alert     from './common/Alert.vue';
    import AppHeader from './layout/Header.vue';
    import AppFooter from './layout/Footer.vue';

    export default {
        components: {
            Spinner,
            Alert,
            AppHeader,
            AppFooter,
        },
        data() { return {

        }},
    }
</script>

<style scoped>

</style>