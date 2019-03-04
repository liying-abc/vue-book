<template>
    <div>
      <div>计数器：<button style="width: 20px;height: 20px" @click="remove">-</button></div>
      <!--this可以省略-->
      <div>当前：{{this.$store.state.count}}</div>
      <div>计数器：<button style="width: 20px;height: 20px" @click="add">+</button></div>
    </div>
</template>

<script>
    export default {
        name: "Counter",
     data(){
          return{}
     },
      methods:{
          add(){
            //提交
            //载荷 payload
            this.$store.commit('add',2)
          },
        remove(){
            this.$store.commit('remove')
        }
      }
    }
</script>

<style scoped>

</style>
