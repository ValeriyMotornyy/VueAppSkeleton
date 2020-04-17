<template>

    <transition name="fade">

        <div v-show="visible" class="error-message">
            <div class="error-message-body">
                <strong>
                    <!--{{ this.message }}-->
                </strong>
            </div>
        </div>

    </transition>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Alert',
        computed: mapGetters({
            visible: 'core/alert/visible',
            message: 'core/alert/message'
        }),
    };
</script>

<style>
    .error-message {
        position:absolute;
        z-index:100;
        top:0;
        width:100%;
    }

    .error-message-body {
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        color: #ca5f5f;
        background: #ffe0e0;
        border: 1px solid #ca5f5f;
        box-shadow: 1px 2px #cac8c8;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>