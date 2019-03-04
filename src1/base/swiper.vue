<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          loop:true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          setWrapperSize:true,
          pagination: {
            el: '.swiper-pagination'
          },

         paginationClickable:true,
          mousewheelControl:true,//分页器是否可以点击
         observeParents:true,//是否监听父级变化
        },
      }
    }
  }
</script>
<style scoped lang="less">
 img{
   width: 100%;
 }


</style>
