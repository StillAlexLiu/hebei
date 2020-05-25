<template>
    <container-calc type="tb" :number="53" class="KeepOnRecordLeft full page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full">
            <div class="h-1-3">
                <container class="full-height w-1-2" title="许可备案主体趋势">
                    <ChartsBarLine :data="barLineData[select.value]" :dimensions="['name','value']"
                                   :legend="['许可备案主体数量']"
                                   :type="['line']"
                                   :colors="['#61EADF']"
                    />
                </container>
                <container class="full-height w-1-2" title="知识产权许可备案情况">
                    <ChartsBarLine :data="areaLines[select.value]"
                                   :dimensions="['name','value','value1','value2','value3']"
                                   :legend="['商标','专利','马德里国际商标','PCT国际专利']"
                                   :type="['line','line','line','line']"
                                   :is-area="true"
                                   :two-axis="false"
                                   :colors="['#22C5B7','#FF997D','#FFD86D','#87A0F6']"/>
                </container>
            </div>
            <container class="h-1-3" title="许可备案分类统计">
                <number-group2 :data="data2[select.value]"/>
            </container>
            <div class="h-1-3">
                <container class="w-1-2 full-height" title="知识产权行业分析">
                    <ChartsPie :data="pieData[select.value]" :is-pie="true" :show-value="true"/>
                </container>
                <container class="w-1-2 full-height" title="知识产权热门区域排行榜">
                    <ChartBarHorizontal :data="barData[select.value]"
                                        :color="['#4A90E2','#5DC3FF','#91D243','#50E3C2','#B8E986','#87A0F6','#FFD589','#FE9E55','#FE6941','#FF98A4','#22AEC5']"/>
                </container>
            </div>
        </div>
    </container-calc>
</template>

<script>
import Mock from 'mockjs'
import ChartsPie from '../p2/compontes/ChartsPie'
import NumberGroup2 from './components/numberGroup2'
import ChartBarHorizontal from './components/ChartBarHorizontal'
import ChartsBarLine from '../p0/components/ChartsBarLine'

export default {
  name: 'KeepOnRecordLeft',
  components: {
    ChartsBarLine,
    ChartBarHorizontal,
    NumberGroup2,
    ChartsPie
  },
  data () {
    return {
      select: {},
      radioData: [
        {
          name: '本年',
          value: 0
        },
        {
          name: '本月',
          value: 1
        },
        {
          name: '本周',
          value: 2
        }
      ],
      barLineData: [
        [
          {
            name: '2017',
            value: Mock.Random.natural(10000, 40000)
          },
          {
            name: '2018',
            value: Mock.Random.natural(10000, 40000)
          },
          {
            name: '2019',
            value: Mock.Random.natural(10000, 40000)
          }
        ], [
          {
            name: '2017',
            value: Mock.Random.natural(10000, 40000)
          }, {
            name: '2018',
            value: Mock.Random.natural(10000, 40000)
          }, {
            name: '2019',
            value: Mock.Random.natural(10000, 40000)
          }
        ], [
          {
            name: '2017',
            value: Mock.Random.natural(10000, 40000)
          }, {
            name: '2018',
            value: Mock.Random.natural(10000, 40000)
          }, {
            name: '2019',
            value: Mock.Random.natural(10000, 40000)
          }
        ]
      ],
      areaLines: [
        [
          {
            name: '2019.12',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.1',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.2',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.3',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.4',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.5',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          }
        ], [
          {
            name: '2019.12',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.1',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.2',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.3',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.4',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.5',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          }
        ], [
          {
            name: '2019.12',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.1',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.2',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.3',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.4',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          },
          {
            name: '2020.5',
            value: Mock.Random.natural(200, 400),
            value1: Mock.Random.natural(200, 400),
            value2: Mock.Random.natural(200, 400),
            value3: Mock.Random.natural(200, 400)
          }
        ]
      ],
      data2: [],
      array: ['食品', '工业产品', '特种设备', '计量', '广告', '药械'],
      short: ['食', '工', '特', '计', '告', '械'],
      img: [
        require('./components/img/text-bg-yellow.png'),
        require('./components/img/text-bg-orange.png'),
        require('./components/img/text-bg-orange.png'),
        require('./components/img/text-bg-orange.png'),
        require('./components/img/text-bg-pink.png'),
        require('./components/img/text-bg-purple.png')
      ],
      roundData: {
        name: '全省',
        value: '7天'
      },
      city: [
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
      barData: [],
      pieData: [],
      pieArray: ['信息传输', '软件和信息技术服务业', '其他', '服务业', '制造业', '科学研究和技术服务业']
    }
  },
  mounted () {
    this.makeBarData()
    this.makeData()
    this.makeLineData()
  },
  methods: {
    makeData () {
      this.data2 = []
      for (let j = 0; j < 3; j++) {
        const item = []
        for (let i = 0; i < this.array.length; i++) {
          item.push({
            name: this.array[i],
            img: this.img[i],
            short: this.short[i],
            data: [
              {
                name: '累计有效',
                value: Mock.Random.natural(10000, 40000)
              }, {
                name: '已处理',
                value: Mock.Random.natural(100, 1000)
              }, {
                name: '待处理',
                value: Mock.Random.natural(100, 1000)
              }
            ]
          })
        }
        this.data2.push(item)
      }
    },
    makeLineData () {
      this.pieData = []
      for (let j = 0; j < 3; j++) {
        const item = []
        for (let i = 0; i < 6; i++) {
          item.push({
            name: this.pieArray[i],
            value: Mock.Random.natural(500, 1300)
          })
        }
        this.pieData.push(item)
      }
    },
    makeBarData () {
      this.barData = []
      for (let j = 0; j < 3; j++) {
        const item = []
        for (let i = 0; i < this.city.length; i++) {
          item.push({
            name: this.city[i],
            value: 15 * (i + 1) + Mock.Random.natural(0, 15)
          })
        }
        this.barData.push(item)
      }
    }
  }
}
</script>

<style scoped lang="less">
.KeepOnRecordLeft {

}
</style>
