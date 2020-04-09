<template>
    <div class="KeepOnRecordRight full page-style">
        <div class="h-1-3">
            <container class="w-1-2 full-height" :title="'许可临期逾期预警'">
                <tableHeader :data='tableData'></tableHeader>
            </container>
            <container class="w-1-2  full-height" :title="'许可备案办理'">
                <numberPie :data2='pieData'/>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2  full-height" :title="'许可办理结果分析'">
                <container-info class="full">
                    <ChartBarSimple2 :data="barData2" :dimensions="['name','value']" unit=""
                                     :legend="['通过率']"
                                     :colors="['rgb(52, 171, 190)']"/>
                </container-info>
            </container>
            <container class="w-1-2 full-height" :title="'审批不通过原因分析'">
                <echartsjuxing :data='juxingdata'></echartsjuxing>
            </container>
        </div>
        <div class="h-1-3">
            <!--            <container class="w-1-2 full-height" :title="'办理量'">-->
            <!--                <complaintPie :data='chart7'></complaintPie>-->
            <!--            </container>-->
            <!--            <container class="w-1-2 full-height" :title="'许可备案区域分析'">-->
            <!--                <ChartBarSimple :data="barData3" :dimensions="['name','value']" unit=""-->
            <!--                                :legend="['办理量']"-->
            <!--                                :colors="['rgb(52, 171, 190)']"/>-->
            <!--            </container>-->
            <container class="w-1-2 full-height" title="许可平均办理时间">
                <container-info class="full">
                    <Round :data="roundData"/>
                </container-info>
            </container>
            <container class="w-1-2 full-height" title="各市办理时间">
                <container-info class="full">
                    <ChartBarHorizontal :data="barData" :dimensions="['name','value']"/>
                </container-info>
            </container>
        </div>
    </div>
</template>

<script>
import tableHeader from './components/table'
import Mock from 'mockjs'
import numberPie from './components/numberPie'
import ChartBarSimple2 from './components/ChartBarSimple2'
// import ChartBarSimple from './components/ChartBarSimple'
// import complaintPie from './components/complaintPie'
import echartsjuxing from './components/echarts-juxing'
import Round from './components/Round'
import ChartBarHorizontal from './components/ChartBarHorizontal'

export default {
  name: 'KeepOnRecordRight',
  components: {
    tableHeader,
    numberPie,
    // ChartBarSimple,
    // complaintPie,
    ChartBarHorizontal,
    Round,
    echartsjuxing,
    ChartBarSimple2
  },
  data () {
    return {
      juxingdata: [
        {
          value: Mock.Random.natural(600, 1000),
          name: '不通过总数'
        },
        {
          value: Mock.Random.natural(100, 500),
          name: '材料不规范'
        },
        {
          value: Mock.Random.natural(100, 500),
          name: '虚假情况'
        },
        {
          value: Mock.Random.natural(100, 500),
          name: '不正当手段'
        },
        {
          value: Mock.Random.natural(100, 300),
          name: '其他'
        }
      ],
      chart7: [
        {
          name: '食品',
          value: Mock.Random.natural(30, 100),
          percent: ''
        },
        {
          name: '药械',
          value: Mock.Random.natural(30, 100),
          percent: ''
        },
        {
          name: '特种设备',
          value: Mock.Random.natural(30, 100),
          percent: ''
        },
        {
          name: '计量',
          value: Mock.Random.natural(30, 100),
          percent: ''
        },
        {
          name: '广告',
          value: Mock.Random.natural(30, 100),
          percent: ''
        }
      ],
      tableData: [
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        },
        {
          type: '食品经营许可证',
          con: '许可证逾期警告',
          name: '龙神餐饮有限公司',
          time: '3天'
        }
      ],
      pieData: [
        {
          num: Mock.Random.natural(1000, 2000),
          name: '办理中',
          img: require('../p1/componets/img/yueshu/1.png')
        }, {
          num: Mock.Random.natural(1000, 2000),
          name: '已办理',
          img: require('../p1/componets/img/yueshu/2.png')
        }, {
          num: Mock.Random.natural(1000, 2000),
          name: '已过期',
          img: require('../p1/componets/img/yueshu/3.png')
        }
      ],
      barData2: [
        {
          name: '食品',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '药械',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '特种设备',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '计量',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '广告',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '实验室',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '工业产量',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '化妆品',
          value: Mock.Random.natural(0, 100)
        }
      ],
      barData3: [
        {
          name: '石家庄市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '唐山市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '秦皇岛市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '邯郸市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '邢台市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '保定市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '张家口市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '承德市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '沧州市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '廊坊市',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '衡水市',
          value: Mock.Random.natural(100, 2000)
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
      roundData: {
        name: '全省',
        value: '7天'
      },
      barData: []
    }
  },
  mounted () {
    this.makeBarData()
  },
  methods: {
    makeBarData () {
      this.barData = []
      for (let i = 0; i < this.city.length; i++) {
        this.barData.push({
          name: this.city[i],
          value: Mock.Random.natural(1, 7)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.KeepOnRecordRight {

}
</style>
