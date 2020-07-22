<template>
    <container-calc type="tb" :number="53" class="EntityLeft full page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full-width full-height">
            <!-- <button  @click="tab">切换</button> -->
            <Container class=" h-1-3" :title="select.value===0?entityType.name+'趋势':'新增'+entityType.name+'趋势'">
                <div class="w-1-2 full-height">
                    <ChartBar :data="barData" :dimensions="['name','value']"
                              :unit="'户'"/>
                </div>
                <NumberGroup class="w-1-2 full-height" :data="quantityData" v-if="false"/>
                <NumberGroup3 class="w-1-2 full-height" :data="quantityData" v-if="entityType.name==='1'"/>
                <NumberGroup2 class="w-1-2 full-height" :data="quantityData" v-else/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?entityType.name+'产业占比':'新增'+entityType.name+'产业占比'">
                <div class="full-height w-1-3" v-for="(item,index) in pieData" :key="index">
                    <ChartPie3 :data="item" :max="getMax(pieData)"/>
                    <!-- <autoChart></autoChart> -->
                </div>
            </Container>
            <Container class="w-1-2 h-1-3"
                       :title="select.value===0?entityType.name+'规模情况':'新增'+entityType.name+'规模情况'">
                <ChartsBarLine :data="barGroupData" :dimensions="['year','step1','step2','step3', 'step4', 'step5']"
                               :legend="['500万以下', '500-1000万元', '1000-5000万元','5000-1亿元','1亿元以上']"
                               :type="['bar','bar','bar', 'bar', 'bar']"
                               :twoAxis="false"
                               :selectedMode='true'
                               :colors="['#FFD589', '#4A90E2', '#B8E986', 'green', 'orange']" :units="['户']"/>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===1" :title="'新增'+entityType.name+'行业TOP5'">
                <ChartHalfPie :data="halfPieData"/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?entityType.name+'区域分布':'新增'+entityType.name+'区域分布'">
                <div class="cuo full-width h-1-12">
                  <span class="close_back" @click="back_parameter" v-if='chacha' >×</span>
                </div>
                <div class="full-width h-11-12">
                  <ChartsBarSimple :data="barData2" :dimensions="['name','value']" unit="户" @click="clickEch"
                                 :colors="['#4A90E2','#5DC3FF','#91D243','#50E3C2','#B8E986','#87A0F6','#FFD589','#FE9E55','#FE6941','#FF98A4','#22AEC5']"/>
                </div>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===0"
                       :title="select.value===0?entityType.name+'生命周期分析':'新增'+entityType.name+'生命周期分析'">
                <ChartsBarLine v-if="select.value===0" :data="barGroupData2"
                               :dimensions="['year','step1','step2','step3', 'step4', 'step5', 'step6']"
                               :legend="['3年以下','3-5年','5-10年', '10-20年', '20年以上', '平均生命周期']"
                               :type="['bar','bar','bar','bar','bar', 'line']"
                               :twoAxis="true"
                               :dataIndex='[0, 0, 0, 0, 0, 1]'
                               :colors="['#B8E986', '#FF98A4', '#4A90E2', 'rgb(34,174,197)', 'rgb(135,160,246)', 'rgb(72,143,225)']" :units="['户', '年']"/>
            </Container>
        </div>
    </container-calc>
</template>

<script>
import { mapState } from 'vuex'
import ChartBar from './componets/ChartBar'
import ChartPie3 from './componets/ChartPie3'
import ChartHalfPie from './componets/ChartHalfPie'
import NumberGroup from './componets/NumberGroup'
import NumberGroup2 from './componets/NumberGroup2'
import NumberGroup3 from './componets/NumberGroup3'
import axios from 'axios'
import Bus from '@/assets/bus.js'

export default {
  name: 'EntityLeft',
  components: {
    NumberGroup3,
    NumberGroup2,
    ChartHalfPie,
    ChartPie3,
    NumberGroup,
    ChartBar
  },
  data: function () {
    return {
      chacha: false,
      select: {},
      entityType: { name: '市场主体', type: 0 },
      radioData: [
        {
          name: '存量情况',
          value: 0
        },
        {
          name: '增量情况',
          value: 1
        }
      ],
      config: this.$dataAll.p1,
      barData: [], // 第一个柱图
      quantityData: {}, // 柱图右侧
      pieData: [], // 三个饼图
      barGroupData: [], // 第二行第二个柱形图
      barData2: [],
      halfPieData: [],
      barGroupData2: [],
      data: {
        all: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 2514110
                  }, {
                    name: '2016',
                    value: 3178772
                  }, {
                    name: '2017',
                    value: 3994855
                  }, {
                    name: '2018',
                    value: 4913867
                  }, {
                    name: '2019',
                    value: 6101933

                  }, {
                    name: '2020',
                    value: 6400232
                  }
                ]
              },
              info: {
                name: '总数',
                value: 6400232,
                img: require('./componets/img/entity/entity-zong.png'),
                data: [
                  {
                    name: '公有制企业',
                    value: 120787,
                    img: require('./componets/img/entity/entity-gong.png')
                  },
                  {
                    name: '外资企业',
                    value: 9904,
                    img: require('./componets/img/entity/entity-wai.png')
                  },
                  {
                    name: '私营企业',
                    value: 1634254,
                    img: require('./componets/img/entity/entity-si.png')
                  },
                  {
                    name: '个体工商户',
                    value: 4519348,
                    img: require('./componets/img/entity/entity-ge.png')
                  },
                  {
                    name: '农民合作社',
                    value: 115804,
                    img: require('./componets/img/entity/entity-nong.png')
                  },
                  {
                    name: '其他',
                    value: 135,
                    img: require('./componets/img/entity/entity-nong.png')
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 345646,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 903197,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 5150344,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '82613', step2: '14805', step3: '9141' },
                  { year: '2016', step1: '102655', step2: '17887', step3: '10738' },
                  { year: '2017', step1: '124680', step2: '21483', step3: '12642' },
                  { year: '2018', step1: '145582', step2: '25036', step3: '14270' },
                  { year: '2019', step1: '166255', step2: '28305', step3: '15780' },
                  { year: '2020', step1: '173132', step2: '29378', step3: '16200' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: 1186591 },
                  { name: '唐山', value: 700242 },
                  { name: '秦皇岛', value: 274950 },
                  { name: '邯郸', value: 846284 },
                  { name: '邢台', value: 619272 },
                  { name: '保定', value: 880872 },
                  { name: '张家口', value: 311750 },
                  { name: '承德', value: 267151 },
                  { name: '沧州', value: 517419 },
                  { name: '廊坊', value: 429173 },
                  { name: '衡水', value: 363908 },
                  { name: '雄安新区', value: 2542 }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '2271083', step2: '225294', step3: '17733' },
                  { year: '2016', step1: '2882336', step2: '275685', step3: '20751' },
                  { year: '2017', step1: '3629123', step2: '341407', step3: '24325' },
                  { year: '2018', step1: '4376287', step2: '507951', step3: '29629' },
                  { year: '2019', step1: '5422692', step2: '642970', step3: '36271' },
                  { year: '2020', step1: '5563567', step2: '781373', step3: '55275' }
                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 492204
                  }, {
                    name: '2016',
                    value: 664641
                  }, {
                    name: '2017',
                    value: 816063
                  }, {
                    name: '2018',
                    value: 918975
                  }, {
                    name: '2019',
                    value: 1188032
                  }, {
                    name: '2020',
                    value: 358628
                  }
                ]
              },
              info: {
                name: '总数',
                value: 358628,
                img: require('./componets/img/entity/entity-zong.png'),
                data: [
                  {
                    name: '公有制企业',
                    value: 3531,
                    img: require('./componets/img/entity/entity-gong.png')
                  },
                  {
                    name: '外资企业',
                    value: 166,
                    img: require('./componets/img/entity/entity-wai.png')
                  },
                  {
                    name: '私营企业',
                    value: 95975,
                    img: require('./componets/img/entity/entity-si.png')
                  },
                  {
                    name: '个体工商户',
                    value: 257814,
                    img: require('./componets/img/entity/entity-ge.png')
                  },
                  {
                    name: '农民合作社',
                    value: 1111,
                    img: require('./componets/img/entity/entity-nong.png')
                  },
                  {
                    name: '其他',
                    value: 31,
                    img: require('./componets/img/entity/entity-nong.png')
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 17211,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 50197,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 291212,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '14958', step2: '2314', step3: '1119' },
                  { year: '2016', step1: '20043', step2: '3082', step3: '1598' },
                  { year: '2017', step1: '22026', step2: '3597', step3: '1904' },
                  { year: '2018', step1: '20902', step2: '3556', step3: '1628' },
                  { year: '2019', step1: '20673', step2: '3268', step3: '1509' },
                  { year: '2020', step1: '6491', step2: '955', step3: '392' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '72441' },
                  { name: '唐山', value: '43715' },
                  { name: '秦皇岛', value: '12970' },
                  { name: '邯郸', value: '38769' },
                  { name: '邢台', value: '38910' },
                  { name: '保定', value: '46906' },
                  { name: '张家口', value: '15554' },
                  { name: '承德', value: '11679' },
                  { name: '沧州', value: '28849' },
                  { name: '廊坊', value: '28268' },
                  { name: '衡水', value: '20263' },
                  { name: '雄安新区', value: '304' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '居民服务、修理和其他服务业', value: '24367' },
                  { name: '交通运输、仓储和邮政业', value: '25302' },
                  { name: '制造业', value: '34549' },
                  { name: '住宿和餐饮业', value: '36826' },
                  { name: '批发和零售业', value: '165348' }
                ]
              }
            }
          }
        },
        gongyou: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 73227
                  }, {
                    name: '2016',
                    value: 82271
                  }, {
                    name: '2017',
                    value: 93400
                  }, {
                    name: '2018',
                    value: 105253
                  }, {
                    name: '2019',
                    value: 117979

                  }, {
                    name: '2020',
                    value: 120787
                  }
                ]
              },
              info: {
                name: '公有制企业',
                value: 119946,
                img: require('./componets/img/entity/entity-gong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 120787
                  },
                  {
                    name: '同比上涨',
                    value: '11.13%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 398570349.7
                  },
                  {
                    name: '同比上涨',
                    value: '14.98%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 2845,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 19842,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 98099,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '7715', step2: '2508', step3: '3200' },
                  { year: '2016', step1: '9333', step2: '3126', step3: '3878' },
                  { year: '2017', step1: '11433', step2: '3874', step3: '4664' },
                  { year: '2018', step1: '13373', step2: '4625', step3: '5346' },
                  { year: '2019', step1: '15402', step2: '5261', step3: '5991' },
                  { year: '2020', step1: '15969', step2: '5472', step3: '6167' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '25081' },
                  { name: '唐山', value: '12977' },
                  { name: '秦皇岛', value: '5998' },
                  { name: '邯郸', value: '13933' },
                  { name: '邢台', value: '8632' },
                  { name: '保定', value: '15872' },
                  { name: '张家口', value: '10150' },
                  { name: '承德', value: '5978' },
                  { name: '沧州', value: '8488' },
                  { name: '廊坊', value: '7199' },
                  { name: '衡水', value: '5657' },
                  { name: '雄安新区', value: '759' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '38814', step2: '21299', step3: '13114' },
                  { year: '2016', step1: '45306', step2: '22788', step3: '14177' },
                  { year: '2017', step1: '51739', step2: '25988', step3: '15673' },
                  { year: '2018', step1: '60284', step2: '27180', step3: '17789' },
                  { year: '2019', step1: '70124', step2: '27970', step3: '19885' },
                  { year: '2020', step1: '70063', step2: '29100', step3: '21624' }
                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 7165
                  }, {
                    name: '2016',
                    value: 9043
                  }, {
                    name: '2017',
                    value: 11126
                  }, {
                    name: '2018',
                    value: 11851
                  }, {
                    name: '2019',
                    value: 12726

                  }, {
                    name: '2020',
                    value: 3531
                  }
                ]
              },
              info: {
                name: '公有制企业',
                value: 3531,
                img: require('./componets/img/entity/entity-gong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 2001
                  },
                  {
                    name: '同比上涨',
                    value: '-12.94%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 9614259.234
                  },
                  {
                    name: '同比上涨',
                    value: '-9.56%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 167,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 553,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 2811,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '1106', step2: '356', step3: '380' },
                  { year: '2016', step1: '1619', step2: '618', step3: '678' },
                  { year: '2017', step1: '2098', step2: '748', step3: '786' },
                  { year: '2018', step1: '1940', step2: '751', step3: '682' },
                  { year: '2019', step1: '2029', step2: '636', step3: '645' },
                  { year: '2020', step1: '576', step2: '212', step3: '161' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '722' },
                  { name: '唐山', value: '369' },
                  { name: '秦皇岛', value: '170' },
                  { name: '邯郸', value: '377' },
                  { name: '邢台', value: '271' },
                  { name: '保定', value: '297' },
                  { name: '张家口', value: '256' },
                  { name: '承德', value: '131' },
                  { name: '沧州', value: '489' },
                  { name: '廊坊', value: '225' },
                  { name: '衡水', value: '169' },
                  { name: '雄安新区', value: '55' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '制造业', value: '233' },
                  { name: '房地产业', value: '284' },
                  { name: '租赁和商务服务业', value: '416' },
                  { name: '科学研究和技术服务业', value: '529' },
                  { name: '批发和零售业', value: '882' }
                ]
              }
            }
          }
        },
        waizi: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 7316
                  }, {
                    name: '2016',
                    value: 7912
                  }, {
                    name: '2017',
                    value: 8477
                  }, {
                    name: '2018',
                    value: 9118
                  }, {
                    name: '2019',
                    value: 9761

                  }, {
                    name: '2020',
                    value: 9904
                  }
                ]
              },
              info: {
                name: '外资企业',
                value: 9904,
                img: require('./componets/img/entity/entity-wai.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 9904
                  },
                  {
                    name: '同比上涨',
                    value: '6.62%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 54449305.61
                  },
                  {
                    name: '同比上涨',
                    value: '47.40%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 105,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 2119,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 7680,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '499', step2: '277', step3: '458' },
                  { year: '2016', step1: '537', step2: '294', step3: '502' },
                  { year: '2017', step1: '592', step2: '320', step3: '549' },
                  { year: '2018', step1: '651', step2: '348', step3: '603' },
                  { year: '2019', step1: '706', step2: '392', step3: '676' },
                  { year: '2020', step1: '706', step2: '394', step3: '686' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '1928' },
                  { name: '唐山', value: '1229' },
                  { name: '秦皇岛', value: '571' },
                  { name: '邯郸', value: '818' },
                  { name: '邢台', value: '609' },
                  { name: '保定', value: '1139' },
                  { name: '张家口', value: '600' },
                  { name: '承德', value: '460' },
                  { name: '沧州', value: '936' },
                  { name: '廊坊', value: '1090' },
                  { name: '衡水', value: '428' },
                  { name: '雄安新区', value: '96' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '4013', step2: '3041', step3: '262' },
                  { year: '2016', step1: '4320', step2: '3282', step3: '310' },
                  { year: '2017', step1: '4604', step2: '3470', step3: '403' },
                  { year: '2018', step1: '4092', step2: '4544', step3: '482' },
                  { year: '2019', step1: '4525', step2: '4666', step3: '570' },
                  { year: '2020', step1: '4366', step2: '4395', step3: '1143' }

                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 399
                  }, {
                    name: '2016',
                    value: 596
                  }, {
                    name: '2017',
                    value: 565
                  }, {
                    name: '2018',
                    value: 641
                  }, {
                    name: '2019',
                    value: 643
                  }, {
                    name: '2020',
                    value: 166
                  }
                ]
              },
              info: {
                name: '外资企业',
                value: 102,
                img: require('./componets/img/entity/entity-gong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 166
                  },
                  {
                    name: '同比上涨',
                    value: '-12.63%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 195106.43
                  },
                  {
                    name: '同比上涨',
                    value: '-88.18%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 1,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 8,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 157,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '34', step2: '20', step3: '47' },
                  { year: '2016', step1: '38', step2: '17', step3: '44' },
                  { year: '2017', step1: '55', step2: '26', step3: '47' },
                  { year: '2018', step1: '59', step2: '28', step3: '54' },
                  { year: '2019', step1: '55', step2: '44', step3: '73' },
                  { year: '2020', step1: '10', step2: '3', step3: '8' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '26' },
                  { name: '唐山', value: '24' },
                  { name: '秦皇岛', value: '8' },
                  { name: '邯郸', value: '22' },
                  { name: '邢台', value: '16' },
                  { name: '保定', value: '22' },
                  { name: '张家口', value: '10' },
                  { name: '承德', value: '1' },
                  { name: '沧州', value: '14' },
                  { name: '廊坊', value: '13' },
                  { name: '衡水', value: '8' },
                  { name: '雄安新区', value: '2' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '住宿和餐饮业', value: '8' },
                  { name: '租赁和商务服务业', value: '17' },
                  { name: '科学研究和技术服务业', value: '18' },
                  { name: '信息传输、软件和信息技术服务业', value: '23' },
                  { name: '批发和零售业', value: '79' }

                ]
              }
            }
          }
        },
        siying: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 554736
                  }, {
                    name: '2016',
                    value: 739009
                  }, {
                    name: '2017',
                    value: 959916
                  }, {
                    name: '2018',
                    value: 1228336
                  }, {
                    name: '2019',
                    value: 1547036

                  }, {
                    name: '2020',
                    value: 1634254
                  }
                ]
              },
              info: {
                name: '私营企业',
                value: 1597234,
                img: require('./componets/img/entity/entity-si.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 1634254
                  },
                  {
                    name: '同比上涨',
                    value: '23.45%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 820612283.5
                  },
                  {
                    name: '同比上涨',
                    value: '14.48%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 63305,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 469534,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 1101415,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '70821', step2: '11871', step3: '5468' },
                  { year: '2016', step1: '88720', step2: '14307', step3: '6341' },
                  { year: '2017', step1: '108353', step2: '17117', step3: '7411' },
                  { year: '2018', step1: '127043', step2: '19882', step3: '8301' },
                  { year: '2019', step1: '145469', step2: '22460', step3: '9092' },
                  { year: '2020', step1: '151733', step2: '23310', step3: '9319' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '351597' },
                  { name: '唐山', value: '124763' },
                  { name: '秦皇岛', value: '71188' },
                  { name: '邯郸', value: '189082' },
                  { name: '邢台', value: '155681' },
                  { name: '保定', value: '231600' },
                  { name: '张家口', value: '72209' },
                  { name: '承德', value: '58894' },
                  { name: '沧州', value: '139393' },
                  { name: '廊坊', value: '140172' },
                  { name: '衡水', value: '97986' },
                  { name: '雄安新区', value: '1687' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '485676', step2: '66721', step3: '2339' },
                  { year: '2016', step1: '652875', step2: '82610', step3: '3524' },
                  { year: '2017', step1: '856575', step2: '98375', step3: '4966' },
                  { year: '2018', step1: '1105940', step2: '114998', step3: '7398' },
                  { year: '2019', step1: '1399004', step2: '137484', step3: '10545' },
                  { year: '2020', step1: '1456258', step2: '163224', step3: '14772' }

                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 131715
                  }, {
                    name: '2016',
                    value: 184253
                  }, {
                    name: '2017',
                    value: 220892
                  }, {
                    name: '2018',
                    value: 268385
                  }, {
                    name: '2019',
                    value: 318666
                  }, {
                    name: '2020',
                    value: 95975
                  }
                ]
              },
              info: {
                name: '私营企业',
                value: 51208,
                img: require('./componets/img/entity/entity-si.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 95975
                  },
                  {
                    name: '同比上涨',
                    value: '-5.39%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 31853886.209552
                  },
                  {
                    name: '同比上涨',
                    value: '-6.83%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 3885,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 27474,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 64616,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '13386', step2: '1926', step3: '690' },
                  { year: '2016', step1: '17899', step2: '2436', step3: '874' },
                  { year: '2017', step1: '19636', step2: '2811', step3: '1070' },
                  { year: '2018', step1: '18690', step2: '2768', step3: '890' },
                  { year: '2019', step1: '18426', step2: '2577', step3: '790' },
                  { year: '2020', step1: '5841', step2: '729', step3: '216' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '18708' },
                  { name: '唐山', value: '6834' },
                  { name: '秦皇岛', value: '3398' },
                  { name: '邯郸', value: '12022' },
                  { name: '邢台', value: '10901' },
                  { name: '保定', value: '12363' },
                  { name: '张家口', value: '3716' },
                  { name: '承德', value: '3405' },
                  { name: '沧州', value: '7503' },
                  { name: '廊坊', value: '10837' },
                  { name: '衡水', value: '6041' },
                  { name: '雄安新区', value: '247' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '租赁和商务服务业', value: '8711' },
                  { name: '科学研究和技术服务业', value: '10378' },
                  { name: '建筑业', value: '12719' },
                  { name: '制造业', value: '14620' },
                  { name: '批发和零售业', value: '29310' }

                ]
              }
            }
          }
        },
        geti: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 1797153
                  }, {
                    name: '2016',
                    value: 2252871
                  }, {
                    name: '2017',
                    value: 2828033
                  }, {
                    name: '2018',
                    value: 3460505
                  }, {
                    name: '2019',
                    value: 4311948

                  }, {
                    name: '2020',
                    value: 4519348
                  }
                ]
              },
              info: {
                name: '个体工商户',
                value: 4433075,
                img: require('./componets/img/entity/entity-ge.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 4519348
                  },
                  {
                    name: '同比上涨',
                    value: '22.86%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 44006523.0034
                  },
                  {
                    name: '同比上涨',
                    value: '25.97%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 172070,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 411389,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 3934845,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '216', step2: '10', step3: '1' },
                  { year: '2016', step1: '299', step2: '12', step3: '1' },
                  { year: '2017', step1: '366', step2: '17', step3: '1' },
                  { year: '2018', step1: '443', step2: '23', step3: '1' },
                  { year: '2019', step1: '516', step2: '32', step3: '1' },
                  { year: '2020', step1: '549', step2: '33', step3: '3' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '794432' },
                  { name: '唐山', value: '551050' },
                  { name: '秦皇岛', value: '191770' },
                  { name: '邯郸', value: '636495' },
                  { name: '邢台', value: '443672' },
                  { name: '保定', value: '616703' },
                  { name: '张家口', value: '219447' },
                  { name: '承德', value: '189043' },
                  { name: '沧州', value: '356667' },
                  { name: '廊坊', value: '274304' },
                  { name: '衡水', value: '245765' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '1660929', step2: '134207', step3: '2017' },
                  { year: '2016', step1: '2083159', step2: '166973', step3: '2739' },
                  { year: '2017', step1: '2612466', step2: '212285', step3: '3282' },
                  { year: '2018', step1: '3099982', step2: '356566', step3: '3957' },
                  { year: '2019', step1: '3843831', step2: '462849', step3: '5268' },
                  { year: '2020', step1: '3931742', step2: '569857', step3: '17732' }
                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 343194
                  }, {
                    name: '2016',
                    value: 455427
                  }, {
                    name: '2017',
                    value: 574713
                  }, {
                    name: '2018',
                    value: 631659
                  }, {
                    name: '2019',
                    value: 849168
                  }, {
                    name: '2020',
                    value: 257814
                  }
                ]
              },
              info: {
                name: '个体工商户',
                value: 137614,
                img: require('./componets/img/entity/entity-ge.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 257814
                  },
                  {
                    name: '同比上涨',
                    value: '3.57%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 3342588.196
                  },
                  {
                    name: '同比上涨',
                    value: '26.31%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 12073,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 22145,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 223588,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '79', step2: '2', step3: '0' },
                  { year: '2016', step1: '82', step2: '2', step3: '0' },
                  { year: '2017', step1: '67', step2: '5', step3: '0' },
                  { year: '2018', step1: '77', step2: '6', step3: '0' },
                  { year: '2019', step1: '73', step2: '9', step3: '0' },
                  { year: '2020', step1: '33', step2: '1', step3: '2' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '52903' },
                  { name: '唐山', value: '36200' },
                  { name: '秦皇岛', value: '9321' },
                  { name: '邯郸', value: '26312' },
                  { name: '邢台', value: '27689' },
                  { name: '保定', value: '34143' },
                  { name: '张家口', value: '11455' },
                  { name: '承德', value: '8032' },
                  { name: '沧州', value: '20777' },
                  { name: '廊坊', value: '17074' },
                  { name: '衡水', value: '13908' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '制造业', value: '19682' },
                  { name: '交通运输、仓储和邮政业', value: '22033' },
                  { name: '居民服务、修理和其他服务业', value: '22285' },
                  { name: '住宿和餐饮业', value: '35769' },
                  { name: '批发和零售业', value: '135066' }

                ]
              }
            }
          }
        },
        nongcun: {
          stock: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 81610
                  }, {
                    name: '2016',
                    value: 96634
                  }, {
                    name: '2017',
                    value: 104952
                  }, {
                    name: '2018',
                    value: 110562
                  }, {
                    name: '2019',
                    value: 115103
                  }, {
                    name: '2020',
                    value: 115804
                  }
                ]
              },
              info: {
                name: '农村合作社',
                value: 115588,
                img: require('./componets/img/entity/entity-nong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 115804
                  },
                  {
                    name: '同比上涨',
                    value: '3.44%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 25172802.487975
                  },
                  {
                    name: '同比上涨',
                    value: '2.58%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 107320,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 286,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 8198,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '3361', step2: '139', step3: '13' },
                  { year: '2016', step1: '3765', step2: '148', step3: '15' },
                  { year: '2017', step1: '3935', step2: '155', step3: '16' },
                  { year: '2018', step1: '4071', step2: '158', step3: '18' },
                  { year: '2019', step1: '4161', step2: '160', step3: '19' },
                  { year: '2020', step1: '4167', step2: '160', step3: '19' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '13530' },
                  { name: '唐山', value: '10187' },
                  { name: '秦皇岛', value: '5411' },
                  { name: '邯郸', value: '5954' },
                  { name: '邢台', value: '10675' },
                  { name: '保定', value: '15552' },
                  { name: '张家口', value: '9340' },
                  { name: '承德', value: '12776' },
                  { name: '沧州', value: '11911' },
                  { name: '廊坊', value: '6401' },
                  { name: '衡水', value: '14067' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { year: '2015', step1: '81608', step2: '2', step3: '0' },
                  { year: '2016', step1: '96627', step2: '7', step3: '0' },
                  { year: '2017', step1: '103689', step2: '1263', step3: '0' },
                  { year: '2018', step1: '105923', step2: '4639', step3: '0' },
                  { year: '2019', step1: '105130', step2: '9973', step3: '0' },
                  { year: '2020', step1: '101031', step2: '14772', step3: '1' }

                ]
              }
            }
          },
          newly: {
            block1: {
              chart: {
                data: [
                  {
                    name: '2015',
                    value: 9486
                  }, {
                    name: '2016',
                    value: 15024
                  }, {
                    name: '2017',
                    value: 8318
                  }, {
                    name: '2018',
                    value: 5610
                  }, {
                    name: '2019',
                    value: 4541
                  }, {
                    name: '2020',
                    value: 1111
                  }
                ]
              },
              info: {
                name: '农村合作社',
                value: 485,
                img: require('./componets/img/entity/entity-nong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 1111
                  },
                  {
                    name: '同比上涨',
                    value: '-37.83%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 189934.45
                  },
                  {
                    name: '同比上涨',
                    value: '-32.30%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 1085,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 6,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 20,
                    icon: require('./componets/img/pie/pie3.png'),
                    color: '#FE6941'
                  }
                ]
              }
            },
            block3: {
              chart: {
                data: [
                  { year: '2015', step1: '353', step2: '10', step3: '2' },
                  { year: '2016', step1: '404', step2: '9', step3: '2' },
                  { year: '2017', step1: '170', step2: '7', step3: '1' },
                  { year: '2018', step1: '136', step2: '3', step3: '2' },
                  { year: '2019', step1: '90', step2: '2', step3: '1' },
                  { year: '2020', step1: '24', step2: '1', step3: '0' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '75' },
                  { name: '唐山', value: '280' },
                  { name: '秦皇岛', value: '70' },
                  { name: '邯郸', value: '34' },
                  { name: '邢台', value: '30' },
                  { name: '保定', value: '81' },
                  { name: '张家口', value: '114' },
                  { name: '承德', value: '110' },
                  { name: '沧州', value: '64' },
                  { name: '廊坊', value: '116' },
                  { name: '衡水', value: '137' }

                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '租赁和商务服务业', value: '3' },
                  { name: '批发和零售业', value: '4' },
                  { name: '电力、热力、燃气及水生产和供应业', value: '5' },
                  { name: '科学研究和技术服务业', value: '12' },
                  { name: '农、林、牧、渔业', value: '1025' }
                ]
              }
            }
          }
        },
        mainType: '',
        activeShow: '',
        selectName: ''
      },
      mainClass: '',
      subClass: '',
      type: ''
    }
  },
  computed: {
    ...mapState({
      globalMapSelect: 'globalMapSelect'
    })
  },
  mounted () {
  },
  watch: {
    globalMapSelect: {
      immediate: false,
      deep: true,
      handler: function () {
        const firstType = this.globalMapSelect.tab.children
        for (let i = 0; i < firstType.length; i++) {
          if (firstType[i].active) {
            this.activeShow = firstType[i].type
          }
        }
        // console.log(this.globalMapSelect, 'sssggggg')
        if (this.globalMapSelect && this.globalMapSelect.items.length > 0 && this.globalMapSelect.tab.name === '市场主体') {
          // console.log(1)
          this.entityType = this.globalMapSelect.items[0]
          this.mainType = ''
          if (this.globalMapSelect.items.length > 0) {
            this.mainType = this.globalMapSelect.items[0].type
          } else {
            this.mainType = ''
          }
        } else {
          // console.log(2)
          this.entityType = { name: '市场主体', type: 0 }
          if (this.globalMapSelect.items.length > 0) {
            this.mainType = this.globalMapSelect.items[0].type
          } else {
            this.mainType = ''
          }
        }
        //  //console.log(111)
        // console.log(this.globalMapSelect, '1561')
        this.showEntityData(this.entityType, this.globalMapSelect)
      }
    },
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        //  //console.log(222)
        this.showEntityData(this.entityType, this.globalMapSelect)
      }
    }
  },
  methods: {
    clickEch (data) {
      const data2 = data.data
      const dataLast = data2.name.charAt(data2.name.length - 1)
      if (dataLast === '市') {
        axios.get('/monitor/main/getMainScatterDataByOrgCode?mainClass=' + data2.mainClass + '&orgCode=' + data2.orgCode + '&subClass=' + data2.subClass + '&type=' + data2.type).then(res => {
          const data3 = res.data.data
          this.chacha = true
          this.barData2 = []
          for (let i = 0; i < 10; i++) {
            this.barData2.push({
              name: data3[i].orgName,
              value: data3[i].entepriseNum,
              orgCode: data2.orgCode,
              mainClass: data2.mainClass,
              subClass: data2.subClass,
              type: data2.type
            })
          }
        })
      }
    },
    back_parameter () {
      // 返回区域分布下钻
      // 市场主体区域分布
      // console.log(this.mainClass, this.subClass, this.type)
      axios.get('/monitor/main/getMainScatterData?mainClass=' + this.mainClass + '&type=' + this.type + '&subClass=' + this.subClass).then(res => {
        const data = res.data.data
        this.chacha = false
        this.barData2 = []
        for (let i = 0; i < data.length; i++) {
          this.barData2.push({
            name: data[i].orgName,
            value: data[i].entepriseNum,
            orgCode: data[i].orgCode,
            mainClass: this.mainClass,
            subClass: this.subClass,
            type: this.type
          })
        }
      })
    },
    tabCenter () {
      Bus.$emit('getTarget', true)
    },
    dispatchSelect (data, topType) {
      // console.log(data, topType)
      if (this.select.value === 0) {
        this.getStock(data.stock, topType)
      }
      if (this.select.value === 1) {
        this.getNewly(data.newly, topType)
      }
    },
    getStock (data2, topType) {
      this.barData = []
      this.quantityData = {
        name: '总数',
        img: require('./componets/img/entity/entity-zong.png'),
        data: []
      }
      this.pieData = []
      this.barGroupData = []
      this.barData2 = []
      this.halfPieData = []
      this.barGroupData2 = []
      //  //console.log(data2, topType, typeof(topType), 'klklkl')
      // console.log(data2, topType, topType > 0, 'klklkl')
      if (topType > 0) {
        // 主体子类型
        // 市场主体趋势柱图
        this.mainClass = this.activeShow
        this.subClass = this.mainType
        this.type = 1
        axios.get('/monitor/main/getTrendData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barData = []
          for (let i = 0; i < data.length; i++) {
            this.barData.push({
              name: data[i].year,
              value: data[i].entepriseNum
            })
          }
        })
        // 市场主体趋势图表
        axios.get('/monitor/main/getMainEnNumData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          // console.log(data, '市场主体趋势图表2')
          this.quantityData = {
            name: '总数',
            img: require('./componets/img/entity/entity-zong.png'),
            data: []
          }
          if (data.length === 1) {
            this.quantityData.data = [
              {
                name: '户数(个)',
                value: data[0].newUserNum
              }, {
                name: '同比上涨',
                value: data[0].userYoy + '%'
              }, {
                name: '资本(亿元)',
                value: data[0].newCapitalNum.toFixed(2)
              }, {
                name: '同比上涨',
                value: data[0].capitalYoy + '%'
              }
            ]
          } else {
            for (let i = 0; i < data.length; i++) {
              this.quantityData.data.push({
                name: this.typeFun(data[i].subClass),
                value: data[i].newUserNum
              })
            }
          }
        })
        // 市场主体产业占比
        axios.get('/monitor/main/getMainIdsRatioData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.pieData = [
            {
              name: '第一产业',
              value: data[0].entepriseNum,
              icon: require('./componets/img/pie/pie1.png'),
              color: '#22AEC5'
            },
            {
              name: '第二产业',
              value: data[1].entepriseNum,
              icon: require('./componets/img/pie/pie2.png'),
              color: '#35A3FF'
            },
            {
              name: '第三产业',
              value: data[2].entepriseNum,
              icon: require('./componets/img/pie/pie3.png'),
              color: '#FE6941'
            }
          ]
        })
        // 私营企业规模情况
        axios.get('/monitor/main/getMainScaleData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barGroupData = []
          console.log(data, '私营企业规模情况')
          for (let i = 0; i < data.length; i++) {
            this.barGroupData.push({
              year: data[i].year,
              step1: data[i].scaleFive,
              step2: data[i].scaleFour,
              step3: data[i].scaleOne,
              step4: data[i].scaleTwo,
              step5: data[i].scaleThree
            })
          }
        })
        // 市场主体区域分布
        axios.get('/monitor/main/getMainScatterData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barData2 = []
          for (let i = 0; i < 10; i++) {
            this.barData2.push({
              name: data[i].orgName,
              value: data[i].entepriseNum,
              orgCode: data[i].orgCode,
              mainClass: this.activeShow,
              subClass: this.mainType,
              type: 1
            })
          }
        })
        // 市场主体生命周期分析
        axios.get('/monitor/main/getMainLifecycleData?mainClass=' + this.activeShow + '&type=1' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          console.log(data, '市场主体生命周期分析')
          this.barGroupData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData2.push({
              year: data[i].year,
              step1: data[i].cycleSix,
              step2: data[i].cycleFive,
              step3: data[i].cycleFour,
              step4: data[i].cycleTwo,
              step5: data[i].cycleThree,
              step6: data[i].cycleAvg
            })
          }
        })
      } else {
        // 存量情况
        // 主体大类型
        // 市场主体趋势柱图
        this.mainClass = topType
        this.subClass = ''
        this.type = 1
        axios.get('/monitor/main/getTrendData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.barData = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].year === '2020') {
              if (topType === 'A') {
                data[i].entepriseNum = 122220
              } else if (topType === 'B') {
                data[i].entepriseNum = 1684408
              } else if (topType === 'C') {
                data[i].entepriseNum = 9884
              } else if (topType === 'AA') {
                data[i].entepriseNum = 4637778
              } else if (topType === 'D') {
                data[i].entepriseNum = 115181
              }
            }
            this.barData.push({
              name: data[i].year,
              value: data[i].entepriseNum
            })
          }
        })
        // 市场主体趋势图表
        axios.get('/monitor/main/getMainEnNumData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          // console.log(data, '市场主体趋势图表')
          this.quantityData = {
            name: '总数',
            img: require('./componets/img/entity/entity-zong.png'),
            data: []
          }
          if (data.length === 1) {
            if (topType === 'A') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 122220
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'B') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 1684408
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'C') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 9884
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'AA') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 4637778
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'D') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 115181
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            }
            // this.quantityData.data = [
            //   {
            //     name: '户数(个)',
            //     value: data[0].newUserNum
            //   }, {
            //     name: '同比上涨',
            //     value: data[0].userYoy + '%'
            //   }, {
            //     name: '资本(亿元)',
            //     value: data[0].newCapitalNum.toFixed(2)
            //   }, {
            //     name: '同比上涨',
            //     value: data[0].capitalYoy + '%'
            //   }
            // ]
          } else {
            for (let i = 0; i < data.length; i++) {
              this.quantityData.data.push({
                name: this.typeFun(data[i].subClass),
                value: data[i].newUserNum
              })
            }
          }
        })
        // 市场主体产业占比
        axios.get('/monitor/main/getMainIdsRatioData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.pieData = [
            {
              name: '第一产业',
              value: data[0].entepriseNum,
              icon: require('./componets/img/pie/pie1.png'),
              color: '#22AEC5'
            },
            {
              name: '第二产业',
              value: data[1].entepriseNum,
              icon: require('./componets/img/pie/pie2.png'),
              color: '#35A3FF'
            },
            {
              name: '第三产业',
              value: data[2].entepriseNum,
              icon: require('./componets/img/pie/pie3.png'),
              color: '#FE6941'
            }
          ]
        })
        // 私营企业规模情况
        axios.get('/monitor/main/getMainScaleData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          // console.log(data, '私营企业规模情况')
          this.barGroupData = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData.push({
              year: data[i].year,
              step1: data[i].scaleFive,
              step2: data[i].scaleFour,
              step3: data[i].scaleOne,
              step4: data[i].scaleTwo,
              step5: data[i].scaleThree
            })
          }
        })
        // 市场主体区域分布
        axios.get('/monitor/main/getMainScatterData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.barData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barData2.push({
              name: data[i].orgName,
              value: data[i].entepriseNum,
              orgCode: data[i].orgCode,
              mainClass: topType,
              subClass: '',
              type: 1
            })
          }
        })
        // 市场主体生命周期分析
        axios.get('/monitor/main/getMainLifecycleData?mainClass=' + topType + '&type=1' + '&subClass=' + '').then(res => {
          const data = res.data.data
          // console.log(data, '市场主体生命周期分析2')
          this.barGroupData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData2.push({
              year: data[i].year,
              step1: data[i].cycleSix,
              step2: data[i].cycleFive,
              step3: data[i].cycleFour,
              step4: data[i].cycleTwo,
              step5: data[i].cycleThree,
              step6: data[i].cycleAvg
            })
          }
        })
      }
      // this.barData = data.block1.chart.data
      // this.quantityData = data.block1.info
      // this.pieData = data.block2.chart.data
      // this.barGroupData = data.block3.chart.data
      // this.barData2 = data.block4.chart.data
      //  //console.log(this.barData2, 'ggg')
      // this.barGroupData2 = data.block5.chart.data
    },
    getNewly (data, topType) {
      this.barData = []
      this.quantityData = {
        name: '总数',
        img: require('./componets/img/entity/entity-zong.png'),
        data: []
      }
      this.pieData = []
      this.barGroupData = []
      this.barData2 = []
      this.halfPieData = []
      this.barGroupData2 = []
      // 增量情况
      // 市场主体趋势柱图
      // console.log(topType, 'lplp')
      // console.log(topType, typeof (topType), 'lplp')
      if (topType > 0) {
        // 主体子类型
        // 市场主体趋势柱图
        this.mainClass = this.activeShow
        this.subClass = this.mainType
        this.type = 2
        axios.get('/monitor/main/getTrendData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barData = []
          for (let i = 0; i < data.length; i++) {
            this.barData.push({
              name: data[i].year,
              value: data[i].entepriseNum
            })
          }
        })
        // 市场主体趋势图表
        axios.get('/monitor/main/getMainEnNumData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          //  console.log(data, '市场主体趋势图表1')
          this.quantityData = {
            name: '总数',
            img: require('./componets/img/entity/entity-zong.png'),
            data: []
          }
          if (data.length === 1) {
            this.quantityData.data = [
              {
                name: '户数(个)',
                value: data[0].newUserNum
              }, {
                name: '同比上涨',
                value: data[0].userYoy + '%'
              }, {
                name: '资本(亿元)',
                value: data[0].newCapitalNum.toFixed(2)
              }, {
                name: '同比上涨',
                value: data[0].capitalYoy + '%'
              }
            ]
          } else {
            for (let i = 0; i < data.length; i++) {
              this.quantityData.data.push({
                name: this.typeFun(data[i].subClass),
                value: data[i].newUserNum
              })
            }
          }
        })
        // 市场主体产业占比
        axios.get('/monitor/main/getMainIdsRatioData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.pieData = [
            {
              name: '第一产业',
              value: data[0].entepriseNum,
              icon: require('./componets/img/pie/pie1.png'),
              color: '#22AEC5'
            },
            {
              name: '第二产业',
              value: data[1].entepriseNum,
              icon: require('./componets/img/pie/pie2.png'),
              color: '#35A3FF'
            },
            {
              name: '第三产业',
              value: data[2].entepriseNum,
              icon: require('./componets/img/pie/pie3.png'),
              color: '#FE6941'
            }
          ]
        })
        // 私营企业规模情况
        axios.get('/monitor/main/getMainScaleData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barGroupData = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData.push({
              year: data[i].year,
              step1: data[i].scaleFive,
              step2: data[i].scaleFour,
              step3: data[i].scaleOne,
              step4: data[i].scaleTwo,
              step5: data[i].scaleThree
            })
          }
        })
        // 市场主体区域分布
        axios.get('/monitor/main/getMainScatterData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.barData2 = []
          for (let i = 0; i < 10; i++) {
            this.barData2.push({
              name: data[i].orgName,
              value: data[i].entepriseNum,
              orgCode: data[i].orgCode,
              mainClass: this.activeShow,
              subClass: this.mainType,
              type: 2
            })
          }
        })
        // 市场主体生命周期分析
        axios.get('/monitor/main/getMainLifecycleData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          console.log(data, '市场主体生命周期分析3')
          this.barGroupData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData2.push({
              year: data[i].year,
              step1: data[i].cycleSix,
              step2: data[i].cycleFive,
              step3: data[i].cycleFour,
              step4: data[i].cycleTwo,
              step5: data[i].cycleThree,
              step6: data[i].cycleAvg
            })
          }
        })
        // 新增市场主体行业TOP5
        axios.get('/monitor/main/getMainIndRankData?mainClass=' + this.activeShow + '&type=2' + '&subClass=' + this.mainType).then(res => {
          const data = res.data.data
          this.halfPieData = []
          for (let i = 0; i < data.length; i++) {
            this.halfPieData.push({
              name: data[i].industryName,
              value: data[i].entepriseNum
            })
          }
        })
      } else {
        // 存量情况
        // 主体大类型
        // 市场主体趋势柱图
        this.mainClass = topType
        this.subClass = ''
        this.type = 2
        axios.get('/monitor/main/getTrendData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.barData = []
          for (let i = 0; i < data.length; i++) {
            if (data[i].year === '2020') {
              if (topType === 'A') {
                data[i].entepriseNum = 5873
              } else if (topType === 'B') {
                data[i].entepriseNum = 152838
              } else if (topType === 'C') {
                data[i].entepriseNum = 237
              } else if (topType === 'AA') {
                data[i].entepriseNum = 403510
              } else if (topType === 'D') {
                data[i].entepriseNum = 1877
              }
            }
            this.barData.push({
              name: data[i].year,
              value: data[i].entepriseNum
            })
          }
        })
        // 市场主体趋势图表
        axios.get('/monitor/main/getMainEnNumData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          // console.log(data, '市场主体趋势图表2')
          this.quantityData = {
            name: '总数',
            img: require('./componets/img/entity/entity-zong.png'),
            data: []
          }
          if (data.length === 1) {
            if (topType === 'A') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 5873
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'B') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 152838
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'C') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 237
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'AA') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 403510
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            } else if (topType === 'D') {
              this.quantityData.data = [
                {
                  name: '户数(个)',
                  value: 1877
                }, {
                  name: '同比上涨',
                  value: data[0].userYoy + '%'
                }, {
                  name: '资本(亿元)',
                  value: data[0].newCapitalNum.toFixed(2)
                }, {
                  name: '同比上涨',
                  value: data[0].capitalYoy + '%'
                }
              ]
            }
            // this.quantityData.data = [
            //   {
            //     name: '户数(个)',
            //     value: data[0].newUserNum
            //   }, {
            //     name: '同比上涨',
            //     value: data[0].userYoy + '%'
            //   }, {
            //     name: '资本(亿元)',
            //     value: data[0].newCapitalNum.toFixed(2)
            //   }, {
            //     name: '同比上涨',
            //     value: data[0].capitalYoy + '%'
            //   }
            // ]
          } else {
            for (let i = 0; i < data.length; i++) {
              this.quantityData.data.push({
                name: this.typeFun(data[i].subClass),
                value: data[i].newUserNum
              })
            }
          }
        })
        // 市场主体产业占比
        axios.get('/monitor/main/getMainIdsRatioData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.pieData = [
            {
              name: '第一产业',
              value: data[0].entepriseNum,
              icon: require('./componets/img/pie/pie1.png'),
              color: '#22AEC5'
            },
            {
              name: '第二产业',
              value: data[1].entepriseNum,
              icon: require('./componets/img/pie/pie2.png'),
              color: '#35A3FF'
            },
            {
              name: '第三产业',
              value: data[2].entepriseNum,
              icon: require('./componets/img/pie/pie3.png'),
              color: '#FE6941'
            }
          ]
        })
        // 私营企业规模情况
        axios.get('/monitor/main/getMainScaleData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.barGroupData = []
          console.log(data, '私营企业规模情况')
          for (let i = 0; i < data.length; i++) {
            this.barGroupData.push({
              year: data[i].year,
              step1: data[i].scaleFive,
              step2: data[i].scaleFour,
              step3: data[i].scaleOne,
              step4: data[i].scaleTwo,
              step5: data[i].scaleThree
            })
          }
        })
        // 市场主体区域分布
        axios.get('/monitor/main/getMainScatterData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          // console.log(data, 'ssss')
          this.barData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barData2.push({
              name: data[i].orgName,
              value: data[i].entepriseNum,
              orgCode: data[i].orgCode,
              mainClass: topType,
              subClass: '',
              type: 2
            })
          }
        })
        // 市场主体生命周期分析
        axios.get('/monitor/main/getMainLifecycleData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          console.log(data, '市场主体生命周期分析4')
          this.barGroupData2 = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData2.push({
              year: data[i].year,
              step1: data[i].cycleSix,
              step2: data[i].cycleFive,
              step3: data[i].cycleFour,
              step4: data[i].cycleTwo,
              step5: data[i].cycleThree,
              step6: data[i].cycleAvg
            })
          }
        })
        // 新增市场主体行业TOP5
        axios.get('/monitor/main/getMainIndRankData?mainClass=' + topType + '&type=2' + '&subClass=' + '').then(res => {
          const data = res.data.data
          this.halfPieData = []
          for (let i = 0; i < data.length; i++) {
            this.halfPieData.push({
              name: data[i].industryName,
              value: data[i].entepriseNum
            })
          }
        })
      }
      // this.barData = data.block1.chart.data
      // this.quantityData = data.block1.info
      // this.pieData = data.block2.chart.data
      // this.barGroupData = data.block3.chart.data
      // this.barData2 = data.block4.chart.data
      // this.halfPieData = data.block5.chart.data
      //  //console.log(this.halfPieData)
    },
    typeFun (type) {
      switch (type) {
        case '市场主体':
          return 0
        case '公有制企业':
          return 'A'
        case '外资企业':
          return 'C'
        case '私营企业':
          return 'B'
        case '个体工商户':
          return 'AA'
        case '农民合作社':
          return 'D'
        case 'A':
          return '公有制企业'
        case 'C':
          return '外资企业'
        case 'B':
          return '私营企业'
        case 'AA':
          return '个体工商户'
        case 'D':
          return '农民合作社'
        case '0':
          return '其他'
        case '':
          return '市场主体'
      }
    },
    showEntityData (type, data) {
      // console.log(type, data, data.items, 'llll')
      if (data.items) {
        if (data.items.length === 0) {
          this.sendType(type.type)
        } else {
          if (data.items[0].icon) {
            // console.log(type, 'tttpp')
            this.sendType(type.type)
          } else {
            // console.log(this.data, data, 'mmllll')
            this.dispatchSelect(type.type, data.items[0].type)
          }
        }
      } else {
        // console.log(3)
        this.sendType(type.type)
      }
    },
    sendType (type) {
      // console.log(type, 'tttt')
      switch (type) {
        case '市场主体':
          console.error(0)
          this.dispatchSelect(this.data.all, type)
          break
        case '公有制企业':
          console.error(1)
          this.dispatchSelect(this.data.gongyou, type)
          break
        case '外资企业':
          console.error(2)
          this.dispatchSelect(this.data.waizi, type)
          break
        case '私营企业':
          console.error(3)
          this.dispatchSelect(this.data.siying, type)
          break
        case '个体工商户':
          console.error(4)
          this.dispatchSelect(this.data.geti, type)
          break
        case '农村合作社':
          console.error(5)
          this.dispatchSelect(this.data.nongcun, type)
          break
        default:
          this.dispatchSelect(this.data.all, type)
          break
      }
    },
    getMax (data) { // 获取饼图的总数
      let rtn = 0
      for (let i = 0; i < data.length; i++) {
        rtn += data[i].value * 1
      }
      return rtn
    }
  }
}
</script>

<style scoped lang="less">
.EntityLeft {
    .border {
        border: 1px solid #22aec5;
    }
    .close_back{
      float: right;
      font-size: 30px;
      cursor: pointer;
      padding-right: 3%;
    }
}
</style>
