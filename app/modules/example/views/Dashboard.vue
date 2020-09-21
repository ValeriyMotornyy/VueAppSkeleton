<template>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AssessmentDashboard',
        components: {

        },
        data() { return {

        }},
        computed: mapGetters({
            entities: 'example/entity/collection',
        }),
        methods: mapActions({
            readAllEntities: 'example/entity/readAll',
        }),
        beforeMount() {
            this.readAllEntities();
        },
    }
</script>

<style scoped>
</style>
