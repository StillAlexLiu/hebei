import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/az-style/index.less'
import components from './components'
import moment from 'moment'
import utils from './utils'
import data from './data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import dataLoader from './assets/dataLoader'
import liquidfill from '../src/assets/js/liquidFill'

import 'video.js/dist/video-js.css'
library.add(fas)

moment.locale('zh-cn')

// 整理的数据，模拟数据
Vue.prototype.$mockData = dataLoader

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$dataAll = data
Vue.component('font-awesome-icon', FontAwesomeIcon) // 安装fontawesome

Vue.use(components, { // 引用安智封装组件
  map: { // 高德地图组件配置
    version: '1.4.15', // 版本
    key: '675a96218fac458cee2107b30952b58e' // key
  }
})
Vue.use(utils)
Vue.use(liquidfill)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
