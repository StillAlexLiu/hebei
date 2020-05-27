<template>
    <div class=" full-width full-height page-style">
        <Container class="h-1-3 full-width" title="监管任务">
            <div class="full-height w-1-2">
                <echartsTwoPie :data='twodata1' border>
                    <ChartsPieIcon slot='slot1' :data="pieData1" :colors="['#FE6941','rgba(151, 151, 151, 0.3)']"/>
                    <ChartsPieIcon slot='slot2' :data="pieData2" :colors="['#B8E986','rgba(151, 151, 151, 0.3)']"/>
                </echartsTwoPie>
            </div>
            <div class="full-height w-1-2">
                <echartsTwoPie :data='twodata2'>
                    <ChartsPieIcon slot='slot1' :data="pieData3" :colors="['#FE6941','rgba(151, 151, 151, 0.3)']"/>
                    <ChartsPieIcon slot='slot2' :data="pieData4" :colors="['#B8E986','rgba(151, 151, 151, 0.3)']"/>
                </echartsTwoPie>
            </div>
        </Container>
        <Container class="h-1-3 full-width" title="投诉举报">
            <RightNumberGroup class="h-1-4" :data="groupData" :colors="groupDataColor"/>
            <div class="h-3-4">
                <ChartsBarLine :data='barLineData' :dimensions="['name','value','value1','value2']"
                               :two-axis="true"
                               :legend="['投诉量','举报量','已处理投诉']"
                               :border-radius="false"
                               :bar-width="40"
                               :colors="barLineColors"
                               :type="['bar','bar','line']"/>
            </div>
        </Container>
        <div class="h-1-3 full-width">
            <Container class=" full-height w-1-3" title="执法办案">
                <imgNum :data='imgdata1'></imgNum>
            </Container>
            <Container class="full-height w-2-3" title="执法办案">
                <ChartsBarLine :data='rightLine' :dimensions="['name','value']"
                               :legend="['执法办案趋势']"
                               :colors="['#55B0EE']"
                               :is-area="true"
                               :units="'数量(件)'"
                               :type="['line']"/>
            </Container>
        </div>
    </div>
</template>

<script>

import Mock from 'mockjs'
import echarts from 'echarts'
import echartsTwoPie from './components/echarts-twopie'
import imgNum from './components/imgNum'
import ChartsPieIcon from './components/ChartsPieIcon'
import RightNumberGroup from './components/RightNumberGroup'

export default {
  name: 'CommandLeft',
  components: {
    RightNumberGroup,
    ChartsPieIcon,
    echartsTwoPie,
    imgNum
  },
  data () {
    return {
      barLineColors: [
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: '#75F7FF'
          },
          {
            offset: 1,
            color: 'rgba(117, 247, 255, 0.2)'
          }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: '#00E194'
          },
          {
            offset: 1,
            color: 'rgba(0, 225, 148, 0.2)'
          }
        ]),
        '#FFD86D'
      ],
      pieData1: {
        img: require('./components/img/icon／anzhi_icon_shuangsuiji_01_default@2x.png'),
        data: [{
          name: '已办结任务数',
          value: '229025'
        }, {
          name: '',
          value: '916096'
        }]
      },
      pieData2: {
        img: require('./components/img/icon／anzhi_icon_shuangsuiji_01_default@2x(1).png'),
        data: [{
          name: '办理中任务数',
          value: '916096'
        }, {
          name: '',
          value: '429025'
        }]
      },
      pieData3: {
        img: require('./components/img/icon／anzhi_icon_shuangsuiji_01_default@2x.png'),
        data: [{
          name: '已办结任务数',
          value: '229025'
        }, {
          name: '',
          value: '916096'
        }]
      },
      pieData4: {
        img: require('./components/img/icon／anzhi_icon_shuangsuiji_01_default@2x(1).png'),
        data: [{
          name: '办理中任务数',
          value: '916096'
        }, {
          name: '',
          value: '429025'
        }]
      },
      groupData: [{
        name: '年度累计投诉量',
        value: '72530'
      }, {
        name: '年度投诉处理量',
        value: '72530'
      }, {
        name: '年度累计举报量',
        value: '72530'
      }, {
        name: '年度举报处理量',
        value: '72530'
      }],
      groupDataColor: ['#FF98A4', '#FFD86D', '#00E194', '#79DFEF'],
      barLineData: [
        {
          name: '石家庄市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '唐山市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '秦皇岛市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '邯郸市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '邢台市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '保定市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '张家口市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '承德市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '沧州市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '廊坊市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        },
        {
          name: '衡水市',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(500, 1000),
          value2: Mock.Random.natural(500, 1000)
        }],
      rightLine: [
        {
          name: '1月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '2月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '3月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '4月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '5月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '6月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '7月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '8月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '9月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '10月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '11月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '12月',
          value: Mock.Random.natural(500, 1000)
        }
      ],
      imgdata1: [{
        name: '本年度累计办结案件数',
        img: require('./components/img/icon／mhzhjg_icon_common_card_zhibiao_market_nongye2@2x(1).png'),
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '本年度累计罚没款金额',
        img: require('./components/img/icon／mhzhjg_icon_common_card_zhibiao_market_nongye2@2x.png'),
        value: Mock.Random.natural(500, 1000)
      }],
      twodata1: {
        url: require('./components/img/icon-bennian@2x.png'),
        name: '本年任务总数',
        num: Mock.Random.natural(500, 1000)
      },
      twodata2: {
        url: require('./components/img/icon-benyue@2x.png'),
        name: '本月新增任务数',
        num: Mock.Random.natural(500, 1000)
      }
    }
  }
}
</script>

<style scoped lang="less">
.CommandLeft {

}
</style>
