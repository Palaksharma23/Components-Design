<template>
    <h1>Custom Range Slider</h1>
<p>Drag the slider to display the current value.</p>

<div class="slidecontainer">
  <p>Default range slider:</p>
  <input type="range" min="1" max="100" value="50" @input='onClickButton'>
  
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange" @input='onClickButton'>
  <button type="button" > Update me</button>
  <p>Value: <span id="demo"></span></p>
</div>
</template>

<script>
export default {
    name: 'SliderComponent',
    methods: {
     onClickButton (e) {
         this.$emit('clicked', e.target.value)
     }
    }
}
</script>
<style scoped>
.slidecontainer {
  width: 100%;  
}
 
.slider {
  -webkit-appearance: none;  
  appearance: none;
  width: 100%;  
  height: 25px;  
  background: #d3d3d3;  
  outline: none;  
  opacity: 0.7;  
  -webkit-transition: .2s;  
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;  
}

 
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;  
  appearance: none;
  width: 25px;  
  height: 25px;  
  background: #04AA6D;  
  cursor: pointer;  
}

.slider::-moz-range-thumb {
  width: 25px;  
  height: 25px;  
  background: #04AA6D;  
  cursor: pointer;  
}
</style>