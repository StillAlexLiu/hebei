<template>
    <div id="chart">
        <!-- <v-chart :options='computedOptions' ref="ec" :autoresize='true' theme="screen" @click="this.handler"/> -->
        <!--        {{computedOptions}}-->
    </div>
</template>

<script>
import echarts from 'echarts'
import './echarts-tooltip-carousel'
export default {
  name: 'autoCharts',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      defaultOption: {
        title: {
          textStyle: {
            fontSize: 24,
            fontWeight: 'normal'
          }
        },
        grid: {
          containLabel: true,
          left: 10,
          top: 60,
          right: 10,
          bottom: 10
        }
      }
    }
  },
  computed: {
    width () {
      return this.$refs.ec.width
    },
    computedOptions () {
      if (!this.options.grid) {
        const assign = {
          grid: this.defaultOption.grid
        }
        Object.assign(this.options, assign)
      }
      if (this.options.title) {
        Object.assign(this.options.title, this.defaultOption.title)
      }
      return this.options
    }
  },
  mounted () {
    this.drawSensitiveFile()
  },
  methods: {
    drawSensitiveFile () {
      const line = {
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      this.options.color = ['red', 'yellow']
      this.createExample(line, {
        loopSeries: true
      })
    },
    createExample (option, tooltipOption) {
      // 基于准备好的dom，初始化echarts图表
      const chart = echarts.init(document.getElementById('chart'))
      // 为echarts对象加载数据
      chart.setOption(option)
      tools.loopShowTooltip(chart, option, tooltipOption)
    },
    handler (...params) {
      this.$emit('click', params)
    }
  }
}
</script>

<style scoped lang="less">
#chart {
    width: 100%;
    height: 100%;
}
</style>
