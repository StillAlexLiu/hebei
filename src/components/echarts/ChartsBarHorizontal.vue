<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsBarHorizontal',
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
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    barBorderRadius: {
      type: Array,
      default: [0, 0, 0, 0]
    },
    yName: {
      type: String,
      default: ''
    }
  },
  computed: {
    options () {
      const data = []
      const ydata = []
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i]
        item.itemStyle = {
          color: this.color[i % this.color.length]
        }
        ydata.push(item.name)
        data.push(item)
      }
      return {
        tooltip: {},
        grid: {
          top: '10%',
          left: '1%',
          right: '5%',
          bottom: '1%',
          containLabel: true
        },
        color: this.color,
        legend: {
          show: false
        },
        yAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ydata,
            name: this.yName,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: 'rgba(304, 304, 304, 0.9)',
                fontSize: 20
              }
            },
            axisLabel: {
              show: this.showLabel,
              margin: 20,
              textStyle: {
                color: 'rgba(304, 304, 304, 0.9)',
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
              show: this.showLabel,
              margin: 20,
              textStyle: {
                color: 'rgba(304, 304, 304, 0.9)',
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [{
          name: '',
          type: 'bar',
          barWidth: '38%',
          stack: '总量',
          tooltip: {
            show: false
          },
          label: {
            show: true,
            position: 'right',
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 20
          },
          itemStyle: {
            normal: {
              barBorderRadius: this.barBorderRadius
              // color: '#2EE1A2'
            }
          },
          data: data
        }]
      }
    }
  }
}
</script>

<style scoped>
</style>
