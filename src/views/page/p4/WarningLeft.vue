<template>
    <container-calc type="tb" :number="53" class="WarningLeft full-width full-height page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full-width full-height">
            <div class="h-2-8" title="本月预警数量">
                <NumberGroup class="full" :data="numberGroup"/>
            </div>
            <div class="h-3-8">
                <container class="full-height w-1-2" title="智能预营趋势分析">
                    <ChartsBarLine :data="lineData1" :dimensions="['name','value1','value2','value3','value4','value5']"
                                   :type="['line','line','line','line','line']"
                                   smooth
                                   :is-area="true"
                                   :two-axis="false"
                                   :colors="['#FFD86D','#FE6941','#B576ED','#6EE86D','#61EADF']"
                                   :legend="['食品','药品','特种设备','消费维权','无证无照']"/>
                </container>
                <container class="full-height w-1-2" title="各市预警分布情况">
                    <ChartsBarLine unit="单位：次" :data="barData" :dimensions="['name','value']" :legend="['预警数量']"
                                   :type="['bar']"
                                   :border-radius="false"
                                   :bar-width="40"
                                   :units="['单位：件']"
                                   :colors="['#4FCCFF']"/>
                </container>
            </div>
            <div class="h-3-8">
                <container class="full-height w-1-2" title="智能预警类型分布">
                    <div class="w-1-2 full-height">
                        <ChartsPie :is-circle="false" :data="pieData1" :show-legend="false" :is-pie="true"/>
                    </div>
                    <div class="w-1-2 full-height">
                        <ChartsHollowPie :is-circle="true" :data="pieData2" :img="pieData2Img" :imgSize="[70,70]"/>
                    </div>
                </container>
                <container class="full-height w-1-2" title="预警同比环比分析">
                    <ChartsBarLine :data="lineData2" :dimensions="['name','value1','value2']"
                                   :type="['line','line']"
                                   :two-axis="false"
                                   :colors="['#FE6941','#61EADF']"
                                   :legend="['同比','环比']"/>
                </container>
            </div>
        </div>
    </container-calc>
</template>

<script>
import NumberGroup from './components/NumberGroup'
import Mock from 'mockjs'
import ChartsBarLine from '../p0/components/ChartsBarLine'
import ChartsPie from '../p2/compontes/ChartsPie'
import ChartsHollowPie from '../p2/compontes/echartsHollowPie'

export default {
  name: 'WarningLeft',
  components: {
    ChartsHollowPie,
    ChartsPie,
    ChartsBarLine,
    NumberGroup
  },
  data () {
    return {
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
      select: {},
      numberGroup: [],
      lineData1: [],
      lineData2: [],
      barData: [],
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
      pieData1: [],
      pieData2: [],
      pieData2Img: require('./components/img/icon.png')
    }
  },
  mounted () {
    this.makeLineData()
    this.makeBarData()
    this.makeNumberGroup()
    this.makePieData()
  },
  watch: {
    select: {
      immediate: false,
      deep: false,
      handler: function () {
        this.makeLineData()
        this.makeBarData()
        this.makeNumberGroup()
        this.makePieData()
      }
    }
  },
  methods: {
    makeLineData () {
      this.lineData1 = []
      this.lineData2 = []
      for (let i = 0; i < 6; i++) {
        this.lineData1.push({
          name: '2019-0' + i,
          value1: Mock.Random.natural(500, 1300),
          value2: Mock.Random.natural(500, 1400),
          value3: Mock.Random.natural(400, 1800),
          value4: Mock.Random.natural(800, 900),
          value5: Mock.Random.natural(800, 1600)
        })
      }
      for (let i = 0; i < 12; i++) {
        this.lineData2.push({
          name: '2019-' + i,
          value1: Mock.Random.natural(100, 1800),
          value2: Mock.Random.natural(100, 1800)
        })
      }
    },
    makeBarData () {
      this.barData = []
      for (let i = 0; i < this.city.length; i++) {
        this.barData.push({
          name: this.city[i],
          value: Mock.Random.natural(0, 100)
        })
      }
    },
    makeNumberGroup () {
      this.numberGroup = [
        {
          name: '食品',
          value: 554,
          value1: 431,
          value2: 123,
          icon: require('./components/img/1.png')
        }, {
          name: '特种设备',
          value: 71,
          value1: 63,
          value2: 8,
          icon: require('./components/img/2.png')
        }, {
          name: '药品',
          value: 0,
          value1: 0,
          value2: 0,
          icon: require('./components/img/3.png')
        }, {
          name: '消费维权',
          value: 0,
          value1: 0,
          value2: 0,
          icon: require('./components/img/4.png')
        }, {
          name: '证照期限',
          value: 0,
          value1: 0,
          value2: 0,
          icon: require('./components/img/5.png')
        }
      ]
    },
    makePieData () {
      this.pieData1 = [
        {
          name: '消费维权',
          value: Mock.Random.natural(0, 100) + 100
        }, {
          name: '药品',
          value: Mock.Random.natural(0, 100) + 100
        }, {
          name: '特种设备',
          value: Mock.Random.natural(0, 100) + 100
        }, {
          name: '食品',
          value: Mock.Random.natural(0, 100) + 100
        }
      ]
      this.pieData2 = [
        {
          name: '特种设备维保',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '特种设备检验',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '特种设备故障',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '老旧特种设备',
          value: Mock.Random.natural(0, 100)
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.WarningLeft {

}
</style>
