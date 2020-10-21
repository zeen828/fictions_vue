<template>
  <div class="home">
    <ComHeader></ComHeader>
    <router-view/>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
export default {
  name: 'Home',
  components: {
    ComHeader
  },
  props: [],
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
    console.log('Home > Index.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      console.log('Home > Index.vue > ready()')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
