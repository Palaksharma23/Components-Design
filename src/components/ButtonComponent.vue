<template>
   <button :type="type" :class="classname">{{text}}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
        text: String, 
        type: String,
        classname:String,
  }
}
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
        font-family: 'DM Sans', sans-serif;
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
        font-family: 'DM Sans', sans-serif;
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
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        transition: all 0.5s;
    }

    .round-tag {
        border: 2px solid #475447;
        width: auto;
        height: auto;
        border-radius: 212px;
        padding: 0.6% 2%;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
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
        transition: all 0.5s;
        padding: 0.6% 2%;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
    }

    .round-tag_wh {
        padding: 0.4rem 1.3rem;
        background-color: #475447;
        border: 1px solid #475447;
        border-radius: 212px;
        color: #fff;
        width: auto;
        transition: all 0.5s;
        padding: 0.6% 2%;
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
    }

    .turquoise_green {
        height: 46px;
        width: 46px;
        padding: 1px 14px;
        border-radius: 50%;
        text-align: center;
        justify-content: center;
        font-size: 30px;
        line-height: 1.42857;
    } 
</style>
