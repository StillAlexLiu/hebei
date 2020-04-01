<template>
<div class="pieGroup">
   <v-chart class="full-width echarts" :autoresize='true' :options='options'/>
   <p class="p_name">{{data.name}}</p>
</div>
</template>

<script>
export default {
  name: 'ChartPie3',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
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
      let str = data.name
      let lastName = str.charAt(str.length - 1)
      let newName = ''
      if (lastName === '率') {
        newName = data.num + '%'
      } else {
        newName = data.num
      }
      return {
        title: {
          text: newName,
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'normal'
          }
        },
        calculable: true,
        series: [
          {
            type: 'pie',
            radius: [65, 90],
            center: ['50%', '50%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            data: [
              {
                value: this.data.num,
                itemStyle: {
                  color: '#3DB9CF'
                }
              },
              {
                value: 1000,
                name: 'rose2',
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          },
          {
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            type: 'pie',
            radius: [70, 85],
            center: ['50%', '50%'],
            hoverAnimation: false,
            data: [
              {
                value: this.data.num,
                itemStyle: {
                  color: 'transparent'
                }
              },
              {
                value: 1000,
                name: 'rose2',
                itemStyle: {
                  color: '#434857'
                }
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
.pieGroup{
    width: 70%;
    height: 80%;
    margin: 10% auto;
    .echarts{
      height: 80%!important;
    }
    .p_name{
      width: 100%;
      text-align: center;
      margin: 0;
      font-size: 2rem;
    }
}
</style>
