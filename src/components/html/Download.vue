<template>
  <div class="download" v-if="isshow">
    <mu-flex class="flex-wrapper" align-items="center">
        <mu-flex class="title" justify-content="center" fill @click="clickDownload()">
          <img :src="cover">
        </mu-flex>
    </mu-flex>
  </div>
</template>

<script>
import ajaxPromotes from '@/api/promotes'

export default {
  name: 'Download',
  components: {},
  computed: {
    isApp: {
      get () {
        let isApp = window.localStorage.getItem('isApp')
        if (isApp === null) {
          isApp = 1
        }
        return isApp
      }
    },
    linkid: {
      get () {
        let linkid = window.localStorage.getItem('linkID')
        if (linkid === null) {
          linkid = 1
        }
        return linkid
      }
    }
  },
  data () {
    return {
      isshow: false,
      cover: require('@/assets/download/download.jpg'),
      debug: false
    }
  },
  watch: {
    isApp: function (value) {
      this.downloadSwitch()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > html > Download - 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.downloadSwitch()
    },
    downloadSwitch () {
      if (this.isApp === 1) {
        this.isshow = this.isAndroid()
      }
    },
    clickDownload () {
      // console.log('下載')
      var that = this
      ajaxPromotes.download(that.linkid).then(function (result) {
        // console.log('會員資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          // console.log(result)
          const apiData = result.data.data.download
          if (apiData !== null) {
            location.href = apiData.download
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.download {
  height: 3rem;
  .flex-wrapper {
    line-height: 3rem;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
