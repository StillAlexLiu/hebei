<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
    <!--    <div>{{options}}</div>-->
</template>

<script>
export default {
  name: 'ChartRadar',
  props: {
    data: {
      type: Array,
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
      let indata = []
      for (let i = 0; i < data.length; i++) {
        indata.push(data[i].value)
      }
      return {
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 20,
              rich: {
                a: {
                  color: '#FE6941',
                  lineHeight: 20,
                  fontSize: 20
                }
              }
            },
            formatter: function (value, indicator) {
              return indicator.name + ' ' + '{a|' + indicator.value + '}'
              // return indicator.name + ' ' + indicator.num+ ''
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#1E8DB0',
              width: 2
            }
          },
          indicator: data
        },
        series: [{
          type: 'radar',
          data: [{
            name: '',
            value: indata
          }],
          areaStyle: {
            normal: { // 单项区域填充样式
              color: {
                colorStops: [{
                  offset: 0,
                  color: 'rgba(255, 115, 78, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(254, 133, 52, 0.4)'
                }]
              },
              opacity: 1 // 区域透明度
            }
          }
        }]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartRadar {

}
</style>
