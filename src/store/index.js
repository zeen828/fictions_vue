import Vue from 'vue'
import Vuex from 'vuex'

import apiUsers from './modules/users'
import apiBooks from './modules/books'
import apiRanking from './modules/ranking'
import apiPayments from './modules/payments'

Vue.use(Vuex)

export default new Vuex.Store({
  // store的子模組，為了開發大型專案，方便狀態管理而使用的
  modules: {
    apiUsers,
    apiBooks,
    apiRanking,
    apiPayments
  },
  // 用來資料共享資料儲存
  state: {
    // 表投錯誤提示
    headerAlert: false,
    // 表投錯誤提示(success:綠,warning:黃,info:藍,error:紅)
    headerAlertColor: 'info',
    // 表投錯誤提示訊息
    headerAlertMsg: '',
    // 全局讀取
    globalLoading: false,
    // 頁尾顯示
    footerShift: 'home',
    // 除錯
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setHeaderAlert (state, val) {
      state.headerAlert = val
    },
    setHeaderAlertColor (state, val) {
      state.headerAlertColor = val
    },
    setHeaderAlertMsg (state, val) {
      state.headerAlertMsg = val
    },
    setGlobalLoading (state, val) {
      state.globalLoading = val
    },
    setFooterShift (state, val) {
      state.footerShift = val
    },
    // 除錯
    debug (state, debug) {
      state.debug = debug
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getHeaderAlert (state) {
      return state.headerAlert
    },
    getHeaderAlertColor (state) {
      return state.headerAlertColor
    },
    getHeaderAlertMsg (state) {
      return state.headerAlertMsg
    },
    getglobalLoading (state) {
      return state.globalLoading
    },
    getFooterShift (state) {
      return state.footerShift
    },
    debug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready: function ({ commit, dispatch, rootState, state }) {
      // console.log('Vues.store.action.ready')
      // console.log(commit)
      // console.log(dispatch)
      // console.log(rootState)
      // console.log(state)
      dispatch('apiUsers/ready', {}, { root: true })
      dispatch('apiBooks/ready', {}, { root: true })
      dispatch('apiRanking/ready', {}, { root: true })
      dispatch('apiPayments/ready', {}, { root: true })
    }
  }
})
