<template>
  <nav class="nav">
    <mu-flex justify-content="around" >
      <mu-avatar v-for="(val, index) in lists" :key="index" :color="val.background" @click="gotoUrl(val.to)">
        <mu-icon :value="val.icon"></mu-icon>
      </mu-avatar>
    </mu-flex>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  components: {},
  data () {
    return {
      lists: [
        {
          icon: 'menu_book',
          color: '',
          background: 'lightBlue500',
          to: '/bookclass'
        }, {
          icon: 'bar_chart',
          color: '',
          background: 'redA400',
          to: '/ranking'
        }, {
          icon: 'import_contacts',
          color: '',
          background: 'teal500',
          to: '/record'
        }, {
          icon: 'monetization_on',
          color: '',
          background: 'yellow700',
          to: '/recharge'
        }, {
          icon: 'person',
          color: '',
          background: 'green500',
          to: '/personal/info'
        }
      ],
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('組件 > home > 標籤 > 開始')
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
.nav {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 12%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
