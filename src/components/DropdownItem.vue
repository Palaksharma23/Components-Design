<template>
  <a
        href="/1"
        v-on:keydown.down.exact.prevent="focusNext(true)"
        v-on:keydown.up="focusPrevious(true)"
        v-on:keydown.esc.exact="hideDropdown"
        v-on:keydown.enter.exact="click"
        @click="click"
      >
        Option 1 
      </a>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    type: String,
    classname: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
