<template>
  <div class="login">
    <ComHeader :title="pageTitle"></ComHeader>
    <div>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="帐号" help-text="帐号长度大于10小于16" prop="account" :rules="accountRules">
          <mu-text-field v-model="validateForm.account" prop="account"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" help-text="密码长度大于6小于12" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-flex class="flex-wrapper" align-items="center">
          <mu-ripple class="mu-ripple-demo but" color="red" :opacity="0.5" @click="submit">
            登入
          </mu-ripple>
          <mu-ripple class="mu-ripple-demo but" color="red" :opacity="0.5" @click="clear">
            重置
          </mu-ripple>
        </mu-flex>
      </mu-form>
    </div>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ajaxUsers from '@/api/users'

export default {
  name: 'Login',
  components: {
    ComHeader
  },
  data () {
    return {
      pageTitle: '登入',
      accountRules: [
        { validate: (val) => !!val, message: '必须填写帐号' },
        { validate: (val) => val.length >= 10 && val.length <= 16, message: '帐号长度大于10小于16' }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码' },
        { validate: (val) => val.length >= 6 && val.length <= 12, message: '密码长度大于6小于12' }
      ],
      validateForm: {
        account: '',
        password: ''
      },
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('個人中心 > 登入 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
    },
    submit () {
      var that = this
      this.$refs.form.validate().then((result) => {
        // console.log('form valid: ', result)
        if (result === false) {
          return
        }
        ajaxUsers.login(that.validateForm.account, that.validateForm.password).then(function (result) {
          // console.log('會員資料', result)
          // data addend
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data.data.login
            if (apiData !== null) {
              window.localStorage.setItem('tokenJWT', apiData.token_jwt)
              // 呼叫store處理
              that.$store.dispatch('apiUsers/ready', {}, { root: true })
              // 跳轉
              that.gotoPersonal()
            } else {
              // console.log('登入失敗')
              that.$store.commit('setHeaderAlertColor', 'warning')
              that.$store.commit('setHeaderAlertMsg', '登入失败')
              that.$store.commit('setHeaderAlert', true)
              // 2秒後關閉提示
              setTimeout(() => {
                that.$store.commit('setHeaderAlert', false)
              }, 2000)
            }
          }
        })
      })
    },
    clear () {
      this.$refs.form.clear()
      this.validateForm = {
        phone: '',
        password: '',
        isAgree: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
