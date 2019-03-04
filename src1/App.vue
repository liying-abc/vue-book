<template>
  <div id="app">
   <Counter></Counter>
  </div>
</template>

<script>
  import Counter from './components/Counter';
  export default {
    data(){
      return{}
      },
    components:{
      Counter
    }
  }
</script>

<style>
*{margin: 0;padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance:none}
  .content{
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 50px;
    overflow: auto;

  }
</style>
