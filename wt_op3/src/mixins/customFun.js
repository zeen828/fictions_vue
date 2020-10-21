import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      debug: false
    }
  },
  methods: {
    globalDebug () {
      console.log('mixins > customFun.js > debug()', this.debug)
    }
  }
})
