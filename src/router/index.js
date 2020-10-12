import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Index.vue'
import Search from '../views/search/Index.vue'
import Classif from '../views/classif/Index.vue'
import Ranking from '../views/ranking/Index.vue'
import Record from '../views/record/Index.vue'
import Recharge from '../views/recharge/Index.vue'
import Personal from '../views/personal/Index.vue'
import Info from '../views/personal/pages/Info.vue'
import Login from '../views/personal/pages/Login.vue'
import Registered from '../views/personal/pages/Registered.vue'
import PointLog from '../views/personal/pages/PointLog.vue'
import Bookclass from '../views/bookclass/Index.vue'
import Books from '../views/books/Index.vue'
import Book from '../views/books/pages/Book.vue'
import Chapter from '../views/books/pages/Chapter.vue'
import Test1 from '../views/tests/Test1.vue'
import Test2 from '../views/tests/Test2.vue'

Vue.use(VueRouter)

const envTitle = process.env.VUE_APP_TITLE

const routes = [
  // 首頁
  {
    path: '/',
    name: 'Home',
    meta: {
      title: envTitle + ' - 首页'
    },
    component: Home
  },
  // 搜尋
  {
    path: '/search/:keyword?',
    name: 'Search',
    meta: {
      title: envTitle + ' - 搜寻'
    },
    component: Search,
    props: true
  },
  // 分類
  {
    path: '/classif/:tId?',
    name: 'Classif',
    meta: {
      title: envTitle + ' - 分类'
    },
    component: Classif,
    props: true
  },
  // 排行榜
  {
    path: '/ranking',
    name: 'Ranking',
    meta: {
      title: envTitle + ' - 排行榜'
    },
    component: Ranking
  },
  // 閱讀紀錄&我的最愛
  {
    path: '/record',
    name: 'Record',
    meta: {
      title: envTitle + ' - 阅读纪录'
    },
    component: Record
  },
  // 充值
  {
    path: '/recharge',
    name: 'Recharge',
    meta: {
      title: envTitle + ' - 充值'
    },
    component: Recharge
  },
  // 個人中心
  {
    path: '/personal',
    name: 'Personal',
    meta: {
      title: envTitle + ' - 个人中心'
    },
    component: Personal,
    children: [
      {
        path: 'info',
        name: 'Info',
        meta: {
          title: envTitle + ' - 个人中心'
        },
        component: Info
      },
      {
        path: 'login',
        name: 'Login',
        meta: {
          title: envTitle + ' - 个人中心 - 登入'
        },
        component: Login
      },
      {
        path: 'registered',
        name: 'Registered',
        meta: {
          title: envTitle + ' - 个人中心 - 注册'
        },
        component: Registered
      },
      {
        path: 'pointlog',
        name: 'PointLog',
        meta: {
          title: envTitle + ' - 个人中心 - 消费纪录'
        },
        component: PointLog
      }
    ]
  },
  // 書庫
  {
    path: '/bookclass',
    name: 'Bookclass',
    meta: {
      title: envTitle + ' - 书库'
    },
    component: Bookclass
  },
  // 書籍
  {
    path: '/books',
    name: 'Books',
    meta: {
      title: envTitle + ' - 书籍'
    },
    component: Books,
    children: [
      {
        // 書籍
        path: 'book/:bookId',
        name: 'Book',
        meta: {
          title: envTitle + ' - 书籍'
        },
        component: Book,
        props: true
      },
      {
        // 書籍 - 章節
        path: 'chapter/:chapterId',
        name: 'Chapter',
        meta: {
          title: envTitle + ' - 书籍 - 章节'
        },
        component: Chapter,
        props: true
      }
    ]
  },
  // 測試區
  {
    path: '/test/test1',
    name: 'Test1',
    meta: {
      title: envTitle + ' - 测试区1'
    },
    component: Test1
  },
  {
    path: '/test/test2',
    name: 'Test2',
    meta: {
      title: envTitle + ' - 测试区2'
    },
    component: Test2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
