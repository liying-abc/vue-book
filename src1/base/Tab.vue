<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-index"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiaoye"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-collect-active"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjiayemian"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        watch: {},
        components: {}
    }
</script>
<!--
display:flex;
flex-direction:row/column;  默认是行还是列
justify-content:center  垂直居中
align-items:center 水平居中
flex:1 等分成几分 每份占1

router-link-exact-active 确切激活的
router-link-active 激活的
-->
<style scoped lang="less">
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a{

    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #282828;
  }
  a.router-link-exact-active{
    color: red;
  }
}
</style>
