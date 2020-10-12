import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'

export default () => {
  /**
   * 簽名用函式
   * @param {*} req
   */
  var signString = function (req) {
    // console.log("簽名");
    // console.log(req);
    var obj = {}
    for (var key in req) {
      obj[key] = req[key]
    }
    var tmp = Date.parse(new Date()).toString()
    var timestamp = tmp.substr(0, 13)
    obj.timestamp = timestamp
    var arr = []
    var num = 0
    for (var i1 in obj) {
      arr[num] = i1
      num++
    }
    var sortArr = arr.sort()
    var stringA = ''
    var j = 0
    for (var i in sortArr) {
      var v = obj[sortArr[i]]
      if (!v) {
        v = ''
      }
      stringA += sortArr[i] + '=' + v
      if (j < sortArr.length - 1) {
        stringA += '&'
      }
      j++
    }
    var keyword = '&key=Cartoon$2019&#'
    var sign = md5(stringA + keyword)
    return {
      timestamp: timestamp,
      sign: sign.toUpperCase()
    }
  }

  // token處理
  let tokenAuto = ''
  // 先取URL query再取llocal Storage
  tokenAuto = new URL(location.href).searchParams.get('token')
  if (tokenAuto == null) {
    tokenAuto = window.localStorage.getItem('token')
  }

  // 推廣ID
  let linkid = ''
  // 先取URL query再取llocal Storage
  linkid = new URL(location.href).searchParams.get('linkid')
  if (linkid == null) {
    linkid = window.localStorage.getItem('linkid')
  }
  // link處理

  /**
   * axios實利
   */
  var ajaxBase = axios.create({
    // 判斷是否垮域,用來解決CORS
    // withCredentials: false,
    //
    baseURL:
      process.env.VUE_APP_API_PROTOCOL +
      process.env.VUE_APP_API_DOMAIN +
      '/' +
      process.env.VUE_APP_API_VERSION,
    // 表頭
    headers: {
      // Accept: "application/json",
      // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      // "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
      // "Content-type": "application/x-www-form-urlencoded",
      'Access-Token': tokenAuto,
      timestamp: '',
      sign: ''
    },
    // 請求超時1000毫秒(1秒)
    // timeout: 1000,
    // onUploadProgress(progressEvt) {},
    // onDownloadProgress(progressEvt) {},
    // 資料發送至伺服器前，可作資料處理
    // 陣列中最後的函式必須返回字串、ArrayBuffer、Stream
    transformRequest: [
      function (data, headers) {
        // 推廣來源
        data.linkid = linkid
        // 組簽名
        // console.log("目標S");
        // console.log(data);
        // console.log("目標E");
        var signParams = signString(data)
        headers.timestamp = signParams.timestamp
        headers.sign = signParams.sign
        // return data;
        // 攔截候傳利資料會變物件改寫回來
        // return JSON.stringify(data);
        return qs.stringify(data)
      }
    ]
    // 在進入 then / catch 前可作資料處理
    // transformResponse: [function(data) {return data;}]
  })

  //
  return ajaxBase
}
