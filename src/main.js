import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import 'font-awesome/css/font-awesome.min.css'

import ElementUI from 'element-ui'
import './assets/theme/element-#FF6F61/index.css'
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components:{ App },
  template: '<App/>'
  // render: h => h(App)
})
