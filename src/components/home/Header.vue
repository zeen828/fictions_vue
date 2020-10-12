<template>
  <header class="header">
    <mu-appbar style="width: 100%;" color="deepOrange500">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{ title }}
      <mu-button icon slot="right" @click="gotoSearch()">
        <mu-icon value="search"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" @click="gotoBooks()">
        <mu-icon value="menu_book"></mu-icon>
      </mu-button>
    </mu-appbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {
    title: {
      type: String,
      default: '轻言小说'
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
    // console.log('組件 > Home > Header - 開始')
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
