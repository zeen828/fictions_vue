import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 百度統計
import ba from 'vue-ba'

// 函式庫 - 自訂
import '@/mixins/customFun.js'

// 百度統計
Vue.use(ba, '6d6f4fe19d77521f7481e8779dac7dcd')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
