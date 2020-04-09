<template>
    <div class="full" style="padding-top: 60px">
        <container-calc type="tb" :number="53" class="AnalysisCenter full  page-style">
            <template slot="fix">
                <RadioSimple :data="[{name:'综合监管'}]" class="w-1-8 full-height radio"/>
            </template>
            <div slot="calc" class=" full">
                <div class="h-2-8">
                    <div class="full-height full-width">
                        <numberList :data='numlist1' @key='endKey'/>
                    </div>
                </div>
                <div class="h-3-8">
                    <div class="full-height w-1-3">
                        <echartsAccrossBar :data='acrossBar1[key]'/>
                    </div>
                    <div class="full-height w-1-3">
                        <echartsAccrossBar :data='acrossBar2[key]'/>
                    </div>
                    <div class="full-height w-1-3">
                        <echartsAccrossBar :data='acrossBar3[key]'/>
                    </div>
                </div>
                <div class="h-3-8">
                    <div class="full-height w-1-3">
                        <echartsWline :data='rightLine'></echartsWline>
                    </div>
                    <div class="full-height w-1-3">
                        <echartsBar :data='rightLine2'></echartsBar>
                    </div>
                    <div class="full-height w-1-3">
                        <echartsHollowPie :data='hellowPie2'></echartsHollowPie>
                    </div>
                </div>
            </div>
        </container-calc>
    </div>

</template>

<script>
import numberList from './components/numberList'
import echartsAccrossBar from './components/echarts-accrossBar'
import echartsWline from './components/echarts-wLine'
import echartsHollowPie from './components/echarts-hollowPie'
import echartsBar from './components/echarts-bar'
import Mock from 'mockjs'

export default {
  name: 'AnalysisCenter',
  components: {
    numberList,
    echartsAccrossBar,
    echartsWline,
    echartsHollowPie,
    echartsBar
  },
  data () {
    return {
      key: 0,
      numlist1: [{
        name: '日常监管',
        num: '1311',
        dw: '户次',
        key: 0
      }, {
        name: '监督抽检',
        num: '1528',
        dw: '户次',
        key: 1
      }, {
        name: '智能预警',
        num: '4893',
        dw: '户次',
        key: 2
      }],
      acrossBar1: [{
        ydata: ['双随机户次', '双随机平均抽查率', '双随机发现问题数'],
        xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000)],
        name: '双随机'
      }, {
        ydata: ['食品户次', '食品平均抽查率', '食品发现问题数'],
        xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '食品'
      }, {
        ydata: ['物联网感知户次', '物联网感知平均抽查率', '物联网感知发现问题数'],
        xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100)],
        name: '物联网感知'
      }],
      acrossBar2: [{
        ydata: ['专项户次', '专项平均抽查率', '专项发现问题数'],
        xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '专项'
      }, {
        ydata: ['药械户次', '药械合格率', '药械不合格件数'],
        xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '药械'
      }, {
        ydata: ['智能识别户次', '智能识别合格率', '智能识别不合格件数'],
        xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000)],
        name: '智能识别'
      }],
      acrossBar3: [{
        ydata: ['全覆盖户次', '全覆盖平均抽查率', '全覆盖发现问题数'],
        xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '全覆盖'
      }, {
        ydata: ['产品质量户次', '产品质量合格率', '产品质量不合格件数'],
        xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '产品质量'
      }, {
        ydata: ['数据分析户次', '数据分析合格率', '数据分析不合格件数'],
        xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
        name: '数据分析'
      }],
      rightLine: {
        legend: [
          '监管户次'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年',
          '2019年',
          '2020年'
        ],
        ydata: [
          [
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000)
          ]
        ]
      },
      rightLine2: {
        legend: [
          '平均抽检率'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年',
          '2019年',
          '2020年'
        ],
        ydata: [
          [
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000)
          ]
        ]
      },
      hellowPie2: {
        pieData: [
          {
            value: Mock.Random.natural(70, 1000),
            name: '公式信息检查占比'
          }, {
            value: Mock.Random.natural(70, 1000),
            name: '流通领域商品质量占比'
          }, {
            value: Mock.Random.natural(70, 1000),
            name: '等级事项检查占比'
          }, {
            value: Mock.Random.natural(70, 1000),
            name: '其他占比'
          }, {
            value: Mock.Random.natural(70, 1000),
            name: '广告内容检查占比'
          }, {
            value: Mock.Random.natural(70, 1000),
            name: '平台责任检查占比'
          }
        ]
      }
    }
  },
  methods: {
    endKey (data) {
      this.key = data
    }
  }
}
</script>

<style scoped lang="less">
.AnalysisCenter {

}
</style>
