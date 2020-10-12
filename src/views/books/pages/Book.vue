<template>
  <div class="book">
    <ComHeader :title="book.name"></ComHeader>
    <ComCardBanner :bookId="book.bookId" :title="book.name" :cover="book.cover" :description="book.description" :author="book.author"></ComCardBanner>
    <hr />
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <mu-list>
          <mu-list-item v-for="(val, index) in chapter" :key="index" button :ripple="false" @click="gotoUrl('/books/chapter/'+ val.chapterId)">
            <mu-list-item-action>
              <mu-icon value="receipt"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>{{ val.name.trim() }}</mu-list-item-title>
            <mu-list-item-action>
              <span v-if="val.free == 1">免费</span><span v-else class="point">{{ val.money }}$</span>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComCardBanner from '@/components/books/CardBanner.vue'
import ajaxBooks from '@/api/books'
import ajaxChapters from '@/api/chapters'

export default {
  name: 'Book',
  components: {
    ComHeader,
    ComCardBanner
  },
  props: [
    'bookId'
  ],
  data () {
    return {
      pageTitle: '书籍',
      book: {},
      chapter: [],
      page: 1,
      // 讀取
      refreshing: false,
      loading: false,
      debug: false
    }
  },
  watch: {
    bookId: function (value) {
      this.callBook()
      this.callBookChapter()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('書籍 > 書籍 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callBook()
      this.callBookChapter()
      // this.refresh()
    },
    callBook () {
      var that = this
      // console.log('callBook取書籍資料')
      ajaxBooks.byBookId(that.bookId).then(function (result) {
        // console.log('callBook書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.book
          if (apiData !== null) {
            that.book = apiData
          }
        }
      })
    },
    callBookChapter () {
      var that = this
      that.loading = true
      // console.log('callBooksChapter取書籍-章節資料')
      ajaxChapters.byBookId(that.bookId).then(function (result) {
        // console.log('callBooksChapter書籍-章節資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.chapters
          if (apiData !== null) {
            that.chapter = apiData
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
      ajaxChapters.byBookId(that.bookId, that.page).then(function (result) {
        // console.log('L callBooksChapter書籍-章節資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.chapters
          if (apiData !== null) {
            // that.chapter = result.data.data.chapters
            that.chapter = that.chapter.concat(apiData)
            that.loading = false
            that.page += 1
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  margin-bottom: 5rem;
  .point {
    color: #FF0000;
  }
}
</style>
