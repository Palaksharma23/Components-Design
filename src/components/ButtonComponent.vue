<template>
  <button :type="type" :class="classname"><slot></slot></button>
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
body {
  padding: 2%;
}

.primary {
  padding: 0.4rem 1.3rem;
  background-color: transparent;
  border: 1px solid #475447;
  border-radius: 5px;
  color: #475447;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
}

.primary:hover {
  color: #fff;
  background-color: #475447;
}

.primary_woh {
  padding: 0.4rem 1.3rem;
  background-color: transparent;
  border: 1px solid #475447;
  border-radius: 5px;
  color: #475447;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
}

.primary_wh {
  padding: 0.4rem 1.3rem;
  background-color: #475447;
  border: 1px solid #475447;
  border-radius: 5px;
  color: #fff;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
}

.round-tag {
  padding: 0.4rem 1.3rem;
  background-color: transparent;
  border: 1px solid #475447;
  border-radius: 212px;
  color: #475447;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
}

.round-tag:hover {
  color: #fff;
  background-color: #475447;
}

.round-tag_woh {
  padding: 0.4rem 1.3rem;
  background-color: transparent;
  border: 1px solid #475447;
  border-radius: 212px;
  color: #475447;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
}

.round-tag_wh {
  padding: 0.4rem 1.3rem;
  background-color: transparent;
  color: #fff;
  background-color: #475447;
  border-radius: 212px;
  width: auto;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  transition: all 0.5s;
  border: none;
}

.circular {
  height: 46px;
  width: 46px;
  padding: 1px 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.42857; 
  border: none;
  box-shadow: #fff; 
}

.turquoise_green_circular { 
  background-color: #73e8a3;
  color: #000000; 
}

.earth_green_circular { 
  background-color: #475447;
  color: #fff; 
}

.stone_grey_circular {
    background-color: #E5E5E5;
    color: #000000;
}

.pebble_green_circular {
    background-color: #E3F2E8;
    color: #000000;
}
.upper_chevron {
  transform: rotate(270deg);
}

.lower_chevron {
  transform: rotate(90deg);
}

.left_chevron {
  transform: rotate(180deg);
}

.right_chevron {
  transform: rotate(0deg);
}
</style>
