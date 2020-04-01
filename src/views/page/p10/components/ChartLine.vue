<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartLine',
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
      let series = []
      console.log(legend)
      for (let i = 0; i < legend.length; i++) {
        series.push({
          name: legend[i],
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            }
          },
          areaStyle: {},
          smooth: true,
          type: 'line'
        })
      }
      console.log(series)
      return {
        dataset: {
          dimensions: dimensions,
          source: data
        },
        legend: {
          show: true,
          right: 10,
          selectedMode: true,
          data: legend,
          icon: 'roundRect',
          textStyle: {
            color: 'white',
            fontSize: 20
          }
        },
        color: colors,
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
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartLine {

}
</style>
