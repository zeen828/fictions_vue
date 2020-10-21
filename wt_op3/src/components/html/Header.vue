<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <img src="http://images1.6zcool.com/pic/7fea696ea5102c6e7c909275e9dd1e8e-0.jpg" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  computed: {
    titles: {
      get () {
        return this.$store.getters['apiBooks/getTitles']
      }
    }
  },
  data () {
    return {
      title: '',
      src: 'img/html/img01.html', // 來源圖
      // domain: 'http://img2.yurunpool.com/',
      // domain: 'http://dev.numyue.cn:930/',
      domain: '',
      native: new XMLHttpRequest(),
      retryed: 0,
      base64Image: require('@/assets/empty.jpg'), // 作業圖
      debug: false
    }
  },
  watch: {
    titles: function (value) {
      this.getTitle()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('組件 > html > Header.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.getTitle()
    },
    getTitle () {
      this.title = this.titles[Math.floor(Math.random() * this.titles.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  h1 {
    text-align: center;
    padding: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
}
</style>
