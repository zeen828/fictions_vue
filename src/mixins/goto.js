import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      debug: false
    }
  },
  methods: {
    /**
     * 往自訂路徑
     */
    gotoUrl (url = '/') {
      if (url) {
        this.$router.push({ path: url }).catch(err => {
          console.log('1.3.X vue-router Bug')
          console.log(err)
        })
      }
    },
    /**
     * 回上頁
     */
    gotoBack () {
      this.$router.go(-1)
    },
    /**
     * 往首頁
    */
    gotoHome () {
      this.$router.push({ path: '/' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往分類
     */
    gotoClassif (tid = 0) {
      this.$router.push({ path: '/classif/' + tid }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往排行榜
     */
    gotoRanking () {
      this.$router.push({ path: '/ranking' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往閱讀紀錄
     */
    gotoRecord () {
      this.$router.push({ path: '/record' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往充值
     */
    gotoRecharge () {
      this.$router.push({ path: '/recharge' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往個人中心
     */
    gotoPersonal () {
      this.$router.push({ path: '/personal/info' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往充值紀錄
     */
    gotoPointLog () {
      this.$router.push({ path: '/personal/pointlog' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往書庫
     */
    gotoBooks () {
      this.$router.push({ path: '/bookclass' }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往搜尋
     */
    gotoSearch (keyword = '') {
      this.$router.push({ path: '/search' + keyword }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往搜尋
     */
    gotoTest (keyword = '') {
      this.$router.push({ path: '/test/test1' + keyword }).catch(err => {
        console.log('1.3.X vue-router Bug')
        console.log(err)
      })
    },
    /**
     * 往客服
     */
    gotoService () {
      const url = 'http://211.78.94.1/auto.asp?u=ChanhLong&laguage=cn&blank=1'
      const msg = '进客服系统？'
      const isApp = window.localStorage.getItem('isApp')
      if (isApp === '2') {
        location.href = url
      } else {
        if (confirm(msg) === true) {
          // 跳轉
          // location.href = url
          // 開新視窗
          window.open(url, '_blank')
          return true
        } else {
          return false
        }
      }
    }
  }
})
