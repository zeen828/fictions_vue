<template>
  <article class="listBanner">
    <header>{{ title }}<span class="subTitle">{{ subTitle }}</span></header>
    <div class="blocks">
      <ComCardBlock v-for="(val, index) in lists" :key="index" :bookId="val.bookId" :title="val.name" :cover="val.cover"></ComCardBlock>
    </div>
  </article>
</template>

<script>
import ComCardBlock from '@/components/books/CardBlock.vue'

export default {
  name: 'ListBanner',
  components: {
    ComCardBlock
  },
  props: {
    title: {
      type: String,
      default: ''// '清單區塊標題'
    },
    subTitle: {
      type: String,
      default: ''// '清單區塊副標題'
    },
    lists: {
      type: Array
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
    // console.log('組件 > books > 清單橫幅 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  header {
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    padding: 0.5rem;
    border-left: 6px solid #ff0000 !important;
    border-color: #ff0000 !important;
    .subTitle {
      padding-left: 1rem;
      font-size: 0.8rem;
      color: #ff4081 !important;
    }
  }
}
.listBanner {
  width: 100%;
  .blocks {
    display: flex;
  }
}
</style>
