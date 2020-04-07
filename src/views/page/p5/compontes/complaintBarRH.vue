<template>
  <v-chart class="full-width" :autoresize="true" :options="options" />
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
    getOption () {
      return {
        tooltip: {},
        grid: {
          top: '5%',
          left: '5%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          show: true,
          right: '4%',
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
          data: ['单位:件']
        },
        xAxis: [
          {
            type: 'value',
            boundaryGap: true,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: false,
              lineStyle: {
                color: '#f9f9f9'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false,
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
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            splitLine: {
              show: false,
              lineStyle: {
                color: '#0a3256'
              }
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            },
            data: this.xdata
          }
        ],
        series: [
          {
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{c}件',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            name: '单位:件',
            type: 'bar',
            // barWidth:getRemSize(15),
            itemStyle: {
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: this.ydata
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.ChartBar {
}
</style>
