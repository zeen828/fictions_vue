export default {
  namespaced: true,
  state: {
    // 自訂隨機標題
    titles: [
      '標題一',
      '標題二',
      '標題三',
      '標題四'
    ],
    // 渠道正常書籍資料
    books: [],
    // 除錯
    debug: false
  },
  getters: {
    getTitles (state) {
      return state.titles
    },
    getBooks (state) {
      return state.books
    },
    getDebug (state) {
      return state.debug
    }
  },
  mutations: {
    setTitles (state, newVal) {
      state.titles = newVal
    },
    setBooks (state, newVal) {
      state.books = newVal
    },
    // 除錯
    setDebug (state, newVal) {
      state.debug = newVal
    }
  },
  actions: {
    ready (context) {
      console.log('Vues.store.model.books.action.ready')
      // console.log(context)
    }
  }
}
