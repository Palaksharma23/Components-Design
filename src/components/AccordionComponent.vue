<template>
  <div :class="[toggle ? isActive : '', cllass]" @click="accordionhandler">
    <div class="label">List One</div>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
        doloribus perspiciatis!
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AccordionComponent",
  props: {
    Heading: String,
    classname: String,
  },
  setup(props) {
    const toggle = ref(true);
    const isActive = ref("active");
    const contentbox = ref("contentbox");
    const cllass = ref(props.classname);

    function accordionhandler() {
      toggle.value = !toggle.value;
      console.log(toggle.value);
    }

    return {
      toggle,
      accordionhandler,
      isActive,
      contentbox,
      cllass,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label {
    font-family: sans-serif;
  font-size: 3vw;
  background-color: rgb(44, 177, 230);
  padding-left: 2%;
  color: white;
}
.content {
  background-color: white;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: 1s;
}
.label::before {
  content: "+";
  position: relative;
  left: 95%;
}
.active .label::before {
  content: "-";
  position: relative;
  left: 95%;
}
.active .content {
  background-color: white;
  height: 100%;
  padding: 5%;
  font-size: 1vw;
  transition: 1s;
} 
p {
  font-size: 1vw;
  color: rgb(255, 0, 0);
} 
</style>
