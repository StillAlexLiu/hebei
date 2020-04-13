<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartHalfPie',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
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
      let total = 0
      const tempData = []
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        total += item.value * 1
        tempData.push({
          name: '',
          value: 0
        })
      }
      return {
        title: {
          text: total,
          x: 'center',
          y: '50%',
          grid: {
            top: '5%',
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
          },
          textStyle: {
            color: '#79DFEF',
            fontFamily: 'LESLIE',
            fontSize: 42
          }
        },
        color: [
          '#4A90E2',
          '#55B0EE',
          '#22AEC5',
          '#22C5B7',
          '#4BD61D',
          '#60B404',
          '#61EADF',
          '#B8E986',
          '#6EE86D',
          '#FF997D',
          '#FFBF24',
          '#EDA3B3',
          '#87A0F6',
          '#AEA6F7',
          '#6B72E1',
          '#8A7CEF',
          '#B576ED',
          '#FE6941',
          '#FFD86D'
        ],
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: require('./img/chartBg.png'),
                height: 200,
                width: 600
              },
              left: 'center'
            }
          ]
        },
        calculable: true,
        series: [
          {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['36%', '80%'],
            avoidLabelOverlap: false,
            startAngle: 0,
            endAngle: 135,
            roseType: 'area',
            selectedMode: 'single',
            label: {
              normal: {
                show: true,
                formatter: function (par) {
                  if (par.value === 0) {
                    par.value = ''
                  } else {
                    return par.name + '\n' + par.value + '户'
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 16
                }
              }
            },
            labelLine: {
              normal: {
                show: false,
                smooth: false
              },
              emphasis: {
                show: false
              }
            },
            data: [...data, ...tempData]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
