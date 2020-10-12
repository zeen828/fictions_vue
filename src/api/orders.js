import Api from '@/api/baseQL'

export default {
  // 建立訂單
  createOrder (token = '', amountId = 0, paymentId = 0) {
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
      query: `mutation order {
        automaticCreateOrder(token: "${token}", amount_id: ${amountId}, payment_id: ${paymentId}, app: ${isApp}, channel_id: ${channelID}, link_id: ${linkID}) {
          id,
          payurl,
        }
      }`
    }
    return Api().post('/graphql', data)
  }
}
