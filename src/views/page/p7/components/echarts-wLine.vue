<template>
    <v-chart class="full-width chart" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: ['data'],
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
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      return {
        color: ['#FF776D', 'yellow', '#FFBB6F', '#3DAEA1'],
        legend: {
          data: this.data.legend,
          top: '3%',
          right: '5%',
          position: 'center',
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false,
          icon: 'rect',
          itemGap: 10,
          textStyle: {
            fontSize: 20,
            color: '#fff'
          }
        },
        tooltip: {
          show: false
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: this.data.xdata,
          axisLine: {
            lineStyle: {
              color: '#334B73',
              width: 2
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {
              color: '#fff',
              fontSize: 18
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            nameTextStyle: {
              padding: [-2, 0, -1, -30],
              fontSize: 15,
              color: '#fff'
            },
            show: true,
            x: 'center',
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              // interval:0,
              textStyle: {
                color: '#fff',
                fontSize: 18
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(51,75,115,0.4)'
              }
            }
          },
          {
            name: '',
            nameTextStyle: {
              color: '#fff',
              fontSize: 22
            },
            show: true,
            x: 'center',
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              // interval:0,
              formatter: '{value}%',
              textStyle: {
                color: '#fff',
                fontSize: 24
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(51,75,115,0.4)'
              }
            }
          }
        ],
        series: [
          {
            name: this.data.legend[0],
            data: this.data.ydata[0],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: 'rgba(123,272,328)'
            },
            areaStyle: {
              color: 'rgba(5,140,255, 0.2)'
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.chart {
}
</style>
