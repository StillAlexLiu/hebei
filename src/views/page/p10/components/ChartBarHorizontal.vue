<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBarHorizontal',
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
      console.log(dimensions)
      const series = []
      for (let i = 0; i < dimensions.length - 1; i++) {
        series.push({
          name: '最新注册量' + i,
          type: 'bar',
          barWidth: '38%',
          stack: '总量',
          tooltip: {
            show: false
          },
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#fff',
              fontSize: 20
            }
          },
          itemStyle: {
            normal: {
              // color: '#2EE1A2'
            }
          }

        })
      }
      return {
        tooltip: {},
        grid: {
          top: '1%',
          left: '1%',
          right: '5%',
          bottom: '1%',
          containLabel: true
        },
        color: ['#2EE1A2', '#54AFED', '#22AEC5', '#22C4B6', '#205420', '#61EADF', '#F09077'],
        dataset: {
          dimensions: dimensions,
          source: data
        },
        legend: {
          show: false
        },
        yAxis: [
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
        xAxis: [
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
