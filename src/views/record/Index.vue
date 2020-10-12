<template>
  <div class="record">
    <ComHeader :title="pageTitle"></ComHeader>
    <mu-row>
      <mu-col span="9">{{ data.name }}</mu-col>
      <mu-col span="3" class="clear-data" @click="clearData()">清除纪录</mu-col>
    </mu-row>
    <mu-list v-for="(book, index) in data" :key="index">
      <mu-sub-header @click="gotoUrl('/books/book/' + book.bookId)">{{ book.name.trim() }}</mu-sub-header>
      <mu-list-item v-for="(chapter, index) in book.list" :key="index" button :ripple="false" @click="gotoUrl('/books/chapter/' + chapter.chapterId)">
        <mu-list-item-action>
          <mu-icon value="import_contacts"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>{{ chapter.name.trim() }}</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-alert color="warning">
      <mu-icon left value="priority_high"></mu-icon>阅读纪录仅保存在用户装置不做存档
    </mu-alert>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'

export default {
  name: 'Record',
  components: {
    ComHeader
  },
  props: [
    'keyword'
  ],
  data () {
    return {
      pageTitle: '阅读纪录',
      data: {},
      page: 1,
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('阅读纪录 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.page = 1
      this.callData()
    },
    callData () {
      // 增加閱讀紀錄
      var record = window.localStorage.getItem('record')
      // console.log(record)
      // 檢查值不為空
      if (record == null) {
        // console.log('沒有值')
        record = '{}'
      }
      var myObjStr = JSON.parse(record)
      // console.log(record)
      this.data = myObjStr
    },
    clearData () {
      this.data = {}
      window.localStorage.setItem('record', '{}')
    }
  }
}
</script>

<style lang="scss" scoped>
.record {
  .clear-data {
    text-align: right;
    color: #FF0000;
  }
}
</style>
