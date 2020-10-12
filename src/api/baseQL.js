import axios from 'axios'

export default () => {
  /**
   * axios實利
   */
  var ajaxBase = axios.create({
    withCredentials: false,
    // API網址
    baseURL:
      process.env.VUE_APP_API_PROTOCOL +
      process.env.VUE_APP_API_DOMAIN,
    // 表頭
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Token': 'Basic '
    },
    sponseType: 'json'
  })
  return ajaxBase
}
