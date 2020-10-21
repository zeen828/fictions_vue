<template>
  <div id="app">
    <!-- 手機模式-start -->
    <mu-container>
      <mu-container data-mu-loading-color="orange500" data-mu-loading-overlay-color="rgba(0, 0, 0, 0.7)" v-loading="globalLoading" style="z-index:999">
      </mu-container>
      <ComDownload></ComDownload>
      <router-view/>
      <div class="footer_tmp"></div>
      <ComFooter></ComFooter>
    </mu-container>
    <!-- 手機模式-end -->
  </div>
</template>

<script>
import ComDownload from '@/components/html/Download.vue'
import ComFooter from '@/components/html/Footer.vue'
import ajaxAnalysis from '@/api/analysis'

export default {
  name: 'App',
  components: {
    ComDownload,
    ComFooter
  },
  props: {},
  computed: {
    globalLoading: {
      get () {
        return this.$store.getters.getglobalLoading
      },
      set (val) {
        this.$store.commit('setGlobalLoading', val)
      }
    }
  },
  data () {
    return {
      debug: false
    }
  },
  watch: {},
  beforeCreate () {},
  created () {
    this.$store.dispatch('ready')
  },
  mounted () {
    // console.log('APP > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      var that = this
      this.version()
      this.isApp()
      this.appVer()
      this.channelid()
      this.linkid()
      // 1秒後執行會員訪問統計API
      setTimeout(() => {
        // console.log('3秒後執行')
        that.usersAccessAjax()
        that.usersAccess()
      }, 1000)
    },
    version () {
      // 版本
      window.localStorage.setItem('version', 'V1.0.14')
    },
    isApp () {
      // isApp
      // APP(1:WAP,2:APP)
      const isApp = this.$route.query.app
      if (typeof isApp !== 'undefined') {
        // console.log('channelID:', channelID)
        window.localStorage.setItem('isApp', isApp)
      }
    },
    appVer () {
      // isApp
      // APP(1:WAP,2:APP)
      const appVer = this.$route.query.appver
      if (typeof appVer !== 'undefined') {
        // console.log('channelID:', channelID)
        window.localStorage.setItem('appVer', appVer)
      }
    },
    channelid () {
      // channel_id 渠道ID
      const channelID = this.$route.query.channelid
      if (typeof channelID !== 'undefined') {
        // console.log('channelID:', channelID)
        window.localStorage.setItem('channelID', channelID)
      }
    },
    linkid () {
      // link_id 連結ID
      const linkID = this.$route.query.linkid
      if (typeof linkID !== 'undefined') {
        // console.log('linkID:', linkID)
        window.localStorage.setItem('linkID', linkID)
      }
    },
    usersAccess () {
      // console.log('usersAccess')
      var that = this
      // 1分鐘檢查一次
      setTimeout(() => {
        // console.log('重複執行')
        that.usersAccessAjax()
        that.usersAccess()
      }, 60000)
    },
    usersAccessAjax () {
      // console.log('usersAccessAjax')
      var that = this
      // 每日活耀
      const accessDay = that.$cookies.get('user_access_day')
      if (accessDay === null) {
        ajaxAnalysis.createLogsUsersAccess(0).then(function (result) {
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data.data.createLogsUsersAccess
            if (apiData !== null) {
              var dayEndSec = that.getDayEndSec()
              that.$cookies.set('user_access_day', true, dayEndSec)
            }
          }
        })
      }
      // 每日活耀
      const accesHour = that.$cookies.get('user_access_hour')
      if (accesHour === null) {
        ajaxAnalysis.createLogsUsersAccess(1).then(function (result) {
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data.data.createLogsUsersAccess
            if (apiData !== null) {
              var hourEndSec = that.getHourEndSec()
              that.$cookies.set('user_access_hour', true, hourEndSec)
            }
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;
  height: auto;
}
// 調整版面下方被壓住用
.footer_tmp {
  //height: 200px;
  margin: 60px;
}
</style>
