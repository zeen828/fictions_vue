<template>
  <div class="test1">
    <ComHeader></ComHeader>
    <h1>Test1</h1>
    <h1>CooKie</h1>
    <div>{{ testcookie }}</div>
    <ComFooter></ComFooter>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ComFooter from '@/components/html/Footer.vue'

import ajaxBooks from '@/api/books'

export default {
  name: 'Test1',
  components: {
    ComHeader,
    ComFooter
  },
  data () {
    return {
      pageTitle: '測試',
      testcookie: '空',
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log(process.env.NODE_ENV)
    // console.log(process.env.VUE_APP_SECRET)
    // console.log('ajax試驗START')
    this.ready()
    // VUE axios graphQL
    let page = 1
    page = 2
    ajaxBooks.books({
      query: `{
        books(page:` + page + `) {
          id,
          tid,
          book_title
        }
      }`
    }).then(function (res) {
      // console.log('獲取資料', res)
    })
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.$cookies.set('testcookie', '測試成功', 60 * 60)
      this.testcookie = this.$cookies.get('testcookie')
    }
  }
}
</script>

<style lang="scss" scoped></style>
