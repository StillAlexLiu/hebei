<template>
        <div class="ChartsLiquidFillBackground" :style="{'backgroundImage': 'url(' + url + ')'}">
            <v-chart class="full-width" :autoresize='true' :options='options'/>
        </div>
</template>

<script>
export default {
  name: 'ChartsLiquidFillBackground',
  props: ['data', 'url'],
  data () {
    return {
      options: {
      }
    //   url: require('../../assets/images/mapTabs/p1/t1/dashboard@2x.png')
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
          top: 'center',
          left: 'center',
          text: this.data[1] + '%',
          textStyle: {
            color: '#79DFEF',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'LESLIE',
            fontSize: 50
          }
        },
        series: [
          {
            type: 'liquidFill',
            radius: '69%',
            itemStyle: {
              color: '#4D596F',
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
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsLiquidFillBackground {
    width: 100%;
    height: 100%;
    // background-image: url('../../assets/images/mapTabs/p1/t1/dashboard@2x.png');
    background-repeat: no-repeat;
    background-size: 70% 100%;
    background-position: center;
}
</style>
