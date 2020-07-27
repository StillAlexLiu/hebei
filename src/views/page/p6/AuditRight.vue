<template>
    <div class="AuditRight full page-style">
        <container title="本年案件处理流程跟踪" class="h-2-8 full-width">
            <ChartTree :data="treeData" v-if="false"/>
            <ChartsGraph :data="graphData" :link="graphData" @caseType="caseBox"/>
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
                 <chartPie :data="pieData" :legend-position="'left'"  @pieCli='pieCli' :show-all="true" style="width:80%;float:left"/>
                 <div class="w-1-5 full-height">
                   <div class="text">
                     <p>查处案件/件</p>
                     <span>{{pieRight.caseNumber}}</span>
                   </div>
                   <div class="text">
                     <p>案值/万元</p>
                     <span>{{pieRight.caseVal}}</span>
                   </div>
                   <div class="text">
                     <p>罚没款/万元</p>
                     <span>{{pieRight.punIsham}}</span>
                   </div>
                   <div class="text">
                     <p>移送公安/件</p>
                     <span>{{pieRight.gaslNum}}</span>
                   </div>
                 </div>
            </container>
            <container class="w-1-2 full-height" :title="pieType.caseName + '案件地区分布'" style="position: relative;">
                    <div class="areaType">
                      <p class="w-1-2" v-for="(item) in areaType" :key="item.name" @click="changeType(item)" :class="{active: activeName === item.name}">
                        {{item.name}}</p>
                    </div>
                 <ChartsBarSimple :data="chart4" :dimensions="['name','value']" unit="件" :barWidth='30' :barRadios='[0, 0, 0, 0]' :sort='true'
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
import chartPie from './components/ChartsPie'
import axios from 'axios'
import Bus from '@/assets/bus.js'

export default {
  name: 'AuditRight',
  components: {
    ChartsGraph,
    backList,
    // NameOnly,
    // NumberGroup,
    ChartTree,
    ImageData,
    OtherBox,
    chartPie
  },
  computed: {
  },
  methods: {
    pieCli (data) {
      if (this.pieType.name === data.data.type) {
        this.pieType = {
          name: '',
          caseName: ''
        }
        this.activeType = 1
        this.activeName = '案发地'
        this.getType()
        this.getData()
      } else {
        if (data.data.caseNumber === 'null') {
          data.data.caseNumber = 0
        }
        if (data.data.caseVal === 'null') {
          data.data.caseVal = 0
        }
        if (data.data.punIsham === 'null') {
          data.data.punIsham = 0
        }
        if (data.data.gaslNum === 'null') {
          data.data.gaslNum = 0
        }
        this.pieRight = {
          caseNumber: data.data.caseNumber,
          caseVal: data.data.caseVal,
          punIsham: data.data.punIsham,
          gaslNum: data.data.gaslNum
        }
        this.pieType = {
          name: data.data.type,
          caseName: data.data.name
        }
        this.getType()
      }
    },
    getData () {
      this.$get('/monitor/check/getCaseTypeData').then(res => {
        this.pieData = []
        this.pieRight = {
          caseNumber: 0,
          caseVal: 0,
          gaslNum: 0,
          punIsham: 0
        }
        // console.log(res.data)
        for (var i in this.pieRight) {
          if (this.pieRight[i] === 'null') {
            this.pieRight[i] = '0'
          }
        }
        // console.log(res.data)
        for (var iv in this.pieRight) {
          if (this.pieRight[iv] === 'null') {
            this.pieRight[iv] = '0'
          }
        }
        // console.log(res.data)
        for (var ia in this.pieRight) {
          if (this.pieRight[ia] === 'null') {
            this.pieRight[ia] = '0'
          }
        }
        for (var j = 0; j < res.data.length; j++) {
          this.pieData.push({
            name: res.data[j].caseName,
            value: res.data[j].caseNumber,
            type: res.data[j].caseType,
            caseNumber: res.data[j].caseNumber,
            caseVal: res.data[j].caseVal,
            punIsham: res.data[j].punIsham,
            gaslNum: res.data[j].gaslNum
          })
          if (res.data[j].gaslNum === 'null') {
            res.data[j].gaslNum = 0
          }
          this.pieRight.caseNumber += Number(res.data[j].caseNumber)
          this.pieRight.caseVal += Number(res.data[j].caseVal)
          this.pieRight.punIsham += Number(res.data[j].punIsham)
          this.pieRight.gaslNum += Number(res.data[j].gaslNum)
        }
      })
    },
    changeType (item) {
      this.activeName = item.name
      this.activeType = item.value
      this.getType()
    },
    getType () {
      axios.get('/monitor/check/getregionalDistributionData?type=' + this.pieType.name + '&regionType=' + this.activeType).then(res => {
        const data = res.data.data
        this.chart4 = [
        {
          name: '省级',
          value: 0
        }, {
          name: '唐山市',
          value: 0
        }, {
          name: '石家庄市',
          value: 0
        }, {
          name: '保定市',
          value: 0
        }, {
          name: '辛集市',
          value: 0
        }, {
          name: '定州市',
          value: 0
        }, {
          name: '秦皇岛市',
          value: 0
        }, {
          name: '廊坊市',
          value: 0
        }, {
          name: '承德市',
          value: 0
        }, {
          name: '沧州市',
          value: 0
        }, {
          name: '邢台市',
          value: 0
        }, {
          name: '衡水市',
          value: 0
        }, {
          name: '邯郸市',
          value: 0
        }, {
          name: '张家口市',
          value: 0
        }
      ]
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < this.chart4.length; j++) {
            if (data[i].cityName === this.chart4[j].name) {
              this.chart4[j].value = data[i].cityNumber
            }
          }
        }
        // console.log(this.chart5)
        this.chart4.sort(this.sortId)
      })
    },
    sortId (a, b) {
      return b.value - a.value
    },
    sortNum (a, b) {
      return b.num - a.num
    },
    caseBox (data) {
      Bus.$emit('case', {
        type: data.data.type,
        name: data.name
      })
    }
  },
  mounted () {
    this.getData()
    // 稽查办案案件处理流程跟踪
    axios.get('/monitor/check/getCaseProcessData').then(res => {
      const data = res.data.data[0]
      this.graphData = [
        {
          name: '线索', index: 0, value: data.clue, type: ''
        },
        {
          name: '立案', index: 1, value: data.fileCase, type: 'getAlertRegister'
        },
        {
          name: '调查终结', index: 2, value: data.endOfInvestigation, type: 'getAlertExamine'
        },
        {
          name: '处罚建议', index: 3, value: data.punishmentSuggestions, type: 'getAlertAdvise'
        },
        {
          name: '听证', index: 4, value: data.hearing, type: 'getAlertHearing'
        },
        {
          name: '处罚决定', index: 5, value: data.penaltyDecision, type: 'getAlertPunish'
        },
        {
          name: '执行', index: 6, value: data.implement, type: 'getAlertExecute'
        },
        {
          name: '办案完成', index: 7, value: data.caseCompletion, type: 'getAlertFinish'
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
      this.backList.sort(this.sortNum)
    })
    // 稽查办案案件办理时间情况
    axios.get('/monitor/check/getProvincialTimeData').then(res => {
      const data = res.data.data[0]
      this.imgData.con = data.number
    })

    // 稽查办案案件地区
    this.getType()
  },
  data () {
    return {
      pieRight: {
        caseNumber: 0,
        caseVal: 0,
        gaslNum: 0,
        punIsham: 0
      },
      pieTypeData: {
        name: '',
        type: ''
      },
      areaType: [
        {
          name: '案发地',
          value: 1
        }, {
          name: '办案机关',
          value: 2
        }
      ],
      activeName: '案发地',
      activeType: '1',
      pieType: {
        name: '',
        caseName: ''
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
      chart4: [],
      chart5: [
        {
          name: '省级',
          value: 0
        }, {
          name: '唐山市',
          value: 0
        }, {
          name: '石家庄市',
          value: 0
        }, {
          name: '保定市',
          value: 0
        }, {
          name: '辛集市',
          value: 0
        }, {
          name: '定州市',
          value: 0
        }, {
          name: '秦皇岛市',
          value: 0
        }, {
          name: '廊坊市',
          value: 0
        }, {
          name: '承德市',
          value: 0
        }, {
          name: '沧州市',
          value: 0
        }, {
          name: '邢台市',
          value: 0
        }, {
          name: '衡水市',
          value: 0
        }, {
          name: '邯郸市',
          value: 0
        }, {
          name: '张家口市',
          value: 0
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
      pieData: [],
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
.text{
  height: 23.5%;
  margin-top: 1%;
  font-size: 24px;
  text-align: center;
  background-size: 100% 100%;
  // background-image: ;
  background:url('./components/img/text.png') no-repeat;
  p{
    margin: 0;
    line-height: 50px;
  }
  span{
    color: #79DFEF;
    font-size: 42px;
    font-family:LESLIE-Regular,LESLIE;
  }
}
.areaType{
  position: absolute;
  right: 5%;
  top: 6%;
  font-size: 22px;
  width: 30%;
  z-index: 999;
  p{
    background: url('./components/img/ac1.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .active{
    background: url('./components/img/ac2.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
