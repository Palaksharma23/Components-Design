<template>
    <div class="box-wrapper" v-if="alerts.length">
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
        width: 600px;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 1rem;
        top: 1rem;
    }
</style>