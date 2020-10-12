import Api from '@/api/baseQL'

export default {
  // 做會員訪問統計紀錄
  createLogsUsersAccess (mode = 0) {
    // mode - 類型(0:周排行,1:月排行)
    let isApp = window.localStorage.getItem('isApp')
    if (isApp === null) {
      isApp = 1
    }
    let channelID = window.localStorage.getItem('channelID')
    if (channelID === null) {
      channelID = 0
    }
    let linkID = window.localStorage.getItem('linkID')
    if (linkID === null) {
      linkID = 0
    }
    var data = {
      query: `mutation logs {
        createLogsUsersAccess(mode: ${mode}, app: ${isApp}, channel_id: ${channelID}, link_id: ${linkID}) {
          code,
          msg,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
