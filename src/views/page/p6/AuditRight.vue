<template>
    <div class="AuditRight full page-style">
        <container title="本年案件处理流程跟踪" class="h-2-8 full-width">
            <ChartTree :data="treeData" v-if="false"/>
            <ChartsGraph :data="graphData" :link="graphData"/>
        </container>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="线索来源">
                <!-- <NumberGroup :data="numbers"/> -->
              <OtherBox :data='certCase' :color="'#F8AD48'">
                  <backList slot="echarts" :data='backList'></backList>
              </OtherBox>
            </container>
            <container class="w-1-2 full-height" title="案件办理时间情况">
              <ImageData :data='imgData'></ImageData>
                <!-- <RadioSimple :data="[{name:'不予处罚'},{name:'减轻处罚'}]" style="height: 45px"/>
                <div style="height: calc(100% - 45px)">
                    <ChartsPie :data="pieData1" :is-pie="true" :show-legend="false" :show-value="true"/>
                </div> -->
            </container>
        </div>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="案件主要违法行为类型分布">
                <!-- <NameOnly :data="nameOnlyData" class="full"/> -->
                 <ChartsPie :data="pieData" :legend-position="'right'"  @pieCli='pieCli' :show-all="true"/>
                <!-- <ChartsPieValueLegend :data="pieData" :text="''" :text-size="28"/> -->
            </container>
            <container class="w-1-2 full-height" :title="pieType.name + '案件地区分布'">
                 <ChartsBarSimple :data="chart4" :dimensions="['name','value']" unit="件" :barWidth='30' :barRadios='[0, 0, 0, 0]' :legend="['案件数量']"
                  :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/>
            </container>
        </div>
    </div>
</template>

<script>
import ChartTree from './components/ChartTree'
import Mock from 'mockjs'
// import NumberGroup from './components/numberGroup'
// import NameOnly from './components/nameOnly'
import ChartsGraph from './components/ChartsGraph'
import ImageData from './components/ImageData'
import OtherBox from './components/otherBox'
import backList from './components/backList'
import axios from 'axios'

export default {
  name: 'AuditRight',
  components: {
    ChartsGraph,
    backList,
    // NameOnly,
    // NumberGroup,
    ChartTree,
    ImageData,
    OtherBox
  },
  computed: {
  },
  watch: {
  },
  methods: {
    pieCli (data) {
      console.log(data.data, this.pieTypeData, '点击')
      // this.pieTypeData = data.data
      // console.log(this.pieTypeData)
      if (data.data === this.pieTypeData) {
        console.log('一样')
        this.pieTypeData = {
          name: '',
          type: ''
        }
        this.PieData(this.pieTypeData)
      } else {
        console.log('不一样')
        this.pieTypeData = data.data
        this.PieData(this.pieTypeData)
      }
    },
    PieData (data) {
      console.log(data, 'dsss')
      this.pieType = data
      // 稽查办案案件地区
      axios.get('/monitor/check/getregionalDistributionData?type=' + this.pieType.type).then(res => {
        const data = res.data.data
        this.chart4 = []
        for (let i = 0; i < data.length; i++) {
          this.chart4.push({
            name: data[i].cityName,
            value: data[i].cityNumber,
            type: data[i].caseType
          })
        }
      })
    }
  },
  mounted () {
    // 稽查办案案件处理流程跟踪
    axios.get('/monitor/check/getCaseProcessData').then(res => {
      const data = res.data.data[0]
      this.graphData = [
        {
          name: '线索', index: 0, value: data.clue
        },
        {
          name: '立案', index: 1, value: data.fileCase
        },
        {
          name: '调查终结', index: 2, value: data.endOfInvestigation
        },
        {
          name: '处罚建议', index: 3, value: data.punishmentSuggestions
        },
        {
          name: '听证', index: 4, value: data.hearing
        },
        {
          name: '处罚决定', index: 5, value: data.penaltyDecision
        },
        {
          name: '执行', index: 6, value: data.implement
        },
        {
          name: '办案完成', index: 7, value: data.caseCompletion
        }
      ]
    })
    // 稽查办案线索来源
    axios.get('/monitor/check/getSourceData').then(res => {
      const data = res.data.data[0]
      this.certCase = [
        {
          name: '线索数量',
          value: data.clueNumber,
          unit: '件'
        },
        {
          name: '平均立案时间',
          value: data.average,
          unit: '天'
        }
      ]
      const data2 = res.data.data
      this.backList = []
      for (let i = 0; i < data2.length; i++) {
        this.backList.push({
          title: data2[i].sourceName,
          num: data2[i].number,
          unit: '件'
        })
      }
    })
    // 稽查办案案件办理时间情况
    axios.get('/monitor/check/getProvincialTimeData').then(res => {
      const data = res.data.data[0]
      this.imgData.con = data.number
    })
    // 稽查办案案件主要类型分布
    axios.get('/monitor/check/getCaseTypeData').then(res => {
      const data = res.data.data
      this.pieData = []
      for (let i = 0; i < data.length; i++) {
        this.pieData.push({
          name: data[i].caseName,
          value: data[i].caseNumber,
          type: data[i].caseType
        })
      }
    })
    // 稽查办案案件地区
    axios.get('/monitor/check/getregionalDistributionData?type=' + this.pieType.name).then(res => {
      const data = res.data.data
      this.chart4 = []
      for (let i = 0; i < data.length; i++) {
        this.chart4.push({
          name: data[i].cityName,
          value: data[i].cityNumber,
          type: data[i].caseType
        })
      }
    })
  },
  data () {
    return {
      pieTypeData: {
        name: '',
        type: ''
      },
      pieType: {
        name: '',
        className: ''
      },
      backList: [
        {
          title: '投诉举报',
          num: 768,
          unit: '件'
        }, {
          title: '监督检查',
          num: 788,
          unit: '件'
        }, {
          title: '抽检',
          num: 90,
          unit: '件'
        }, {
          title: '上级机关交办',
          num: 30,
          unit: '件'
        }, {
          title: '其他部门移送',
          num: 132,
          unit: '件'
        }, {
          title: '其他',
          num: 1174,
          unit: '件'
        }
      ],
      certCase: [
        {
          name: '线索数量',
          value: 3028,
          unit: '件'
        },
        {
          name: '平均立案时间',
          value: 13,
          unit: '天'
        }
      ],
      imgData: {
        imgUrl: require('./components/img/3.png'),
        title: '全省平均办理时间',
        con: '77',
        unit: '天'
      },
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
      imgUrl: [
        require('./components/img/大框.png'),
        require('./components/img/绿色.png')
      ],
      p6case: [],
      caseHandler: '',
      graphData: [
        {
          name: '线索', index: 0, value: '10'
        },
        {
          name: '立案', index: 1, value: '24'
        },
        {
          name: '调查终结', index: 2, value: '43'
        },
        {
          name: '处罚建议', index: 3, value: '16'
        },
        {
          name: '听证', index: 4, value: '0'
        },
        {
          name: '处罚决定', index: 5, value: '43'
        },
        {
          name: '执行', index: 6, value: '56'
        },
        {
          name: '办案完成', index: 7, value: '876'
        }
      ],
      graphLink: [],
      treeData: [{
        name: '线索',
        value: 19,
        children: [
          {
            name: '立案',
            value: 24,
            children: [
              {
                name: '调查取证',
                value: 24,
                children: [
                  {
                    name: '调查终结',
                    value: 24,
                    children: [
                      {
                        name: '处罚告知',
                        value: 24,
                        children: [
                          {
                            name: '复核',
                            value: 24,
                            children: [
                              {
                                name: '听证',
                                value: 24,
                                children: [
                                  {
                                    name: '处罚决定',
                                    value: 24,
                                    children: [
                                      {
                                        name: '执行',
                                        value: 24,
                                        children: [
                                          {
                                            name: '归档',
                                            value: 24
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }],
      pieData: [{
        name: '登记',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '不正当竞争',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '消费者权益',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '产品质量',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '投机倒把',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '集中贸易',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '合同',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '拍卖',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '招投标',
        value: Mock.Random.natural(100, 1000)
      }, {
        name: '动产抵押',
        value: Mock.Random.natural(100, 1000)
      }
      // {
      //   name: '商标',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '广告',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '直销',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '传销',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '限制竞争',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '人民币',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '垄断',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '食品',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '网络',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '经纪人',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '农贸',
      //   value: Mock.Random.natural(100, 1000)
      // }, {
      //   name: '其他',
      //   value: Mock.Random.natural(100, 1000)
      // }
      ],
      pieData1: [
        {
          name: '广告',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '商标',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '产品质量',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '不正当竞争',
          value: Mock.Random.natural(1000, 1800)
        }
      ],
      numbers: [
        {
          name: '承办部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '核审部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '会审部门',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '归档部门',
          value: Mock.Random.natural(1000, 1800)
        }
      ],
      nameOnlyData: [
        {
          name: '电子用印',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '移动审批',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '视频证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '文书证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '图片证据',
          value: Mock.Random.natural(1000, 1800)
        },
        {
          name: '其他证据',
          value: Mock.Random.natural(1000, 1800)
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.AuditRight {

}
</style>
