# 小說迴圈推廣 Vue版本

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

## 安裝套件
#### axios (AJAX 用在API)
```
npm install --save axios vue-axios
```

#### vue-ba (百度分析)
```
npm install --save vue-ba
```
main.js增加
```
import ba from 'vue-ba'
Vue.use(ba, 'YOUR_SITEID_HERE')
增加百度事件
Vue.use(uweb,options)
```
百度事件可參考[NPM網站規格](https://www.npmjs.com/package/vue-ba)

#### 參考
[vue props](https://jeremysu0131.github.io/Vue-js-%E7%88%B6%E5%AD%90%E7%B5%84%E4%BB%B6%E6%BA%9D%E9%80%9A-Props/)
[其他人無限迴圈參考](http://tom.ynydsm.com/gf.html?reurl=afzotzgi96#0)
[取當下網址](https://www.wibibi.com/info.php?tid=82)
[vue回上一頁按鈕改寫](https://www.jb51.net/article/192723.htm)
[歷史紀錄處理](https://developer.mozilla.org/zh-TW/docs/Web/API/History_API)
[歷史紀錄講解](https://medium.com/@moojing/%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9A%84%E6%99%82%E5%85%89%E6%A9%9F-pushstate-replacestate-api-fa1d909c82b0)
