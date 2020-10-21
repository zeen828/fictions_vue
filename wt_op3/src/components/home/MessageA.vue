<template>
  <div class="messageA">
    <span class="title">精选留言</span>
    <div class="message" v-for="(message, index1) in messageList" :key="index1">
      <div class="main">
        <div class="user-icon">
          <img :src="message.img">
        </div>
        <div class="body">
          <p>{{ message.msg }}</p><span>{{ message.hourAgo }}小时前</span>
        </div>
        <div class="float-clear"></div>
      </div>
      <div class="reply" v-for="(val, index2) in message.list" :key="index2">
        <div class="main">
          <div class="user-icon">
            <img :src="val.img">
          </div>
          <div class="body">
            <p>RR-{{ val.msg }}</p><span>{{ val.hourAgo }}小时前</span>
          </div>
        </div>
        <div class="float-clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageA',
  components: {},
  props: {},
  computed: {},
  data () {
    return {
      messageList: [],
      hourAgo: 1,
      message: {
        users: [
          {
            name: '奥布宝宝御用撸狗',
            img: require('@/assets/users/01.jpg')
          },
          {
            name: '人类行为图鉴',
            img: require('@/assets/users/02.jpg')
          },
          {
            name: '赵琦君Ryan',
            img: require('@/assets/users/03.jpg')
          },
          {
            name: '硬核人类',
            img: require('@/assets/users/04.jpg')
          },
          {
            name: '大厂靓妹',
            img: require('@/assets/users/05.jpg')
          },
          {
            name: '解说七老爷',
            img: require('@/assets/users/06.jpg')
          },
          {
            name: '在宇宙玩电脑',
            img: require('@/assets/users/07.jpg')
          },
          {
            name: '满满Cyim',
            img: require('@/assets/users/08.jpg')
          },
          {
            name: '认真少女_颜九',
            img: require('@/assets/users/09.jpg')
          }
        ],
        msg: [
          '刚看完，真是超爽超刺激，好久没看过这种爽文了。',
          '好精彩的小说，真是解锁了各种姿势，刺激，文字描述比小电影还精彩！',
          '毫无冷场，绝对值得花钱看！',
          '是好看，剧情优，非看不可的好书！',
          '好看绝无冷场。',
          '看过最精彩的，整部无冷场！',
          '很幽默又很温馨的一部，值得一看！',
          '超爱！超好看！又有趣又温馨，推！',
          '超好看！整部无冷场！'
        ]
      },
      debug: false
    }
  },
  watch: {},
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('組件 > home > MessageA.vue > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      console.log('組件 > home > MessageA.vue > ready()')
      this.getMessage()
    },
    // 取得留言板資料
    getMessage () {
      var that = this
      // 推薦假資料組成
      let forIMax = Math.floor(Math.random() * that.message.users.length - 1)// -1避掉沒資料
      forIMax++
      for (let i = 0; i <= forIMax; i++) {
        const tmpeIUserKey = Math.floor(Math.random() * that.message.users.length)
        const tmpeIMsgKey = Math.floor(Math.random() * that.message.msg.length)
        that.hourAgo = that.hourAgo + Math.floor(Math.random() * 6)
        const tempIData = {
          name: that.message.users[tmpeIUserKey].name,
          img: that.message.users[tmpeIUserKey].img,
          hourAgo: that.hourAgo,
          msg: that.message.msg[tmpeIMsgKey],
          list: []
        }
        const forJMax = Math.floor(Math.random() * 3)
        for (let j = 0; j < forJMax; j++) {
          const tmpeJUserKey = Math.floor(Math.random() * that.message.users.length)
          const tmpeJMsgKey = Math.floor(Math.random() * that.message.msg.length)
          that.hourAgo = that.hourAgo + Math.floor(Math.random() * 6)
          const tempJData = {
            name: that.message.users[tmpeJUserKey].name,
            img: that.message.users[tmpeJUserKey].img,
            hourAgo: that.hourAgo,
            msg: that.message.msg[tmpeJMsgKey]
          }
          tempIData.list.push(tempJData)
        }
        that.messageList.push(tempIData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.messageA {
  margin: 0px auto;
  .title {
    display: block;
    position: relative;
    color: #8c8c8c;
    font-size: 18px;
    text-align: center;
  }
  .title:before, .title:after {
    content: '';
    position: absolute;
    top: 50%;
    background: #8c8c8c;
    width: 35%;
    height: 1px;
  }
  .title:before {
    left: 2%;
  }
  .message {
    .main{
      width: 100%;
      .user-icon {
        width: 15%;
        text-align: center;
        float: left;
        img {
          width: 40px;
          border-radius: 50%;
        }
      }
      .body {
        width: 85%;
        font-size: 12px;
        text-align: left;
        float: left;
      }
    }
    .reply{
      padding-left: 10%;
      .main{
        width: 90%;
        .user-icon {
          width: 15%;
          text-align: center;
          float: left;
          img {
            width: 40px;
            border-radius: 50%;
          }
        }
        .body {
          width: 85%;
          font-size: 12px;
          text-align: left;
          float: left;
        }
      }

    }
  }
}
.float-clear {
  clear: both;
}
</style>
