import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vuex
import Vuex from 'vuex'
import store from './store'

// cookie
import VueCookies from 'vue-cookies'

// 自訂
import '@/mixins/customFun.js'
// device判斷
import '@/mixins/is.js'
// 共用跳轉
import '@/mixins/goto.js'
// 滾動
import '@/mixins/scroll.js'

// 資源
import MouseUI from 'muse-ui'
import Toast from 'muse-ui-toast'
import Message from 'muse-ui-message'
import Loading from 'muse-ui-loading'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui-message/dist/muse-ui-message.css'
import 'muse-ui-loading/dist/muse-ui-loading.css'
import 'material-icons/iconfont/material-icons.scss'

// ba
import ba from 'vue-ba'

Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// cookie
Vue.use(VueCookies)

// 資源
Vue.use(MouseUI)
Vue.use(Toast)
Vue.use(Message)
Vue.use(Loading)

// ba
Vue.use(ba, '94bf1214f5be724a82a0a645e2d55bfb')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
