// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象，App.vue是根组件
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/home.vue';  //首页
import shopcar from './components/shopcar/shopcar.vue';    //购物车

import newslist from './components/news/newslist.vue';   //导入路径 首页-新闻列表
import newsinfo from './components/news/newsinfo.vue';   //导入路径 首页-新闻列表-新闻详情页


import photo from './components/photo/photolist.vue';
import goods from './components/goods/goodslist.vue';
import message from './components/message/messagelist.vue';
import video from './components/video/videolist.vue';
import callme from './components/callme/callmelist.vue';
// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:"mui-active",
	routes:[
		{path:'/home',component:home},//path是App.vue中router-link中to后面的名字一致,且这个路径就是地址栏后面的
		// component是import中变量的名字home，且不需要/
		{path:'/shopcar/shopcar',component:shopcar},
		{path:'/news/newslist',component:newslist},  //首页-新闻列表
		{path:'/news/newsinfo/13',component:newsinfo},  //首页-新闻列表-新闻详情页

		{path:'/photo/photo',component:photo},
		{path:'/goods/goodslist',component:goods},
		{path:'/message/messagelist',component:message},
		{path:'/video/videolist',component:video},
		{path:'/callme/callmelist',component:callme},

	]
	});

// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';

// 6.0 导入一个当前系统的全局基本样式
import '../statics/css/site.css';

//7 导入vue-resource
import vueResource from 'vue-resource';
Vue.use(vueResource);

//导入moment
import moment from 'moment'
//定义一个全局的过滤器
Vue.filter('datefmt',function (input,string) {
	return moment(input).format(string)
})
// 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});