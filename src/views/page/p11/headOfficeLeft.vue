<template>
    <div id="headOfficeLeft" class="full-width full-height">
         <Container class="h-1-3 full-width" title="监管基础">
             <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist2'/>
            </div>
            <div class="w-2-6 full-height">
                <echartsPie :data='hellowPie'/>
            </div>
            <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist1'/>
            </div>
            <div class="w-2-6 full-height">
                <echartsHollowPie :data='hellowPie2'/>
            </div>
          </Container>
          <Container class="h-1-3 full-width" title="市场准入">
              <div class="w-6-10 full-height">
                  <div class="full-height w-4-10">
                    <NumberGroup :data='numberData'></NumberGroup>
                  </div>
                  <div  class="full-height w-6-10">
                    <comPlaintBarR :data='chart3' ></comPlaintBarR>
                  </div>
              </div>
              <div class="w-4-10 full-height">
                  <bgNum :data='bglist'></bgNum>
              </div>
          </Container>
          <Container class="h-1-3 full-width" title="检验检测">
              <div class="w-1-2 full-height">
                  <div class="w-2-5 full-height">
                      <tableTab2 @active='clickActive2'></tableTab2>
                  </div>
                  <div class="w-3-5 full-height">
                      <liquidfill :data='lidata[tabdata]'/>
                  </div>
              </div>
              <div class="w-1-2  full-height">
                  <echartsWline :data='rightLine'></echartsWline>
              </div>
          </Container>
    </div>
</template>
<script>
import Mock from 'mockjs'
import charaterlist from '../p7/components/charaterlist'
import echartsHollowPie from './components/echarts-hellow'
import echartsPie from './components/echarts-pie'
import NumberGroup from './components/NumberGroup'
import comPlaintBarR from './components/comPlanBarR'
import tableTab2 from './components/tableTab2'
import liquidfill from './components/echarts-liquidfill'
import echartsWline from '../p7/components/echarts-wLine'
import bgNum from '../p11/components/bgNum'
export default {
  name: 'headOfficeLeft',
  data () {
    return {
      charaterlist1: {
        name: '直属单位',
        data: [
          {
            name: '总户数',
            num: Mock.Random.natural(100, 2000)
          }, {
            name: '新增主体',
            num: Mock.Random.natural(50, 100)
          }
        ]
      },
      charaterlist2: {
        name: '人员',
        data: [
          {
            name: '总人数',
            num: Mock.Random.natural(100, 2000)
          }, {
            name: '新增',
            num: Mock.Random.natural(50, 100)
          }
        ]
      },
      hellowPie2: {
        legend: ['计量', '特种设备', '食品', '产品质量', '其他'],
        pieData: [
          {
            value: Mock.Random.natural(100, 2000),
            name: '计量'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: '特种设备'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: '食品'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: '产品质量'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: '其他'
          }
        ]
      },
      hellowPie: {
        legend: ['雇员', '执法人员', '检查人员'],
        pieData: [
          {
            value: Mock.Random.natural(10, 70),
            name: '雇员'
          },
          {
            value: Mock.Random.natural(10, 70),
            name: '执法人员'
          },
          {
            value: Mock.Random.natural(10, 70),
            name: '检查人员'
          }
        ]
      },
      numberData: [
        {
          name: '市场主体总数',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月新增数量',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '本月注销数量',
          value: Mock.Random.natural(100, 2000)
        }
      ],
      chart3: {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      },
      lidata: [['主体数量', Mock.Random.natural(1, 100)], ['主体数量', Mock.Random.natural(1, 100)], ['主体数量', Mock.Random.natural(1, 100)]],
      tabdata: 0,
      rightLine: {
        legend: [
          '合格率'
        ],
        xdata: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        ydata: [
          [
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000),
            Mock.Random.natural(70, 1000)
          ]
        ]
      },
      bglist: [
        {
          name: '食品',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/食品.png')
        }, {
          name: '药品',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/药品.png')
        }, {
          name: '医疗器械',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/医疗器械.png')
        }, {
          name: '化妆品',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/化妆品.png')
        }, {
          name: '特种设备',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/特种设备.png')
        }, {
          name: '广告',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/广告.png')
        }, {
          name: '工业品',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/工业品.png')
        }, {
          name: '计量',
          num: Mock.Random.natural(100000, 200000),
          img: require('./components/img/计量.png')
        }
      ]
    }
  },
  components: {
    charaterlist,
    echartsHollowPie,
    echartsPie,
    NumberGroup,
    comPlaintBarR,
    tableTab2,
    liquidfill,
    echartsWline,
    bgNum
  },
  methods: {
    clickActive2 (data) {
      this.tabdata = data
    }
  }
}
</script>

<style lang="less">
    #headOfficeLeft {

    }
</style>
