import Api from '@/api/baseQL'

export default {
  // 儲值金額查詢
  amounts () {
    var data = {
      query: `{
        amounts(page: 1, limit: 50) {
          id,
          name,
          description,
          price,
          point_base,
          point_give,
          points,
          vip,
          vip_name,
          vip_day,
          is_default,
          payment {
            id,
            name,
            sdk,
            domain
          },
          test_payment {
            id,
            name,
            sdk,
            domain
          }
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
