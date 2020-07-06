<template>
  <chart :options="options"/>
</template>

<script>
const img1 = require('../componets/img/img1.png')
const img2 = require('../componets/img/img2.png')
const img3 = require('../componets/img/img3.png')
const img4 = require('../componets/img/img4.png')
export default {
  name: 'custom',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data: () => {
    return {
      info1: {
        name: '企业申办',
        value: '0',
        unit: '条'
      },
      info2: {
        title: '市场监管局',
        data: [
          {
            name: '平均用时',
            value: '0',
            unit: 'h'
          },
          {
            name: '已处理',
            value: '0',
            unit: '条'
          }
        ]
      },
      info3: [
        {
          title: '人社',
          name: '平均用时',
          value: '0',
          unit: 'h',
          name1: '已处理',
          value1: '0',
          unit1: '条'
        }, {
          title: '银行',
          name: '平均用时',
          value: '3',
          unit: 'h',
          name1: '已处理',
          value1: '321',
          unit1: '条'
        }, {
          title: '税收',
          name: '平均用时',
          value: '3',
          unit: 'h',
          name1: '已处理',
          value1: '321',
          unit1: '条'
        }, {
          title: '公安',
          name: '平均用时',
          value: '3',
          unit: 'h',
          name1: '已处理',
          value1: '321',
          unit1: '条'
        }
      ],
      info4: {
        name: '开办成功',
        value: '321',
        unit: '条'
      }
    }
  },
  computed: {
    options () {
      this.info1.value = this.data.entApply
      this.info2.data[0].value = this.data.avgAppHours
      this.info2.data[1].value = this.data.applyDone
      this.info3[3].value1 = this.data.gaDone
      this.info3[3].value = this.data.avggaHours
      this.info3[2].value1 = this.data.ssDOne
      this.info3[2].value = this.data.avgssHours
      this.info3[1].value1 = this.data.yhdone
      this.info3[1].value = this.data.avgyhHours
      this.info3[0].value1 = this.data.rsdone
      this.info3[0].value = this.data.avgrsHours
      this.info4.value = this.data.entDone
      // entDone
      const lineData = []
      const lineDataEffect = []
      const colors = ['#89B557', '#89B557', '#89B557']
      for (let i = -3; i < 4; i++) {
        const y = 50 + i * 3
        lineData.push({
          coords: [[12, y], [36, y]]
        })
        for (let j = 0; j < Math.ceil(Math.random() * 10); j++) {
          lineDataEffect.push({
            coords: [[12, y], [36, y]],
            lineStyle: {
              normal: {
                color: colors[j % 3],
                // color: '#89B557',
                width: 0
              }
            }
          })
        }
      }

      for (let i = -15; i < 16; i++) {
        const y = 50 + i * 3
        if ([9, 8, 7, 1, 0, -1, -7, -8, -9].indexOf(i) < 0) {
          lineData.push({
            coords: [[36, 50], [47, y]],
            lineStyle: {
              curveness: this.getCurveness(i)
            }
          })
          lineData.push({
            coords: [[76, y], [86, 50]],
            lineStyle: {
              curveness: this.getCurveness(i)
            }
          })
          lineData.push({
            coords: [[47, y], [76, y]]
          })
          for (let j = 0; j < Math.ceil(Math.random() * 4); j++) {
            lineDataEffect.push({
              coords: [[36, 50], [47, y]],
              lineStyle: {
                normal: {
                  color: colors[j % 3],
                  curveness: this.getCurveness(i),
                  width: 0
                }
              }
            })
            lineDataEffect.push({
              coords: [[76, y], [86, 50]],
              lineStyle: {
                normal: {
                  color: colors[j % 3],
                  curveness: this.getCurveness(i),
                  width: 0
                }
              }
            })
            lineDataEffect.push({
              coords: [[47, y], [76, y]],
              lineStyle: {
                normal: {
                  color: colors[j % 2],
                  width: 0
                }
              }
            })
          }
        }
      }
      const Group = []
      for (let i = 0; i < 4; i++) {
        Group.push({
          name: '',
          value: [61, i * 25 + 12.5],
          symbol: 'image://' + img3,
          symbolSize: [374, 226],
          label: {
            show: true,
            width: '374',
            height: '226',
            formatter: () => {
              return '{title|' + this.info3[i].title + '}\n' +
                '{name|' + this.info3[i].name + '}' + '{value|' + this.info3[i].value + '}' + '{unit|' + this.info3[i].unit + '}\n' +
                '{name|' + this.info3[i].name1 + '}' + '{value|' + this.info3[i].value1 + '}' + '{unit|' + this.info3[i].unit1 + '}'
            },
            rich: {
              title: {
                color: '#fff',
                align: 'center',
                lineHeight: 70,
                fontSize: 36
              },
              name: {
                color: '#fff',
                align: 'left',
                lineHeight: 50,
                padding: 40,
                width: 80,
                fontSize: 24
              },
              value: {
                color: '#79DFEF',
                align: 'left',
                lineHeight: 50,
                verticalAlign: 'bottom',
                fontFamily: 'LESLIE-Regular,LESLIE',
                fontSize: 48,
                width: 140
              },
              unit: {
                color: '#fff',
                lineHeight: 50,
                align: 'left',
                fontSize: 28
              }
            }
          }
        })
      }
      const show = {
        show: false
      }
      return {
        backgroundColor: '#191b30',
        xAxis: {
          type: 'value',
          max: 100,
          min: 0,
          splitLine: show,
          axisLabel: show,
          axisLine: show,
          axisTick: show
        },
        yAxis: {
          // data: [12, 36, 'C', 'D', 86]
          type: 'value',
          max: 100,
          min: 0,
          splitLine: show,
          axisLabel: show,
          axisLine: show,
          axisTick: show
        },
        series: [{
          name: 'lines',
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          data: lineData,
          animation: false,
          silent: true,
          lineStyle: {
            normal: {
              color: '#52A1EF',
              width: 3
            }
          },
          zlevel: 1
        }, {
          name: 'lines',
          type: 'lines',
          animation: false,
          silent: true,
          coordinateSystem: 'cartesian2d',
          data: lineDataEffect,
          effect: {
            show: true,
            symbol: 'circle',
            delay: function (p) {
              return p % 15 * Math.random() * 500
            },
            symbolSize: [6, 15],
            trailLength: 0
          },
          zlevel: 3
        }, {
          zlevel: 5,
          data: [{
            name: '',
            value: [12, 50],
            symbol: 'image://' + img1,
            symbolSize: 360,
            label: {
              show: true,
              formatter: () => {
                return '{name|' + this.info1.name + '}\n' + '{value|' + this.info1.value + '}' + '{unit|' + this.info1.unit + '}'
              },
              rich: {
                name: {
                  color: '#fff',
                  fontSize: 32
                },
                value: {
                  color: '#79DFEF',
                  fontSize: 72,
                  fontFamily: 'LESLIE-Regular,LESLIE',
                  width:160
                },
                unit: {
                  color: '#fff',
                  fontSize:30
                }
              }
            }
          }, {
            name: '',
            value: [36, 50],
            symbol: 'image://' + img2,
            symbolSize: [408, 470],
            label: {
              show: true,
              width: '200',
              formatter: () => {
                return '{title|' + this.info2.title + '}\n' +
                  '{value|' + this.info2.data[0].value + '}' + '{unit|' + this.info2.data[0].unit + '}' + '{value|' + this.info2.data[1].value + '}' + '{unit|' + this.info2.data[1].unit + '}\n' +
                  '{name|' + this.info2.data[0].name + '}' + '{name|' + this.info2.data[1].name + '}'
              },
              rich: {
                title: {
                  color: '#fff',
                  align: 'center',
                  lineHeight: 100,
                  fontSize: 39
                },
                name: {
                  color: '#fff',
                  align: 'center',
                  width: 150,
                  fontSize: 30
                },
                value: {
                  color: '#79DFEF',
                  align: 'center',
                  width: 110,
                  // backgroundColor: 'red',
                  verticalAlign: 'bottom',
                  fontSize: 60,
                  fontFamily: 'LESLIE-Regular,LESLIE',
                  width: 140
                },
                unit: {
                  color: '#fff',
                  align: 'center',
                  // backgroundColor: 'blue',
                  width: 30,
                  fontSize: 30
                }
              }
            }
          }, {
            name: '开办成功',
            value: [86, 50],
            symbol: 'image://' + img4,
            symbolSize: [420, 420],
            label: {
              show: true,
              formatter: () => {
                return '{name|' + this.info4.name + '}\n' + '{value|' + this.info4.value + '}' + '{unit|' + this.info4.unit + '}'
              },
              rich: {
                name: {
                  color: '#fff',
                  padding: [0, 0, 40, 0],
                  fontSize: 32
                },
                value: {
                  color: '#79DFEF',
                  fontSize: 60,
                  width: 140,
                  fontFamily: 'LESLIE-Regular,LESLIE',
                },
                unit: {
                  color: '#fff',
                  fontSize: 30
                }
              }
            }
          }, ...Group],
          type: 'scatter'
        }]
      }
    }
  },
  methods: {
    getCurveness (i) {
      const k = i * i * i / 8000
      return k
    }
  }
}
</script>

<style scoped>

</style>
<style>
  .echarts {
    width: 100% !important;
    height: 100% !important;
  }
</style>
