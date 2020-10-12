<template>
  <article class="listBlock">
    <header>{{ title }}<span class="subTitle">{{ subTitle }}</span></header>
    <ComCardBanner v-for="(val, index) in lists" :key="index" :bookId="val.bookId" :title="val.name" :cover="val.cover" :description="val.description" :author="val.author"></ComCardBanner>
  </article>
</template>

<script>
import ComCardBanner from '@/components/books/CardBanner.vue'

export default {
  name: 'ListBlock',
  components: {
    ComCardBanner
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
    // console.log('組件 > books > 清單垂直 > 開始')
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
</style>
