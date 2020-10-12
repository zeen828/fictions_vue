<template>
  <article class="carousel">
    <mu-carousel>
      <mu-carousel-item v-for="(val, index) in lists" :key="index">
        <div>
          <ComCardBanner :bookId="val.bookId" :title="val.name" :cover="val.cover" :description="val.description" :author="val.author" :isNew="val.isNew" :isMore="val.isMore" :isOver="val.isOver"></ComCardBanner>
        </div>
      </mu-carousel-item>
    </mu-carousel>
  </article>
</template>

<script>
import ComCardBanner from '@/components/books/CardBanner.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Carousel',
  components: {
    ComCardBanner
  },
  computed: {
    bookIdsCarousel: {
      get () {
        return this.$store.getters['apiRanking/getCarousel']
      }
    }
  },
  data () {
    return {
      lists: [],
      debug: false
    }
  },
  watch: {
    bookIdsCarousel: function (value) {
      this.callBooksCarousel()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > home > 輪播 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.callBooksCarousel()
    },
    callBooksCarousel () {
      var that = this
      // console.log('callBooksCarousel取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsCarousel).then(function (result) {
        // console.log('callBooksCarousel書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.lists = that.lists.concat(apiData)
          }
        }
      })
    }
  }
}
// https://muse-ui.org/#/zh-CN/carousel
</script>

<style lang="scss" scoped>
.carousel {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
