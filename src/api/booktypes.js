import Api from '@/api/baseQL'

export default {
  // 書籍類型
  booktypes () {
    var data = {
      query: `{
        booktypes(page:1, limit:50) {
          typeId:id,
          name,
          description,
          color,
          sex,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
