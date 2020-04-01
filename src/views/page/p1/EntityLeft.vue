<template>
    <container-calc type="tb" :number="50" class="EntityLeft full-width full-height">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio float-right"/>
        </template>
        <div slot="calc" class="border full-width full-height">
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体趋势':'新增市场主体趋势'">
                <ChartBar :data="barData" :dimensions="select.value===0?['year','number']:['month','number']"/>
            </Container>
            <NumberGroup class="w-1-2 h-1-3" :data="quantityData"></NumberGroup>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体产业占比':'新增市场主体产业占比'">
                <div class="full-height w-1-3" v-for="(item,index) in pieData" :key="index">
                    <ChartPie3 :data="item" :icons="icons[index]" :max="getMax(pieData)" :color="colors[index]"/>
                </div>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体规模情况（1000万以上）':'新增市场主体规模情况（1000万以上）'">
                <ChartBarGroup :data="barGroupData" :dimensions="['year','step1','step2','step3']"
                               :legend="['1000-5000万元','5000-1亿元','1亿元以上']"
                               :colors="['#FF997D', '#4A90E2', '#FFD86D']" unit="单位：户"/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体区域分布':'新增市场主体区域分布'">
                <ChartBarSimple :data="barData2" :dimensions="['name','value']" unit="单位：户"
                                :colors="['#4A90E2','#54AFED','#22AEC5','#22C4B6','#205420','#61EADF','#F09077']"/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体生命周期分析':'市场主体生命周期分析'">
                <!-- <ChartHalfPie :data="halfPieData"/> -->
                <ChartBarGroup :data="barGroupData2[select.value]" :dimensions="['year','step1','step2','step3']"
                               :legend="['10年以下','10-20年','20年以上']"
                               :colors="['rgb(285, 232, 134)', 'rgb(72, 144, 226)', '#FF997D']" unit="单位：户"/>
            </Container>
        </div>
    </container-calc>
</template>

<script>
import ChartBar from './componets/ChartBar'
import NumberGroup from './componets/NumberGroup'
import ChartPie3 from './componets/ChartPie3'
import ChartBarGroup from './componets/ChartBarGroup'
import ChartBarSimple from './componets/ChartBarSimple'
// import ChartHalfPie from './componets/ChartHalfPie'
import Mock from 'mockjs'

export default {
  name: 'EntityLeft',
  components: {
    // ChartHalfPie,
    ChartBarSimple,
    ChartBarGroup,
    ChartPie3,
    NumberGroup,
    ChartBar
  },
  data () {
    return {
      select: {},
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
      icons: [
        require('./componets/img/png1.png'),
        require('./componets/img/png2.png'),
        require('./componets/img/png3.png')
      ],
      colors: ['#47DCF4', '#35A3FF', '#FE6941'],
      config: this.$dataAll.p1,
      barData: [],
      quantityData: [],
      pieData: [],
      barGroupData: [],
      barData2: [],
      halfPieData: [],
      barGroupData2: [[
        {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2017年'
        }, {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2018年'
        }, {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2019年'
        }
      ], [
        {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2017年'
        }, {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2018年'
        }, {
          step1: Mock.Random.natural(100, 2000),
          step2: Mock.Random.natural(100, 2000),
          step3: Mock.Random.natural(100, 2000),
          year: '2019年'
        }
      ]]
    }
  },
  mounted () {
  },
  watch: {
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        if (this.select.value === 0) {
          this.getStock()
        }
        if (this.select.value === 1) {
          this.getNewly()
        }
      }
    }
  },
  methods: {
    getData (func, data) {
      func.then(value => {
        data = value.data
      })
    },
    getStock () {
      // 市场主体趋势
      this.config[0].data().then(value => {
        this.barData = value.data
      })
      // 实体数量
      this.config[2].data().then(value => {
        this.quantityData = value.data
      })
      // 市场主体产业占比
      this.config[4].data().then(value => {
        this.pieData = value.data
      })
      // 市场主体规模情况
      this.config[6].data().then(value => {
        this.barGroupData = value.data
      })
      // 市场主体区域分布
      this.config[8].data().then(value => {
        this.barData2 = value.data
      })
      // 市场主体行业
      this.config[10].data().then(value => {
        this.halfPieData = value.data
      })
    },
    getNewly () {
      // 新增市场主体趋势
      this.config[1].data().then(value => {
        this.barData = value.data
      })
      // 新增实体数量
      this.config[3].data().then(value => {
        this.quantityData = value.data
      })
      // 新增市场主体产业占比
      this.config[5].data().then(value => {
        this.pieData = value.data
      })
      // 新增市场主体规模情况
      this.config[7].data().then(value => {
        this.barGroupData = value.data
      })
      // 新增市场主体区域分布
      this.config[9].data().then(value => {
        this.barData2 = value.data
      })
      // 新增市场主体行业
      this.config[11].data().then(value => {
        this.halfPieData = value.data
      })
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
    padding: 10px 20px;

    .radio {
        font-size: 32px;
    }

    .border {
        border: 1px solid #22aec5;
    }
}
</style>
