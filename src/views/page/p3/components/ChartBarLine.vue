<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBarLine',
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
    legend: {
      type: Array,
      default: () => {
        return null
      }
    },
    dataIndex: {
      type: Array,
      default: () => {
        return null
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
        this.options = this.getOption(this.data, this.dimensions, this.legend, this.dataIndex)
      }
    }
  },
  methods: {
    getOption (data, dimensions, legend, dataIndex) {
      return {
        grid: {
          top: '12%',
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        textStyle: {
          fontSize: 20,
          color: '#fff'
        },
        dataset: {
          dimensions: dimensions,
          source: data
        },
        legend: {
          data: legend,
          // top: '3%',
          right: '5%',
          position: 'center',
          itemWidth: 10,
          itemHeight: 10,
          selectedMode: false,
          itemGap: 10,
          textStyle: {
            fontSize: 20,
            color: '#fff'
          }
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
                margin: 15,
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
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
          },
          {
            splitNumber: 7,
            nameLocation: 'end',
            nameTextStyle: {
              color: 'white'
            },
            splitLine: {
              show: false,
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
            name: legend[0],
            type: 'bar',
            barWidth: '30%',
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: '#FFBF24'
              }
            }
          }, {
            name: legend[1],
            type: 'bar',
            barWidth: '30%',
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: '#4A90E2'
              }
            }
          }, {
            name: legend[2],
            type: 'line',
            barWidth: 30,
            yAxisIndex: 1,
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: '#FE6941'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
