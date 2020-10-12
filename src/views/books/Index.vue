<template>
  <div class="books">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Books',
  components: {},
  data () {
    return {
      pageTitle: '书籍',
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('書庫 > 開始')
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
.books {
  width: 100%;
  height: auto;
}
</style>
