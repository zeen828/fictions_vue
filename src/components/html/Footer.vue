<template>
  <footer class="footer">
    <mu-bottom-nav :value.sync="footerShift">
      <mu-bottom-nav-item value="home" title="书城" icon="menu_book" to="/"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="classif" title="分类" icon="widgets" to="/classif/0"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="ranking" title="排行" icon="bar_chart" to="/ranking"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="person" title="我的" icon="person" to="/personal/info"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  computed: {
    footerShift: {
      get () {
        return this.$store.getters.getFooterShift
      },
      set (val) {
        this.$store.commit('setFooterShift', val)
      }
    }
  },
  data () {
    return {
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > html > Footer - 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
</style>
