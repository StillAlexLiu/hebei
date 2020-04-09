<template>
    <div class="MonitorLeft full page-style">
        <container class="h-2-8" title="远程监控接入情况">
            <NumberGroup :data='numberData' class="full"/>
        </container>
        <div class="h-3-8">
            <container class="full-height w-1-2" title="发现问题数量">
                <ChartPie class="full" :data="pieData" :isCircle="true"/>
            </container>
            <container class="full-height w-1-2" title="各市监控覆盖情况">
                <ChartBar :data="barData" :dimensions="['name','value']"/>
            </container>
        </div>
        <div class="h-3-8">
            <container class="full-height w-1-2" title="问题解决情况">
                <ChartBarLine :data="barLineData" :dimensions="['name','value1','value2','value3']"
                              :legend="['总量','已解决','解决率']"
                              :dataIndex="[0,0,1]"
                />
            </container>
            <container class="full-height w-1-2" title="各市问题解决情况">
                <ChartBarHorizontal :data="barData" :dimensions="['name','value']"/>
            </container>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
import NumberGroup from './components/NumberGroup'
import ChartBar from './components/ChartBar'
import ChartBarLine from './components/ChartBarLine'
import ChartBarHorizontal from './components/ChartBarHorizontal'
import ChartPie from './components/ChartPie'

export default {
  name: 'MonitorLeft',
  components: {
    ChartPie,
    ChartBarHorizontal,
    ChartBarLine,
    ChartBar,
    NumberGroup
  },
  data () {
    return {
      numberData: [
        {
          imgUrl: require('./components/img/1.png'),
          name1: '接入总量',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/2.png'),
          name1: '学校食堂',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/3.png'),
          name1: '中央厨房',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/4.png'),
          name1: '老年助餐点',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/5.png'),
          name1: '煤检卡口',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/6.png'),
          name1: '桶（盒）饭 生产企业',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/7.png'),
          name1: '中型以上 餐饮企业',
          num1: Mock.Random.natural(100, 2000)
        }, {
          imgUrl: require('./components/img/8.png'),
          name1: '药店',
          num1: Mock.Random.natural(100, 2000)
        }
      ],
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
      pieData: [
        {
          'name': '陌生人进入',
          'value': Mock.Random.natural(1600, 1800)
        },
        {
          'name': '发现动物',
          'value': Mock.Random.natural(1600, 1800)
        },
        {
          'name': '行为不规范',
          'value': Mock.Random.natural(1600, 1800)
        }
      ]
    }
  },
  mounted () {
    this.makeBarData()
    this.makeBarLineData()
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
          value1: Mock.Random.natural(100, 2000),
          value2: Mock.Random.natural(100, 2000),
          value3: Mock.Random.natural(70, 100)
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
