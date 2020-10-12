import Api from '@/api/baseQL'

export default {
  // 章節ID查詢章節
  byChapterId (id = 1, token = '') {
    var data = {
      query: `{
        chapter(id: ${id}, token: "${token}") {
          chapterId:id,
          bookId:book_id,
          book {
            bookId:id,
            name,
          }
          name,
          content,
          description,
          free,
          money,
          payment,
          previous,
          next,
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 書籍ID查詢章節
  byBookId (bookId = '', page = 1) {
    var data = {
      query: `{
        chapters(bookId: ${bookId}, page: ${page}, limit: 10) {
          chapterId:id,
          bookId:book_id,
          name,
          description,
          free,
          money,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
