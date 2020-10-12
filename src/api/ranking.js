import Api from '@/api/baseQL'

export default {
  // 排行榜查詢
  byRankId (id = 1) {
    var data = {
      query: `{
        rank(id: ${id}) {
          id,
          name,
          bookIds:book_id,
          random_title,
          random_tag
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 排行榜查詢
  ranks () {
    var data = {
      query: `{
        ranks(page: 1, limit: 50) {
          id,
          name,
          bookIds:book_id,
          random_title,
          random_tag
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 周排行榜
  week () {
    return this.byRankId(12)
  }
}
