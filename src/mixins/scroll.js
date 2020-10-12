import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      debug: false
    }
  },
  methods: {
    /**
     * 可视区域的高度
     */
    getWindowHeight () {
      return document.documentElement.clientHeight
    },
    /**
     * 滚动高度
     */
    getScrollHeight () {
      return Math.max(document.documentElement.scrollTop, window.pageYOffset || 0)
    },
    /**
     * 文档高度
     */
    getDocumentTop () {
      return document.documentElement.offsetHeight
    }
  }
})
