<template>
    <container-calc type="tb" :number="53" class="AnalysisRight full page-style">
        <!-- <template slot="fix">
            <RadioSimple :data="[{name:'稽查办案'}]" class="w-1-7 full-height radio"/>
        </template> -->
        <div slot="calc" class=" full">
            <!-- <div class="h-2-8">
                <container class="full-height w-1-2" title="线索来源">
                    <leftImages :data='leftImage'></leftImages>
                </container>
                <container class="full-height w-1-2" title="案件类型">
                    <ChartsPie :data='hellowPie' is-pie :show-value="true" :unit="'件'"/>
                </container>
            </div> -->
            <container class="h-1-3" title="抗疫专区">
              <righTepidemic></righTepidemic>
            </container>
            <container class="h-1-3"  title="各市重点区域疫情防控情况">
                <div class="full-height w-1-2">
                    <!-- <ChartsPie :data='hellowPie2' :centerValue="'2300'" :show-value="true" :unit="'户'"/> -->
                  <ChartsBarSimple :data="leftImage.chart3" :dimensions="['name','value']" unit="万人" :barWidth='30' :barRadios='[0, 0, 0, 0]'
                  :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/>
                </div>
                <div class="full-height w-1-2">
                    <!-- <threePie :data='threePie'></threePie> -->
                  <ChartsBarSimple :data="leftImage.chart4" :dimensions="['name','value']" unit="万户" :barWidth='30' :barRadios='[0, 0, 0, 0]'
                  :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/>
                </div>
            </container>
            <container class="h-1-3" title='质量强省'>
                <div class="full-height w-1-2">
                    <!--                    <routine :data='tableData'></routine>-->
                    <!-- <ChartsFunnel :data='tableData'/> -->
                    <number-group3 :data="numberGroup"/>
                </div>
                <div class="full-height w-1-2">
                  <div class="w-2-5 full-height">
                    <boxList :data='expenseGoal'></boxList>
                  </div>
                  <div class="w-3-5 full-height">
                    <ChartsBarLine :data="data3" :type="['line']" :dimensions="['name','value']"
                                   :units="['单位：项']"
                                   :legend="['企业公开标准项数量']"/>
                  </div>
                    <!-- <div class="w-1-4 h-6-8" v-for="(item, index) in liquidfillData[itemD.key]" :key="index">
                        <div class="h-5-6">
                            <ChartsLiquidFill :data='item'/>
                        </div>
                        <div class="h-1-6" style="text-align: center;font-size: 24px;">{{ item[0] }}</div>
                    </div>
                    <radioBtn :data='radioData' v-model="itemD"/> -->
                </div>
            </container>
        </div>
    </container-calc>
</template>

<script>
import Mock from 'mockjs'
// import leftImages from './components/leftImage'
// import threePie from './components/threePie'
// import radioBtn from './components/radioButton'
// import ChartsFunnel from './components/ChartsFunnel'
import NumberGroup3 from './components/numberGroup3'
import righTepidemic from './components/righTepidemic'
import boxList from './components/boxList'
import ChartsBarLine from '../../../components/echarts/ChartsBarLine'

export default {
  name: 'AnalysisRight',
  components: {
    // ChartsFunnel,
    // leftImages,
    // threePie,
    // radioBtn,
    NumberGroup3,
    righTepidemic,
    boxList,
    ChartsBarLine
  },
  data () {
    return {
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
        chart3: [
          {
            name: '唐山市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '石家庄市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '保定市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '辛集市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '定州市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '秦皇岛市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '廊坊市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '承德市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '沧州市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '邢台市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '衡水市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '邯郸市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '张家口市',
            value: Mock.Random.natural(1, 20)
          }
        ],
        chart4: [
          {
            name: '唐山市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '石家庄市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '保定市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '辛集市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '定州市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '秦皇岛市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '廊坊市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '承德市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '沧州市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '邢台市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '衡水市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '邯郸市',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '张家口市',
            value: Mock.Random.natural(1, 20)
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
      expenseGoal: [{
        name: '省地方标准',
        num: '2763',
        unit: ''
      }, {
        name: '京津翼协同地方标准',
        num: '54',
        unit: ''
      }, {
        name: '自我声明公开企业',
        num: '14168',
        unit: ''
      }],
      numberGroup: [
        {
          name: '产业品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/21.png'),
          unit: ''
        },
        {
          name: '企业品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/32.png'),
          unit: ''
        },
        {
          name: '区域匹配',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/45.png'),
          unit: ''
        }
      ],
      hellowPie: [
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
      ],
      hellowPie2: [
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
      ],
      threePie: [
        {
          img: require('./components/img/i1.png'),
          name: '办理中',
          num: Mock.Random.natural(1, 100)
        }, {
          img: require('./components/img/i2.png'),
          name: '已办理',
          num: Mock.Random.natural(1, 100)
        }, {
          img: require('./components/img/i3.png'),
          name: '平均办理时间',
          num: ''
        }
      ],
      tableData: [
        {
          name: '责令改正',
          value: Mock.Random.natural(1, 2000)
        }, {
          name: '当场处罚案件',
          value: Mock.Random.natural(1, 2000)
        }, {
          name: '一般程序案件',
          value: Mock.Random.natural(1, 3000)
        }, {
          name: '特殊程序案件',
          value: Mock.Random.natural(1, 5000)
        }
      ],
      radioData: [{
        name: '复议案件(93件)',
        key: 'reconsider',
        active: true
      }, {
        name: '诉讼案件(31件)',
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
  }
}
</script>

<style scoped lang="less">
.AnalysisRight {

}
</style>
