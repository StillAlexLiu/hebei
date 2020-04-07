<template>
<div class="liquidfill">
        <p class="fill_name">抽检批数趋势图</p>
        <div class="fill_pie">
            <v-chart class="full-width " :autoresize='true' :options='options'/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChartLine',
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
        console.log(this.data)
        this.options = this.getOption(this.xdata, this.ydata)
      }
    }
  },
  methods: {
    getOption () {
      return {
        tooltip: {},
        grid: {
          top: '15%',
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
          itemWidth: 15,
          itemHeight: 15,
          selectedMode: false,
          textStyle: {
            color: '#fff',
            fontSize: 20
          },
          nameTextStyle: {
            color: '#fff'
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: 'rgb(46, 117, 163)'
              }
            },
            axisLabel: {
              // 坐标轴刻度标签的相关设置
              interval: 0,
              rotate: 20,
              textStyle: {
                color: '#d1e6eb',
                fontSize: 20
              }
            },
            axisTick: {
              show: false
            },
            data: this.data.xdata
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位(件)',
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
              margin: 20,
              textStyle: {
                fontSize: 20,
                color: '#d1e6eb'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'line',
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
            lineStyle: {
              color: 'rgb(46, 117, 163)',
              width: 2
            },
            itemStyle: {
              color: 'rgb(46, 117, 163)'
            },
            data: this.data.ydata
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.liquidfill{
    width: 100%;
    height: 100%;
    .fill_name{
        width:40%;
        height:5rem;
        line-height: 5rem;
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
        color: white;
        background-image: url('./img/mhzhjg_img_jgquanjing_charttitle_style02_bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        text-indent: 20px;
    }
    .fill_pie{
        width: 100%;
        height: 87%;
    }
}
</style>
