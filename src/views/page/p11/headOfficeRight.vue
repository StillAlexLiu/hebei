<template>
    <div id="headOfficeRight" class="full-width full-height">
         <Container class="h-1-3 full-width" title="四个安全">
             <div class="full-height w-6-10">
                 <div class="full-height w-3-10">
                    <tableTab @active='clickActive2'></tableTab>
                 </div>
                 <div class="full-height w-7-10">
                   <EffectivenessLine :data='chart9[tabData2]'></EffectivenessLine>
                 </div>
             </div>
             <div class="full-height w-4-10">
                 <rightList :data='rightList2'></rightList>
             </div>
          </Container>
          <Container class="h-1-3 full-width" title="投诉举报">
              <echartsTwoBarLine :data='twoData'></echartsTwoBarLine>
          </Container>
          <Container class="h-1-3 full-width" title="执法办案">
              <div class="full-height w-2-7">
                    <imgNum :data='imgdata1'></imgNum>
                    <imgNum :data='imgdata2'></imgNum>
                </div>
                <div class="full-height w-5-7">
                    <echartsWline :data='rightLine'></echartsWline>
                </div>
          </Container>
    </div>
</template>
<script>
import Mock from 'mockjs'
import imgNum from '../p0/components/imgNum'
import echartsWline from '../p7/components/echarts-wLine'
import echartsTwoBarLine from '../p0/components/ecjarts-twoBarLine'
import tableTab from './components/tableTab'
import EffectivenessLine from './components/EffectivenessLine'
import rightList from './components/rightList'
export default {
  name: 'headOfficeRight',
  data () {
    return {
      rightLine: {
        legend: [
          '执法办案趋势'
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
      imgdata1: {
        name: '本年度累计办结案件数',
        num: Mock.Random.natural(500, 1000)
      },
      imgdata2: {
        name: '本年度累计罚没款金额',
        num: Mock.Random.natural(500, 1000)
      },
      twoData: {
        xdata: ['1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'],
        bardata1: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ],
        bardata2: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ],
        linedata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      },
      tabData2: 0,
      chart9: [{
        xdata: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }, {
        xdata: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      }],
      rightList2: {
        lest1: [
          {
            img: require('./components/img/已整改.png'),
            name: '已整改',
            num: Mock.Random.natural(100, 300)
          }, {
            img: require('./components/img/未整改.png'),
            name: '未整改',
            num: Mock.Random.natural(0, 50)
          }
        ],
        lest2: [
          {
            img: require('./components/img/死亡人员背景框.png'),
            name: '死亡人员',
            num: Mock.Random.natural(0, 10) + '人'
          }, {
            img: require('./components/img/死亡人员背景框.png'),
            name: '受伤人员',
            num: Mock.Random.natural(0, 10) + '人'
          }, {
            img: require('./components/img/死亡人员背景框.png'),
            name: '受损金额',
            num: Mock.Random.natural(600, 800) + '万'
          }
        ]
      }
    }
  },
  components: {
    imgNum,
    echartsWline,
    echartsTwoBarLine,
    tableTab,
    EffectivenessLine,
    rightList
  },
  methods: {
    clickActive2 (data) {
      this.tabData2 = data
    }
  }
}
</script>

<style lang="less">
    #headOfficeRight{

    }
</style>
