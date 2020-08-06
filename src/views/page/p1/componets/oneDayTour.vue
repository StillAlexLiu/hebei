<template>
    <chart :options="options" @click='tabCli' class="backChart"/>
</template>

<script>
const img0 = require('../componets/img/img0.png')
const img1 = require('../componets/img/img1.png')
const img2 = require('../componets/img/img2.png')
const img3 = require('../componets/img/img3.png')
const img4 = require('../componets/img/img4.png')
const img5 = require('../componets/img/11.png')
export default {
  name: 'custom',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => {
    return {
      info1: {
        name: '企业申办',
        value: '0',
        unit: '户'
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
            unit: '户'
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
          unit1: '户',
          name2: '处理中',
          value2: '0',
          unit2: '户'
        },
        // {
        //   title: '银行',
        //   name: '平均用时',
        //   value: '3',
        //   unit: 'h',
        //   name1: '已处理',
        //   value1: '321',
        //   unit1: '户'
        // },
        {
          title: '税务',
          name: '平均用时',
          value: '3',
          unit: 'h',
          name1: '已处理',
          value1: '321',
          unit1: '户',
          name2: '处理中',
          value2: '0',
          unit2: '户'
        }, {
          title: '公安',
          name: '平均用时',
          value: '3',
          unit: 'h',
          name1: '已处理',
          value1: '321',
          unit1: '户',
          name2: '处理中',
          value2: '0',
          unit2: '户'
        }
      ],
      info4: {
        name: '开办成功',
        value: '321',
        unit: '户'
      },
      info5: [
        {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }, {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }, {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }
      ],
      info6: [
        {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }, {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }, {
          title: '交换平台',
          name: '平均用时',
          value: '',
          unit: 'h'
        }
      ]
    }
  },
  computed: {
      options () {
        this.sendData()
      const lineData = []
      const lineDataEffect = []
      const colors = ['#89B557', '#89B557', '#89B557']
      for (let i = -3; i < 4; i++) {
        const y = 50 + i * 3
        lineData.push({
          coords: [[5, y], [32, y]]
        })
        for (let j = 0; j < Math.ceil(Math.random() * 10); j++) {
          lineDataEffect.push({
            coords: [[5, y], [32, y]],
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
      for (let i = -13; i < 15; i++) {
        const y = 40 + i * 4
        if ([9, 8, 7, 1, 0, -1, -2, -8, -9, -10, -11, -12, -13].indexOf(i) < 0) {
          lineData.push({
            coords: [[32, 50], [42, y]],
            lineStyle: {
              curveness: this.getCurveness(i)
            }
          })
          lineData.push({
            coords: [[82, y], [93, 50]],
            lineStyle: {
              curveness: this.getCurveness(i)
            }
          })
          // 中间层
          // console.log
          lineData.push({
            coords: [[42, y], [82, y]]
          })
          // 流动灯光
          for (let j = 0; j < Math.ceil(Math.random() * 4); j++) {
            lineDataEffect.push({
              coords: [[32, 50], [42, y]],
              lineStyle: {
                normal: {
                  color: colors[j % 3],
                  curveness: this.getCurveness(i),
                  width: 0
                }
              }
            })
            lineDataEffect.push({
              coords: [[82, y], [93, 50]],
              lineStyle: {
                normal: {
                  color: colors[j % 3],
                  curveness: this.getCurveness(i),
                  width: 0
                }
              }
            })
            lineDataEffect.push({
              coords: [[42, y], [82, y]],
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
      for (let i = 0; i < 3; i++) {
        Group.push({
          name: '',
          value: [48, i * 33 + 21],
          symbol: 'image://' + img5,
          symbolSize: [280, 170],
          label: {
            show: true,
            width: '280',
            height: '170',
            formatter: () => {
              return '{title|' + this.info5[i].title + '}\n' +
                '{name|' + this.info5[i].name + '}' + '{value|' + this.info5[i].value + '}' + '{unit|' + this.info5[i].unit + '}\n'
            },
            rich: {
              title: {
                color: '#fff',
                align: 'center',
                lineHeight: 70,
                fontSize: 32
              },
              name: {
                color: '#fff',
                align: 'left',
                lineHeight: 50,
                padding: 35,
                width: 60,
                fontSize: 22,
                fontWeight: 'bold'
              },
              value: {
                color: '#79DFEF',
                align: 'left',
                lineHeight: 50,
                verticalAlign: 'bottom',
                fontFamily: 'LESLIE-Regular,LESLIE',
                fontSize: 45,
                align: 'center',
                width: 80
              },
              unit: {
                color: '#fff',
                lineHeight: 50,
                align: 'left',
                fontSize: 28
              }
            }
          }
        }, {
          name: '',
          value: [61, i * 33 + 21],
          symbol: 'image://' + img3,
          symbolSize: [354, 256],
          label: {
            show: true,
            width: '374',
            height: '256',
            formatter: () => {
              return '{title|' + this.info3[i].title + '}\n' +
                '{name|' + this.info3[i].name + '}' + '{value|' + this.info3[i].value + '}' + '{unit|' + this.info3[i].unit + '}\n' +
                '{name|' + this.info3[i].name1 + '}' + '{value|' + this.info3[i].value1 + '}' + '{unit|' + this.info3[i].unit1 + '}\n' +
                '{name|' + this.info3[i].name2 + '}' + '{value|' + this.info3[i].value2 + '}' + '{unit|' + this.info3[i].unit2 + '}'
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
        }, {
          name: '',
          value: [75, i * 33 + 21],
          symbol: 'image://' + img5,
          symbolSize: [280, 170],
          label: {
            show: true,
            width: '280',
            height: '170',
            formatter: () => {
              return '{title|' + this.info6[i].title + '}\n' +
                '{name|' + this.info6[i].name + '}' + '{value|' + this.info6[i].value + '}' + '{unit|' + this.info6[i].unit + '}\n'
            },
            rich: {
              title: {
                color: '#fff',
                align: 'center',
                lineHeight: 70,
                fontSize: 32
              },
              name: {
                color: '#fff',
                align: 'left',
                lineHeight: 50,
                padding: 35,
                width: 60,
                fontSize: 22,
                fontWeight: 'bold'
              },
              value: {
                color: '#79DFEF',
                align: 'left',
                lineHeight: 50,
                verticalAlign: 'bottom',
                fontFamily: 'LESLIE-Regular,LESLIE',
                fontSize: 45,
                align: 'center',
                width: 80
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
        // backgroundColor: require('../componets/img/编组 9@2x.png'),
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
          data: [
            // 一窗通
            {
              name: '',
              value: [5, 50],
              symbol: 'image://' + img0,
              symbolSize: 260,
              label: {
                show: false,
                formatter: () => {
                  return '{name|' + this.info1.name + '}\n' + '{value|' + this.info1.value + '}' + '{unit|' + this.info1.unit + '}'
                },
                rich: {
                  name: {
                    padding: [0, 0, 40, 30],
                    color: '#fff',
                    fontSize: 32
                  },
                  value: {
                    color: '#79DFEF',
                    fontSize: 60,
                    fontFamily: 'LESLIE-Regular,LESLIE',
                    width: 170
                  },
                  unit: {
                    color: '#fff',
                    fontSize: 30
                  }
                }
              }
            }, {
              name: '',
              value: [18, 50],
              symbol: 'image://' + img1,
              symbolSize: 260,
              label: {
                show: true,
                formatter: () => {
                  return '{name|' + this.info1.name + '}\n' + '{value|' + this.info1.value + '}' + '{unit|' + this.info1.unit + '}'
                },
                rich: {
                  name: {
                    padding: [10, 20, 20, 20],
                    color: '#fff',
                    fontSize: 35
                  },
                  value: {
                    color: '#79DFEF',
                    fontSize: 43,
                    fontFamily: 'LESLIE-Regular,LESLIE',
                    width: 140,
                    align: 'center'
                  },
                  unit: {
                    color: '#fff',
                    fontSize: 30
                  }
                }
              }
            }, {
              name: '',
              value: [32, 50],
              symbol: 'image://' + img2,
              symbolSize: 340,
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
                    lineHeight: 80,
                    fontSize: 35
                  },
                  name: {
                    color: '#fff',
                    align: 'center',
                    width: 140,
                    fontSize: 30
                  },
                  value: {
                    color: '#79DFEF',
                    align: 'center',
                    // backgroundColor: 'red',
                    verticalAlign: 'bottom',
                    fontSize: 48,
                    fontFamily: 'LESLIE-Regular,LESLIE',
                    width: 150,
                    padding: [10, 0, 0, 0]
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
              value: [92, 50],
              symbol: 'image://' + img4,
              symbolSize: [350, 350],
              label: {
                show: true,
                formatter: () => {
                  return '{name|' + this.info4.name + '}\n' + '{value|' + this.info4.value + '}' + '{unit|' + this.info4.unit + '}'
                },
                rich: {
                  name: {
                    color: '#fff',
                    padding: [0, 0, 40, 30],
                    fontSize: 32
                  },
                  value: {
                    color: '#79DFEF',
                    fontSize: 50,
                    width: 140,
                    fontFamily: 'LESLIE-Regular,LESLIE'
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
    },
    sendData () {
      console.log(this.data, '动图数据')
      this.info1.value = this.data.entApply
      this.info2.data[0].value = this.data.avgAppHours
      this.info2.data[1].value = this.data.applyDone
      this.info3[2].value2 = this.data.gaUnDone
      this.info3[2].value1 = this.data.gaDone
      this.info3[2].value = this.data.avggaHours
      this.info3[1].value2 = this.data.ssUnDOne
      this.info3[1].value1 = this.data.ssDOne
      this.info3[1].value = this.data.avgssHours
      // this.info3[1].value1 = this.data.yhdone
      // this.info3[1].value = this.data.avgyhHours
      this.info3[0].value2 = this.data.rsUndone
      this.info3[0].value1 = this.data.rsdone
      this.info3[0].value = this.data.avgrsHours
      this.info4.value = this.data.entDone
      this.info5[0].value = this.data.gaff
      this.info5[1].value = this.data.swff
      this.info5[2].value = this.data.rsff
      this.info6[0].value = this.data.gafk
      this.info6[1].value = this.data.swfk
      this.info6[2].value = this.data.rsfk
    },
    tabCli (data) {
      this.$emit('toTwo', data)
    }
  }
}
</script>

<style scoped>
.echarts {
    width: 100% !important;
    height: 100% !important;
}
.backChart {
  background-image: url('../componets/img/编组 9@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
