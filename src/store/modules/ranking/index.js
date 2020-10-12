import ajaxRanking from '@/api/ranking'

export default {
  namespaced: true,
  state: {
    rankingBookIds: {
      // 1-首頁輪播
      carousel: '',
      // 2-主動推薦(圖)
      initiative: '',
      // 3-主動推薦(文字)
      initiativeList: '',
      // 4-新書搶鮮(圖)
      new: '',
      // 5-新書搶鮮(文字)
      newList: '',
      // 6-完結精品(圖)
      over: '',
      // 7-完結精品(文字)
      overList: '',
      // 8-連載精品(圖)
      serialize: '',
      // 9-連載精品(文字)
      serializeList: '',
      // 10-免費小說(圖)
      free: '',
      // 11-免費小說(文字)
      freeList: '',
      // 12-周排行
      week: '',
      // 13-月排行
      month: '',
      // 14-總排行
      sum: '',
      // 15-書庫
      book: ''
    },
    // 除錯
    debug: false
  },
  mutations: {
    // 1-首頁輪播
    setCarousel (state, val) {
      state.rankingBookIds.carousel = val
    },
    // 2-主動推薦(圖)
    setInitiative (state, val) {
      state.rankingBookIds.initiative = val
    },
    // 3-主動推薦(文字)
    setInitiativeList (state, val) {
      state.rankingBookIds.initiativeList = val
    },
    // 4-新書搶鮮(圖)
    setNew (state, val) {
      state.rankingBookIds.new = val
    },
    // 5-新書搶鮮(文字)
    setNewList (state, val) {
      state.rankingBookIds.newList = val
    },
    // 6-完結精品(圖)
    setOver (state, val) {
      state.rankingBookIds.over = val
    },
    // 7-完結精品(文字)
    setOverList (state, val) {
      state.rankingBookIds.overList = val
    },
    // 8-連載精品(圖)
    setSerialize (state, val) {
      state.rankingBookIds.serialize = val
    },
    // 9-連載精品(文字)
    setSerializeList (state, val) {
      state.rankingBookIds.serializeList = val
    },
    // 10-免費小說(圖)
    setFree (state, val) {
      state.rankingBookIds.free = val
    },
    // 11-免費小說(文字)
    setFreeList (state, val) {
      state.rankingBookIds.freeList = val
    },
    // 12-周排行
    setWeek (state, val) {
      state.rankingBookIds.week = val
    },
    // 13-月排行
    setMonth (state, val) {
      state.rankingBookIds.month = val
    },
    // 14-總排行
    setSum (state, val) {
      state.rankingBookIds.sum = val
    },
    // 15-書庫
    setBook (state, val) {
      state.rankingBookIds.book = val
    },
    // 除錯
    debug (state, debug) {
      state.debug = debug
    }
  },
  getters: {
    getCarousel (state) {
      return state.rankingBookIds.carousel
    },
    getInitiative (state) {
      return state.rankingBookIds.initiative + ',' + state.rankingBookIds.initiativeList
    },
    getNew (state) {
      return state.rankingBookIds.new + ',' + state.rankingBookIds.newList
    },
    getOver (state) {
      return state.rankingBookIds.over + ',' + state.rankingBookIds.overList
    },
    getSerialize (state) {
      return state.rankingBookIds.serialize + ',' + state.rankingBookIds.serializeList
    },
    getFree (state) {
      return state.rankingBookIds.free + ',' + state.rankingBookIds.freeList
    },
    getWeek (state) {
      return state.rankingBookIds.week
    },
    getMonth (state) {
      return state.rankingBookIds.month
    },
    getSum (state) {
      return state.rankingBookIds.sum
    },
    getBook (state) {
      return state.rankingBookIds.book
    },
    debug (state) {
      return state.debug
    }
  },
  actions: {
    ready (context) {
      // console.log('Vues.store.model.ranking.action.ready')
      // console.log(context)
      context.dispatch('apiRanking/getRanks', {}, { root: true })
    },
    // 排行資料
    getRanks (context) {
      // console.log('Vues.store.model.ranking.action.getRanks')
      ajaxRanking.ranks().then(function (result) {
        // console.log('Soter排行資料', result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.ranks
          if (apiData !== null) {
            apiData.forEach((item, index) => {
              // console.log(item)
              // console.log(index)
              switch (item.id) {
                case 1:// 首頁輪播圖
                  context.commit('setCarousel', item.bookIds)
                  break
                case 2:// 主動力薦(圖)
                  context.commit('setInitiative', item.bookIds)
                  break
                case 3:// 主動力薦(文字)
                  context.commit('setInitiativeList', item.bookIds)
                  break
                case 4:// 新書上架(圖)
                  context.commit('setNew', item.bookIds)
                  break
                case 5:// 新書上架(列表)
                  context.commit('setNewList', item.bookIds)
                  break
                case 6:// 完結精品(圖)
                  context.commit('setOver', item.bookIds)
                  break
                case 7:// 完結精品(列表)
                  context.commit('setOverList', item.bookIds)
                  break
                case 8:// 連載精品(圖)
                  context.commit('setSerialize', item.bookIds)
                  break
                case 9:// 連載精品(列表)
                  context.commit('setSerializeList', item.bookIds)
                  break
                case 10:// 免費小說(圖)
                  context.commit('setFree', item.bookIds)
                  break
                case 11:// 免費小說(列表)
                  context.commit('setFreeList', item.bookIds)
                  break
                case 12:// 周排行榜
                  context.commit('setWeek', item.bookIds)
                  break
                case 13:// 閱排行榜
                  context.commit('setMonth', item.bookIds)
                  break
                case 14:// 總排行榜
                  context.commit('setSum', item.bookIds)
                  break
                case 15:// 書庫
                  context.commit('setBook', item.bookIds)
                  break
                default:

                  break
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
