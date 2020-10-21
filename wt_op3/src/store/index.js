import Vue from 'vue'
import Vuex from 'vuex'

import apiBooks from './modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  // 用來資料共享資料儲存
  state: {
    // 無限閱讀開關
    forStatus: false,
    // 渠道ID
    channelId: 0,
    // 除錯
    debug: false
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getForStatus (state) {
      return state.forStatus
    },
    getChannelId (state) {
      return state.channelId
    }
  },
  // 用來註冊改變資料狀態
  mutations: {
    setForStatus (state, newVal) {
      state.forStatus = newVal
    },
    setChannelId (state, newVal) {
      state.channelId = newVal
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready: function ({ commit, dispatch, rootState, state }) {
      console.log('Vues.store.action.ready')
      // console.log(commit)
      // console.log(dispatch)
      // console.log(rootState)
      // console.log(state)
      // 執行
      dispatch('apiBooks/ready', {}, { root: true })
    }
  },
  // store的子模組，為了開發大型專案，方便狀態管理而使用的
  modules: {
    apiBooks
  }
})
