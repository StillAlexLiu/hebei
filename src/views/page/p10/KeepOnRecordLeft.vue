<template>
    <container-calc type="tb" :number="53" class="KeepOnRecordLeft full page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full">
            <container class="h-1-3" title="许可备案主体趋势">
                <container-info class="full-height w-1-2">
                    <ChartBarLine :data="barLineData[select.value]" :dimensions="['name','value']"
                                  :legend="['许可备案主体数量']"
                                  :colors="['#13344B']"
                    />
                </container-info>
                <div class="full-height w-1-2">
                    <number-group1 :data="data1[select.value]"/>
                </div>
            </container>
            <container class="h-1-3" title="许可备案分类统计">
                <number-group2 :data="data2[select.value]"/>
            </container>
            <div class="h-1-3">
                <container class="w-1-2 full-height" title="知识产权许可备案情况">
                    <container-info class="full">
                        <ChartLine :data="lineData1[select.value]"
                                   :dimensions="['name','value1','value2','value3','value4']"
                                   :legend="['商标','专利','马德里国际商标','PCT国际专利']"/>
                    </container-info>
                </container>
                <container class="w-1-2 full-height" title="知识产权热门区域排行榜">
                    <container-info class="full">
                        <ChartBarHorizontal :data="barData[select.value]"
                                            :dimensions="['name','value','value1','value2','value3']"/>
                    </container-info>
                </container>
            </div>
        </div>
    </container-calc>
</template>

<script>
import ChartBarLine from './components/ChartBarLine'
import Mock from 'mockjs'
import NumberGroup1 from './components/numberGroup1'
import NumberGroup2 from './components/numberGroup2'
import ChartBarHorizontal from './components/ChartBarHorizontal'
import ChartLine from './components/ChartLine'

export default {
  name: 'KeepOnRecordLeft',
  components: {
    ChartBarHorizontal,
    ChartLine,
    NumberGroup1,
    NumberGroup2,
    ChartBarLine
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
      data1: [
        [
          {
            name: '(非外国)企业',
            value: Mock.Random.natural(200, 400)
          },
          {
            name: '外企',
            value: Mock.Random.natural(100, 300)
          },
          {
            name: '个体工商户',
            value: Mock.Random.natural(10000, 30000)
          },
          {
            name: '农名专业合作社',
            value: Mock.Random.natural(10000, 40000)
          }
        ], [
          {
            name: '(非外国)企业',
            value: Mock.Random.natural(200, 400)
          }, {
            name: '外企',
            value: Mock.Random.natural(100, 300)
          }, {
            name: '个体工商户',
            value: Mock.Random.natural(10000, 30000)
          }, {
            name: '农名专业合作社',
            value: Mock.Random.natural(10000, 40000)
          }
        ], [
          {
            name: '(非外国)企业',
            value: Mock.Random.natural(200, 400)
          }, {
            name: '外企',
            value: Mock.Random.natural(100, 300)
          }, {
            name: '个体工商户',
            value: Mock.Random.natural(10000, 30000)
          }, {
            name: '农名专业合作社',
            value: Mock.Random.natural(10000, 40000)
          }
        ]
      ],
      data2: [],
      array: ['食品', '工业产品', '特种设备', '计量', '广告', '药械'],
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
      lineData1: []
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
        let item = []
        for (let i = 0; i < this.array.length; i++) {
          item.push({
            name: this.array[i],
            value1: Mock.Random.natural(10000, 40000),
            value2: Mock.Random.natural(100, 1000),
            value3: Mock.Random.natural(100, 1000)
          })
        }
        this.data2.push(item)
      }
    },
    makeLineData () {
      this.lineData1 = []
      for (let j = 0; j < 3; j++) {
        let item = []
        for (let i = 0; i < 6; i++) {
          item.push({
            name: '2019-0' + i,
            value1: Mock.Random.natural(500, 1300),
            value2: Mock.Random.natural(500, 1400),
            value3: Mock.Random.natural(400, 1800),
            value4: Mock.Random.natural(800, 900),
            value5: Mock.Random.natural(800, 1600)
          })
        }
        this.lineData1.push(item)
      }
    },
    makeBarData () {
      this.barData = []
      for (let j = 0; j < 3; j++) {
        let item = []
        for (let i = 0; i < this.city.length; i++) {
          item.push({
            name: this.city[i],
            value: Mock.Random.natural(1, 7),
            value1: Mock.Random.natural(1, 7),
            value2: Mock.Random.natural(1, 7),
            value3: Mock.Random.natural(1, 7)
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
