·<template>
    <div class="autoCharts">
        <v-chart :options='computedOptions' ref="ec" :autoresize='true' theme="screen" @click="this.handler"/>
        <!--        {{computedOptions}}-->
    </div>
</template>

<script>
import echarts from 'vue-echarts'
import './echarts-auto-tooltip'
export default {
  name: 'autoCharts',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      tools: '',
      defaultOption: {
        title: {
          textStyle: {
            fontSize: 24,
            fontWeight: 'normal'
          }
        },
        grid: {
          containLabel: true,
          left: 10,
          top: 60,
          right: 10,
          bottom: 10
        }
      }
    }
  },
  computed: {
    width () {
      return this.$refs.ec.width
    },
    computedOptions () {
      // if (!this.options.grid) {
      //   const assign = {
      //     grid: this.defaultOption.grid
      //   }
      //   Object.assign(this.options, assign)
      // }
      // if (this.options.title) {
      //   Object.assign(this.options.title, this.defaultOption.title)
      // }
      return this.drawSensitiveFile
    }
  },
  methods: {
    drawSensitiveFile () {
      // const myChart = echarts.init(document.getElementById('autoCharts'))
      const option = {
        title: {
          text: '敏感文件分布分析',
          x: '40',
          textStyle: {
            color: '#fff'
          }

        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'

        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: ['人事类', '研发类', '营销类', '客户信息类'],
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '敏感文件分布数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '人事类' },
              { value: 310, name: '研发类' },
              { value: 234, name: '营销类' },
              { value: 1548, name: '客户信息类' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            labelLine: {
              normal: {
                // length:5,  // 改变标示线的长度
                lineStyle: {
                  color: '#fff' // 改变标示线的颜色
                }
              }
            },
            label: {
              normal: {
                textStyle: {
                  color: '#fff' // 改变标示文字的颜色
                }
              }
            }
          }
        ]
      }
      myChart.setOption(option)
      this.tools.loopShowTooltip(myChart, option, { loopSeries: true })
    },
    handler (...params) {
      this.$emit('click', params)
    }
  }
}
</script>

<style scoped lang="less">
.autoCharts {
    width: 100%;
    height: 100%;
}
</style>
