<template>
  <article class="tags">
    <mu-chip class="tag" v-for="(val, index) in booktypes" :key="index" @click="gotoClassif(val.typeId)">{{ val.name }}</mu-chip>
  </article>
</template>

<script>
export default {
  name: 'Tags',
  components: {},
  computed: {
    booktypes: {
      get () {
        return this.$store.getters['apiBooks/getListBooktypes']
      }
    }
  },
  data () {
    return {
      debug: false
    }
  },
  watch: {
    booktypes: function (value) {
      // console.log('類型更新', value)
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > classif > 標籤 > 開始')
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
.tags {
  .tag {
    margin: 3px;
  }
}
</style>
