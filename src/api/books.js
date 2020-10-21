import Api from '@/api/baseQL'

export default {
  // 書籍ID查詢書籍
  byBookId (bookId = '') {
    var data = {
      query: `{
        book(id: ${bookId}) {
          bookId:id,
          name,
          description,
          typeId:tid,
          cover,
          tags,
          author,
          click_w,
          click_m,
          click_s,
          chapter {
            chapterId:id,
            bookId:book_id,
            name,
            description,
            free,
            money,
            payment,
          },
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 書籍ID多筆查詢書籍(範例:"70884,46805")
  byBookIds (bookIds = '', nature = 0) {
    var data = {
      query: `{
        books(ids: "${bookIds}", nature: ${nature}) {
          bookId:id,
          name,
          description,
          typeId:tid,D
          cover,
          cover_h,
          tags,
          author,
          nature,
          click_w,
          click_m,
          click_s,
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 分類ID查詢書籍
  byTypeId (typeId = '', nature = 0, page = 1) {
    var data = {
      query: `{
        books(booktypeId: ${typeId}, nature: ${nature}, page: ${page}, limit: 10) {
          bookId:id,
          name,
          description,
          typeId:tid,
          cover,
          tags,
          author,
          nature,
          click_w,
          click_m,
          click_s,
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 關鍵字查詢書籍
  byKeyword (Keyword = '', nature = 0, page = 1) {
    var data = {
      query: `{
        books(keyword: "${Keyword}", nature: ${nature}, page: ${page}, limit: 10) {
          bookId:id,
          name,
          description,
          typeId:tid,
          cover,
          tags,
          author,
          nature,
          click_w,
          click_m,
          click_s,
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 取書籍清單
  books (nature = 0, page = 1) {
    var data = {
      query: `{
        books(nature: ${nature}, page: ${page}, limit: 10) {
          bookId:id,
          name,
          description,
          typeId:tid,
          cover,
          tags,
          author,
          nature,
          click_w,
          click_m,
          click_s,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
