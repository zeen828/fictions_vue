<template>
  <div class="home">
    <ComHeader :title="pageTitle"></ComHeader>
    <ComCarousel></ComCarousel>
    <ComNav></ComNav>
    <hr/>
    <ComListBanner :title="blockInitiative.blockTitle" :subTitle="blockInitiative.subTitle" :lists="blockInitiative.lists"></ComListBanner>
    <hr/>
    <ComListBlock :title="blockNew.blockTitle" :subTitle="blockNew.subTitle" :lists="blockNew.lists"></ComListBlock>
    <hr/>
    <ComListBlock :title="blockOver.blockTitle" :subTitle="blockOver.subTitle" :lists="blockOver.lists"></ComListBlock>
    <hr/>
    <ComListBlock :title="blockSerialize.blockTitle" :subTitle="blockSerialize.subTitle" :lists="blockSerialize.lists"></ComListBlock>
    <hr/>
    <ComListBanner :title="blockFree.blockTitle" :subTitle="blockFree.subTitle" :lists="blockFree.lists"></ComListBanner>
    <hr/>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <ComListBlock :title="blockBook.blockTitle" :subTitle="blockBook.subTitle" :lists="blockBook.lists"></ComListBlock>
      </mu-load-more>
    </mu-container>
    <hr/>
  </div>
</template>

<script>
import ComHeader from '@/components/home/Header.vue'
import ComCarousel from '@/components/home/Carousel.vue'
import ComNav from '@/components/home/Nav.vue'

import ComListBanner from '@/components/books/ListBanner.vue'
import ComListBlock from '@/components/books/ListBlock.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Home',
  components: {
    ComHeader,
    ComCarousel,
    ComNav,
    ComListBanner,
    ComListBlock
  },
  computed: {
    bookIdsCarousel: {
      get () {
        return this.$store.getters['apiRanking/getCarousel']
      }
    },
    blockIdsInitiative: {
      get () {
        return this.$store.getters['apiRanking/getInitiative']
      }
    },
    bookIdsNew: {
      get () {
        return this.$store.getters['apiRanking/getNew']
      }
    },
    bookIdsOver: {
      get () {
        return this.$store.getters['apiRanking/getOver']
      }
    },
    bookIdsSerialize: {
      get () {
        return this.$store.getters['apiRanking/getSerialize']
      }
    },
    blockIdsFree: {
      get () {
        return this.$store.getters['apiRanking/getFree']
      }
    }
  },
  data () {
    return {
      pageTitle: process.env.VUE_APP_TITLE,
      lists: [
        {
          title: '往后余生',
          cover: '/img/book.6bce4729.png',
          description: '傍晚的时候，我下班回到家，忽然听到浴室里传来哗啦啦的流水声。',
          author: '往后余生',
          isNew: true,
          isMore: false,
          isOver: false
        }
      ],
      blockCarousel: {
        blockTitle: '轮播',
        subTitle: '',
        lists: []
      },
      blockInitiative: {
        blockTitle: '热门小说',
        subTitle: '小编力荐',
        lists: []
      },
      blockNew: {
        blockTitle: '新书抢鲜',
        subTitle: '火热强推',
        lists: []
      },
      blockOver: {
        blockTitle: '完结精品',
        subTitle: '致命诱惑',
        lists: []
      },
      blockSerialize: {
        blockTitle: '连载精品',
        subTitle: '校园青春',
        lists: []
      },
      blockFree: {
        blockTitle: '免费专区',
        subTitle: '',
        lists: []
      },
      // 下滾
      blockBook: {
        blockTitle: '书库',
        subTitle: '',
        lists: []
      },
      page: 1,
      // 讀取
      refreshing: false,
      loading: false,
      debug: false
    }
  },
  watch: {
    blockIdsInitiative: function (value) {
      this.callBooksInitiative()
    },
    bookIdsNew: function (value) {
      this.callBooksNew()
    },
    bookIdsOver: function (value) {
      this.callBooksOver()
    },
    bookIdsSerialize: function (value) {
      this.callBooksSerialize()
    },
    blockIdsFree: function (value) {
      this.callBooksFree()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('Home > 開始')
    this.ready()
    // console.log('this.$store', this.$store)
    // console.log('this.$store', this.$store.getters.apiRanking.new)
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      // this.callBooksCarousel()
      this.callBooksInitiative()
      this.callBooksNew()
      this.callBooksOver()
      this.callBooksSerialize()
      this.callBooksFree()
      this.callClassBooks()
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
            that.blockCarousel.lists = that.blockCarousel.lists.concat(apiData)
          }
        }
      })
    },
    callBooksInitiative () {
      var that = this
      // console.log('callBooksInitiative取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsCarousel).then(function (result) {
        // console.log('callBooksInitiative書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockInitiative.lists = that.blockInitiative.lists.concat(apiData)
          }
        }
      })
    },
    callBooksNew () {
      var that = this
      // console.log('callBooksNew取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsNew).then(function (result) {
        // console.log('callBooksNew書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockNew.lists = that.blockNew.lists.concat(apiData)
          }
        }
      })
    },
    callBooksOver () {
      var that = this
      // console.log('callBooksOver取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsOver).then(function (result) {
        // console.log('callBooksOver書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockOver.lists = that.blockOver.lists.concat(apiData)
          }
        }
      })
    },
    callBooksSerialize () {
      var that = this
      // console.log('callBooksSerialize取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsSerialize).then(function (result) {
        // console.log('callBooksSerialize書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockSerialize.lists = that.blockSerialize.lists.concat(apiData)
          }
        }
      })
    },
    callBooksFree () {
      var that = this
      // console.log('callBooksFree取書籍資料')
      ajaxBooks.byBookIds(that.blockIdsFree).then(function (result) {
        // console.log('callBooksFree書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockFree.lists = that.blockFree.lists.concat(apiData)
          }
        }
      })
    },
    // 取得書籍分類的資料
    callClassBooks () {
      var that = this
      // console.log('callBooksNew取書籍資料')
      ajaxBooks.byTypeId(0, that.page).then(function (result) {
        // console.log('POOO書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockBook.lists = that.blockBook.lists.concat(apiData)
            that.loading = false
            that.page += 1
          }
        }
      })
    },
    // 讀取1
    refresh () {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
    },
    // 讀取2
    load () {
      var that = this
      if (that.loading === true) {
        return
      }
      that.loading = true
      that.callClassBooks()
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: auto;
  .demo-container {
    .row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .grid-cell {
      border-radius: 4px;
      height: 36px;
      background: rgba(255, 255, 255, 0.8);
    }
  }
  .demo-container.is-stripe .col:nth-child(2n) .grid-cell{
    background: rgba(0, 0, 0, 0.54);
  }
}
</style>
