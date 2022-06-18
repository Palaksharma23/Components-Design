<template>
    <h1>Simple Button</h1>
  <ButtonComponent classname="primary margin_1">Click Me</ButtonComponent>
  <ButtonComponent classname="primary_wh margin_1">Click Me</ButtonComponent>
  <ButtonComponent classname="primary_woh margin_1">Click Me</ButtonComponent>
  <ButtonComponent classname="round-tag margin_1">Click Me</ButtonComponent>
  <ButtonComponent classname="round-tag_woh margin_1">Click Me</ButtonComponent>
  <ButtonComponent classname="round-tag_wh margin_1">Click Me</ButtonComponent>
    <h1>Floating Button</h1>
    
    <ButtonComponent classname="circular turquoise_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
        <ButtonComponent classname="circular earth_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
                <ButtonComponent classname="circular stone_grey_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
        <ButtonComponent classname="circular pebble_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>

<h1>Toggle Button</h1>
<ToggleComponent class="margin_1" classname="toggle round"/>
     
<h1>Accordion Component</h1>
<AccordionComponent classname="hello"></AccordionComponent>  

<h1>Dropdown Component</h1>
<DropdownComponent><DropdownItem/><DropdownItem/><DropdownItem/><DropdownItem/><DropdownItem/></DropdownComponent>

<h1>Navbar Component</h1>
<NavbarComponent/>

<h1>Footer Component</h1>
<FooterComponent/>

</template>

<script> 
import ButtonComponent from './components/ButtonComponent.vue';
import ToggleComponent from './components/ToggleComponent.vue';
import AccordionComponent from './components/AccordionComponent.vue';
import DropdownComponent from './components/DropdownComponent.vue';
import DropdownItem from './components/DropdownItem.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    ButtonComponent,
    ToggleComponent,
    AccordionComponent,
    DropdownComponent,
    DropdownItem,
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style> 
.margin_1 {
  margin: 1%;
} 
</style>
