<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBarSimple',
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
    legend: {
      type: Array,
      default: () => {
        return []
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
        this.options = this.getOption(this.data, this.dimensions, this.unit, this.colors, this.legend)
      }
    }
  },
  methods: {
    getOption (data, dimensions, unit, colors, legend) {
      return {
        color: colors,
        dataset: {
          dimensions: dimensions,
          source: data
        },
        legend: {
          show: true,
          right: 10,
          selectedMode: false,
          data: legend,
          textStyle: {
            color: 'white',
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
            name: unit,
            min: 0,
            splitNumber: 7,
            nameLocation: 'end',
            nameTextStyle: {
              color: 'white',
              fontSize: 18
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
          }
        ],
        series: [
          {
            label: {
              normal: {
                show: true,
                formatter: function (value) {
                  return value.data.value + '%'
                },
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 20
                }
              }
            },
            name: legend[0],
            type: 'bar',
            barWidth: '61.8%'
            // itemStyle: {
            //   normal: {
            //     color: function (params) {
            //       return colors[params.dataIndex % colors.length]
            //     }
            //   }
            // }
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
