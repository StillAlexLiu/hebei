<template>
    <chart :options='options' @click="echartsC"/>
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
    },
    barWidth: {
      type: Number,
      default: 20
    },
    barRadios: {
      type: Array,
      default: () => {
        return [30, 30, 0, 0]
      }
    },
    legend: {
      type: Array,
      default: () => {
        return ['']
      }
    },
    sort: {
      type: Boolean,
      default: false
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
    echartsC (data) {
      this.$emit('click', data[0])
    },
    getOption (data, dimensions, unit, colors) {
      return {
        dataset: {
          dimensions: dimensions,
          source: data
        },
        legend: {
          show: true,
          data: this.legend,
          right: 10,
          top: 10,
          textStyle: {
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 20
          }
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
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 16
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
              color: 'rgba(304, 304, 304, 0.9)',
              fontSize: 20
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
              color: 'rgba(304, 304, 304, 0.9)',
              fontSize: 20
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
              color: 'rgba(304, 304, 304, 0.9)',
              fontSize: 20,
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
                color: 'rgba(304, 304, 304, 0.9)',
                fontSize: 20,
                position: 'top'
              }
            },
            name: this.legend[0],
            type: 'bar',
            barWidth: this.barWidth,
            itemStyle: {
              normal: {
                barBorderRadius: this.barRadios,
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
