import Vue from 'vue'
import App from './App'
import router from './Router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './static/resources/css/demo.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import less from 'less'

//Vue注册使用ui等组件
Vue.use(ElementUI,VueAxios,axios,less);
Vue.config.productionTip = false;
//很多第三方模块不同的是，axios不能使用use方法
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  components: {App},
  router,
  template: '<App/>'
})
