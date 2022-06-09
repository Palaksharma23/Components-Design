<template>
  <ButtonComponent classname="primary margin_1" text="Click Me"/>
  <ButtonComponent classname="primary_wh margin_1" text="Click Me"/>
  <ButtonComponent classname="primary_woh margin_1" text="Click Me"/>
  <ButtonComponent classname="round-tag margin_1" text="Click Me"/>
  <ButtonComponent classname="round-tag_woh margin_1" text="Click Me"/>
  <ButtonComponent classname="round-tag_wh margin_1" text="Click Me"/>
  <ButtonComponent classname="turquoise_green margin_1" text=">"/>
</template>

<script> 
import ButtonComponent from './components/ButtonComponent.vue'

export default {
  name: 'App',
  components: {
    ButtonComponent
  }
}
</script>

<style> 
.margin_1 {
  margin: 1%;
}
</style>
