<template>
    <div class="WarningRight full page-style">
        <div class="h-1-3">
            <container class="full-height w-1-2" title="预警列表">
                <!--                <tableHeader :data='tableData'></tableHeader>-->
                <CommonTable :data='tableData'
                             :headers="[ '预警类型','预警内容','企业名称','预警时间']"/>
            </container>
            <container class="full-height w-1-2" title="预警主体信息">
                <mainInfo :data='mainInfo'></mainInfo>
            </container>
        </div>
        <div class="h-1-3">
            <container class="full-height w-1-2" title="预警处理流程跟踪">
                <div class="full" style="padding: 40px">
                    <img src="./components/img/未标题1.png" alt="" class="full-width"/>
                </div>
            </container>
            <container class=" full-height w-1-2" title="预警主体风险评估">
                <div class="w-1-3 full-height">
                    <chartsPie :data='hellowPie' :is-percent="true"/>
                </div>
                <div class="w-2-3 full-height">
                    <NumberTop :data='topnum'></NumberTop>
                </div>
            </container>
        </div>
        <div class="h-1-3" title="各市本周预警处置结果">
            <container class="w-1-2 full-height" title="预警任务检查结果趋势分析">
                <ChartsBarLine :data="lineData" :dimensions="['name','value1','value2','value3','value4']"
                               :type="['line','line','line','line']"
                               :colors="['#22C5B7','#FF776D','#FFBF24','#87A0F6']"
                               :two-axis="false"
                               :legend="['接收调查','当场处罚','结果告知','未发现问题']"/>
            </container>
            <container class="w-1-2 full-height" title="发现问题检查项分析">
                <CommonTable :data='tableData2'
                             :headers="['检查内容','发现问题次数']"/>
            </container>
        </div>
    </div>
</template>

<script>
import mainInfo from './components/mainInfo'
import Mock from 'mockjs'
import chartsPie from './components/charts-pie'
import NumberTop from './components/NumberTop'

export default {
  name: 'WarningRight',
  components: {
    mainInfo,
    chartsPie,
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
        text: '是否具备开展检查条件',
        count: Mock.Random.natural(1, 100)
      }, {
        text: '经营内容与许可事项是否一致',
        count: Mock.Random.natural(1, 100)
      }, {
        text: '是否异地经营',
        count: Mock.Random.natural(1, 100)
      }, {
        text: '是否亮证亮黑经营',
        count: Mock.Random.natural(1, 100)
      }, {
        text: '证照是否在有效期范围内',
        count: Mock.Random.natural(1, 100)
      }, {
        text: '是否具备开展检查条件',
        count: Mock.Random.natural(1, 100)
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
