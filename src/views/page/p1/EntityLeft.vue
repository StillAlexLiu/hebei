<template>
    <container-calc type="tb" :number="53" class="EntityLeft full page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full-width full-height">
            <Container class=" h-1-3" :title="select.value===0?entityType+'趋势':'新增'+entityType+'趋势'">
                <div class="w-1-2 full-height">
                    <ChartBar :data="barData" :dimensions="['name','value']"
                              :unit="'户'"/>
                </div>
                <NumberGroup class="w-1-2 full-height" :data="quantityData" v-if="false"/>
                <NumberGroup3 class="w-1-2 full-height" :data="quantityData" v-if="entityType==='市场主体'"/>
                <NumberGroup2 class="w-1-2 full-height" :data="quantityData" v-else/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?entityType+'产业占比':'新增'+entityType+'产业占比'">
                <div class="full-height w-1-3" v-for="(item,index) in pieData" :key="index">
                    <ChartPie3 :data="item" :max="getMax(pieData)"/>
                </div>
            </Container>
            <Container class="w-1-2 h-1-3"
                       :title="select.value===0?entityType+'规模情况（1000万以上）':'新增'+entityType+'规模情况（1000万以上）'">
                <ChartBarLine :data="barGroupData" :dimensions="['year','step1','step2','step3']"
                              :legend="['1000-5000万元','5000-1亿元','1亿元以上']"
                              :type="['bar','bar','bar']"
                              :twoAxis="false"
                              :colors="['#FFD589', '#4A90E2', '#B8E986']" :units="['户']"/>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===1" :title="'新增'+entityType+'行业TOP5'">
                <ChartHalfPie :data="halfPieData"/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?entityType+'区域分布':'新增'+entityType+'区域分布'">
                <ChartBarSimple :data="barData2" :dimensions="['name','value']" unit="户"
                                :colors="['#4A90E2','#5DC3FF','#91D243','#50E3C2','#B8E986','#87A0F6','#FFD589','#FE9E55','#FE6941','#FF98A4','#22AEC5']"/>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===0"
                       :title="select.value===0?entityType+'生命周期分析':'新增'+entityType+'生命周期分析'">
                <ChartBarLine v-if="select.value===0" :data="barGroupData2"
                              :dimensions="['year','step1','step2','step3']"
                              :legend="['10年以下','10-20年','20年以上']"
                              :type="['bar','bar','bar']"
                              :twoAxis="false"
                              :colors="['#B8E986', '#FF98A4', '#4A90E2']" :units="['户']"/>
            </Container>
        </div>
    </container-calc>
</template>

<script>
import ChartBar from './componets/ChartBar'
import NumberGroup from './componets/NumberGroup'
import NumberGroup2 from './componets/NumberGroup2'
import ChartPie3 from './componets/ChartPie3'
import ChartBarSimple from './componets/ChartBarSimple'
import ChartBarLine from './componets/ChartBarLine'
import ChartHalfPie from './componets/ChartHalfPie'
import { mapState } from 'vuex'
import NumberGroup3 from './componets/NumberGroup3'

export default {
  name: 'EntityLeft',
  components: {
    NumberGroup3,
    NumberGroup2,
    ChartHalfPie,
    ChartBarLine,
    ChartBarSimple,
    ChartPie3,
    NumberGroup,
    ChartBar
  },
  data () {
    return {
      select: {},
      entityType: '市场主体',
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
                    value: 6275815
                  }
                ]
              },
              info: {
                name: '总数',
                value: 6275815,
                img: require('./componets/img/entity/entity-zong.png'),
                data: [
                  {
                    name: '公有制企业',
                    value: 119946,
                    img: require('./componets/img/entity/entity-gong.png')
                  },
                  {
                    name: '外资企业',
                    value: 9863,
                    img: require('./componets/img/entity/entity-wai.png')
                  },
                  {
                    name: '私营企业',
                    value: 1597234,
                    img: require('./componets/img/entity/entity-si.png')
                  },
                  {
                    name: '个体工商户',
                    value: 4433075,
                    img: require('./componets/img/entity/entity-ge.png')
                  },
                  {
                    name: '农民合作社',
                    value: 115576,
                    img: require('./componets/img/entity/entity-nong.png')
                  },
                  {
                    name: '其他',
                    value: 121,
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
                    value: 338486,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 885046,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 5051233,
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
                  { year: '2020', step1: '169544', step2: '28858', step3: '16025' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '1162414' },
                  { name: '唐山', value: '682831' },
                  { name: '秦皇岛', value: '269928' },
                  { name: '邯郸', value: '836839' },
                  { name: '邢台', value: '608637' },
                  { name: '保定', value: '864944' },
                  { name: '张家口', value: '304699' },
                  { name: '承德', value: '262762' },
                  { name: '沧州', value: '504944' },
                  { name: '廊坊', value: '418882' },
                  { name: '衡水', value: '356428' },
                  { name: '雄安新区', value: '2424' }
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
                  { year: '2020', step1: '5436070', step2: '784325', step3: '55403' }
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
                    value: 174923
                  }
                ]
              },
              info: {
                name: '总数',
                value: 174923,
                img: require('./componets/img/entity/entity-zong.png'),
                data: [
                  {
                    name: '公有制企业',
                    value: 2001,
                    img: require('./componets/img/entity/entity-gong.png')
                  },
                  {
                    name: '外资企业',
                    value: 102,
                    img: require('./componets/img/entity/entity-wai.png')
                  },
                  {
                    name: '私营企业',
                    value: 51208,
                    img: require('./componets/img/entity/entity-si.png')
                  },
                  {
                    name: '个体工商户',
                    value: 121110,
                    img: require('./componets/img/entity/entity-ge.png')
                  },
                  {
                    name: '农民合作社',
                    value: 485,
                    img: require('./componets/img/entity/entity-nong.png')
                  },
                  {
                    name: '其他',
                    value: 17,
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
                    value: 7771,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 28407,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 138740,
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
                  { year: '2020', step1: '3346', step2: '560', step3: '246' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '37798' },
                  { name: '唐山', value: '21996' },
                  { name: '秦皇岛', value: '5753' },
                  { name: '邯郸', value: '19318' },
                  { name: '邢台', value: '21030' },
                  { name: '保定', value: '19941' },
                  { name: '张家口', value: '5703' },
                  { name: '承德', value: '5247' },
                  { name: '沧州', value: '12823' },
                  { name: '廊坊', value: '14375' },
                  { name: '衡水', value: '10776' },
                  { name: '雄安新区', value: '163' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '交通运输、仓储和邮政业', value: '9426' },
                  { name: '居民服务、修理和其他服务业', value: '12568' },
                  { name: '住宿和餐饮业', value: '14373' },
                  { name: '制造业', value: '20234' },
                  { name: '批发和零售业', value: '81718' }
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
                    value: 119946
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
                    value: 119946
                  },
                  {
                    name: '同比上涨',
                    value: '11.18%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 39457.6547797594
                  },
                  {
                    name: '同比上涨',
                    value: '15.52%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 2817,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 19682,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 97446,
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
                  { year: '2020', step1: '15715', step2: '5395', step3: '6095' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '24952' },
                  { name: '唐山', value: '12891' },
                  { name: '秦皇岛', value: '5951' },
                  { name: '邯郸', value: '13810' },
                  { name: '邢台', value: '8572' },
                  { name: '保定', value: '15808' },
                  { name: '张家口', value: '10119' },
                  { name: '承德', value: '5950' },
                  { name: '沧州', value: '8353' },
                  { name: '廊坊', value: '7142' },
                  { name: '衡水', value: '5591' },
                  { name: '雄安新区', value: '744' }
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
                  { year: '2020', step1: '69065', step2: '29202', step3: '21679' }
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
                    value: 2001
                  }
                ]
              },
              info: {
                name: '公有制企业',
                value: 2001,
                img: require('./componets/img/entity/entity-gong.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 2001
                  },
                  {
                    name: '同比上涨',
                    value: '-26.80%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 483.445157
                  },
                  {
                    name: '同比上涨',
                    value: '-19.92%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 136,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 313,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 1552,
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
                  { year: '2020', step1: '318', step2: '135', step3: '104' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '412' },
                  { name: '唐山', value: '209' },
                  { name: '秦皇岛', value: '119' },
                  { name: '邯郸', value: '215' },
                  { name: '邢台', value: '142' },
                  { name: '保定', value: '149' },
                  { name: '张家口', value: '147' },
                  { name: '承德', value: '66' },
                  { name: '沧州', value: '300' },
                  { name: '廊坊', value: '118' },
                  { name: '衡水', value: '84' },
                  { name: '雄安新区', value: '40' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '制造业', value: '139' },
                  { name: '房地产业', value: '179' },
                  { name: '租赁和商务服务业', value: '230' },
                  { name: '科学研究和技术服务业', value: '295' },
                  { name: '批发和零售业', value: '496' }
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
                    value: 9863
                  }
                ]
              },
              info: {
                name: '外资企业',
                value: 9863,
                img: require('./componets/img/entity/entity-wai.png'),
                data: [
                  {
                    name: '户数(个)',
                    value: 9863
                  },
                  {
                    name: '同比上涨',
                    value: '6.74%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 5442.96028
                  },
                  {
                    name: '同比上涨',
                    value: '48.61%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 104,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 2125,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 7631,
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
                  { year: '2020', step1: '715', step2: '394', step3: '681' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '1922' },
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
                  { year: '2020', step1: '4329', step2: '4397', step3: '1137' }
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
                    value: 102
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
                    value: 102
                  },
                  {
                    name: '同比上涨',
                    value: '-29.51%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 12.9560
                  },
                  {
                    name: '同比上涨',
                    value: '-89.77%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 0,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 4,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 98,
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
                  { year: '2020', step1: '9', step2: '2', step3: '5' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '14' },
                  { name: '唐山', value: '9' },
                  { name: '秦皇岛', value: '5' },
                  { name: '邯郸', value: '18' },
                  { name: '邢台', value: '9' },
                  { name: '保定', value: '8' },
                  { name: '张家口', value: '6' },
                  { name: '承德', value: '1' },
                  { name: '沧州', value: '11' },
                  { name: '廊坊', value: '11' },
                  { name: '衡水', value: '8' },
                  { name: '雄安新区', value: '2' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '住宿和餐饮业', value: '5' },
                  { name: '科学研究和技术服务业', value: '12' },
                  { name: '租赁和商务服务业', value: '13' },
                  { name: '信息传输、软件和信息技术服务业', value: '20' },
                  { name: '批发和零售业', value: '40' }
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
                    value: 1597234
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
                    value: 1597234
                  },
                  {
                    name: '同比上涨',
                    value: '23.55%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 80481.11408
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
                    value: 61556,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 458483,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 1077195,
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
                  { year: '2020', step1: '148411', step2: '22869', step3: '9224' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '345010' },
                  { name: '唐山', value: '122532' },
                  { name: '秦皇岛', value: '69994' },
                  { name: '邯郸', value: '185120' },
                  { name: '邢台', value: '151211' },
                  { name: '保定', value: '225980' },
                  { name: '张家口', value: '70726' },
                  { name: '承德', value: '57586' },
                  { name: '沧州', value: '136362' },
                  { name: '廊坊', value: '135526' },
                  { name: '衡水', value: '95601' },
                  { name: '雄安新区', value: '1584' }
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
                  { year: '2020', step1: '1419609', step2: '163694', step3: '14786' }
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
                    value: 51208
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
                    value: 51208
                  },
                  {
                    name: '同比上涨',
                    value: '-24.17%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 1676.613864
                  },
                  {
                    name: '同比上涨',
                    value: '-21.16%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 1917,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 15404,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 33887,
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
                  { year: '2020', step1: '2994', step2: '415', step3: '133' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '10081' },
                  { name: '唐山', value: '3650' },
                  { name: '秦皇岛', value: '1872' },
                  { name: '邯郸', value: '6897' },
                  { name: '邢台', value: '6019' },
                  { name: '保定', value: '5728' },
                  { name: '张家口', value: '1815' },
                  { name: '承德', value: '1788' },
                  { name: '沧州', value: '3967' },
                  { name: '廊坊', value: '5787' },
                  { name: '衡水', value: '3483' },
                  { name: '雄安新区', value: '121' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '租赁和商务服务业', value: '4852' },
                  { name: '科学研究和技术服务业', value: '5573' },
                  { name: '建筑业', value: '6721' },
                  { name: '制造业', value: '8611' },
                  { name: '批发和零售业', value: '14964' }
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
                    value: 4433075
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
                    value: 4433075
                  },
                  {
                    name: '同比上涨',
                    value: '22.50%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 4250.522259
                  },
                  {
                    name: '同比上涨',
                    value: '24.38%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 166924,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 404455,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 3860650,
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
                  { year: '2020', step1: '527', step2: '33', step3: '3' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '776922' },
                  { name: '唐山', value: '536104' },
                  { name: '秦皇岛', value: '187998' },
                  { name: '邯郸', value: '631151' },
                  { name: '邢台', value: '437569' },
                  { name: '保定', value: '606479' },
                  { name: '张家口', value: '213933' },
                  { name: '承德', value: '186004' },
                  { name: '沧州', value: '347350' },
                  { name: '廊坊', value: '268769' },
                  { name: '衡水', value: '240796' }
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
                  { year: '2020', step1: '3843105', step2: '572156', step3: '17797' }
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
                    value: 137614
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
                    value: 137614
                  },
                  {
                    name: '同比上涨',
                    value: '-17.28%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 170.5798576
                  },
                  {
                    name: '同比上涨',
                    value: '2.94%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 6234,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 14060,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 117314,
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
                  { year: '2020', step1: '13', step2: '1', step3: '4' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '30161' },
                  { name: '唐山', value: '20287' },
                  { name: '秦皇岛', value: '4305' },
                  { name: '邯郸', value: '13795' },
                  { name: '邢台', value: '16895' },
                  { name: '保定', value: '16639' },
                  { name: '张家口', value: '4459' },
                  { name: '承德', value: '3948' },
                  { name: '沧州', value: '10010' },
                  { name: '廊坊', value: '9250' },
                  { name: '衡水', value: '7865' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '交通运输、仓储和邮政业', value: '9278' },
                  { name: '制造业', value: '12697' },
                  { name: '居民服务、修理和其他服务业', value: '12900' },
                  { name: '住宿和餐饮业', value: '16733' },
                  { name: '批发和零售业', value: '74013' }
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
                    value: 115588
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
                    value: 115588
                  },
                  {
                    name: '同比上涨',
                    value: '3.39%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 2515.008222
                  },
                  {
                    name: '同比上涨',
                    value: '2.48%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 107096,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 282,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 8210,
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
                  { year: '2020', step1: '4170', step2: '161', step3: '19' }
                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '13587' },
                  { name: '唐山', value: '10056' },
                  { name: '秦皇岛', value: '5405' },
                  { name: '邯郸', value: '5943' },
                  { name: '邢台', value: '10683' },
                  { name: '保定', value: '15551' },
                  { name: '张家口', value: '9321' },
                  { name: '承德', value: '12762' },
                  { name: '沧州', value: '11922' },
                  { name: '廊坊', value: '6354' },
                  { name: '衡水', value: '14004' }
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
                  { year: '2020', step1: '100744', step2: '14843', step3: '1' }
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
                    value: 485
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
                    value: 485
                  },
                  {
                    name: '同比上涨',
                    value: '-62.34%'
                  },
                  {
                    name: '资本（亿元）',
                    value: 8.235915
                  },
                  {
                    name: '同比上涨',
                    value: '-59.22%'
                  }
                ]
              }
            },
            block2: {
              chart: {
                data: [
                  {
                    name: '第一产业',
                    value: 472,
                    icon: require('./componets/img/pie/pie1.png'),
                    color: '#22AEC5'
                  },
                  {
                    name: '第二产业',
                    value: 2,
                    icon: require('./componets/img/pie/pie2.png'),
                    color: '#35A3FF'
                  },
                  {
                    name: '第三产业',
                    value: 11,
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
                  { year: '2020', step1: '9', step2: '1', step3: '0' }

                ]
              }
            },
            block4: {
              chart: {
                data: [
                  { name: '石家庄', value: '39' },
                  { name: '唐山', value: '126' },
                  { name: '秦皇岛', value: '35' },
                  { name: '邯郸', value: '15' },
                  { name: '邢台', value: '13' },
                  { name: '保定', value: '24' },
                  { name: '张家口', value: '51' },
                  { name: '承德', value: '54' },
                  { name: '沧州', value: '28' },
                  { name: '廊坊', value: '50' },
                  { name: '衡水', value: '50' }
                ]
              }
            },
            block5: {
              chart: {
                data: [
                  { name: '电力、热力、燃气及水生产和供应业', value: '2' },
                  { name: '批发和零售业', value: '2' },
                  { name: '租赁和商务服务业', value: '2' },
                  { name: '科学研究和技术服务业', value: '7' },
                  { name: '农、林、牧、渔业', value: '472' }
                ]
              }
            }
          }
        }
      }
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
        if (this.globalMapSelect && this.globalMapSelect.items.length > 0 && this.globalMapSelect.tab.name === '市场主体') {
          this.entityType = this.globalMapSelect.items[0].name
        } else {
          this.entityType = '市场主体'
        }
        this.showEntityData(this.entityType)
      }
    },
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        // this.dispatchSelect(this.data.all)
        this.showEntityData(this.entityType)
      }
    }
  },
  methods: {
    dispatchSelect (data) {
      console.log(data)
      if (this.select.value === 0) {
        this.getStock(data.stock)
      }
      if (this.select.value === 1) {
        this.getNewly(data.newly)
      }
    },
    getStock (data) {
      this.barData = data.block1.chart.data
      this.quantityData = data.block1.info
      this.pieData = data.block2.chart.data
      this.barGroupData = data.block3.chart.data
      this.barData2 = data.block4.chart.data
      this.barGroupData2 = data.block5.chart.data
    },
    getNewly (data) {
      this.barData = data.block1.chart.data
      this.quantityData = data.block1.info
      this.pieData = data.block2.chart.data
      this.barGroupData = data.block3.chart.data
      this.barData2 = data.block4.chart.data
      this.halfPieData = data.block5.chart.data
      console.log(this.halfPieData)
    },
    showEntityData (type) {
      console.log(type)
      switch (type) {
        case '市场主体':
          console.error(0)
          this.dispatchSelect(this.data.all)
          break
        case '公有制企业':
          console.error(1)
          this.dispatchSelect(this.data.gongyou)
          break
        case '外资企业':
          console.error(2)
          this.dispatchSelect(this.data.waizi)
          break
        case '私营企业':
          console.error(3)
          this.dispatchSelect(this.data.siying)
          break
        case '个体工商户':
          console.error(4)
          this.dispatchSelect(this.data.geti)
          break
        case '农民合作社':
          console.error(5)
          this.dispatchSelect(this.data.nongcun)
          break
        default:
          this.dispatchSelect(this.data.all)
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
}
</style>
