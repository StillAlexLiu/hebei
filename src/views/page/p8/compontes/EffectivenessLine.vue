<template>
  <v-chart class="full-width" :autoresize="true" :options="options" />
</template>

<script>
export default {
  name: 'ChartLine',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        console.log(this.data)
        this.options = this.getOption(this.xdata, this.ydata)
      }
    }
  },
  methods: {
    getOption () {
      return {
        tooltip: {},
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          show: true,
          right: '5%',
          top: '5%',
          icon: 'stack',
          itemWidth: 15,
          itemHeight: 15,
          selectedMode: false,
          textStyle: {
            color: '#fff',
            fontSize: 20
          },
          nameTextStyle: {
            color: '#fff'
          },
          data: ['数量']
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
            data: this.data.xdata
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
                fontSize: 20,
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
            name: '数量',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
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
                color: 'red',
                lineStyle: {
                  color: 'red',
                  width: 1
                }
              }
            },
            data: this.data.ydata
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
