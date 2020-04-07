import ECharts from 'vue-echarts'
import 'echarts'
import screen from './screen'
import charts from './charts'
import 'echarts-liquidfill'

ECharts.registerTheme('screen', screen)
export default {
  install: (Vue) => {
    Vue.component('chart', charts)
    Vue.component('v-chart', ECharts)
  }
}
