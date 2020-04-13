<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBarGroup',
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
    colors: {
      type: Array,
      default: () => {
        return ['#FF997D', '#4A90E2', '#FFD86D']
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
        this.options = this.getOption(this.data, this.dimensions, this.legend, this.colors, this.unit)
      }
    }
  },
  methods: {
    getOption (data, dimensions, legend, colors, unit) {
      const series = []
      for (let i = 0; i < legend.length; i++) {
        series.push({
          name: legend[i],
          type: 'bar',
          // barWidth: '',
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
              color: colors[i % colors.length]
            }
          }
        })
      }
      return {
        tooltip: {},
        grid: {
          top: '12%',
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
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
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#f9f9f9'
              }
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#d1e6eb',
                margin: 20,
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
            name: unit,
            type: 'value',
            min: 0,
            splitNumber: 7,
            nameLocation: 'end',
            nameTextStyle: {
              color: 'white',
              fontSize: 18
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
                color: '#d1e6eb',
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: series
      }
    }
  }
}
</script>

<style scoped>
</style>
