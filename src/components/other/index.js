import Banner from './Banner'
import ChatInfo from './chat/ChatInfo'
import short from './short/Short'

export default {
  install: (Vue, options) => {
    Vue.component('Banner', Banner)
    Vue.component('ChatInfo', ChatInfo)
    Vue.component('short', short)
  }
}
