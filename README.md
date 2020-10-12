# 小說前端 Vue版本

## 基礎指令
#### 專案安裝
```
npm install
```

#### 開發指令
```
npm run dev
```

#### 打包指令
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

## 目錄
<details>
<summary>展开查看</summary>
<pre><code>
├── public
├── src
│   ├── api (axios)
│   │   ├── amounts.js
│   │   ├── base.js
│   │   ├── baseQL.js
│   │   ├── books.js
│   │   ├── booktypes.js
│   │   ├── chapters.js
│   │   ├── orders.js
│   │   ├── pointLog.js
│   │   ├── promotes.js
│   │   ├── ranking.js
│   │   └── users.js
│   ├── assets (資源)
│   ├── components (元件庫)
│   │   ├── books (書籍元件)
│   │   ├── classif (分類元件)
│   │   ├── home (首頁元件)
│   │   └── html (全域元件)
│   ├── mixins (共用函式)
│   │   ├── goto.js (頁面跳轉相關)
│   │   ├── is.js (頁面判斷)
│   │   └── scroll.js (捲動輔助)
│   ├── router (路由)
│   │   └── index.js
│   ├── store (vuex狀態)
│   │   ├── modules
│   │   │   ├── books (書籍章節)
│   │   │   ├── payments (支付金流)
│   │   │   ├── ranking (排行)
│   │   │   └── users (會員登入註冊)
│   │   └── index.js
│   ├── views
│   │   ├── bookclass (書庫)
│   │   │   └── Index.vue
│   │   ├── books (書籍章節)
│   │   │   ├── pages
│   │   │   │   ├── Book.vue (書籍)
│   │   │   │   └── Chapter.vue (章節)
│   │   │   └── Index.vue
│   │   ├── classif (分類)
│   │   │   └── Index.vue
│   │   ├── home (首頁)
│   │   │   └── Index.vue
│   │   ├── personal (個人)
│   │   │   ├── pages
│   │   │   │   ├── Info.vue (個人資訊)
│   │   │   │   ├── Login.vue (登入)
│   │   │   │   ├── PointLog.vue (點數使用)
│   │   │   │   └── Registered.vue (註冊)
│   │   │   └── Index.vue
│   │   ├── ranking (排行)
│   │   │   └── Index.vue
│   │   ├── recharge (充值)
│   │   │   └── Index.vue
│   │   ├── record (閱讀紀錄)
│   │   │   └── Index.vue
│   │   ├── search (搜尋)
│   │   │   └── Index.vue
│   │   └── tests (測試)
│   │       ├── Test1.vue
│   │       └── Test2.vue
│   ├── App.vue
│   └── main.js
├── .env.development
├── .env.production
├── package.json
├── package-lock.json
└── README.md
</code></pre>
</details>

## 備註
#### 回源網址
##### 開發
```
IP：8.210.90.180
前端：dev.numyue.cn:930
API：dev.numyue.cn:931
後台：dev.numyue.cn:932
APK：dev.numyue.cn:933
```

##### 正式
```
前端：www.numyue.cn
API：graphiql.numyue.cn
後台：admin.numyue.cn
APK：apk.numyue.cn
```

##### 原生APK下載包
http://dev.numyue.cn:930/q_V1.1.apk

#### APP手機裡註冊名稱 (Web喚起APP用)
fiction://home.fiction.com/

#### Cookie
https://blog.csdn.net/qq_35250826/article/details/106111768

npm install vue-cookies --save

mian.js
```
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 元件中直接使用 來設定cookie
this.$cookies.set('test', 'val', 60 * 60)
// 元件中獲取方式
this.$cookies.get('test') 
// 刪除 cookie
this.$cookies.remove('test')
// 檢查key
this.$cookies.isKey('test')
// 獲取所有cookie名稱
this.$cookies.keys()
```

#### APP打包 (未使用)
https://blog.csdn.net/Two_Too/article/details/83095177

#### 參考網站
VUEX教學
https://blog.hinablue.me/2019-ithome-ironman-day-8/
