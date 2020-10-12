<template>
  <div class="personal">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Personal',
  components: {},
  data () {
    return {
      pageTitle: '個人中心',
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('個人中心 > 開始')
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

<style lang="scss" scoped></style>
