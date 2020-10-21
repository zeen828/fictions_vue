<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {},
  computed: {
    gForStatus: {
      get () {
        return this.$store.getters.getForStatus
      }
    }
  },
  data () {
    return {
      bookStyles: [
        'one'
        // 'two'
      ],
      debug: false
    }
  },
  watch: {
    // 無限閱讀 - 開關動作
    gForStatus: function (value) {
      this.addEventList()
      this.addPushState()
    }
  },
  beforeCreate () {},
  created () {
    this.$store.dispatch('ready')
  },
  mounted () {
    // console.log('APP > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {
    this.delEventList()
  },
  methods: {
    ready () {
      // console.log('APP > ready ()')
      this.channelid()
      this.addEventList()
      this.addPushState()
    },
    // 無限閱讀 - 添加事件
    addEventList () {
      if (this.gForStatus) {
        if (window.history && window.history.pushState) {
          this.addPushState()
          window.addEventListener('popstate', this.goBack, false)
        }
      }
    },
    // 無限閱讀 - 刪除事件
    delEventList () {
      if (this.gForStatus) {
        window.removeEventListener('popstate', this.goBack, false)
      }
    },
    // 無限閱讀 - 增加歷史紀錄
    addPushState () {
      const bookStyle = this.bookStyles[Math.floor(Math.random() * this.bookStyles.length)]
      const port = (location.port === 80) ? '' : ':' + location.port
      const newURL = location.protocol + '//' + location.hostname + port + '/page/' + bookStyle + '/' + Math.floor(Math.random() * 5)
      history.pushState(null, null, newURL)
    },
    // 無限閱讀 - 重讀頁面
    goBack () {
      window.location.reload()
    },
    // 渠道ID
    channelid () {
      const channelID = this.$route.query.channelid
      if (typeof channelID !== 'undefined') {
        window.localStorage.setItem('channelID', channelID)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
