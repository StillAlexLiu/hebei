<template>
    <div class="liquidfill">
        <p class="fill_name">当前抽检合格率</p>
        <div class="fill_pie">
            <v-chart class="full-width " :autoresize='true' :options='options'/>
        </div>
    </div>
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
            name: '主体数量',
            // radius: ['70%', '75%'],
            radius: '67%',
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
            radius: ['70%', '75%'],
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
