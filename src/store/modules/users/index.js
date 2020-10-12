import apiUsers from '@/api/users'

export default {
  namespaced: true,
  state: {
    // 簽名
    token: '',
    // JWT簽名
    tokenJWT: '',
    // 會員資訊
    userInfo: {
      id: 0,
      account: '',
      password: '',
      nick_name: '游客',
      phone: '',
      sex: 0,
      points: 0,
      vip: 0,
      vip_at: ''
    },
    // 點數
    points: 0,
    // 除錯
    debug: false
  },
  mutations: {
    token (state, val) {
      state.token = val
    },
    tokenJWT (state, val) {
      state.tokenJWT = val
    },
    userInfo (state, val) {
      state.userInfo = val
    },
    points (state, val) {
      state.points = val
    },
    // 除錯
    debug (state, debug) {
      state.debug = debug
    }
  },
  getters: {
    getToken (state) {
      return state.token
    },
    getTokenJWT (state) {
      return state.tokenJWT
    },
    getUserInfo (state) {
      return state.userInfo
    },
    getPoints (state) {
      return state.points
    },
    debug (state) {
      return state.debug
    }
  },
  actions: {
    ready (context) {
      // console.log('Vues.store.model.users.action.ready')
      // console.log(context)
      context.dispatch('apiUsers/login', {}, { root: true })
    },
    login (context) {
      // console.log('Vues.store.model.users.action.login')
      // 1.取token
      var token = window.localStorage.getItem('tokenJWT')
      // 套件測試
      // 2.判斷token去換取新資訊
      if (token) {
        apiUsers.byToken(token).then(function (result) {
          // console.log('Soter會員資料', result)
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data.data.user
            if (apiData !== null) {
              context.commit('token', apiData.token_jwt)
              context.commit('tokenJWT', apiData.token_jwt)
              context.commit('userInfo', apiData)
            }
          }
        })
      }
    },
    debug (context) {
      // console.log(context)
    }
  }
}
