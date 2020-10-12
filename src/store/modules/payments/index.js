import ajaxAmounts from '@/api/amounts'

export default {
  namespaced: true,
  state: {
    // 除錯
    listAmounts: [],
    listAmountsVip: [],
    debug: false
  },
  mutations: {
    setListAmounts (state, val) {
      state.listAmounts = val
    },
    pushListAmounts (state, val) {
      state.listAmounts.push(val)
    },
    setListAmountsVip (state, val) {
      state.listAmountsVip = val
    },
    pushListAmountsVip (state, val) {
      state.listAmountsVip.push(val)
    },
    // 除錯
    debug (state, debug) {
      state.debug = debug
    }
  },
  getters: {
    getListAmounts (state) {
      return state.listAmounts
    },
    getListAmountsVip (state) {
      return state.listAmountsVip
    },
    debug (state) {
      return state.debug
    }
  },
  actions: {
    ready (context) {
      // console.log('Vues.store.model.payments.action.ready')
      // console.log(context)
      context.dispatch('apiPayments/getAmounts', {}, { root: true })
    },
    // 儲值金額
    getAmounts (context) {
      // console.log('Vues.store.model.payments.action.getAmounts')
      // 刷斌避免重新堆疊資料
      context.commit('setListAmounts', [])
      context.commit('setListAmountsVip', [])
      ajaxAmounts.amounts().then(function (result) {
        // console.log('Amount資料', result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.amounts
          if (apiData !== null) {
            apiData.forEach((item, index) => {
              // console.log(item)
              // console.log(index)
              if (item.vip === 1) {
                context.commit('pushListAmountsVip', item)
              } else {
                context.commit('pushListAmounts', item)
              }
            })
          }
        }
      })
    },
    debug (context) {
      // console.log(context)
    }
  }
}
