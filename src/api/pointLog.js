import Api from '@/api/baseQL'

export default {
  // 查詢點數紀錄
  byToken (token = '', page = 1) {
    var data = {
      query: `{
        pointlogs(token: "${token}", page: ${page}, limit: 20) {
          id,
          point_old,
          point,
          point_new,
          remarks,
          status,
          created_at,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
