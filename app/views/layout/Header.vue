<template>
    <header>
        <nav>
            <ul>
                <router-link v-for="item in nav"
                             v-bind:key="item.title"
                             tag="li"
                             :to="item.url">
                    {{ item.title }}
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        data: function () { return {
            nav: [
                { title:'Home', url:'/' },
            ]
        }},
    };
</script>

<style lang="less">
    header {

        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        display: flex;
        align-items: center;
        box-shadow: 0 0 25px 0 black;
        color: #333;

        * {
            display: inline;
        }

        li {
            margin: 20px;

            a {
                color: black;
                text-decoration: none;
            }
        }
    }
</style>