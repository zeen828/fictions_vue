<template>
  <div class="pointlog">
    <ComHeader :title="pageTitle"></ComHeader>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list toggle-nested>
          <mu-expansion-panel v-for="(val, index) in apiData" :key="index" :expand="panel === 'panel' + index" @change="toggle('panel' + index)">
            <div slot="header">{{ val.created_at }} 点数{{ val.point_old }}变{{ val.point_new }}</div>
            {{ val.remarks }}<br/>
            原本：{{ val.point_old }} 异动：{{ val.point }} 剩余：{{ val.point_new }}
          </mu-expansion-panel>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'

import ajaxPointLog from '@/api/pointLog'

export default {
  name: 'PointLog',
  components: {
    ComHeader
  },
  computed: {
    TokenJWT: {
      get () {
        return this.$store.getters['apiUsers/getTokenJWT']
      }
    }
  },
  data () {
    return {
      pageTitle: '消费纪录',
      apiData: [],
      selects: [],
      panel: '',
      open: 'send',
      page: 1,
      // 讀取
      refreshing: false,
      loading: false,
      debug: false
    }
  },
  watch: {
    TokenJWT: function (value) {
      // console.log('w_TokenJWT')
      this.callOrders()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('個人中心 > 消費紀錄 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callOrders()
    },
    toggle (panel) {
      this.panel = panel === this.panel ? '' : panel
    },
    // 第一次取得書庫資料(排行榜上死資料)
    callOrders () {
      var that = this
      ajaxPointLog.byToken(that.TokenJWT, that.page).then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.pointlogs
          if (apiData !== null) {
            if (that.page === 1) {
              // 第一次處理
              that.apiData = apiData
            } else {
              // 第二次以後處理
              that.apiData = that.apiData.concat(apiData)
              that.loading = false
            }
            that.page += 1
          }
        }
      })
    },
    // 讀取1
    refresh () {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
    },
    // 讀取2
    load () {
      var that = this
      if (that.loading === true) {
        return
      }
      that.loading = true
      that.callOrders()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
