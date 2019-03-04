import Vue from 'vue'
import Router from 'vue-router'
/*import Home from '../components/Home';
import List from '../components/List';
import Collect from '../components/Collect';
import Detail from '../components/Detail';
import Add from '../components/Add';*/

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/',redirect:"/home"},
    {path:'/home',component:()=>import('../components/Home.vue'),meta:{keepAlive:true,title:'首页'}},
    {path:'/list',component:()=>import('../components/List.vue'),meta:{title:'列表'},},
    {path:'/collect',component:()=>import('../components/Collect.vue'),  meta:{title:'添加'},},
    //detail/1 {bid:1} 路径参数 必须有但是可以随机
    {
      path:'/detail/:bid',
      component:()=>import('../components/Detail.vue'),
      meta:{title:'详情'},
      name:"detail"
    },
    {path:'/add',component:()=>import('../components/Add.vue')},
    {path:'*',redirect:'/home'}
  ]

})
