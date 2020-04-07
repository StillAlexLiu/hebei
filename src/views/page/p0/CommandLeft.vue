<template>
    <container-calc type="tb" :number="50" class="EntityLeft full-width full-height">
        <template slot="fix" class="h-1-10 full-width">
            <RadioSimple :data="radioData" @input='input2' class="w-2-7 full-height radio float-right"/>
        </template>
        <div slot="calc" class="border full-width full-height">
            <Container class="h-1-3 full-width" title="市场主体">
                <NumberGroup :data='numberData[select2]' class="full-height w-1-5"></NumberGroup>
                <div class="w-2-4 full-height">
                    <comPlaintBarR :data='chart3[select2]'></comPlaintBarR>
                </div>
                <div class="w-1-4 full-height">
                    <complaintPie :data='chart7[select2]'></complaintPie>
                </div>
            </Container>
            <Container class="h-1-3 full-width" title="许可备案">
                <div class="w-1-5 full-height">
                    <tableTab v-model="tabData2" @active='clickActive2'></tableTab>
                </div>
                <div class="w-2-5 full-height">
                    <echartsHellow :data='hellowPie2[select2][tabData2]'></echartsHellow>
                </div>
                <div class="w-2-5 full-height">
                    <EffectivenessLine :data='chart9[select2]'></EffectivenessLine>
                </div>
            </Container>
            <Container class="h-1-3 w-1-2" title="检验检测">
                <div class="w-2-5 full-height">
                    <tableTab v-model="tabData" @active='clickActive'></tableTab>
                </div>
                <div class="w-3-5 full-height">
                    <echartsliquidfill :data='liquidfill[select2][tabData]'></echartsliquidfill>
                </div>
            </Container>
            <Container class="h-1-3 w-1-2" title="合格率趋势">
                <div class="full-width full-height">
                    <EffectivenessLine :data='chart10[select2]'></EffectivenessLine>
                </div>
            </Container>
        </div>

    </container-calc>
</template>

<script>

import Mock from 'mockjs'
import NumberGroup from './components/NumberGroup'
import comPlaintBarR from '../p5/compontes/comPlaintBarR'
import complaintPie from '../p5/compontes/complaintPie'
import tableTab from './components/tableTab'
import echartsHellow from '../p7/components/echarts-hollowPie'
import EffectivenessLine from '../p8/compontes/EffectivenessLine'
import echartsliquidfill from '../p2/compontes/echarts-liquidfill'

export default {
  name: 'CommandLeft',
  components: {
    NumberGroup,
    comPlaintBarR,
    complaintPie,
    tableTab,
    echartsHellow,
    EffectivenessLine,
    echartsliquidfill
  },
  data () {
    return {
      liquidfill: [{
        clew: ['维持', Mock.Random.natural(1, 100)],
        case: ['维持', Mock.Random.natural(1, 100)]
      }, {
        clew: ['维持', Mock.Random.natural(1, 100)],
        case: ['维持', Mock.Random.natural(1, 100)]
      }, {
        clew: ['维持', Mock.Random.natural(1, 100)],
        case: ['维持', Mock.Random.natural(1, 100)]
      }],
      selct: 0,
      radioData: [
        {
          name: '本月',
          value: 0
        },
        {
          name: '本季度',
          value: 1
        },
        {
          name: '本年',
          value: 2
        }
      ],
      tabData: 'case',
      tabData2: 'case',
      select2: 0,
      numberData: [[
        {
          name: '市场主体总数',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月新增数量',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月注销数量',
          value: Mock.Random.natural(100, 2000)
        }
      ], [
        {
          name: '市场主体总数',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月新增数量',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月注销数量',
          value: Mock.Random.natural(100, 2000)
        }
      ], [
        {
          name: '市场主体总数',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月新增数量',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月注销数量',
          value: Mock.Random.natural(100, 2000)
        }
      ]],
      chart3: [{
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }],
      chart7: [
        [
          { name: '内资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '其他', value: Mock.Random.natural(30, 100), percent: '' }
        ],
        [
          { name: '内资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '其他', value: Mock.Random.natural(30, 100), percent: '' }
        ],
        [
          { name: '内资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '其他', value: Mock.Random.natural(30, 100), percent: '' }
        ]
      ],
      hellowPie2: [{
        case: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        },
        clew: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        }
      }, {
        case: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        },
        clew: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        }
      }, {
        case: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        },
        clew: {
          pieData: [
            {
              value: Mock.Random.natural(300, 1000),
              name: '设计'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '制造'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '生产'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '检验检测'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '气瓶充装'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '特种设备'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '移动式压力'
            }, {
              value: Mock.Random.natural(300, 1000),
              name: '充装'
            }
          ]
        }
      }],
      chart9: [{
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }],
      chart10: [{
        xdata: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }]
    }
  },
  watch: {
    select2: {
      immediate: true,
      deep: true,
      handler: function () {
        console.log(this.select2, 'ddsssss')
      }
    }
  },
  methods: {
    getMax (array) {
      let rtn = 0
      for (let i = 0; i < array.length; i++) {
        rtn += array[i].value
      }
      return rtn
    },
    clickActive (data) {
      this.tabData = data
    },
    clickActive2 (data) {
      this.tabData2 = data
    },
    input2 (data) {
      this.select2 = data.value
    }
  }

}
</script>

<style scoped lang="less">
.CommandLeft {

}
</style>
