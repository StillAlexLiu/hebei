<template>
  <v-chart class="full-width" :autoresize="true" :options="options" />
</template>

<script>
import graphic from 'echarts/lib/util/graphic'
export default {
  name: 'ChartLine',
  props: ['xdata', 'ydata'],
  data() {
    return {
      options: {}
    };
  },
  watch: {
    xdata: {
      immediate: true,
      deep: true,
      handler: function() {
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption(data) {
      return {
        tooltip: {},
        grid: {
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          show: true,
          right: '5%',
          top: '0%',
          icon: 'stack',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#fff',
            fontSize: 24
          },
          nameTextStyle: {
            color: '#fff'
          },
          data: ['总量']
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
                margin: 30,
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            },
            data: this.xdata
          }
        ],
        yAxis: [
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
              // 坐标轴刻度标签的相关设置
              interval: 0,
              textStyle: {
                color: '#d1e6eb',
                margin: 30,
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '总量',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
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
                color: '#FFBF24',
                lineStyle: {
                  color: '#FFBF24',
                  width: 2
                },
                // areaStyle: {
                //   color: new graphic.LinearGradient(
                //     0,
                //     1,
                //     0,
                //     0,
                //     [
                //       {
                //         offset: 0,
                //         color: 'rgba(7,44,90,0.3)'
                //       },
                //       {
                //         offset: 1,
                //         color: 'rgba(0,146,246,0.9)'
                //       }
                //     ],
                //     false
                //   )
                // }
              }
            },
            data: this.ydata
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="less">
.ChartBar {
}
</style>
