<template>
    <container-calc type="tb" :number="50" class="AuditLeft full  block-padding">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio float-right"/>
        </template>
        <div slot="calc" class=" full">
            <div class="h-2-8">
                <info-group :data='data1[select.value]'/>
            </div>
            <container title="当前预警数量" class="h-3-8">
                <div class="w-2-10 full-height">
                    <tableTab v-model="tabData" @active='clickActive'/>
                </div>
                <div class="w-8-10 full-height">
                    <warning-group :data='data2[tabData][select.value]'/>
                </div>
            </container>
            <container title="当前预警明细" class="h-3-8">
                <tableHeader :data='tableData'/>
            </container>
        </div>
    </container-calc>
</template>

<script>
import infoGroup from './components/InfoGroup'
import tableTab from './components/tableTab'
import warningGroup from './components/WarningGroup'
import tableHeader from './components/table'
import Mock from 'mockjs'

export default {
  name: 'AuditLeft',
  components: {
    infoGroup,
    tableTab,
    warningGroup,
    tableHeader
  },
  data () {
    return {
      radioDaa: [
        {
          name: '本年',
          value: 0
        },
        {
          name: '本月',
          value: 1
        },
        {
          name: '本周',
          value: 2
        }
      ],
      tabData: 'case',
      select: {},
      data1: [[
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '结案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }
      ], [
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '结案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }
      ], [
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '结案',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }
      ]],
      data2: {
        case: [[
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ]],
        clew: [[
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ]],
        check: [[
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: Mock.Random.natural(0, 15),
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: Mock.Random.natural(10, 35),
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: Mock.Random.natural(30, 50),
            colorName: '黄色预警'
          }
        ]]
      },
      tableData: [
        {
          level: '黄色预警',
          lnboxTime: '2019/9/20',
          surplusTime: '11天',
          name: '山东丰之坊',
          institution: '食品安全科',
          type: '投诉举报',
          state: '调查取证'
        },
        {
          level: '黄色预警',
          lnboxTime: '2019/9/16',
          surplusTime: '7天',
          name: '马维凤',
          institution: '罗西所',
          type: '投诉举报',
          state: '调查取证'
        },
        {
          level: '黄色预警',
          lnboxTime: '2019/9/20',
          surplusTime: '11天',
          name: '山东丰之坊',
          institution: '食品安全科',
          type: '投诉举报',
          state: '调查取证'
        },
        {
          level: '黄色预警',
          lnboxTime: '2019/9/16',
          surplusTime: '7天',
          name: '马维凤',
          institution: '罗西所',
          type: '投诉举报',
          state: '调查取证'
        }
      ],
      radioData: [
        {
          name: '本年',
          value: 0
        },
        {
          name: '本月',
          value: 1
        },
        {
          name: '本周',
          value: 2
        }
      ]
    }
  },
  methods: {
    clickActive (data) {
      this.tabData = data
    }
  }
}
</script>

<style scoped lang="less">
.AuditLeft {

}
</style>
