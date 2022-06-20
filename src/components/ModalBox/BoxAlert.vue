<template>
    <div class="box-wrapper box-alert-mask" v-if="alerts.length">
        <BoxAlertStructure v-for="(alert, index) of alerts"
                   :alert="alert"
                   :key="index">
        </BoxAlertStructure>
    </div>
</template>

<script>
    import BoxAlertStructure from './../Alert/BoxAlertStructure.vue'

    export default {
        name: 'BoxAlertComponent',
        components: { BoxAlertStructure },
        computed: {
            alerts() {
                return this.$store.state.alerts;
            }
        },

    }

</script>

<style scoped>
    .box-wrapper {
        width: 100%;
        height:100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-alert-mask {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
</style>