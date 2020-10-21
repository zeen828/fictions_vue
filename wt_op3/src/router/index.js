import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Index.vue'
import One from '../views/home/pages/One.vue'
import Two from '../views/home/pages/Two.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首頁'
    },
    component: Home,
    children: [
      {
        path: 'page/one/:channelId?',
        name: 'One',
        meta: {
          title: '樣式一'
        },
        component: One
      },
      {
        path: 'page/two/:channelId?',
        name: 'Two',
        meta: {
          title: '樣式二'
        },
        component: Two
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
