<template>
  <div class="one">
    <p><strong>第1章 想吃她的奶子</strong><br></p>
    <p><span>大学毕业以后，我就在一个汽车修理厂里面给别人当学徒，师傅和师娘对我很不错。</span></p>
    <p><span>大学毕业以后，我就在一个汽车修理厂里面给别人当学徒，师傅和师娘对我很不错。</span></p>
    <p><span>大学毕业以后，我就在一个汽车修理厂里面给别人当学徒，师傅和师娘对我很不错。</span></p>
    <p><span>大学毕业以后，我就在一个汽车修理厂里面给别人当学徒，师傅和师娘对我很不错。</span></p>
    <p><span>大学毕业以后，我就在一个汽车修理厂里面给别人当学徒，师傅和师娘对我很不错。</span></p>
    <p class="match-p">程大川人高马大，蒋素秋哪是他的对手，他长臂一把从蒋素秋的身后抱着她，那鼓起的灼热紧紧贴着屁股缝儿，一阵难掩的舒服感让他浑身一抖。</p>
    <ComDownloadA></ComDownloadA>
    <ComMessageA></ComMessageA>
  </div>
</template>

<script>
import ComDownloadA from '@/components/home/DownloadA.vue'
import ComMessageA from '@/components/home/MessageA.vue'
export default {
  name: 'One',
  components: {
    ComDownloadA,
    ComMessageA
  },
  props: {
    channelId: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  data () {
    return {
      messageList: [],
      hourAgo: 1,
      debug: false
    }
  },
  watch: {},
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('Home > pages > One.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      console.log('Home > pages > One.vue > ready()')
    }
  }
}
</script>

<style lang="scss" scoped>
.one {
  strong {
    display: block;
    font-weight: normal;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    color: #3897F0;
    box-shadow: 0 0 5px #1078D6;
    border: 1px solid #1078D6;
    border-radius: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .match-p {
    -webkit-filter: blur(3px);
  }
}
</style>
