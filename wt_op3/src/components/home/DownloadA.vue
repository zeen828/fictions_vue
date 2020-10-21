<template>
  <div class="downloadA">
    <p class="unfinished">【未完待续...后续更多未删减精彩内容】</p>
    <p class="finger">👇👇👇</p>
    <div class="download xin"><a href="javascript:;" class="goDownload">点击下载 继续阅读未删减完整版</a></div>
    <p class="prompt">
      <b>点击下载 ↑↑↑，继续看未删减完整版故事*_*</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DownloadA',
  components: {},
  props: {},
  computed: {},
  data () {
    return {
      debug: false
    }
  },
  watch: {},
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('組件 > home > DownloadA.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      console.log('組件 > home > DownloadA.vue > ready()')
    }
  }
}
</script>

<style lang="scss" scoped>
.downloadA {
  text-align: center;
  .unfinished {
    font-size: 16px;
    color: #FF6666;
    padding-bottom: 0.1rem;
  }
  .finger {
    font-size: 24px;
    color: #FF6666;
    padding-top: 5px;
    padding-bottom: 8px;
  }
  .download {
    a {
      display: block;
      background: #f53a17;
      color: #FFF;
      width: 99%;
      height: 4rem;
      line-height: 4rem;
      font-size: 1.2rem;
      border-radius: 8px;
      box-shadow: 0 0 5px #6F6F6F;
      border: 1px solid #f53a17;
    }
  }
  .prompt {
    line-height: 1.8rem;
    padding-top: 0.5rem;
    b {
      font-weight: normal;
    }
  }
}
</style>
