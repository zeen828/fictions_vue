import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      debug: false
    }
  },
  methods: {
    isAndroid () {
      console.log('isAndroid')
      const u = navigator.userAgent
      // const app = navigator.appVersion
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
      if (isAndroid) {
        return true
      } else {
        return false
      }
    },
    isIOS () {
      console.log('isIOS')
      const u = navigator.userAgent
      // const app = navigator.appVersion
      const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isIOS) {
        return true
      } else {
        return false
      }
    },
    isWechat () {
      console.log('isWechat')
      const ua = navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) === 'micromessenger') {
        return true
      } else {
        return false
      }
    }
  }
})
