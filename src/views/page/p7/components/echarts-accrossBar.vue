<template>
<div class="accross_bar">
    <v-chart class="full-width" :autoresize='true' :options='option'/>
    <div class="back">
        {{data.name}}
    </div>
</div>
</template>

<script>
export default {
  name: 'p1-echarts-acrossBar',
  props: ['data'],
  data: () => {
    return {
      option: {}
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        this.option = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      const option = {
        grid: {
          left: '15%',
          right: '20%',
          bottom: '25%',
          containLabel: true
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: '0',
            textStyle: {
              fontSize: 24,
              color: '#cee8ff'
            }
          },
          data: this.data.ydata,
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
                formatter: function (params) {
                  const str = params.name
                  const lastName = str.charAt(str.length - 1)
                  if (lastName === '率') {
                    return params.value + '%'
                  }
                },
                color: 'white',
                fontSize: 24
              }
            },
            itemStyle: {
              normal: {
                barBorderWidth: '0',
                barBorderRadius: [10, 10, 10, 10],
                barBorderColor: 'rgb(0,255,132)',
                color: '#F98E1A'
              },
              emphasis: {
                barBorderWidth: '1',
                barBorderColor: 'rgb(0,255,132)'
                // color: 'rgba(26,177,98,.8)'
              }
            },
            // 顺序 从下向上 传入
            data: this.data.xdata
          }
        ]
      }
      return option
    }
  }
}
</script>

<style scoped lang='less'>
.accross_bar{
    width: 100%;
    height: 100%;
    background-image: url('./img/11.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    .back{
        position: absolute;
        top: 73%;
        width: 250px;
        height: 45px;
        left: 33%;
        background-color: #2DA8C1;
        line-height: 45px;
        font-size: 2.5rem;
        text-align: center;
    }
}
</style>
