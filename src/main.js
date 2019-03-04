// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
//使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */);
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preload:1.3,
  error:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=396805210,4266088262&fm=27&gp=0.jpg',
  loading:'http://webjike.com/upload/images/2018/4/7f47a94504cc79a5.gif',
  attempt:1
});
//在进入路由之前 每一次都会执行此方法
router.beforeEach(function (to,from,next) {
  //from 从哪里来
  //to 到哪里去
  //next 都不走就默认走这个
  document.title = to.meta.title;

});
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
