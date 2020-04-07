<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    unit: {
      type: String,
      default: ''
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
        this.options = this.getOption(this.data, this.dimensions)
      }
    }
  },
  methods: {
    getOption (data, dimensions) {
      return {
        legend: {
          data: ['市场主体数量'],
          // top: '3%',
          right: '5%',
          position: 'center',
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false,
          itemGap: 10
        },
        dataset: {
          dimensions: dimensions,
          source: data
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
            rotate: 0
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
            nameLocation: 'end',
            nameGap: 16,
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
            },
            splitLine: {
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
                position: 'top'
              }
            },
            name: '市场主体数量',
            type: 'pictorialBar',
            barWidth: '80%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: '#FF98A4'
              }
            },
            symbolRepeat: true,
            symbolSize: [30, 15],
            symbolMargin: 5
          },
          {
            name: '',
            type: 'pictorialBar',
            barWidth: '80%',
            barGap: '-100%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(151,190,255,0.24)'
              }
            },
            symbolRepeat: true,
            symbolSize: [30, 15],
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
