import Banner from './Banner'
import ChatInfo from './chat/ChatInfo'

export default {
  install: (Vue, options) => {
    Vue.component('Banner', Banner)
    Vue.component('ChatInfo', ChatInfo)
  }
}
