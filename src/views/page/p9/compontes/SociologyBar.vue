<template>
  <v-chart class='full-width' :autoresize='true' :options='options' />
</template>

<script>
export default {
  name: 'SociologyBar',
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
        // color: ["#4162ff", "#c78b42", "#CD3F2A", "#ff6e72", "#9692ff"],
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
          data: ['备案量']
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#0a3256'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: true,
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
              // 坐标轴刻度标签的相关设置
              interval: 0,
              // rotate: 20,
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
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c}',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            name: '备案量',
            type: 'bar',
            color: 'rgba(79,204,255,0.8)',
            itemStyle: {
              normal: {
                show: true,
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
