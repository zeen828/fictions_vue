<template>
  <div class="recharge">
    <ComHeader :title="pageTitle"></ComHeader>
    <mu-row>
      <mu-col span="9"></mu-col>
      <mu-col span="3" class="clear-data" @click="gotoService()">投诉</mu-col>
    </mu-row>
    <mu-card>
      <mu-card-header :title="'编号：' + userInfo.id" :sub-title="'点数：' + userInfo.points">
        <mu-avatar :size="size" slot="avatar" @click="openDebug">
          <img src="@/assets/user/160x160.jpg">
        </mu-avatar>
      </mu-card-header>
    </mu-card>
    <mu-card>
      <mu-card-title title="储值"></mu-card-title>
      <mu-row>
        <mu-col span="6" v-for="(val, index) in amounts" :key="index">
          <div class="payment_box" @click="showPayment(val.id, val.payment, val.test_payment)">
            <p class="payment_money">{{val.name}}</p>
            <p class="payment_point">{{val.points}}书币</p>
            <p class="payment_remark">{{val.description}}</p>
          </div>
        </mu-col>
      </mu-row>
    </mu-card>
    <mu-divider></mu-divider>
    <mu-card>
      <mu-card-title title="VIP"></mu-card-title>
      <mu-row>
        <mu-col span="6" v-for="(val, index) in amountsVip" :key="index">
          <div class="payment_box" @click="showPayment(val.id, val.payment, val.test_payment)">
            <p class="payment_money">{{val.name}}</p>
            <p class="payment_point">{{val.name}} {{val.vip_name}}</p>
            <p class="payment_remark">{{val.vip_day}}天内免费阅读</p>
          </div>
        </mu-col>
      </mu-row>
    </mu-card>
    <mu-dialog title="充值方式" width="360" :open.sync="openSimple">
      <mu-list>
        <mu-list-item avatar button :ripple="false" v-for="(val, index) in payments" :key="index" @click="callPayment(val.id, val.domain, val.sdk)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="require('@/assets/payments/' + val.sdk.toLowerCase() + '.png')">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>
            <span v-if="val.sdk == 'Weixin'">微信支付</span>
            <span v-else>支付宝</span>
          </mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <mu-list v-if="debug">
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-title>测试支付</mu-list-item-title>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false" v-for="(val, index) in test_payments" :key="index" @click="callPayment(val.id, val.domain, val.sdk)">
          <mu-list-item-action>
            <mu-avatar>
              <img :src="require('@/assets/payments/' + val.sdk.toLowerCase() + '.png')">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>{{ val.id }}-{{ val.name }}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import ComHeader from '@/components/html/Header.vue'
import ajaxUsers from '@/api/users'
import ajaxOrders from '@/api/orders'

export default {
  name: 'Recharge',
  components: {
    ComHeader
  },
  computed: {
    userInfo: {
      get () {
        return this.$store.getters['apiUsers/getUserInfo']
      }
    },
    token: {
      get () {
        return this.$store.getters['apiUsers/getToken']
      }
    },
    amounts: {
      get () {
        return this.$store.getters['apiPayments/getListAmounts']
      }
    },
    amountsVip: {
      get () {
        return this.$store.getters['apiPayments/getListAmountsVip']
      }
    }
  },
  data () {
    return {
      pageTitle: '充值',
      size: 60,
      amountId: 0,
      paymentId: 0,
      payments: [],
      test_payments: [],
      openSimple: false,
      debugCount: 0,
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('充值 > 開始')
    this.ready()
  },
  beforeDestroy () {},
  destroyed () {},
  methods: {
    ready () {
      this.updatePayment()
    },
    updatePayment () {
      this.$store.dispatch('apiPayments/ready', {}, { root: true })
    },
    // 自動註冊會員
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
            // that.gotoPersonal()
            that.openSimple = true
          }
        }
      })
    },
    // 顯示金額可支付商
    showPayment (amountId, payment, tpayment) {
      var that = this
      that.amountId = amountId
      that.payments = payment
      that.test_payments = tpayment // 測試支付
      // 檢查會員沒有舊自動建立
      // var token = window.localStorage.getItem('tokenJWT')
      if (that.token) {
        // console.log('有會員')
        that.openSimple = true
      } else {
        // console.log('沒有會員')
        that.autoRegistered()
      }
    },
    closeSimpleDialog () {
      this.openSimple = false
    },
    // 發起訂單
    callPayment (paymentId, domain, sdk) {
      console.log('callPayment')
      var that = this
      that.paymentId = paymentId
      ajaxOrders.createOrder(that.token, that.amountId, that.paymentId).then(function (result) {
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data.data.automaticCreateOrder
          if (apiData !== null) {
            // console.log('支付API', apiData)
            window.location.href = apiData.payurl
            that.closeSimpleDialog()
          }
        }
      })
    },
    openDebug () {
      this.debugCount++
      if (this.debugCount >= 10) {
        this.debug = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recharge {
  .clear-data {
    text-align: right;
    color: #FF0000;
  }
  .payment_box {
    min-height: 100px;
    text-align: center;
    border-radius: 0.5rem;
    border: 1px solid #ff5722;
    box-shadow: 0 0.16rem 0.4rem 0.01rem rgba(0,0,0,.3);
    margin: 10px;
    .payment_money {
      font-size: 0.8rem;
      line-height: 0.8rem;
      color: #f44336;
    }
    .payment_point {
      font-size: 1rem;
      line-height: 1rem;
      // color: #f44336;
    }
    .payment_remark {
      font-size: 0.5rem;
      line-height: 0.5rem;
      color: #f44336;
    }
  }
}
</style>
