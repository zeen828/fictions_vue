import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      debug: false
    }
  },
  methods: {
    getHourEndSec () {
      var d = new Date()
      return 3600 - d.getMinutes() * 60 - d.getSeconds()
    },
    getDayEndSec () {
      var d = new Date()
      return 86400 - d.getHours() * 3600 - d.getMinutes() * 60 - d.getSeconds()
    }
  }
})
