<template>
        <div class="box-alert-wrapper">
            <div class="box-alert-container">

                <div class="box-alert-header">
                        <h3>default header</h3>
                </div>

                <div class="box-alert-body">
                    default body
                </div>

                <div class="box-alert-footer">
                    <slot name="footer">
                        <ButtonComponent classname="primary_wh margin_1 ">Read More</ButtonComponent>
                        <ButtonComponent classname="primary margin_1 ">Not Now</ButtonComponent>
                    </slot>
                </div>
            </div>
        </div>
</template>

<script>
    import ButtonComponent from '../../components/ButtonComponent.vue';
export default {
  name: 'BoxAlertStructure',
  components: {
            ButtonComponent
  },
  props: {
    alert: { required: true, type: Object }
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

    :root {
        --cream: #faf8f7;
        --light-grey: #e7e7e7;
        --black: #000000;
        --grey: #cccccc;
        --white: #FFFFFF;
        --green: #009900;
        --red: #990000;
        --blue: #009999;
        --primary: #475447;
        --gradient: linear-gradient(rgba(115, 232, 163, 1), rgba(56, 133, 145, 0));
    }

    .box-alert-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .box-alert-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
    }

    .box-alert-header {
        margin-top: 0;
        color: var(--black);
        text-align:left;
        font-weight:600;
    }

    .box-alert-body {
        margin: 0px 0px 20px 0px;
    }

    .box-alert-footer{
        display:flex;
        flex-direction:row;
        justify-content:space-between
    }

    .box-alert-enter-from, .box-alert-leave-to {
        opacity: 0;
    }

    .box-alert-enter-active .box-alert-container,
    .box-alert-leave-active .box-alert-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>