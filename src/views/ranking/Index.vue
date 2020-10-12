<template>
  <div class="ranking">
    <ComHeader :title="pageTitle"></ComHeader>
    <ComListBlock :title="blockWee.blockTitle" :subTitle="blockWee.subTitle" :lists="blockWee.lists"></ComListBlock>
    <ComListBlock :title="blockMonth.blockTitle" :subTitle="blockMonth.subTitle" :lists="blockMonth.lists"></ComListBlock>
    <ComListBlock :title="blockSum.blockTitle" :subTitle="blockSum.subTitle" :lists="blockSum.lists"></ComListBlock>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComListBlock from '@/components/books/ListBlock.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Ranking',
  components: {
    ComHeader,
    ComListBlock
  },
  computed: {
    bookIdsWeek: {
      get () {
        return this.$store.getters['apiRanking/getWeek']
      }
    },
    bookIdsMonth: {
      get () {
        return this.$store.getters['apiRanking/getMonth']
      }
    },
    bookIdsSum: {
      get () {
        return this.$store.getters['apiRanking/getSum']
      }
    }
  },
  data () {
    return {
      pageTitle: '排行榜',
      blockWee: {
        blockTitle: '周排行榜',
        subTitle: '',
        lists: []
      },
      blockMonth: {
        blockTitle: '月排行榜',
        subTitle: '',
        lists: []
      },
      blockSum: {
        blockTitle: '總排行榜',
        subTitle: '',
        lists: []
      },
      debug: false
    }
  },
  watch: {
    bookIdsWeek: function (value) {
      this.callBooksWeek()
    },
    bookIdsMonth: function (value) {
      this.callBooksMonth()
    },
    bookIdsSum: function (value) {
      this.callBooksSum()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('排行榜 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.callBooksWeek()
      this.callBooksMonth()
      this.callBooksSum()
    },
    callBooksWeek () {
      var that = this
      // console.log('取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsWeek).then(function (result) {
        // console.log('書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockWee.lists = that.blockWee.lists.concat(apiData)
          }
        }
      })
    },
    callBooksMonth () {
      var that = this
      // console.log('取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsMonth).then(function (result) {
        // console.log('書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockMonth.lists = that.blockMonth.lists.concat(apiData)
          }
        }
      })
    },
    callBooksSum () {
      var that = this
      // console.log('取書籍資料')
      ajaxBooks.byBookIds(that.bookIdsSum).then(function (result) {
        // console.log('書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockSum.lists = that.blockSum.lists.concat(apiData)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
