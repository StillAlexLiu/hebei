<template>
    <div class="MonitorLeft full page-style">
        <container class="h-2-8" title="远程监控接入情况">
            <NumberGroup :data='numberData' class="full"/>
        </container>
        <div class="h-3-8">
            <container class="full-height w-1-2" title="接入类型分布">
                <ChartsPie :data="pieData" :is-pie="true" :show-value="false" :showAll='false' />
            </container>
            <container class="full-height w-1-2" title="视频在线情况">
                <div class="h-1-6 full-width">
                </div>
                <div class="h-2-3 full-width">
                  <ChartsLiquidFill :data='liquidfill'/>
                </div>
            </container>
        </div>
        <div class="h-3-8">
            <container class="full-height full-width" title="接入地区分布">
              <ChartsBarSimple :data="chart3" :dimensions="['name','value']" unit="单位：户" :barWidth='50' :barRadios='[0, 0, 0, 0]'
                :colors="['#E8AA4A','#4FD0F1','#4A90E2','#29C6FF','#91D243','#50E3C2','#82A1FD','#FFD37C','#FF9841','#FF5C2E','#FF92A2', '#FF997D', '#00B1C8']"/>
            </container>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
import NumberGroup from './components/NumberGroup'
import axios from 'axios'

export default {
  name: 'MonitorLeft',
  components: {
    NumberGroup
  },
  data () {
    return {
      numberData: [],
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
      barLineData: [],
      pieData: [],
      chart3: [],
      liquidfill: ['维持', 70.13]
    }
  },
  mounted () {
    this.makeBarData()
    this.makeBarLineData()
    axios.get('/monitor/main/getCmerasCount').then(res => {
      const data = res.data.data
      this.numberData = [
        {
          imgUrl: require('./components/img/1.png'),
          name1: '接入总量',
          num1: data.jrzs
        }, {
          imgUrl: require('./components/img/9.png'),
          name1: '餐饮',
          num1: data.cy
        }, {
          imgUrl: require('./components/img/jiu@2x.png'),
          name1: '酒店',
          num1: data.jd
        }, {
          imgUrl: require('./components/img/youer@2x.png'),
          name1: '学校',
          num1: data.xx
        }, {
          imgUrl: require('./components/img/5.png'),
          name1: '煤检卡口',
          num1: data.mjkk
        }
      ]
      this.pieData = [
        {
          name: '煤检卡口',
          value: data.mjkk
        },
        {
          name: '餐饮',
          value: data.cy
        },
        {
          name: '酒店',
          value: data.jd
        },
        {
          name: '学校',
          value: data.xx
        }
      ]
    })
    axios.get('/monitor/main/getCmerasRgion').then(res => {
      const data = res.data.data
      this.chart3 = []
      for (let i = 0; i < data.length; i++) {
        this.chart3.push({
          name: data[i].cityname,
          value: data[i].citynum
        })
      }
    })
  },
  methods: {
    makeBarData () {
      this.barData = []
      for (let i = 0; i < this.city.length; i++) {
        this.barData.push({
          name: this.city[i],
          value: Mock.Random.natural(100, 2000)
        })
      }
    },
    makeBarLineData () {
      this.barLineData = []
      for (let i = 0; i < 12; i++) {
        this.barLineData.push({
          name: '2019-' + (i + 1),
          value1: Mock.Random.natural(100, 2000)
          // value2: Mock.Random.natural(100, 2000),
          // value3: Mock.Random.natural(70, 100)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.MonitorLeft {

}
</style>
