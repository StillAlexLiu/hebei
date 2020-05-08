<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: {
    data: {
      type: Object,
      default: () => {
        return []
      }
    },
    legend: {
      type: String,
      default: '数量'
    },
    unit: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#FF98A4'
    },
    barWidth: {
      type: Number,
      default: 30
    }
  },
  computed: {
    options () {
      return {
        legend: {
          data: [this.legend],
          // top: '3%',
          right: '5%',
          position: 'center',
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false,
          itemGap: 10,
          textStyle: {}
        },
        dataset: {
          source: this.data
        },
        grid: {
          left: '2%',
          right: '1%',
          bottom: '1%',
          top: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisLine: {
            lineStyle: {
              color: '#334B73',
              width: 2
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {}
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
            name: this.unit,
            nameTextStyle: {
              padding: [-2, 0, -1, -30]
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
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(51,75,115,0.4)'
              }
            }
          },
          {
            name: '',
            nameTextStyle: {},
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
              textStyle: {}
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
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {}
              }
            },
            name: this.legend,
            type: 'pictorialBar',
            barWidth: this.barWidth,
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: this.color
              }
            },
            symbolRepeat: true,
            symbolSize: [this.barWidth, 15],
            symbolMargin: 5
          },
          {
            name: '',
            type: 'pictorialBar',
            barWidth: this.barWidth,
            barGap: '-100%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(151,190,255,0.24)'
              }
            },
            symbolRepeat: true,
            symbolSize: [this.barWidth, 15],
            symbolMargin: 5
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
