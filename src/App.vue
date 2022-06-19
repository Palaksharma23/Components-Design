<template>
    <h1>Simple Button</h1>
    <ButtonComponent classname="primary margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1">Click Me</ButtonComponent>
    <ButtonComponent classname="primary_woh margin_1" @click='useToast({type:"success",title:"title",message:"message",time:5000})'>Success</ButtonComponent>
    <ButtonComponent classname="round-tag margin_1" @click='useToast({type:"error",title:"title",message:"message",time:5000})'>Error</ButtonComponent>
    <ButtonComponent classname="round-tag_woh margin_1" @click='useToast({type:"info",title:"title",message:"message",time:5000})'>Info</ButtonComponent>
    <ButtonComponent classname="primary_woh margin_1" @click='useToast("success","title","message",5000,"solid")'>Solid Success</ButtonComponent>
    <ButtonComponent classname="round-tag margin_1" @click='useToast("error","title","message",5000,"solid")'>Solid Error</ButtonComponent>
    <ButtonComponent classname="round-tag_woh margin_1" @click='useToast("info","title","message",5000,"solid")'>Solid Info</ButtonComponent>
    <ButtonComponent classname="round-tag_woh margin_1" @click='useToast("primary","title","message",5000,"solid")'>Solid primary</ButtonComponent>

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
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"error",title:"Error",message:"message",time:500000})'>Error</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"info",title:"Info",message:"message",time:5000})'>Info</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"success",title:"Solid Success",message:"message",time:5000,varient:"solid"})'>Solid Success</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"error",title:"Solid Error",message:"message",time:5000,varient:"solid"})'>Solid Error</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"info",title:"Solid Info",message:"message",time:5000,varient:"solid"})'>Solid Info</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"primary",title:"Solid Primary",message:"message",time:5000,varient:"solid"})'>Solid primary</ButtonComponent>
    <ButtonComponent classname="primary_wh margin_1" @click='useToast({type:"gradient",title:"Solid Gradient",message:"message",time:5000,varient:"solid"})'>Solid Gradient</ButtonComponent>
   
</template>

<script> 
import ButtonComponent from './components/ButtonComponent.vue';
    import ToggleComponent from './components/ToggleComponent.vue';
    import ToastComponent from './components/Alert/Toast.vue';
    
    import { useToast } from './components/Alert/Alert.js';
    

    export default {
        name: 'App',
        components: {
            ButtonComponent,
            ToggleComponent,
            ToastComponent
        },
        setup() {
            return { useToast};
        }
     
}
</script>

<style> 
.margin_1 {
  margin: 1%;
} 
</style>
