<template>
    <div class="header">
<i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
      <slot></slot>
    </div>
</template>
<script>
    export default {
      props:{
        back:{
          type:Boolean,
          default:false
        }
      },
        data() {
            return {}
        },
        methods: {
        goBack(){
          this.$router.go(-1)
        }
        },
        computed: {},
        watch: {},
        components: {}
    }
</script>
<style scoped lang="less">
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #afd9ee;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  i{
    position: absolute;
    left: 10px;
  }
}
</style>
