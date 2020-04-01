<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: ['data'],
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
        title: {
          top: '45%',
          left: 'center',
          text: this.data[1] + '%',
          textStyle: {
            color: 'white',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 20
          }
        },
        series: [
          {
            type: 'liquidFill',
            radius: '80%',
            itemStyle: {
              color: '#31CBE5',
              opacity: 1,
              shadowBlur: 0,
              shadowColor: 'blue'
            },
            emphasis: {
              itemStyle: {
                color: '#31CBE5',
                opacity: 1,
                shadowBlur: 0,
                shadowColor: 'blue'
              }
            },
            name: this.data[0],
            data: [(this.data[1]) / 100],
            color: ['#53d5ff'],
            center: ['50%', '50%'],
            backgroundStyle: {
              color: 'rgb(20, 85, 116, 0.5)'
            },
            label: {
              normal: {
                formatter: '',
                textStyle: {
                  fontSize: 20
                }
              }
            },
            outline: {
              itemStyle: {
                borderColor: 'rgb(20, 85, 116, 0.5)',
                borderWidth: 1
              },
              borderDistance: 0
            }
          },
          {
            type: 'pie',
            radius: ['90%', '95%'],
            hoverAnimation: false,
            label: {
              show: false,
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },

            itemStyle: {
              // 此配置
              normal: {
                color: '#14577A',
                borderWidth: 1,
                borderColor: '#14577A'
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              {
                value: 1,
                name: '1',
                explain: '1'
              }
            ]
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
