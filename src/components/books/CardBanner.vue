<template>
  <div class="cardBanner">
    <mu-card @click="gotoUrl('/books/book/'+ bookId)">
      <mu-row gutter>
        <mu-col span="5" class="cardLeft img">
          <img :src="cover">
        </mu-col>
        <mu-col span="7" class="cardRight">
          <div class="title">{{ title }}</div>
          <div class="description">
            {{ description }}
          </div>
          <div class="row info">
            <p class="tag">{{ author }}</p>
            <p v-if="isNew" class="tag new">最新</p>
            <p v-if="isMore" class="tag more">连载</p>
            <p v-if="isOver" class="tag over">完结</p>
          </div>
        </mu-col>
      </mu-row>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: 'CardBanner',
  components: {},
  props: {
    bookData: Array,
    bookId: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''// '元件標題'
    },
    cover: {
      type: String,
      default: require('@/assets/load/300x400.png')
    },
    description: {
      type: String,
      default: ''// '元件描述'
    },
    author: {
      type: String,
      default: ''// '元件作者'
    },
    isNew: {
      type: Boolean,
      default: false
    },
    isMore: {
      type: Boolean,
      default: false
    },
    isOver: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > books > 書卡橫幅 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    }
  }
}
// https://muse-ui.org/#/zh-CN/card
</script>

<style lang="scss" scoped>
.cardBanner {
  width: 100%;
  .cardLeft {
    width: 100%;
    height: auto;
    img{
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }
  }
  .cardRight {
    height: 190px;
    .title {
      height: 30px;
      overflow: hidden;
      font-size: 1.4rem;
      font-weight: bold;
      color: #008DA9;
    }
    .description {
      width: 90%;
      height: 130px;
      overflow: hidden;
    }
    .info {
      height: 20px;
      padding: 0.2rem 0.3rem;
      .tag {
        font-size: .2rem;
        color: #E4AF09;
        border-radius: 0.5rem;
        background-size: 0.24rem 0.24rem;
        margin-left: 0.15rem;
        padding-left: 0.3rem;
        margin-right: 0.15rem;
        padding-right: 0.3rem;
      }
      .new {
        color: #ffffff;
        background: #b71c1c;
      }
      .more {
        color: #ffffff;
        background: #01579b;
      }
      .over {
        color: #ffffff;
        background: #33691e;
      }
    }
  }
}
</style>
