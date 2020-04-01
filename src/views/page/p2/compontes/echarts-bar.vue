<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: ['xdata', 'ydata'],
  data () {
    return {
      options: {}
    }
  },
  watch: {
    xdata: {
      immediate: true,
      deep: true,
      handler: function () {
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      return {
        tooltip: {},
        grid: {
          top: '12%',
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        legend: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#f9f9f9'
              }
            },
            axisLabel: {
              // 坐标轴刻度标签的相关设置
              interval: 0,
              rotate: 20,
              textStyle: {
                color: '#d1e6eb',
                margin: 30,
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            },
            data: this.xdata
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            splitNumber: 7,
            nameLocation: 'end',
            nameTextStyle: {
              color: 'white'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#0a3256'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#d1e6eb'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '最新注册量',
            type: 'bar',
            barWidth: 30,
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  let colorList = [
                    '#4A90E2',
                    '#54AFED',
                    '#22AEC5',
                    '#22C4B6',
                    '#205420',
                    '#61EADF',
                    '#F09077'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            },
            data: this.ydata
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
