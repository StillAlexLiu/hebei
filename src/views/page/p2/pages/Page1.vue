<template>
    <div class="Page1 full">
      <container class="h-1-3 full-width" title="网格化监管">
        <NumberGroup :data='chart1' class="w-1-2 full-height"></NumberGroup>
        <container-center-title2 title="网格化监管趋势分析"  class="full-height w-1-2" >
          <ChartsBarLine :data="data3" :type="['line']" :dimensions="['name','value']"
            :units="['户次']" :colors='["#61EADF"]'
            :legend="['监管户次']" />
        </container-center-title2>
      </container>
      <div class="full-width h-1-3">
        <container class="w-1-2 full-height" title="监管主体类型分布">
          <ChartsPie :data="pieData" :is-pie="true" :show-value="true"/>
        </container>
        <container class="w-1-2 full-height" title="监管区域分布">
          <ChartsBarSimple :data="chart3" :dimensions="['name','value']" unit="单位：户" :barWidth='30' :barRadios='[0, 0, 0, 0]' :legend="['监管主体']"
            :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/>
        </container>
      </div>
      <container class="h-1-3 full-width" title="检查结果分析">
        <container-center-title2 title="检查合格情况"  class="full-height w-1-2" >
          <ChartsBarLine :data="data4" :type="['line']" :dimensions="['name','value']"
            :units="['单位: %']"
            :legend="['合格率']" />
        </container-center-title2>
        <container-center-title2 title="检查不合格因素分析"  class="full-height w-1-2" >
          <CommonTable :data="tableData" :headers="['检查项目','不合格次数']" :show-order="true"/>
        </container-center-title2>
      </container>
    </div>
</template>

<script>
import NumberGroup from '../compontes/NumberGroup'
import ChartsBarLine from '../../../../components/echarts/ChartsBarLine'
import Mock from 'mockjs'
import axios from 'axios'

export default {
  name: 'Page1',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    NumberGroup,
    ChartsBarLine
  },
  mounted () {
    axios.get('/monitor/gird/getMain').then(res => {
      const data = res.data.data[0]
      this.chart1[0].value = data.regionType
      this.chart1[1].value = data.yearNum
      this.chart1[2].value = data.monthNum
      this.chart1[3].value = data.weekNum
    })
    axios.get('/monitor/gird/getTrend').then(res => {
      const data = res.data.data
      this.data3 = []
      for (let i = 0; i < data.length; i++) {
        this.data3.push({
          value: data[i].totleNum,
          name: data[i].monthDate
        })
      }
    })
    axios.get('/monitor/gird/getType').then(res => {
      const data = res.data.data
      this.pieData = []
      for (let i = 0; i < data.length; i++) {
        this.pieData.push({
          value: data[i].controlNum,
          name: data[i].typeName
        })
      }
    })
    axios.get('/monitor/gird/getRegion').then(res => {
      const data = res.data.data
      this.chart3 = []
      for (let i = 0; i < data.length; i++) {
        this.chart3.push({
          value: data[i].gridNum,
          name: data[i].regionAreaName
        })
      }
    })
    axios.get('/monitor/gird/getInspect').then(res => {
      const data = res.data.data
      this.data4 = []
      for (let i = 0; i < data.length; i++) {
        this.data4.push({
          value: data[i].inspectRate,
          name: data[i].inspectMonth
        })
      }
    })
    axios.get('/monitor/gird/getAnalysis').then(res => {
      const data = res.data.data
      this.tableData = []
      for (let i = 0; i < data.length; i++) {
        this.tableData.push({
          num: data[i].factorName,
          con: data[i].factorNum
        })
      }
    })
  },
  data () {
    return {
      data3: [
        {
          name: '1月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '2月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '3月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '4月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '5月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '6月',
          value: Mock.Random.natural(10, 70)
        }
      ],
      tableData: [
        {
          con: '未经许可从事食品经营或食品添加剂活动',
          num: '33'
        }, {
          con: '食品生产经营企业未制定食品安全事故处置方案',
          num: Mock.Random.natural(10, 20)
        }, {
          con: '违反从业人员健康管理规定',
          num: Mock.Random.natural(10, 20)
        }, {
          con: '生产经营条件发生变化未按规定处理',
          num: Mock.Random.natural(10, 20)
        }, {
          con: '未按法定要求进行食品储存、运输和装卸',
          num: Mock.Random.natural(10, 20)
        }
      ],
      data4: [
        {
          name: '1月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '2月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '3月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '4月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '5月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '6月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '7月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '8月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '9月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '10月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '11月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '12月',
          value: Mock.Random.natural(10, 70)
        }
      ],
      pieData: [
        {
          name: '酒店',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '学校',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '老年聚餐点',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '三小',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      chart3: [
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
      colors: [['#FE6941', '#4B8FE2'], ['#B8E986', '#3E404D']],
      chart1: [
        {
          name: '县级网格',
          value: 4032,
          unit: '',
          img: require('../compontes/img/11.png')
        },
        {
          name: '乡镇级网格',
          value: 2108,
          unit: '',
          img: require('../compontes/img/12.png')
        },
        {
          name: '村级网格',
          value: 134,
          unit: '',
          img: require('../compontes/img/13.png')
        },
        {
          name: '入网协管员',
          value: 1940,
          unit: '',
          img: require('../compontes/img/14.png')
        }
      ],
      chart2: [[
        {
          name: '主体数量',
          value: 150,
          name1: '监管户数',
          value1: 397,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 11848,
          name1: '监管户数',
          value1: 17875,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 10680,
          name1: '监管户数',
          value1: 26605,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ], [
        {
          name: '主体数量',
          value: 129,
          name1: '监管户数',
          value1: 487,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 13568,
          name1: '监管户数',
          value1: 1457,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 14670,
          name1: '监管户数',
          value1: 21685,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ], [
        {
          name: '主体数量',
          value: 120,
          name1: '监管户数',
          value1: 337,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 18648,
          name1: '监管户数',
          value1: 14685,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 10256,
          name1: '监管户数',
          value1: 21215,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ]]
    }
  },
  watch: {
    dimension: {
      immediate: true,
      deep: true,
      handler: function () {
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
