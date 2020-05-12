<template>
    <div class="accross_bar">
        <div class="h-3-4 c-can">
            <v-chart class="full-width" :autoresize='true' :options='option'/>
        </div>
        <div class="ab-can h-1-4">
            <div class="back">
                {{data.name}}
            </div>
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
    getOption () {
      const data = []
      const colors = ['#4A90E2', '#91D243', '#FE6941']
      for (let i = 0; i < this.data.xdata.length; i++) {
        data.push({
          value: this.data.xdata[i],
          itemStyle: {
            color: colors[i]
          }
        })
      }

      const option = {
        grid: {
          left: '15%',
          right: '20%',
          bottom: '25%',
          top: '20%',
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
            barWidth: 34,
            showBackground: true,
            backgroundStyle: {
              borderColor: '#5FA2F3',
              borderWidth: 1
            },
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
            // 顺序 从下向上 传入
            data: data
          }
        ]
      }
      return option
    }
  }
}
</script>

<style scoped lang='less'>
.accross_bar {
    width: 100%;
    height: 100%;
    position: relative;

    .c-can {
        background-image: url('./img/11.png');
        background-size: 744px 285px;
        background-repeat: no-repeat;
        background-position: center;
    }

    .ab-can {
        /*position: absolute;*/
        /*width: 100%;*/
        /*height: 60px;*/
        /*bottom: 100px;*/
    }

    .back {
        width: 220px;
        height: 68px;
        background-image: url('./img/44.png');
        background-size: 220px 68px;
        line-height: 68px;
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        bottom: 0;
        margin: 0 auto;
    }
}
</style>
