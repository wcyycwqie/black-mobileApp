import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // vuex
import Vant from 'vant' // vant框架
import '@/utils/validata.js' // 验证相关

// 静态资源
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import '@/style/base.less'

Vue.config.productionTip = false


Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
