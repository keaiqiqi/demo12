
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.http = axios

//引入网络请求的配置文件
import apis from './common/js/api'
// console.log(apis)
Vue.prototype.apis = apis;
import swal from 'sweetalert';
Vue.prototype.swal = swal;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
