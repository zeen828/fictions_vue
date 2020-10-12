<template>
  <div class="classif">
    <ComHeader :title="pageTitle"></ComHeader>
    <hr/>
    <ComTags></ComTags>
    <hr/>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <ComListBlock :title="block.blockTitle" :subTitle="block.subTitle" :lists="block.lists"></ComListBlock>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComTags from '@/components/classif/Tags.vue'
import ComListBlock from '@/components/books/ListBlock.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Classif',
  components: {
    ComHeader,
    ComTags,
    ComListBlock
  },
  props: [
    'tId'
  ],
  data () {
    return {
      pageTitle: '分类',
      block: {
        blockTitle: '分类阅读',
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
    tId: function (value) {
      this.ready()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('分類 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callClassBooks()
    },
    // 取得書籍分類的資料
    callClassBooks () {
      var that = this
      // console.log('callBooksNew取書籍資料')
      ajaxBooks.byTypeId(that.tId, that.page).then(function (result) {
        // console.log('POOO書籍資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.books
          if (apiData !== null) {
            if (that.page === 1) {
              // 第一次處理
              that.block.lists = apiData
            } else {
              // 第二次以後處理
              that.block.lists = that.block.lists.concat(apiData)
              that.loading = false
            }
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

<style lang="scss" scoped></style>
