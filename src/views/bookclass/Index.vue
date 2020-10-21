<template>
  <div class="bookclass">
    <ComHeader :title="pageTitle"></ComHeader>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <ComListBlock :title="blockBook.blockTitle" :subTitle="blockBook.subTitle" :lists="blockBook.lists"></ComListBlock>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComListBlock from '@/components/books/ListBlock.vue'
import ajaxBooks from '@/api/books'

export default {
  name: 'Bookclass',
  components: {
    ComHeader,
    ComListBlock
  },
  computed: {
    bookIdsBook: {
      get () {
        return this.$store.getters['apiRanking/getBook']
      }
    }
  },
  data () {
    return {
      pageTitle: '书库',
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
    bookIdsBook: function (value) {
      this.callBooksBook()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('書庫 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callBooksBook()
    },
    // 第一次取得書庫資料(排行榜上死資料)
    callBooksBook () {
      var that = this
      ajaxBooks.byBookIds(that.bookIdsBook).then(function (result) {
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            that.blockBook.lists = apiData
          }
        }
      })
    },
    // 取得書籍分類的資料
    callClassBooks () {
      var that = this
      // console.log('callBooksNew取書籍資料')
      ajaxBooks.byTypeId(0, 0, that.page).then(function (result) {
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
</style>
