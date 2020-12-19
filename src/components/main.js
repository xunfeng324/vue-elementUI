import Vue from 'vue'
import App from './App'
import router from './Router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './static/resources/css/demo.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: {App},
  router,
  template: '<App/>'
})
