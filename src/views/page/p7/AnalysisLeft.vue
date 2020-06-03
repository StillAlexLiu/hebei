<template>
    <div class="full">
          <div class="full-width h-1-3">
            <container class="full-height full-width" title="监管基础">
              <ContainerSmallTitle title="人员情况" class="full-height w-1-2">
                <OtherBox :data='peopleCase'>
                  <ChartsPie :data='hellowPie1' :show-all="true" slot="echarts"/>
                </OtherBox>
              </ContainerSmallTitle>
               <ContainerSmallTitle title="主体情况" class="full-height w-1-2">
                <OtherBox :data='mainCase'>
                  <ChartsPie :data='hellowPie2' :show-all="true" slot="echarts"/>
                </OtherBox>
              </ContainerSmallTitle>
            </container>
          </div>
          <div class="full-width h-1-3">
            <container class="full-height full-width" title="认证认可基础">
              <ContainerSmallTitle title="认证证书情况" class="full-height w-1-2">
                <OtherBox :data='certCase'>
                    <ChartsBarLine :data="data3" :type="['line']" :dimensions="['name','value']"
                                   :units="['证书数量:张']"
                                   :legend="['证书数']"  slot="echarts"/>
                </OtherBox>
              </ContainerSmallTitle>
               <ContainerSmallTitle title="检测机构情况" class="full-height w-1-2">
                <OtherBox :data='dateCase'>
                  <ChartsPie :data='hellowPie4' :show-all="true" slot="echarts"/>
                </OtherBox>
              </ContainerSmallTitle>
            </container>
          </div>
          <div class="full-width h-1-3">
            <container class="full-height w-1-2" title="计量基础">
              <titleList :data='measureData1'></titleList>
            </container>
            <container class="full-height w-1-2" title="产权基础">
              <titleList :data='measureData2'></titleList>
            </container>
          </div>
            <!-- <container-calc type="tb" :number="53" class="AnalysisCenter full  page-style">
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
        </container-calc> -->
    </div>

</template>

<script>
// import numberList from './components/numberList'
// import echartsAccrossBar from './components/echarts-accrossBar'
import OtherBox from './components/otherBox'
import ChartsBarLine from '../../../components/echarts/ChartsBarLine'
import titleList from './components/titleList'
import Mock from 'mockjs'
// import echarts from 'echarts'

export default {
  name: 'AnalysisCenter',
  components: {
    OtherBox,
    ChartsBarLine,
    titleList
    // numberList,
    // echartsAccrossBar
  },
  data () {
    return {
      peopleCase: [
        {
          name: '总人数',
          value: 1423,
          unit: '人'
        },
        {
          name: '新增',
          value: 75,
          unit: '人'
        }
      ],
      hellowPie1: [
        {
          value: '200',
          name: '执法人员'
        }, {
          value: '120',
          name: '检查人员'
        }, {
          value: '680',
          name: '雇员'
        }
      ],
      mainCase: [
        {
          name: '总户数',
          value: 168767,
          unit: ''
        },
        {
          name: '新增',
          value: 19767,
          unit: ''
        }
      ],
      hellowPie2: [
        {
          value: '48344',
          name: '私营企业'
        }, {
          value: '9360',
          name: '外资企业'
        }, {
          value: '5504',
          name: '公有制企业'
        }, {
          value: '50464',
          name: '个体工商户'
        }, {
          value: '231',
          name: '农村合作社'
        }
      ],
      dateCase: [
        {
          name: '总户数',
          value: 1423,
          unit: '户'
        },
        {
          name: '新增',
          value: 75,
          unit: '户'
        }
      ],
      hellowPie4: [
        {
          value: '1800',
          name: '特种设备'
        }, {
          value: '2500',
          name: '食品'
        }, {
          value: '1100',
          name: '私营企业'
        }, {
          value: '1100',
          name: '计量标准'
        }, {
          value: '1100',
          name: '医疗器械'
        }, {
          value: '1100',
          name: '药品'
        }
      ],
      certCase: [
        {
          name: '有效证书',
          value: 83222,
          unit: '张'
        },
        {
          name: '涉及组织',
          value: 28272,
          unit: '张'
        }
      ],
      data3: [
        {
          name: '1月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '2月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '3月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '4月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '5月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '6月',
          value: Mock.Random.natural(10, 70)
        }
      ],
      measureData1: {
        topData: [
          {
            name: '全省强检计量器具',
            value: '315807',
            unit: '台/件'
          }, {
            name: '省外溯源计量器具',
            value: '68',
            unit: '台/件'
          }
        ],
        imgData: [
          {
            imgUrl: require('./components/img/she.png'),
            title: '全省社会公用计量标准考核',
            num: 110,
            unit: '项'
          }, {
            imgUrl: require('./components/img/biao.png'),
            title: '发布实施地方计量标准',
            num: 4,
            unit: '项'
          }, {
            imgUrl: require('./components/img/kao.png'),
            title: '省级法定计量检定考核机构',
            num: 40,
            unit: '家'
          }
        ]
      },
      measureData2: {
        topData: [
          {
            name: '动产抵押',
            value: '1121',
            unit: '份'
          }, {
            name: '股权出质',
            value: '171.48',
            unit: '亿份'
          }
        ],
        imgData: [
          {
            imgUrl: require('./components/img/shang.png'),
            title: '注册商标',
            num: 717133,
            unit: ''
          }, {
            imgUrl: require('./components/img/zhuan.png'),
            title: '万人发明专利拥有量',
            num: 3.9,
            unit: ''
          }, {
            imgUrl: require('./components/img/di.png'),
            title: '地理标志产品',
            num: 70,
            unit: ''
          }
        ]
      }
      // key: 0,
      // barColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
      //   {
      //     offset: 0,
      //     color: 'rgba(79, 255, 148, 0.68)'
      //   },
      //   {
      //     offset: 1,
      //     color: 'rgba(79, 255, 245, 0.4)'
      //   }
      // ]),
      // numlist1: [{
      //   name: '日常监管',
      //   num: '1311',
      //   dw: '户次',
      //   key: 0
      // }, {
      //   name: '监督抽检',
      //   num: '1528',
      //   dw: '户次',
      //   key: 1
      // }, {
      //   name: '智慧监管',
      //   num: '4893',
      //   dw: '户次',
      //   key: 2
      // }],
      // acrossBar1: [{
      //   ydata: ['双随机发现问题数', '双随机平均抽查率', '双随机户次'],
      //   xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000)],
      //   name: '双随机'
      // }, {
      //   ydata: ['食品户次', '食品平均抽查率', '食品发现问题数'],
      //   xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '食品'
      // }, {
      //   ydata: ['物联网感知户次', '物联网感知平均抽查率', '物联网感知发现问题数'],
      //   xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100)],
      //   name: '物联网感知'
      // }],
      // acrossBar2: [{
      //   ydata: ['专项户次', '专项平均抽查率', '专项发现问题数'],
      //   xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '专项'
      // }, {
      //   ydata: ['药械户次', '药械合格率', '药械不合格件数'],
      //   xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '药械'
      // }, {
      //   ydata: ['智能识别户次', '智能识别合格率', '智能识别不合格件数'],
      //   xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 1000)],
      //   name: '智能识别'
      // }],
      // acrossBar3: [{
      //   ydata: ['全覆盖户次', '全覆盖平均抽查率', '全覆盖发现问题数'],
      //   xdata: [Mock.Random.natural(70, 100), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '全覆盖'
      // }, {
      //   ydata: ['产品质量户次', '产品质量合格率', '产品质量不合格件数'],
      //   xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '产品质量'
      // }, {
      //   ydata: ['数据分析户次', '数据分析合格率', '数据分析不合格件数'],
      //   xdata: [Mock.Random.natural(70, 1000), Mock.Random.natural(70, 100), Mock.Random.natural(70, 100)],
      //   name: '数据分析'
      // }],
      // rightLine: [{
      //   name: '2015年',
      //   value: Mock.Random.natural(70, 1000)
      // }, {
      //   name: '2016年',
      //   value: Mock.Random.natural(70, 1000)
      // }, {
      //   name: '2017年',
      //   value: Mock.Random.natural(70, 1000)
      // }, {
      //   name: '2018年',
      //   value: Mock.Random.natural(70, 1000)
      // }, {
      //   name: '2019年',
      //   value: Mock.Random.natural(70, 1000)
      // }, {
      //   name: '2020年',
      //   value: Mock.Random.natural(70, 1000)
      // }],
      // rightLine2: [{ name: '石家庄', value: '1922' },
      //   { name: '唐山', value: '1217' },
      //   { name: '秦皇岛', value: '571' },
      //   { name: '邯郸', value: '814' },
      //   { name: '邢台', value: '601' },
      //   { name: '保定', value: '1121' },
      //   { name: '张家口', value: '601' },
      //   { name: '承德', value: '462' },
      //   { name: '沧州', value: '935' },
      //   { name: '廊坊', value: '1088' },
      //   { name: '衡水', value: '430' },
      //   { name: '雄安新区', value: '96' }],
      // hellowPie2: [
      //   {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '公式信息检查占比'
      //   }, {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '流通领域商品质量占比'
      //   }, {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '等级事项检查占比'
      //   }, {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '其他占比'
      //   }, {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '广告内容检查占比'
      //   }, {
      //     value: Mock.Random.natural(70, 1000),
      //     name: '平台责任检查占比'
      //   }
      // ]
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
