<template>
    <div class="pieGroup">
        <v-chart class="full-width echarts" :autoresize='true' :options='options'/>
        <div class="p_name">{{data.name}}</div>
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
    },
    isPercent: {
      type: Boolean,
      default: false
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
      let newName = ''
      if (this.isPercent) {
        newName = data.num + '%'
      } else {
        newName = data.num
      }
      if(this.data.sum){
          this.data.sum = this.data.sum + '件'
      }
      return {
        title: {
          subtext: newName,
          text: data.sum,
          x: 'center',
          y: '37%',
          subtextStyle: {
            color: '#61EADF',
            fontSize: 26,
            fontWeight: 'normal',
            fontFamily: 'LESLIE'
          },
          textStyle: {
            color: '#61EADF',
            fontSize: 30,
            fontWeight: 'normal',
            fontFamily: 'LESLIE'
          }
        },
        calculable: true,
        series: [
          {
            type: 'pie',
            radius: ['60%', '80%'],
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
                  color: '#61EADF'
                }
              },
              {
                value: 100,
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
            radius: ['60%', '80%'],
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
                value: 100,
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
.pieGroup {
    width: 70%;
    height: 80%;
    margin: 10% auto;

    .echarts {
        height: 80% !important;
    }

    .p_name {
        width: 100%;
        text-align: center;
        margin: 0;
        font-size: 30px;
    }
}
</style>
