<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    legend: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    barBorderRadius: {
      type: Array,
      default: () => {
        return [0, 0, 0, 0]
      }
    },
    unit: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: () => {
        return 2000
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
      var spNum = 5
      var _max = this.max
      var fomatterFn = function (v) {
        return v.value
      }
      var _label = {
        normal: {
          show: true,
          position: 'inside',
          formatter: fomatterFn,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }
      }
      var series = []
      var color = this.color
      for (let i = 0; i < this.legend.length; i++) {
        series.push(
          {
            type: 'bar',
            name: this.legend[i],
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 30,
            itemStyle: {
              normal: {
                color: color[i],
                barBorderRadius: this.barBorderRadius
              },
              emphasis: {
                color: color[i]
              }
            },
            data: eval('data.ydata' + (i + 1))
          }
        )
      }
      return {
        legend: {
          data: this.legend,
          right: 10,
          top: 10,
          selectedMode: false,
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: '#ccc',
            fontSize: 23
          }
        },
        grid: {
          containLabel: true,
          left: 0,
          right: 25,
          bottom: 30
        },
        tooltip: {
          show: false
        },
        xAxis: {
          splitNumber: spNum,
          interval: _max / spNum,
          // max: 1000,
          // min: 0,
          max: _max,
          axisLabel: {
            show: false,
            formatter: function (v) {
              var _v = (v / _max * 100).toFixed(0)
              return _v === 0 ? _v : _v + '%'
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }

        },
        yAxis: [{
          data: data.xdata,
          // max: 1000,
          name: this.unit,
          // min: 0,
          axisLabel: {
            fontSize: 20,
            color: '#fff'
          },
          nameTextStyle: {
            fontSize: 20,
            color: 'white'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
