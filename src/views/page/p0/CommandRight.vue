<template>
    <div class=" full-width full-height page-style">
        <Container class="h-1-3 full-width" title="监管任务">
            <div class="full-height w-1-2">
                <echartsTwoPie :data='twodata1'>
                    <echartsHellow :data='hellowPie2' slot="slot1"></echartsHellow>
                    <echartsHellow2 :data='hellowPie3' slot="slot2"></echartsHellow2>
                </echartsTwoPie>
            </div>
            <div class="full-height w-1-2">
                <echartsTwoPie :data='twodata2'>
                    <echartsHellow :data='hellowPie2' slot="slot1"></echartsHellow>
                    <echartsHellow2 :data='hellowPie3' slot="slot2"></echartsHellow2>
                </echartsTwoPie>
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
import echartsTwoPie from './components/echarts-twopie'
import echartsHellow from './components/echarts-hellow'
import echartsHellow2 from './components/echarts-hellow2'
import echartsTwoBarLine from './components/ecjarts-twoBarLine'
import imgNum from './components/imgNum'
import echartsWline from '../p7/components/echarts-wLine'

export default {
  name: 'CommandLeft',
  components: {
    echartsTwoPie,
    echartsHellow,
    echartsHellow2,
    echartsTwoBarLine,
    imgNum,
    echartsWline
  },
  data () {
    return {
      hellowPie2: {
        pieData: [
          {
            value: Mock.Random.natural(100, 2000),
            name: '已办结任务数'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: ''
          }
        ]
      },
      hellowPie3: {
        pieData: [
          {
            value: Mock.Random.natural(100, 2000),
            name: '逾期任务数'
          }, {
            value: Mock.Random.natural(100, 2000),
            name: ''
          }
        ]
      },
      twoData: {
        xdata: [
          '石家庄市',
          '唐山市',
          '秦皇岛市',
          '邯郸市',
          '邢台市',
          '保定市',
          '张家口市',
          '承德市',
          '沧州市',
          '廊坊市',
          '衡水市'
        ],
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
          Mock.Random.natural(100, 2000)
        ]
      },
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
      twodata1: {
        url: require('./components/img/任务总数图标.png'),
        name: '本年任务总数',
        num: Mock.Random.natural(500, 1000)
      },
      twodata2: {
        url: require('./components/img/新增人物数图标.png'),
        name: '本月新增任务数',
        num: Mock.Random.natural(500, 1000)
      }
    }
  },
  methods: {},
  watch: {}

}
</script>

<style scoped lang="less">
.CommandLeft {

}
</style>
