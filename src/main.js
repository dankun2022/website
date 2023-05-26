
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';
import {
  Carousel,
  CarouselItem
} from 'element-ui'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
//引入全局组件
import Header from "@/components/Header"
import PageFooter from "@/components/PageFooter"
//注册全局组件
Vue.component(Header.name, Header)
Vue.component(PageFooter.name, PageFooter)
Vue.use(Carousel).use(CarouselItem)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
