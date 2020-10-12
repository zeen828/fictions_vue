<template>
  <div class="info">
    <ComHeader :title="pageTitle"></ComHeader>
    <mu-card>
      <mu-card-header :title="'编号：' + userInfo.id" :sub-title="'点数：' + userInfo.points">
        <mu-avatar :size="size" slot="avatar" @click="openDebug">
          <img src="@/assets/user/160x160.jpg">
        </mu-avatar>
      </mu-card-header>
      <mu-card-text>
        <mu-list>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="person"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>帐号</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.account }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="device_unknown"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>密码</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.password }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item avatar v-if="isShow">
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="inbox"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>昵称</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.nick_name }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item avatar>
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="local_phone"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>电话</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.phone }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item avatar v-if="isShow">
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="face"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>性别</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.sex }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item avatar v-if="isShow">
            <mu-list-item-action avatar>
              <mu-avatar>
                <mu-icon value="local_play"></mu-icon>
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>VIP</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item-content>
              <mu-list-item-title>{{ userInfo.vip_at }}</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-card-text>
    </mu-card>
    <p/>
    <div v-if="userInfo.id == 0">
      <mu-flex class="flex-wrapper" align-items="center">
        <mu-ripple class="mu-ripple-demo but" color="red" :opacity="0.5" @click="gotoUrl('/personal/login/')">
          登入
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo but" color="red" :opacity="0.5" @click="gotoUrl('/personal/registered/')">
          注册
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo but" color="red" :opacity="0.5" @click="autoRegistered()">
          快速注册
        </mu-ripple>
      </mu-flex>
    </div>
    <mu-list>
      <mu-list-item button :ripple="false" @click="gotoRecharge()">
        <mu-list-item-action>
          <mu-icon value="monetization_on"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>快速充值</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="gotoPointLog()">
        <mu-list-item-action>
          <mu-icon value="shopping_cart"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>消费纪录</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="gotoRecord()">
        <mu-list-item-action>
          <mu-icon value="import_contacts"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>阅读纪录</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="userSign()">
        <mu-list-item-action>
          <mu-icon value="fingerprint"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>会员签到</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button :ripple="false" @click="gotoService()">
        <mu-list-item-action>
          <mu-icon value="textsms"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>问题反馈</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <mu-flex v-if="debug" class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo" justify-content="center" fill>Version:{{ version }}</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>APP:{{ isApp }}</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>AppVer:{{ appVer }}</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>Channel:{{ channelID }}</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>Link:{{ linkID }}</mu-flex>
    </mu-flex>
    <mu-flex v-if="debug" class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo" justify-content="center" fill @click="gotoTest()">Test1</mu-flex>
    </mu-flex>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ajaxUsers from '@/api/users'

export default {
  name: 'Info',
  components: {
    ComHeader
  },
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
    version: {
      get () {
        return window.localStorage.getItem('version')
      }
    },
    isApp: {
      get () {
        let isApp = window.localStorage.getItem('isApp')
        if (isApp === null) {
          isApp = 1
        }
        return isApp
      }
    },
    appVer: {
      get () {
        let appVer = window.localStorage.getItem('appVer')
        if (appVer === null) {
          appVer = '-'
        }
        return appVer
      }
    },
    channelID: {
      get () {
        let channelID = window.localStorage.getItem('channelID')
        if (channelID === null) {
          channelID = 0
        }
        return channelID
      }
    },
    linkID: {
      get () {
        let linkID = window.localStorage.getItem('linkID')
        if (linkID === null) {
          linkID = 0
        }
        return linkID
      }
    }
  },
  data () {
    return {
      pageTitle: '个人中心',
      size: 60,
      isShow: false,
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('個人中心 > 資訊 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.updateUser()
    },
    updateUser () {
      this.$store.dispatch('apiUsers/ready', {}, { root: true })
      // setTimeout(() => {
      //   console.log('更新用戶')
      //   that.$store.dispatch('apiUsers/ready', {}, { root: true })
      //   that.updateUser()
      // }, 6000)
    },
    autoRegistered () {
      var that = this
      ajaxUsers.autoRegistered().then(function (result) {
        // console.log('會員資料', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.automaticCreateUser
          if (apiData !== null) {
            window.localStorage.setItem('tokenJWT', apiData.token_jwt)
            // 呼叫store處理
            that.$store.dispatch('apiUsers/ready', {}, { root: true })
            // 跳轉
            that.gotoPersonal()
          }
        }
      })
    },
    userSign () {
      var that = this
      ajaxUsers.sign(that.TokenJWT).then(function (result) {
        console.log('會員簽到', result)
        // data addend
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.sign
          if (apiData !== null && apiData.code === '200') {
            that.$store.commit('setHeaderAlertColor', 'success')
            that.$store.commit('setHeaderAlertMsg', '簽到完成')
            // alert('簽到完成')
          } else {
            that.$store.commit('setHeaderAlertColor', 'warning')
            that.$store.commit('setHeaderAlertMsg', '簽到失敗')
            // alert('簽到失敗')
          }
          that.$store.commit('setHeaderAlert', true)
          // 2秒後關閉提示
          setTimeout(() => {
            that.$store.commit('setHeaderAlert', false)
          }, 2000)
        }
      })
    },
    openDebug () {
      this.debug = !this.debug
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  .mu-card-header {
    .mu-card-sub-title {
      color: #1f1f1f;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .mu-card-text {
    padding: 0px;
  }
}
.mu-ripple-demo {
  position: relative;
  width: 32%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFCC;
  background-color: #FF5722;
  border-radius: 1rem;
  margin:0px auto;
}
</style>
