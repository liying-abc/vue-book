<template>
  <div>
    <MHeader>列表页</MHeader>
    <!--scroll + 元素的clientHeight +20 = 元素scrollHeight-->
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <!--router-link是一个组件所以要加 :key="idnexx" 变成li标签 tag="li"-->
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img v-lazy="book.bookCover"/>
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.bookInfo}}</p>
            <b>￥{{book.bookPrice}}</b>
          </div>
          <button @click.stop="remove(book.bookId)">删除</button>
        </router-link>
      </ul>
      <div @click="more" class="more">加载更多</div>
    </div>
  </div>
</template>
<script>
  import {getBooks,pagination,removeBook} from "../api/index";
  import MHeader from '../base/mHeader';


  export default {
    created() {
      this.getData();
    },
    data() {
      return {
        books: [],
        hasMore:true,
        offset:0,
        isLoading:false//默认不是正在加载
      }
    },
    mounted(){
      let scroll = this.$refs.scroll;//获取当前拖拽的元素
      let top = scroll.offsetTop;
      let distance = 0;
      scroll.addEventListener('touchstart',(e)=>{



          let move = (e)=>{
            let start = e.touches[0].pageY;//
            let current  = e.touches[0].pageY;
            distance = current - start;
            if(distance>0){
              if(distance<=50){
                distance = 50;
                scroll.style.top = top+50+'px';
              }

            }else {
              //如果不在考虑方位内 移除move 和end事件
              scroll.removeEventListener('touchmove',move);
              scroll.removeEventListener('touchend',end)
            }
          };
          let end = (e)=>{
            scroll.addEventListener('touchmove',move);
            scroll.addEventListener('touchend',end);
          }



      },false)
    },
    methods: {
      more(){this.getData()},
      loadMore(){
        // 卷出去的高度   当前可视高度   总高
        //触发scroll事件 可能触发n次 先进来开一个定时器 下次触发时将上一次定时器清除掉
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
          let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
          if(scrollTop+clientHeight+20>scrollHeight){
            this.getData();
          }

        },60)

      },

      async remove(id){
        console.log(id);
        await removeBook(id);//删除返回的一个结果是空对象
        this.books = this.books.filter(item=>item.bookId !== id);
      },
      // async getData() {
      //   this.books = await getBooks();
      // },
      async getData() {//调用这个方法后开始正在加载

        if(this.hasMore&&!this.isLoading){//有更多的时候获取数据
          this.isLoading = true;
          let {hasMore,books} =  await pagination(this.offset);
          this.books = [...this.books,...books];
          this.books = books;
          this.hasMore = hasMore;
          this.isLoading = false;//加载完改成false
          this.offset = this.books.length;//维护偏移量 就是总数的长度
        }

      },

    },
    computed: {},
    watch: {},
    components: {
      MHeader
    }
  }
</script>
<style scoped lang="less">
  .content {
    ul {
      padding: 10px;
      li {
        display: flex;
        button {
          margin: 60px 0 0 20px;
          height: 20px;
          background: #c0c0c0;
          width: 40px;
          cursor: pointer;
          border-radius: 5px;
          outline: none;
        }
        div {
          margin-top: 30px;
          padding: 0 0 0 20px;
          b {
            color: red;
          }
        }
        img {
          width: 130px;
          height: 140px;
        }
      }
    }
    .more{
      margin: 10px;
      background: aqua;
      text-align: center;
      color: rebeccapurple;

    }
  }
</style>
