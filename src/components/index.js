import HelloWorld from '@/components/HelloWorld.vue'
import container from './container'
import common from './common'
import map from './map'
import radio from './radio'
import charts from './echarts'
import video from './video'
import table from './table'
import './css/index.less'
import directive from './directive'
import other from './other'

export default {
  install: (Vue, options) => {
    Vue.use(container)
    Vue.use(common)
    Vue.use(radio)
    Vue.use(charts)
    Vue.use(video)
    Vue.use(table)
    Vue.use(other)
    Vue.use(directive)
    Vue.use(map, options)
    Vue.component('HelloWorld', HelloWorld)
  }
}
