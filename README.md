## 热门图书功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api,如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件
- 写一个基础组件
  - 创建一个.vue文件
  - 在需要使用这个组件的父级中引用这个组件
  - 在父级组件中组成
  - 以标签的形式引入

  fs.writeFile的特点就是会先把以前的内容清空然后再进行读取
