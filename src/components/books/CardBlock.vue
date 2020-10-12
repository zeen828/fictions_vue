<template>
  <div class="cardBlock">
    <div @click="gotoUrl('/books/book/'+ bookId)">
      <div>
        <img :src="cover">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlock',
  components: {},
  props: {
    bookData: Array,
    bookId: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''// '元件標題'
    },
    cover: {
      type: String,
      default: require('@/assets/load/300x400.png')
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
    // console.log('組件 > books > 書卡垂直 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    }
  }
}
// https://muse-ui.org/#/zh-CN/card
</script>

<style lang="scss" scoped>
.cardBlock {
  width: 33%;
  padding: 5px;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
}
</style>
