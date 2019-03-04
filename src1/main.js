import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import logger from 'vuex/dist/logger';
Vue.use(Vuex);

//创建一个状态
const state = {
  //5、把值放到这里   //6、去对应的组件里面进行取值
  count:0
};//3、容器里面的状态
const mutations = {
  add(state,count){//state是自动放入的，默认指的就是当前的state
    state.count+=count;
  },
  remove(state){//state是自动放入的，默认指的就是当前的state
    state.count-=1;
  }
};
//1、先创建一个容器   容器是唯一的
const store = new Vuex.Store({//防止更改这个容器所以用const
state:state,//4、把状态放到容器里面
  strict:true,//严格模式下   只能通过Moutation（相当于一个管理员）去修改状态（Mutation不支持异步）
  mutations,
  plugins:[logger()]
});
new Vue({
  el:'#app',
  store,//把vue关联起来也就是把store注册到实例上，所有的组件都会有一个属性 this.$store
  //...App,
  render: h => h(App),
});
