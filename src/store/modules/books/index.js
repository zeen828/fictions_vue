import ajaxBooktypes from '@/api/booktypes'

export default {
  namespaced: true,
  state: {
    // 書籍分類
    listBooktypes: [],
    // 章節下字體設定
    myColor: '#000000',
    myBlockColor: '#FFFFFF',
    myFamily: 'PMingLiU',
    mySize: 20,
    // 除錯
    debug: false
  },
  mutations: {
    setListBooktypes (state, val) {
      state.listBooktypes = val
    },
    setMyColor (state, val) {
      state.myColor = val
    },
    setMyBlockColor (state, val) {
      state.myBlockColor = val
    },
    setMyFamily (state, val) {
      state.myFamily = val
    },
    setMySize (state, val) {
      state.mySize = val
    },
    // 除錯
    debug (state, debug) {
      state.debug = debug
    }
  },
  getters: {
    getListBooktypes (state) {
      return state.listBooktypes
    },
    getMyColor (state) {
      return state.myColor
    },
    getMyBlockColor (state) {
      return state.myBlockColor
    },
    getMyFamily (state) {
      return state.myFamily
    },
    getMySize (state) {
      return state.mySize
    },
    debug (state) {
      return state.debug
    }
  },
  actions: {
    ready (context) {
      // console.log('Vues.store.model.books.action.ready')
      // console.log(context)
      context.dispatch('apiBooks/getBooktypes', {}, { root: true })
    },
    // 書籍類型
    getBooktypes (context) {
      // console.log('Vues.store.model.books.action.getAmounts')
      ajaxBooktypes.booktypes().then(function (result) {
        // console.log('Booktypes資料', result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.booktypes
          if (apiData !== null) {
            context.commit('setListBooktypes', apiData)
          }
        }
      })
    },
    debug (context) {
      // console.log(context)
    }
  }
}
