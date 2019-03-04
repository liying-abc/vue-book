<template>
    <div>
<m-header >首页</m-header>
      <div class="content">
        <loading v-if="loading">疯狂加载中.....</loading>
        <!--:swiperSlides="sliders" 加冒号才会传过来一个对象-->
        <!--用一个无意义标签把两部分内容放到一起-->
        <template v-else>
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
          <h3>热门商品</h3>
          <ul class="">
            <li v-for="(hot,index) in hotBooks">
              <img :src="hot.bookCover"/>
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
        </template>
      </div>
    </div>
</template>
<script>
  import MHeader from '../base/mHeader';
  import swiper from '../base/swiper';
  import {getAll} from '../api/index';
  import loading from '../base/loading';

    export default {
      created(){
       // this.getSlider();//获取轮播图
       //  this.getHot();//获取最新图书.
        this.getData();
      },
        data() {
            return {
              sliders:[],
              hotBooks:[],
              loading:true,
            }
        },
        methods: {
        async getData(){
          let [sliders,hotBooks] = await getAll();
          this.sliders = sliders;
          this.hotBooks = hotBooks;
          this.loading = false;
        }
        // async getSlider(){
        //   //给data起别名 对象中的属性名字必须和得到的结果名字一致
        //   // let {data:sliders} = await getSliders();
        //   // //将获取到的数据放到sliders中也就是赋值
        //   // this.sliders = sliders;
        //
        //   //用来拦截器以后可以简写为
        //   this.sliders = await  getSliders();
        // },
        //   async getHot(){
        //   // let {data:books} = await getHotBook();
        //   // this.hotBooks = books;
        //     this.hotBooks = await getHotBook();
        //   }
        },
        computed: {},
        watch: {},
        components: {
          MHeader,
          swiper,
          loading
        }
    }
</script>
<style scoped lang="less">
.container{
  width: 90%;
  margin: 0 auto;

  ul{
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    li{
      text-align: center;
      width: 50%;
      img{
      width: 100%;
    }

    }
  }
}
</style>
