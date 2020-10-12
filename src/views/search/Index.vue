<template>
  <div class="search">
    <ComHeader :title="pageTitle"></ComHeader>
    <ComSearch></ComSearch>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <ComListBlock :title="keyword" :subTitle="block.subTitle" :lists="block.lists"></ComListBlock>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComSearch from '@/components/home/Search.vue'
import ComListBlock from '@/components/books/ListBlock.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Search',
  components: {
    ComHeader,
    ComSearch,
    ComListBlock
  },
  props: [
    'keyword'
  ],
  data () {
    return {
      pageTitle: '搜寻',
      block: {
        blockTitle: '搜寻',
        subTitle: '',
        lists: []
      },
      page: 1,
      refreshing: false,
      loading: false,
      debug: false
    }
  },
  watch: {
    keyword: function (value) {
      this.ready()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('搜尋 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callBooks()
    },
    callBooks () {
      var that = this
      ajaxBooks.byKeyword(that.keyword, that.page).then(function (result) {
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
      that.callBooks()
    }
  }
}
</script>

<style lang="scss" scoped></style>
