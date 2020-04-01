<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
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
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      return {
        legend: {
          data: ['数量'],
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
          },
          {
            name: '',
            nameTextStyle: {
              color: '#fff',
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
              formatter: '{value}%',
              textStyle: {
                color: '#fff',
                fontSize: 24
              }
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
                textStyle: {
                  color: '#fff',
                  fontSize: 22
                }
              }
            },
            name: '数量',
            type: 'pictorialBar',
            barWidth: '80%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: '#3D9AEE'
              }
            },
            symbolRepeat: true,
            symbolSize: [50, 8],
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
            symbolSize: [50, 8],
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
