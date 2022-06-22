<template>

<h1>Accordion Component</h1>
<AccordionComponent classname="container80 center"
      ><AccordionItem
        Heading="List One"
        label="label_secondary"
        content="content_secondary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List Two"
        label="label_secondary"
        content="content_secondary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem></AccordionComponent
    >
    <br />
    <AccordionComponent classname="container80 center"
      ><AccordionItem
        Heading="List One"
        label="label_primary_dark"
        content="content_primary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List Two"
        label="label_primary"
        content="content_primary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem></AccordionComponent
    >
    
    <h1>Simple Button</h1>
    <ButtonComponent classname="primary margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="primary_woh margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="round-tag margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="round-tag_woh margin_1">Click Me</ButtonComponent>

    <ButtonComponent classname="round-tag_wh margin_1" @click='useAlert("caution",agree,cancel,"title","message")'>Continue</ButtonComponent>
    <!--<ButtonComponent classname="round-tag_wh margin_1" @click='useAlert("readmore",agree,cancel,"title","message",5000)'>Continue</ButtonComponent>-->
    <h1>Floating Button</h1>
     <ButtonComponent classname="circular turquoise_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
    <ButtonComponent classname="circular earth_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
    <ButtonComponent classname="circular stone_grey_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
    <ButtonComponent classname="circular pebble_green_circular right_chevron margin_1"><fa icon="angle-up" /></ButtonComponent>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ToastComponent />
    <BoxAlertComponent />
    <h1>Toggle Button</h1>
    <ToggleComponent class="margin_1" classname="toggle round" />
    <h1>Alerts</h1>
    <ButtonComponent classname="primary_wh margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"success",title:"Success",message:"message",time:5000})'>Success</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"error",title:"Error",message:"message",time:5000})'>Error</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"info",title:"Info",message:"message",time:5000})'>Info</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"success",title:"Solid Success",message:"message",time:5000,varient:"solid"})'>Solid Success</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"error",title:"Solid Error",message:"message",time:5000,varient:"solid"})'>Solid Error</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"info",title:"Solid Info",message:"message",time:5000,varient:"solid"})'>Solid Info</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"primary",title:"Solid Primary",message:"message",time:5000,varient:"solid"})'>Solid primary</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"gradient",title:"Solid Gradient",message:"message",time:5000,varient:"solid"})'>Solid Gradient</ButtonComponent>
   
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

<h1>Slider Component</h1>
<SliderComponent @clicked="getclick"/>

<p>{{title}}</p>
 
</template>

<script> 
import AccordionComponent from "./components/Accordion/AccordionComponent.vue";
import AccordionItem from "./components/Accordion/AccordionItem.vue";
import ButtonComponent from './components/ButtonComponent.vue';
import ToggleComponent from './components/ToggleComponent.vue'; 
import DropdownComponent from './components/DropdownComponent.vue';
import DropdownItem from './components/DropdownItem.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SliderComponent from './components/SliderComponent.vue';
import ToastComponent from './components/Alert/Toast.vue';
import { ref } from 'vue'
import { useToast } from './components/Alert/Alert.js';

export default {
  name: 'App',
  components: {
    AccordionComponent,
    AccordionItem,
    ButtonComponent,
    ToggleComponent, 
            ToastComponent,
    DropdownComponent,
    DropdownItem,
    NavbarComponent,
    FooterComponent,
    SliderComponent
  },
  setup() {
    const title = ref('0')
    function getclick(value) {
      title.value = value;
      console.log(title.value); 
   }

   return {
    title,
    getclick,
    useToast 
   }
  } 
}
</script>

<style> 
.margin_1 {
  margin: 1%;
} 
</style>
