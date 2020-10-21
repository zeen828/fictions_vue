<template>
  <div class="two">
    <h1>Two</h1>
  </div>
</template>

<script>
export default {
  name: 'Two',
  components: {},
  props: {
    channelId: {
      type: Number,
      default: 0
    }
  },
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
    console.log('Home > pages > Two.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      console.log('Home > pages > Two.vue > ready()')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
