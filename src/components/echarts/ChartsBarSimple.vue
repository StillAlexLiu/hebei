<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsBarSimple',
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
    },
    colors: {
      type: Array,
      default: () => {
        return ['#FF997D', '#4A90E2', '#FFD86D']
      }
    },
    showValue: {
      type: Boolean,
      default: true
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
        this.options = this.getOption(this.data, this.dimensions, this.unit, this.colors)
      }
    }
  },
  methods: {
    getOption (data, dimensions, unit, colors) {
      return {
        dataset: {
          dimensions: dimensions,
          source: data
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
            name: unit,
            min: 0,
            splitNumber: 7,
            nameLocation: 'end',
            nameTextStyle: {
              fontSize: 14
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
            nameTextStyle: {
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
              formatter: '{value}%'
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
                show: this.showValue,
                position: 'top'
              }
            },
            name: '市场主体数量',
            type: 'bar',
            barWidth: '20',
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: function (params) {
                  return colors[params.dataIndex % colors.length]
                }
              }
            }
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
