import player from './player'
import HyVideo from './HyVideo.vue'
export default {
  install: (Vue) => {
    Vue.component('player', player)
    Vue.component('HyVideo', HyVideo)
  }
}
