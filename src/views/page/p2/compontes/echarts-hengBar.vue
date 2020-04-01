<template>
    <v-chart class="full-width chart" :autoresize='true' :options='options'/>
</template>
<script>
export default {
  name: 'ChartBar',
  props: ['xdata', 'ydata'],
  data () {
    return {
      options: {}
    }
  },
  watch: {
    xdata: {
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
        grid: {
          left: '1%',
          right: '7%',
          bottom: '1%',
          top: '30',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: '0',
            textStyle: {
              fontSize: 20,
              color: '#cee8ff'
            }
          },
          data: this.ydata,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        xAxis: {
          type: 'value',
          name: '',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '数量',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                color: 'white',
                fontSize: 20
              }
            },
            itemStyle: {
              normal: {
                barBorderWidth: '0',
                barBorderRadius: [10, 10, 10, 10],
                barBorderColor: 'rgb(0,255,132)',
                color: '#2676C9'
              },
              emphasis: {
                barBorderWidth: '1',
                barBorderColor: 'rgb(0,255,132)'
                // color: 'rgba(26,177,98,.8)'
              }
            },
            // 顺序 从下向上 传入
            data: this.xdata
          }
        ]
      }
    }
  }
}
</script>

<style lang="less">
.chart{
    width: 100%;
    height: 90%!important;
}
</style>
