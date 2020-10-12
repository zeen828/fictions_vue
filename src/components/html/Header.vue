<template>
  <header class="header">
    <mu-appbar style="width: 100%;" color="deepOrange500">
      <mu-button icon slot="left" @click="gotoBack()">
        <mu-icon value="reply"></mu-icon>
      </mu-button>
      {{ title }}
      <mu-button icon slot="right" @click="gotoSearch()">
        <mu-icon value="search"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" @click="gotoHome()">
        <mu-icon value="home"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div>
      <mu-alert :color="headerAlertColor" @delete="headerAlert = false" delete v-if="headerAlert" transition="mu-scale-transition">
        <mu-icon left value="warning"></mu-icon>{{ headerAlertMsg }}
      </mu-alert>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {
    title: {
      type: String,
      default: ''// '元件標題'
    }
  },
  computed: {
    headerAlert: {
      get () {
        return this.$store.getters.getHeaderAlert
      },
      set (val) {
        this.$store.commit('setHeaderAlert', val)
      }
    },
    headerAlertColor: {
      get () {
        return this.$store.getters.getHeaderAlertColor
      },
      set (val) {
        this.$store.commit('setHeaderAlertColor', val)
      }
    },
    headerAlertMsg: {
      get () {
        return this.$store.getters.getHeaderAlertMsg
      },
      set (val) {
        this.$store.commit('setHeaderAlertMsg', val)
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
    // console.log('組件 > html > Header - 開始')
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
.header {
  margin-bottom: 10px;
}
</style>
