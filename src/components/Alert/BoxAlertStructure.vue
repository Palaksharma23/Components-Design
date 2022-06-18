<template>
    <div class="box-alert">
        
    </div>
</template>

<script>
export default {
        name: 'BoxAlertStructure',
  props: {
    alert: { required: true, type: Object }
  },
  created() {
    // Automatically dismiss toast after 5 seconds
    setTimeout(() => {
      this.dismissAlert();
    }, this.alert.time);
  },
  setup() {
    function dismissAlert() {
      this.$store.commit('clearAlert', this.alert.title);
      }
      return {dismissAlert}
  }
}
</script>

<style scoped>
   
</style>