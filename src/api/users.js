import Api from '@/api/baseQL'

export default {
  // 會員登入
  login (account = '', password = '') {
    var data = {
      query: `{
        login(account: "${account}", password: "${password}") {
          id,
          token_jwt
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 會員註冊
  registered (account = '', password = '', phone = '') {
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
      query: `mutation user {
        createUser(account: "${account}", password: "${password}", phone: "${phone}", app: ${isApp}, channel_id: ${channelID}, link_id: ${linkID}) {
          id,
          account,
          password,
          nick_name,
          phone,
          sex,
          points,
          vip,
          vip_at,
          remarks,
          token_jwt
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 一鍵會員註冊
  autoRegistered () {
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
      query: `mutation user {
        automaticCreateUser(app: ${isApp}, channel_id: ${channelID}, link_id: ${linkID}) {
          id,
          account,
          password,
          nick_name,
          phone,
          sex,
          points,
          vip,
          vip_at,
          remarks,
          token_jwt
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 會員檢查token
  byToken (token = '') {
    var data = {
      query: `{
        user(token: "${token}") {
          id,
          account,
          password,
          nick_name,
          phone,
          sex,
          points,
          vip,
          vip_at,
          remarks,
          token_jwt
        }
      }`
    }
    return Api().post('/graphql', data)
  },
  // 會員 => 簽到
  sign (token = '') {
    var data = {
      query: `{
        sign(token: "${token}") {
          code,
          msg,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
