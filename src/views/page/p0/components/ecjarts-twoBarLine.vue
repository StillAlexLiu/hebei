<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props:['data'],
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
          data: ['投诉量', '举报量','已处理投诉'],
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
        grid: {
          left: '2%',
          right: '1%',
          bottom: '5%',
          top: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data:data.xdata,
          axisLine: {
            lineStyle: {
              color: '#334B73',
              width: 2
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
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
            name: '投诉量',
            type: 'bar',
            barWidth: '35%',
            barGap: '15%',
            symbol: 'rect',
            data: data.bardata1,
            itemStyle: {
              normal: {
                color: 'rgb(63,163,206,0.7)'
              }
            }
          },{
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
            name: '举报量',
            type: 'bar',
            barWidth: '35%',
            symbol: 'rect',
            barGap: '15%',
            data: data.bardata2,
            itemStyle: {
              normal: {
                color: 'rgb(37,151,148,0.7)'
              }
            }
          }, {
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
            name: '已处理投诉',
            type: 'line',
            barWidth: '38%',
            data: data.linedata,
            lineStyle: {
              color: 'rgb(255,216, 113)'
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
