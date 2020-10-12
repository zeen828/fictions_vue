<template>
  <div class="chapter" :style="{ backgroundColor: myBlockColor }">
    <ComHeader :title="data.name"></ComHeader>
    <mu-row>
      <mu-col span="9">{{ data.name }}</mu-col>
      <mu-col span="3" class="font-settion" @click="openBotttomSheet()">字体设定</mu-col>
    </mu-row>
    <div :style="{ color: myColor, fontFamily: myFamily, fontSize: mySize + 'px' }" v-html="data.content"></div>
    <mu-card v-if="data.payment">
      <mu-card-title title="支持创作者,解锁后继续阅读" sub-title="书籍余额不足,请充值"></mu-card-title>
      <mu-card-text>解锁下章 <span class="point">{{ data.money }}</span> 书币</mu-card-text>
      <mu-card-text>书币余额 <span class="point">{{ userInfo.points }}</span> 书币</mu-card-text>
      <mu-flex class="flex-wrapper" align-items="center">
        <mu-flex justify-content="center" fill class="my-but rec-but" v-if="data.previous !== 0" @click="gotoRecharge()">余额不足，立即充值</mu-flex>
      </mu-flex>
    </mu-card>
    <mu-flex v-else class="flex-wrapper" align-items="center">
      <mu-flex justify-content="center" fill class="my-but pre-but" v-if="data.previous !== 0" @click="gotoPrevious(data.previous)">上一章</mu-flex>
      <mu-flex justify-content="center" fill class="my-but nex-but" @click="gotoBook(data.bookId)">目录</mu-flex>
      <mu-flex justify-content="center" fill class="my-but nex-but" v-if="data.next !== 0" @click="gotoNext(data.next)">下一章</mu-flex>
    </mu-flex>
    <mu-bottom-sheet :open.sync="open">
      <mu-list @item-click="closeBottomSheet">
        <mu-flex>
          <mu-select label="字体颜色" v-model="myColor" full-width>
            <mu-option v-for="(option, index) in colorOptions" :key="index" :label="option.title" :value="option.color" :style="{ backgroundColor: option.color }"></mu-option>
          </mu-select>
        </mu-flex>
        <mu-flex>
          <mu-select label="背景颜色" v-model="myBlockColor" full-width>
            <mu-option v-for="(option, index) in backColorOptions" :key="index" :label="option.title" :value="option.color" :style="{ backgroundColor: option.color }"></mu-option>
          </mu-select>
        </mu-flex>
        <mu-flex style="padding-bottom: 16px;">
          <mu-flex justify-content="center" fill><mu-radio v-model="myFamily" value="Microsoft JhengHei" label="微软正黑体"></mu-radio></mu-flex>
          <mu-flex justify-content="center" fill><mu-radio v-model="myFamily" value="PMingLiU" label="新细明体字型"></mu-radio></mu-flex>
          <mu-flex justify-content="center" fill><mu-radio v-model="myFamily" value="DFKai-sb" label="标楷体字型"></mu-radio></mu-flex>
        </mu-flex>
        <mu-flex>
          <mu-slider v-model="mySize" :min="12" :step="1" :max="64"/>
        </mu-flex>
      </mu-list>
  </mu-bottom-sheet>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ajaxChapters from '@/api/chapters'

export default {
  name: 'Chapter',
  components: {
    ComHeader
  },
  props: [
    'chapterId'
  ],
  computed: {
    userInfo: {
      get () {
        return this.$store.getters['apiUsers/getUserInfo']
      }
    },
    TokenJWT: {
      get () {
        return this.$store.getters['apiUsers/getTokenJWT']
      }
    },
    // 字體顏色
    myColor: {
      get () {
        return this.$store.getters['apiBooks/getMyColor']
      },
      set (val) {
        this.$store.commit('apiBooks/setMyColor', val)
      }
    },
    // 背景顏色
    myBlockColor: {
      get () {
        return this.$store.getters['apiBooks/getMyBlockColor']
      },
      set (val) {
        this.$store.commit('apiBooks/setMyBlockColor', val)
      }
    },
    // 字體字型
    myFamily: {
      get () {
        return this.$store.getters['apiBooks/getMyFamily']
      },
      set (val) {
        this.$store.commit('apiBooks/setMyFamily', val)
      }
    },
    // 字體尺寸
    mySize: {
      get () {
        return this.$store.getters['apiBooks/getMySize']
      },
      set (val) {
        this.$store.commit('apiBooks/setMySize', val)
      }
    }
  },
  data () {
    return {
      pageTitle: '书籍 - 章节',
      data: {
        chapterId: 0,
        bookId: 0,
        name: '',
        content: '',
        description: '',
        free: 0,
        money: 0,
        payment: true,
        previous: 0,
        next: 0
      },
      colorOptions: [
        { title: '漆黑', color: '#000000' },
        { title: '白色', color: '#FFFFFF' },
        { title: '暗紫', color: '#9370DB' },
        { title: '藻绿', color: '#2E8B57' },
        { title: '深灰', color: '#2F4F4F' },
        { title: '青灰', color: '#778899' },
        { title: '栗色', color: '#800000' },
        { title: '青蓝', color: '#6A5ACD' },
        { title: '玫褐', color: '#BC8F8F' },
        { title: '黄褐', color: '#F4A460' },
        { title: '米色', color: '#F5F5DC' },
        { title: '雾白', color: '#F5F5F5' }
      ],
      backColorOptions: [
        { title: '默认', color: '#FCEFFF' },
        { title: '白雪', color: '#FFFFFF' },
        { title: '漆黑', color: '#000000' },
        { title: '明黄', color: '#FFFFED' },
        { title: '淡绿', color: '#EEFAEE' },
        { title: '草绿', color: '#CCE8CF' },
        { title: '红粉', color: '#FCEFFF' },
        { title: '深灰', color: '#EFEFEF' },
        { title: '米色', color: '#F5F5DC' },
        { title: '茶色', color: '#D2B48C' },
        { title: '银色', color: '#C0C0C0' }
      ],
      // 底部字體調整開關
      open: false,
      debug: false
    }
  },
  watch: {
    TokenJWT: function (value) {
      // console.log('w_TokenJWT')
      this.callBooksChapter()
    },
    chapterId: function (value) {
      // console.log('w_chapterId')
      this.callBooksChapter()
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('書籍 > 書籍 - 章節 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.callBooksChapter()
    },
    // 本章節
    callBooksChapter () {
      var that = this
      // console.log('callChapter取書籍-章節資料')
      that.$store.commit('setGlobalLoading', true)
      ajaxChapters.byChapterId(that.chapterId, that.TokenJWT).then(function (result) {
        // console.log('callChapter書籍-章節資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.chapter
          if (apiData !== null) {
            that.data = apiData
            // console.log(apiData)
            that.$store.commit('setGlobalLoading', false)
            // 刷新資料
            if (apiData.payment === true) {
              // console.log('更新資料')
              // 需要顯示點數更新會員資料
              that.$store.dispatch('apiUsers/ready', {}, { root: true })
            }
            // 增加閱讀紀錄
            var record = window.localStorage.getItem('record')
            // console.log(record)
            // 檢查值不為空
            if (record == null) {
              // console.log('沒有值')
              record = '{}'
            }
            var myObjStr = JSON.parse(record)
            // console.log(myObjStr)
            // 書籍判斷
            if (typeof myObjStr[apiData.bookId] === 'undefined') {
              // console.log('書不存在')
              myObjStr[apiData.bookId] = { bookId: apiData.book.bookId, name: apiData.book.name, list: {} }
            }
            // 章節判斷
            if (typeof myObjStr[apiData.bookId].list[apiData.chapterId] === 'undefined') {
              // console.log('章節不存在')
              myObjStr[apiData.bookId].list[apiData.chapterId] = { chapterId: apiData.chapterId, name: apiData.name }
            }
            // var tmp = { id: apiData.chapterId, name: apiData.name }
            // myObjStr[apiData.bookId].push(tmp)
            // console.log(myObjStr)
            record = JSON.stringify(myObjStr)
            window.localStorage.setItem('record', record)
          }
        }
      })
    },
    // 上一張節
    gotoPrevious (chapterId) {
      window.scrollTo(0, 0)
      this.gotoUrl('/books/chapter/' + chapterId)
    },
    // 下一章節
    gotoNext (chapterId) {
      window.scrollTo(0, 0)
      this.gotoUrl('/books/chapter/' + chapterId)
    },
    // 前往書籍
    gotoBook (bookId) {
      this.gotoUrl('/books/book/' + bookId)
    },
    // 功能
    closeBottomSheet () {
      this.open = false
    },
    // 功能
    openBotttomSheet () {
      this.open = true
    }
  }
}
</script>

<style lang="scss" scoped>
.chapter {
  width: 100%;
  .font-settion {
    text-align: right;
    color: #FF0000;
  }
  .point {
    color: #FF0000;
  }
  .flex-wrapper {
    margin-bottom: 5rem;
  }
  .my-but {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    color: #FFFFCC;
    background-color: #FF5722;
    border-radius: 0.5rem;
    margin: 10px;
  }
}
</style>
