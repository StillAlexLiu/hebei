<template>
    <container-calc type="tb" :number="53" class="AnalysisRight full page-style">
        <template slot="fix">
            <RadioSimple :data="[{name:'稽查办案'}]" class="w-1-7 full-height radio"/>
        </template>
        <div slot="calc" class=" full">
            <div class="h-2-8">
                <container class="full-height w-1-2" title="线索来源">
                    <leftImages :data='leftImage'></leftImages>
                </container>
                <container class="full-height w-1-2" title="案件类型">
                    <echartsPie :data='hellowPie'></echartsPie>
                </container>
            </div>
            <div class="h-3-8">
                <container class="full-height w-1-2" title="案件主体">
                    <echartshollowPie :data='hellowPie2'></echartshollowPie>
                </container>
                <container class="full-height w-1-2" title="案件办理">
                    <threePie :data='threePie'></threePie>
                </container>
            </div>
            <div class="h-3-8">
                <container class="full-height w-1-2" title="适用程序">
                    <routine :data='tableData'></routine>
                </container>
                <container class="full-height w-1-2" title="复议诉讼">
                    <div class="w-1-4 h-6-8" v-for="(item, index) in liquidfillData[itemD.key]" :key="index">
                        <echartsliquidfill :data='item'/>
                    </div>
                    <radioBtn :data='radioData' v-model="itemD"/>
                </container>
            </div>
        </div>
    </container-calc>
</template>

<script>
import leftImages from './components/leftImage'
import echartsPie from './components/echarts-pie'
import echartshollowPie from './components/echarts-hollowPie'
import threePie from './components/threePie'
import routine from './components/routine'
import radioBtn from './components/radioButton'
import Mock from 'mockjs'
import echartsliquidfill from '../p2/compontes/echarts-liquidfill'

export default {
  name: 'AnalysisRight',
  data () {
    return {
      leftImage: {
        list1Data: [
          {
            name: '线索数量',
            num: Mock.Random.natural(1, 1000),
            dw: '件'
          }, {
            name: '平均处置事件',
            num: Mock.Random.natural(1, 100),
            dw: '天'
          }
        ],
        list2Data: [
          {
            name: '投诉举报',
            num: 25
          }, {
            name: '监督检查',
            num: 52
          }, {
            name: '抽检',
            num: 115
          }, {
            name: '上级机关',
            num: 32
          }, {
            name: '其他部门',
            num: 6
          }
        ]
      },
      hellowPie: {
        pieData: [
          {
            value: Mock.Random.natural(1, 1000),
            name: '医疗器械'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '药品安全'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '食品安全'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '物价'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '标准化'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '计量'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '产品质量'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '合同'
          }
        ]
      },
      hellowPie2: {
        pieData: [
          {
            value: Mock.Random.natural(1, 1000),
            name: '公有制企业'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '私营企业'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '外资企业'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '公司'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '个体工商户'
          }, {
            value: Mock.Random.natural(1, 1000),
            name: '自然人'
          }
        ]
      },
      threePie: [
        {
          color: '#F89535',
          name: '办理中',
          num: Mock.Random.natural(1, 100)
        }, {
          color: '#48BB7F',
          name: '已办理',
          num: Mock.Random.natural(1, 100)
        }, {
          color: '#48BB7F',
          name: '平均办理时间',
          num: Mock.Random.natural(1, 100)
        }
      ],
      tableData: [
        {
          name: '责令改正（件）',
          num: Mock.Random.natural(1, 100)
        }, {
          name: '当场处罚案件',
          num: Mock.Random.natural(1, 100)
        }, {
          name: '一般程序案件',
          num: Mock.Random.natural(1, 100)
        }, {
          name: '特殊程序案件',
          num: Mock.Random.natural(1, 100)
        }
      ],
      radioData: [{
        name: '复议案件',
        key: 'reconsider',
        active: true
      }, {
        name: '诉讼案件',
        key: 'lawsuit',
        active: false
      }],
      itemD: 'reconsider',
      liquidfillData: {
        reconsider: [['维持', Mock.Random.natural(1, 100)],
          ['终止', Mock.Random.natural(1, 100)],
          ['撤销', Mock.Random.natural(1, 100)],
          ['审理中', Mock.Random.natural(1, 100)]
        ],
        lawsuit: [['维持', Mock.Random.natural(1, 100)],
          ['终止', Mock.Random.natural(1, 100)],
          ['撤销', Mock.Random.natural(1, 100)],
          ['审理中', Mock.Random.natural(1, 100)]
        ]
      }
    }
  },
  components: {
    leftImages,
    echartsPie,
    echartshollowPie,
    threePie,
    routine,
    radioBtn,
    echartsliquidfill
  }
}
</script>

<style scoped lang="less">
.AnalysisRight {

}
</style>
