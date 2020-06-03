<template>
    <div class="AnalysisLeft full page-style"  style="padding-top: 60px">
        <container class="h-1-3 full-width" title="准入环境">
            <container-center-title2 title="证照分离改革"  class="full-height w-1-3" >
              <pnglist :data='chart2'></pnglist>
            </container-center-title2>
            <container-center-title2 title="一窗通办"  class="full-height w-1-3" >
              <pnglist :data='chart1'></pnglist>
            </container-center-title2>
            <container-center-title2 title="一日办效率排行"  class="full-height w-1-3" >
              <ChartsBarHorizontal :data="barData"
                :color="['rgba(255, 162, 174, 1)','rgba(135, 160, 246, 1)','rgba(80, 227, 194, 1)','rgba(145, 210, 67, 1)','rgba(254, 105, 65, 1)']"/>
            </container-center-title2>
        </container>
        <container class="h-1-3 full-width" title="竞争环境">
            <container-center-title2 title="“双随机、一公开”监管"  class="full-height w-1-3" >
              <!-- <pnglist :data='chart2'></pnglist> -->
              <ChartsBarLine :data="barData3" :dimensions="['name','value']" :units="['抽查户次']"
                               :type="['bar']"
                               :border-radius="false"
                               :bar-width="40"
                               :legend="['户次']"
                               :colors="[barColor2]"/>
            </container-center-title2>
            <container-center-title2 title="信用监管"  class="full-height w-1-3" >
              <!-- <pnglist :data='chart1'></pnglist> -->
              <ChartsBarLine :data="lineData2" :dimensions="['name','value1','value2','value3']"
                               :type="['line','line','line']"
                               :colors="['rgba(97, 234, 223, 1)','rgba(254, 105, 65, 1)','rgba(255, 213, 137, 1)']"
                               :two-axis="false"
                               :legend="['列严','列异','外部门黑名单']"/>
            </container-center-title2>
            <container-center-title2 title="重点领域扫黑除恶"  class="full-height w-1-3" >
              <OtherBox :data='certCase'>
                <ChartsBarHorizontal :data="barData2"
                  :color="['rgba(254, 105, 65, 1)','rgba(255, 162, 174, 1)','rgba(135, 160, 246, 1)','rgba(80, 227, 194, 1)','rgba(145, 210, 67, 1)']"  slot="echarts"/>
              </OtherBox>
            </container-center-title2>
        </container>
        <!-- <container class="h-2-8" title="监管基础">
            <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist2'/>
            </div>
            <div class="w-2-6 full-height">
                <ChartsPie :data='hellowPie2' :is-pie="true" :show-value="true"/>
            </div>
            <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist1'/>
            </div>
            <div class="w-2-6 full-height">
                <ChartsPie :data='hellowPie' :show-all="true"/>
            </div>
        </container> -->
        <div class="h-1-3">
            <container class="full-height " title="质量强省">
                <div class="w-5-10 full-height">
                    <number-group :data="numberGroup"/>
                </div>
                <div class="w-1-10 full-height">
                    <NumberGroup2 :data="pieData"/>
                </div>
                <div class="w-4-10 full-height">
                    <ChartsBarLine :data="data3" :type="['line']" :dimensions="['name','value']"
                                   :units="['单位:项']"
                                   :legend="['企业公开标准项数量']"/>
                </div>
            </container>
        </div>
    </div>
    <!--    </container-calc>-->
</template>

<script>
import pnglist from './components/pnglist'
import Mock from 'mockjs'
import NumberGroup from './components/numberGroup'
import NumberGroup2 from './components/NumberGroup2'
import ChartsBarLine from '../../../components/echarts/ChartsBarLine'
import OtherBox from './components/otherBox'
import echarts from 'echarts'
export default {
  name: 'AnalysisLeft',
  components: {
    ChartsBarLine,
    NumberGroup2,
    NumberGroup,
    pnglist,
    OtherBox
  },
  data () {
    return {
      chart1: {
        title: '一窗通办',
        dataList: [
          {
            imgurl: require('./components/img/1.png'),
            name: '入网办理事项',
            num: '25',
            dw: '件',
            gl: '5'
          }, {
            imgurl: require('./components/img/2.png'),
            name: '网上收件数',
            num: '10226',
            dw: '件',
            gl: '15'
          }, {
            imgurl: require('./components/img/3.png'),
            name: '平均办结时间',
            num: '1.5',
            dw: '天',
            gl: '25'
          }, {
            imgurl: require('./components/img/4.png'),
            name: '一次办结率',
            num: '100',
            dw: '%',
            gl: '35'
          }
        ]
      },
      chart2: {
        title: '证明分离改革',
        dataList: [
          {
            imgurl: require('./components/img/5.png'),
            name: '双告知数',
            num: '1246',
            dw: '件',
            gl: '0'
          }, {
            imgurl: require('./components/img/6.png'),
            name: '全程电子化数',
            num: '3',
            dw: '件',
            gl: '15'
          }, {
            imgurl: require('./components/img/7.png'),
            name: '食品许可告知承诺',
            num: '2560',
            dw: '件',
            gl: '5'
          }, {
            imgurl: require('./components/img/8.png'),
            name: '简易注销数',
            num: '106',
            dw: '户',
            gl: '1'
          }
        ]
      },
      barData: [
        {
          value: '5',
          name: '省政务办'
        }, {
          value: '10',
          name: '社保'
        }, {
          value: '12',
          name: '税务'
        }, {
          value: '13',
          name: '公安'
        }, {
          value: '15',
          name: '市场监管'
        }
      ],
      barData2: [
        {
          value: '126',
          name: '反不正当竞争'
        }, {
          value: '149',
          name: '广告'
        }, {
          value: '163',
          name: '知识产权'
        }, {
          value: '268',
          name: '药品安全'
        }, {
          value: '356',
          name: '食品安全'
        }
      ],
      certCase: [
        {
          name: '累计摸排线索',
          value: 606,
          unit: '条'
        },
        {
          name: '新增线索',
          value: 33,
          unit: '条'
        }
      ],
      barData3: [
        {
          name: '1月',
          value: '38'
        }, {
          name: '2月',
          value: '54'
        }, {
          name: '3月',
          value: '72'
        }, {
          name: '4月',
          value: '56'
        }, {
          name: '5月',
          value: '39'
        }, {
          name: '6月',
          value: '39'
        }, {
          name: '7月',
          value: '40'
        }, {
          name: '8月',
          value: '18'
        }, {
          name: '9月',
          value: '54'
        }, {
          name: '10月',
          value: '56'
        }, {
          name: '11月',
          value: '22'
        }, {
          name: '12月',
          value: '22'
        }
      ],
      barColor2: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: 'rgba(34, 174, 197, 1)'
        },
        {
          offset: 1,
          color: 'rgba(37, 67, 95, .3)'
        }
      ]),
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
      lineData2: [],
      charaterlist1: {
        name: '检测机构情况',
        data: [
          {
            name: '总户数',
            num: 97
          }, {
            name: '新增主体',
            num: 3
          }
        ]
      },
      hellowPie: [
        {
          value: Mock.Random.natural(10, 70),
          name: '计量标准'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '医疗器械'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '药品'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '食品'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '产品质量'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '特种设备'
        }
      ],
      numberGroup: [
        {
          name: '产品品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x.png')
        },
        {
          name: '企业品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x(1).png')
        },
        {
          name: '区域品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x(2).png')
        }
      ],
      pieData: [{
        name: '省地方标准',
        value: 2763
      }, {
        name: '京津冀协同\n地方标准',
        value: 54
      }, {
        name: '自我声明\n公开企业',
        value: 14168
      }],
      charaterlist2: {
        name: '数量',
        data: [
          {
            name: '总人数',
            num: '7217人'
          }, {
            name: '新增',
            num: '716人'
          }
        ]
      },
      hellowPie2: [
        {
          value: '1115',
          name: '执法人员'
        }, {
          value: '1250',
          name: '审查人员'
        }, {
          value: '1893',
          name: '雇员'
        }
      ],
      dobulePie: [
        {
          color: '#AD5F53',
          name: '注册数（户）',
          num: 982
        }, {
          color: '#278499',
          name: '注册资本（亿元）',
          num: 1.2
        }
      ],
      lines: {
        name: '本省',
        name1: '外省',
        name2: '外省2',
        line1Name: '迁入',
        line1Num: 1181,
        line2Name: '迁出',
        line2Num: 741
      }
    }
  },
  mounted () {
    this.makeLineData()
  },
  methods: {
    makeLineData () {
      this.lineData2 = []
      for (let i = 1; i <= 12; i++) {
        this.lineData2.push({
          name: i + '月',
          value1: Mock.Random.natural(100, 1800),
          value2: Mock.Random.natural(100, 1800),
          value3: Mock.Random.natural(100, 1800)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.AnalysisLeft {

}
</style>
