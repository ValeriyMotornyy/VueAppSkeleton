<template>

    <p>Oops 401</p>

</template>

<script>
    export default {
        name: 'Auth',
        methods: {},
        created: function () {
            this.$router.push('/kpi/dashboard')
        },
    }
</script>

<style lang="less">

</style>