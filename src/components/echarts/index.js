import ECharts from 'vue-echarts'
import 'echarts'
import screen from './screen'
import charts from './charts'
import 'echarts-liquidfill'
import 'echarts-wordcloud'
import ChartsBarLine from './ChartsBarLine'
import ChartsBarSimple from './ChartsBarSimple'
import ChartsPie from './ChartsPie'
import ChartsLiquidFill from './ChartsLiquidFill'
import ChartsPiePiecewise from './ChartsPiePiecewise'
import ChartsBarLineHorizontal from './ChartsBarLineHorizontal'
import ChartsPieValueLegend from './ChartsPieValueLegend'
import ChartsBarHorizontal from './ChartsBarHorizontal'

ECharts.registerTheme('screen', screen)
export default {
  install: (Vue) => {
    Vue.component('chart', charts)
    Vue.component('v-chart', ECharts)
    Vue.component('ChartsBarLine', ChartsBarLine)
    Vue.component('ChartsBarSimple', ChartsBarSimple)
    Vue.component('ChartsPie', ChartsPie)
    Vue.component('ChartsLiquidFill', ChartsLiquidFill)
    Vue.component('ChartsPiePiecewise', ChartsPiePiecewise)
    Vue.component('ChartsBarLineHorizontal', ChartsBarLineHorizontal)
    Vue.component('ChartsPieValueLegend', ChartsPieValueLegend)
    Vue.component('ChartsBarHorizontal', ChartsBarHorizontal)
  }
}
