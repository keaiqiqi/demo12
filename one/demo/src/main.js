
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.$http = axios

//引入网络请求的配置文件
import apis from './common/js/api'
// console.log(apis)
Vue.prototype.apis = apis;

 
import Mint from 'mint-ui';
 Vue.use(Mint); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
