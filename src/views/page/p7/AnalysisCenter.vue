<template>
    <div class="full" style="padding-top: 60px">
        <container-calc type="tb" :number="53" class="AnalysisCenter full  page-style">
            <template slot="fix">
                <RadioSimple :data="[{name:'综合监管'}]" class="w-1-8 full-height radio"/>
            </template>
            <div slot="calc" class=" full">
                <div class="h-1-7">
                    <div class="full-height full-width">
                        <numberList :data='numlist1' @key='endKey'/>
                    </div>
                </div>
                <div class="h-3-7 bg-style">
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
                <div class="h-3-7 bg-style">
                    <ContainerSmallTitle title="双随机监管次数趋势分析" class="full-height w-1-3">
                        <ChartsBarLine :data='rightLine' :dimensions="['name','value']" :legend="['监管户次']"
                                       :type="['line']" :colors="['#FE6941']" :units="['户']" is-area/>
                    </ContainerSmallTitle>
                    <ContainerSmallTitle title="双随机各市抽查情况" class="full-height w-1-3">
                        <ChartsBarLine :data='rightLine2' :dimensions="['name','value']" :legend="['平均抽检率']"
                                       :type="['bar']" :colors="[barColor]" :units="['户']" :border-radius="false"
                                       :bar-width="43"/>
                    </ContainerSmallTitle>
                    <ContainerSmallTitle title="双随机监管发现问题类型占比" class="full-height w-1-3">
                        <ChartsPie :data='hellowPie2' :title="'问题类型\n占比'"/>
                    </ContainerSmallTitle>
                </div>
            </div>
        </container-calc>
    </div>

</template>

<script>
import numberList from './components/numberList'
import echartsAccrossBar from './components/echarts-accrossBar'
import Mock from 'mockjs'
import ChartsBarLine from '../p0/components/ChartsBarLine'
import echarts from 'echarts'
import ChartsPie from '../p2/compontes/ChartsPie'

export default {
  name: 'AnalysisCenter',
  components: {
    ChartsPie,
    ChartsBarLine,
    numberList,
    echartsAccrossBar
  },
  data () {
    return {
      key: 0,
      barColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: 'rgba(79, 255, 148, 0.68)'
        },
        {
          offset: 1,
          color: 'rgba(79, 255, 245, 0.4)'
        }
      ]),
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
        name: '智慧监管',
        num: '4893',
        dw: '户次',
        key: 2
      }],
      acrossBar1: [{
        ydata: ['双随机发现问题数', '双随机平均抽查率', '双随机户次'],
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
      rightLine: [{
        name: '2015年',
        value: Mock.Random.natural(70, 1000)
      }, {
        name: '2016年',
        value: Mock.Random.natural(70, 1000)
      }, {
        name: '2017年',
        value: Mock.Random.natural(70, 1000)
      }, {
        name: '2018年',
        value: Mock.Random.natural(70, 1000)
      }, {
        name: '2019年',
        value: Mock.Random.natural(70, 1000)
      }, {
        name: '2020年',
        value: Mock.Random.natural(70, 1000)
      }],
      rightLine2: [{ name: '石家庄', value: '1922' },
        { name: '唐山', value: '1217' },
        { name: '秦皇岛', value: '571' },
        { name: '邯郸', value: '814' },
        { name: '邢台', value: '601' },
        { name: '保定', value: '1121' },
        { name: '张家口', value: '601' },
        { name: '承德', value: '462' },
        { name: '沧州', value: '935' },
        { name: '廊坊', value: '1088' },
        { name: '衡水', value: '430' },
        { name: '雄安新区', value: '96' }],
      hellowPie2: [
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
    .bg-style {
        background: linear-gradient(360deg, rgba(15, 29, 98, 0.02) 0%, rgba(74, 75, 124, 0.4) 100%) no-repeat;
        background-size: 100% 183px;
        border-top: 1px solid #4199FE;
        padding-top: 30px;
    }
}
</style>
