import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import moment from 'moment'
import utils from './utils'
import data from './data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'video.js/dist/video-js.css';
import VueVideoPlayer from 'vue-video-player';
import 'videojs-contrib-hls';
import flash from 'videojs-flash';
import videojs from 'video.js';
Vue.use(VueVideoPlayer)
window.videojs = videojs;
Vue.use(VueVideoPlayer, flash);

import 'video.js/dist/video-js.css'
library.add(fas)
Vue.use(ElementUI)

moment.locale('zh-cn')

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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
