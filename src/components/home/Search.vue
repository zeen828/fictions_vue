<template>
  <article class="search">
    <mu-text-field v-model="keyword" icon="search" @keyup.enter="goSearch()"></mu-text-field>
  </article>
</template>

<script>
export default {
  name: 'Search',
  components: {},
  data () {
    return {
      keyword: '',
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > home > 搜尋 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    },
    goSearch () {
      if (this.keyword) {
        // window.location.href = url
        this.$router.push('/search/' + this.keyword).catch(err => {
          console.log('1.3.X vue-router Bug')
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 10%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
