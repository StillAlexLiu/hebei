<template>
    <div class="WarningRight full">
        <div class="h-1-3">
            <container class="full-height w-1-2" title="预警列表">
                <tableHeader :data='tableData'></tableHeader>
            </container>
            <container class="full-height w-1-2" title="预警主体信息">
                <container-info class="full">
                    <mainInfo :data='mainInfo'></mainInfo>
                </container-info>
            </container>
        </div>
        <div class="h-1-3">
            <container class="full-height w-1-2" title="预警处理流程跟踪">
                <container-info class="full">
                    <img src="./components/img/未标题1.png" alt="" class="full-width full-height">
                </container-info>
            </container>
            <container class="full-height w-1-2" title="预警主体风险评估">
                <container-info class="full">
                    <div class="w-1-2 full-height">
                        <echartsPie :data='hellowPie'/>
                    </div>
                    <div class="w-1-2 full-height">
                        <NumberTop :data='topnum'></NumberTop>
                    </div>
                </container-info>
            </container>
        </div>
        <div class="h-1-3" title="各市本周预警处置结果">
            <container class="w-1-2 full-height" title="预警任务检查结果趋势分析">
                <ChartLine :data="lineData" :dimensions="['name','value1','value2','value3','value4']"
                           :legend="['接收调查','当场处罚','结果告知','未发现问题']"/>
            </container>
            <container class="w-1-2 full-height" title="发现问题检查项分析">
                <table-right :data="tableData2"/>
            </container>
        </div>
    </div>
</template>

<script>
import tableHeader from './components/table'
import mainInfo from './components/mainInfo'
import listNumber from './components/listNumber'
import Mock from 'mockjs'
import echartsPie from './components/echarts-pieGroup'
import NumberTop from './components/NumberTop'
import ChartLine from './components/ChartLine'
import TableRight from './components/tableRight'

export default {
  name: 'WarningRight',
  components: {
    TableRight,
    ChartLine,
    tableHeader,
    mainInfo,
    listNumber,
    echartsPie,
    NumberTop
  },
  data () {
    return {
      tableData: [
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '川菜',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        },
        {
          type: '食品预警',
          con: '未按规定着装',
          name: '龙神餐饮有限公司',
          time: '2019-06-13'
        }
      ],
      tableData2: [{
        count: Mock.Random.natural(1, 100),
        text: '是否具备开展检查条件'
      }, {
        count: Mock.Random.natural(1, 100),
        text: '经营内容与许可事项是否一致'
      }, {
        count: Mock.Random.natural(1, 100),
        text: '是否异地经营'
      }, {
        count: Mock.Random.natural(1, 100),
        text: '是否亮证亮黑经营'
      }, {
        count: Mock.Random.natural(1, 100),
        text: '证照是否在有效期范围内'
      }, {
        count: Mock.Random.natural(1, 100),
        text: '是否具备开展检查条件'
      }],
      mainInfo: {
        title: '龙神餐饮有限公司',
        address: '石家庄新华区繁安路618号2楼',
        people: '吴士良',
        time: '1999-02-01 02：36：22',
        dw: '工业区所',
        wgy: '龚宵雯,李秀萍'
      },
      lineData: [],
      hellowPie: {
        name: '主体风险化评分',
        num: Mock.Random.natural(1, 100)
      },
      topnum: Mock.Random.natural(1, 100)
    }
  },
  mounted () {
    this.makeLineData()
  },
  methods: {
    makeLineData () {
      for (let i = 6; i < 12; i++) {
        this.lineData.push({
          name: '2019-' + i,
          value1: Mock.Random.natural(100, 1800),
          value2: Mock.Random.natural(100, 1800),
          value3: Mock.Random.natural(100, 1800),
          value4: Mock.Random.natural(100, 1800)
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.WarningRight {

}
</style>
