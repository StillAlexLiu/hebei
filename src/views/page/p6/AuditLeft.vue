<template>
    <container-calc type="tb" :number="53" class="AuditLeft full page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full">
            <div class="h-2-8">
                <info-group :data='data1[select.value - 1]' :name='select'/>
            </div>
            <container :title="select.name + '当前预警数量'" class="h-3-8">
                <div class="w-2-10 full-height">
                    <tableTab v-model="tabData" @active='clickActive'/>
                </div>
                <div class="w-8-10 full-height">
                    <warning-group :data='data2[tabData][select.value + -1]' @cliBox='boxCli' />
                </div>
            </container>
            <container title="当前预警明细" class="h-3-8">
                <tableHeader :header='tableHead[tabData]' :data='tableData'/>
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
import axios from 'axios'

export default {
  name: 'AuditLeft',
  components: {
    infoGroup,
    tableTab,
    warningGroup,
    tableHeader
  },
  watch: {
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        if (!this.select.name) {
          this.select = {
            name: '本年',
            value: 1
          }
        }
        this.TabType(this.select.value)
      }
    },
    warningLevel: {
      immediate: true,
      deep: true,
      handler: function () {
        // console.log(this.warningLevel, this.tabData, '切换')
        this.warning(this.warningLevel, this.caseState)
      }
    }
  },
  mounted () {
  },
  data () {
    return {
      tableHead: {
        case: ['预警级别', '立案级别', '剩余时间', '案件名称', '经办机构', '案件类型', '当前状态'],
        clew: ['预警级别', '登记时间', '剩余时间', '线索名称', '登记机构', '线索类型', '当前状态']
      },
      tabData: 'case',
      select: {
      },
      data1: [[
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: 1,
          addup: 2
        }, {
          name: '结案',
          yearData: 3,
          addup: 4
        }
      ], [
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: 5,
          addup: 6
        }, {
          name: '结案',
          yearData: 7,
          addup: 8
        }
      ], [
        {
          name: '线索',
          yearData: Mock.Random.natural(100, 300),
          addup: Mock.Random.natural(300, 700)
        }, {
          name: '立案',
          yearData: 9,
          addup: 10
        }, {
          name: '结案',
          yearData: 11,
          addup: 12
        }
      ]],
      data2: {
        case: [[
          {
            color: '#BF3C25',
            num: 1,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 2,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 3,
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: 4,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 5,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 6,
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: 7,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 8,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 9,
            colorName: '黄色预警'
          }
        ]],
        clew: [[
          {
            color: '#BF3C25',
            num: 11,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 12,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 13,
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: 14,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 15,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 16,
            colorName: '黄色预警'
          }
        ], [
          {
            color: '#BF3C25',
            num: 17,
            colorName: '红色预警'
          }, {
            color: '#C27D29',
            num: 18,
            colorName: '橙色预警'
          }, {
            color: '#C5B030',
            num: 19,
            colorName: '黄色预警'
          }
        ]]
      },
      tableData: [
      ],
      radioData: [
        {
          name: '本年',
          value: 1
        },
        {
          name: '本月',
          value: 2
        },
        {
          name: '本周',
          value: 3
        }
      ],
      warningLevel: 1,
      caseState: 1
    }
  },
  methods: {
    boxCli (data) {
      // console.log(data.name, 'dddds')
      if (data.colorName === '红色预警') {
        this.warningLevel = 1
      } else if (data.colorName === '橙色预警') {
        this.warningLevel = 2
      } else if (data.colorName === '黄色预警') {
        this.warningLevel = 3
      }
      this.warning(this.warningLevel, this.caseState)
    },
    clickActive (data) {
      this.tabData = data
      // console.log(data, '线索案件切换')
      if (data === 'case') {
        this.caseState = 1
      } else if (data === 'clew') {
        this.caseState = 2
      }
      this.warning(this.warningLevel, this.caseState)
    },
    warning (warningLevel, warningType) {
      // console.log(warningLevel, warningType, '明细状态')
      // 稽查办案当前预警明细
      axios.get('/monitor/check/getAlertDetailsData?warningLevel=' + warningLevel + '&warningType=' + warningType).then(res => {
        const data = res.data.data
        // console.log(data, '预警明细')
        this.tableData = data
      })
    },
    TabType (type) {
      // console.log(type, 'tttss')
      // 稽查办案预警数量
      axios.get('/monitor/check/getAlertQuantityData?type=' + type).then(res => {
        const data = res.data.data[0]
        if (data) {
          this.data1[type - 1][0].yearData = data.clue
          this.data1[type - 1][0].addup = data.clueCumulative
          this.data1[type - 1][1].yearData = data.standCase
          this.data1[type - 1][1].addup = data.standCaseCumulative
          this.data1[type - 1][2].yearData = data.closeCase
          this.data1[type - 1][2].addup = data.closeCaseCumulative
          this.data2.case[type - 1][0].num = data.caseRed
          this.data2.case[type - 1][1].num = data.caseOrange
          this.data2.case[type - 1][2].num = data.caseYellow
          this.data2.clew[type - 1][0].num = data.clueRed
          this.data2.clew[type - 1][1].num = data.clueOrange
          this.data2.clew[type - 1][2].num = data.clueYellow
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.AuditLeft {

}
</style>
