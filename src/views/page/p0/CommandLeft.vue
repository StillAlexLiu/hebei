<template>
    <!--    <container-calc type="tb" :number="53" class="EntityLeft full-width full-height page-style">-->
    <!--        <template slot="fix" class="h-1-10 full-width">-->
    <!--            <RadioSimple :data="radioData" @input='input2' class="w-3-7 full-height radio"/>-->
    <!--        </template>-->
    <div slot="calc" class=" full-width full-height">
        <Container class="h-1-3 full-width" title="市场主体">
            <NumberGroup :data='numberData[select2]' class="full-height w-1-6"></NumberGroup>
            <ContainerCenterTitle title="主体新增趋势(年)" class="w-3-6 full-height">
                <comPlaintBarR :data='chart3[select2]' legend="市场主体数量"></comPlaintBarR>
            </ContainerCenterTitle>
            <ContainerCenterTitle title="主体类型分布" class="w-2-6 full-height">
                <ChartsPie :data='chart7[select2]' :is-pie="true"/>
            </ContainerCenterTitle>
        </Container>
        <Container class="h-1-3 full-width" title="许可备案">
            <div class="w-1-6 full-height">
                <tableTab v-model="tabData2" @active='clickActive2'></tableTab>
                <KeyValueInfo :data="{name:'特种设备许可数量',value:'424,212'}" style="margin-top: 10px"/>
            </div>
            <ContainerCenterTitle title="许可类型分布" class="w-3-6 full-height">
                <ChartsPie :data='hellowPie2[select2][tabData2].pieData'/>
            </ContainerCenterTitle>
            <ContainerCenterTitle title="许可历年数量趋势" class="w-2-6 full-height">
                <ChartsBarLine :data='chart9' :dimensions="['name','value']" :legend="['特种设备许可数量']"
                               :type="['line']" :colors="['#FF997D']" :units="['户']"/>
            </ContainerCenterTitle>
        </Container>
        <Container class="h-1-3 " title="检验检测">
            <div class="w-1-6 full-height">
                <tableTab v-model="tabData" @active='clickActive'></tableTab>
            </div>
            <ContainerCenterTitle title="当前抽检合格率"  class="w-2-6 full-height">
                <ChartsLiquidFill :data='liquidfill[select2][tabData]'/>
            </ContainerCenterTitle>
            <ContainerCenterTitle title="合格率趋势" class="w-3-6 full-height">
                <ChartsBarLine :data='chart10' :dimensions="['name','value']" :legend="['食品检验检测合格率']"
                               :type="['line']" :colors="['#61EADF']" smooth :units="['%']"/>
            </ContainerCenterTitle>
        </Container>
    </div>

    <!--    </container-calc>-->
</template>

<script>

import Mock from 'mockjs'
import NumberGroup from './components/NumberGroup'
import comPlaintBarR from '../p5/compontes/comPlaintBarR'
import tableTab from './components/tableTab'
import ChartsPie from './components/ChartsPie'
import KeyValueInfo from './components/KeyValueInfo'

export default {
  name: 'CommandLeft',
  components: {
    KeyValueInfo,
    ChartsPie,
    NumberGroup,
    comPlaintBarR,
    tableTab
  },
  data () {
    return {
      liquidfill: [{
        clew: ['维持', 98],
        case: ['维持', 98]
      }, {
        clew: ['维持', 98],
        case: ['维持', 98]
      }, {
        clew: ['维持', 98],
        case: ['维持', 98]
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
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '其他', value: Mock.Random.natural(30, 100), percent: '' }
        ],
        [
          { name: '内资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '其他', value: Mock.Random.natural(30, 100), percent: '' }
        ],
        [
          { name: '内资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '农民专业合作社', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '外资', value: Mock.Random.natural(30, 100), percent: '' },
          { name: '个体工商户', value: Mock.Random.natural(30, 100), percent: '' },
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
      chart9: [
        {
          name: '2016',
          value: Mock.Random.natural(100, 2000)
        },
        {
          name: '2017',
          value: Mock.Random.natural(100, 2000)
        },
        {
          name: '2018',
          value: Mock.Random.natural(100, 2000)
        },
        {
          name: '2019',
          value: Mock.Random.natural(100, 2000)
        },
        {
          name: '2020',
          value: Mock.Random.natural(100, 2000)
        }
      ],
      chart10: [{
        name: '1月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '3月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '4月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '5月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '6月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '7月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '8月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '9月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '10月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '11月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '12月',
        value: Mock.Random.natural(75, 100)
      }]
    }
  },
  watch: {
    select2: {
      immediate: true,
      deep: true,
      handler: function () {
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
