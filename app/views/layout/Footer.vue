<template>
    <footer>
        <h1>{{ message }}</h1>
    </footer>
</template>

<script>
    export default {
        data: function () { return {
            message: 'Vue Skeleton'
        }},
    };
</script>

<style lang="less">
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }
</style>