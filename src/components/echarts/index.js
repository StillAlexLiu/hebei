import ECharts from 'vue-echarts'
import 'echarts'
import charts from './charts'

export default {
  install: (Vue) => {
    Vue.component('chart', charts)
    Vue.component('v-chart', ECharts)
  }
}
