<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
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
          data: ['监控数量'],
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
          }
        ],
        series: [
          {
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 22
                }
              }
            },
            name: '监控数量',
            type: 'bar',
            barWidth: '38%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: '#FF997D'
              }
            },
            symbolRepeat: true,
            symbolSize: [20, 4],
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
