<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName"/>
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo"/>
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice"/>
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import MHeader from '../base/mHeader';
  import {findOne,updateBook} from '../api/index'

  export default {
    created() {//页面一加载需要根据id 发送请求
      this.getData();
    },
    data() {
      return {
        book: {}
      }
    },
    methods: {
      async getData() {//通过id找到某一项后 赋值给book
        this.book = await findOne(this.bid);
        //如果是空对象需要跳转到列表页
        //怎么判断一个对象是否为一个空对象  把一个对象转换为数组
        Object.keys(this.book).length>0?void 0:this.$router.push('/list')
      },

      async update(){
        await updateBook(this.bid,this.book);//点击修改图书信息
        this.$router.push('/list');//修改完成后跳转页面
      }
    },
    watch: {
      $route() {//只要路径变化 重新获取数据
        this.getData();

      }
    },
    components: {
      MHeader
    },
    computed: {
      bid() {
        return this.$route.params.bid;//将路径参数的bid映射到页面上
      }
    }
  }
</script>
<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: #fff;
    ul {
      margin-top: 50px;
    }
  }
</style>
