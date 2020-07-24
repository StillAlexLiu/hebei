<template>
    <div class='oneDayDouble2'>
        <div class="cuo" @click="back">✖</div>
        <div class="full-width h-1-3">
           <container class="w-1-2 full-height" :title="'一日办注册工作开展情况'">
               <NumberGroup4 :data='numberData2' class="full-height w-1-4"></NumberGroup4>
                <div class="w-3-4 full-height">
                    <ChartsBarLine :data='chart10' :dimensions="['name','value']" :legend="['一日办主体数量']"
                               :type="['line']" :colors="['#61EADF']"  :units="['单位：户']"/>
                </div>
            </container>
            <container class="w-1-2 full-height" :title="'一日办成效'">
                <div class="w-1-4 full-height" v-for="(item, index) in expenseGoal" :key="index">
                    <onlyOneBox :data='item'></onlyOneBox>
                </div>
            </container>
        </div>
        <container class="full-width h-1-3" :title="'一日办工作开展情况'">
            <container-center-title2 title="一窗采集情况" class="full-height w-1-2">
              <NumberGroup :data='numberData' class="full-height w-1-3"></NumberGroup>
                <div class="w-2-3 full-height">
                    <comPlaintBarR :data='chart3' legend="受理数量" :unit="'单位: 件'"></comPlaintBarR>
                </div>
            </container-center-title2>
            <container-center-title2 title="一日办结情况" class="full-height w-1-2">
                <div  class="full-height w-1-3">
                  <div class="full-width h-8-10 ">
                    <backliquid  :data='liquidfill' :url='require("@/assets/images/mapTabs/p1/t1/dashboard@2x.png")' />
                  </div>
                  <p class="full-width h-2-10 oneDayName">一日办结率</p>
                </div>
                <div class="w-2-3 full-height">
                    <ChartsBarLine :data='rightLine' :dimensions="['name','value']"
                               :legend="['平均办理时长']"
                               :colors="['#55B0EE']"
                               :is-area="true"
                               :markLine='true'
                               :units="['单位:小时']"
                               :type="['line']"/>
                </div>
            </container-center-title2>
        </container>
        <div class="full-height h-1-3">
            <container-center-title2 title="各局办理情况" class="full-height w-1-2">
              <div class="full-width h-1-9">
                <RadioSimple :data="radioTab" v-model="select2" class="w-2-7 full-height radio "  style="float: right"/>
              </div>
              <div class="full-width h-8-9">
                <chartAcrossBar :data='acrossData' :max="maxNum" :legend="['市场监督管理局', '人社','税务', '公安']"  :barBorderRadius="[30, 30, 30, 30]"  :unit="select2Legend"
                  :color="['#FE6941', '#EFC578', '#738CE2', '#22C492', '#4A90E2']"></chartAcrossBar>
              </div>
            </container-center-title2>
            <container-center-title2 title="各市办理情况" class="full-height w-1-2">
                <div class="full-width h-1-9">
                  <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio "  style="float: right" />
                </div>
                <div class="full-width h-8-9">
                    <ChartsBarLine :data="barData2" :dimensions="['name','value']" :units="[barLineName]"
                               :type="['bar']"
                               :border-radius="false"
                               :bar-width="36"
                               :legend="[barLineLegend]"
                               :colors="[barColor]"/>
                </div>
            </container-center-title2>
        </div>
    </div>
</template>

<script>
import onlyOneBox from './onlyOneBox'
// import Mock from 'mockjs'
import NumberGroup from '../../p0/components/NumberGroup'
import comPlaintBarR from '../../p5/compontes/comPlaintBarR'
import NumberGroup4 from '../componets/NumberGroup4'
import echarts from 'echarts'
import axios from 'axios'
import chartAcrossBar from './ChartAcrossBar'
// import Bus from '@/assets/bus.js'
export default {
  components: {
    onlyOneBox,
    NumberGroup,
    comPlaintBarR,
    NumberGroup4,
    chartAcrossBar
  },
  methods: {
    back () {
      console.log('back')
      this.$emit('toOne', false)
    }
  },
  watch: {
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        // console.log(this.select)
        if (this.select.name === '办理量') {
          this.barLineName = '单位:件'
          this.barLineLegend = '办理量'
          axios.get('/monitor/info/apply/zzData?indexCodes=BDBLL,TSBLL,DZBLL,LFBLL,ZJKBLL,CDBLL,CZBLL,SJZBLL,QHDBLL,HSBLL,XJBLL,XTBLL,HDBLL').then(res => {
            const data = res.data.data.data
            // this.barData2 = []
            for (let i = 0; i < data.length; i++) {
              this.barData2.push({
                name: data[i].indexName.substring(0, data[i].indexName.indexOf('市')),
                value: data[i].indexValue
              })
            }
          })
        } else if (this.select.name === '办理时长') {
          this.barLineName = '单位:小时'
          this.barLineLegend = '平均时长'
          axios.get('/monitor/info/apply/zzData?indexCodes=BDBLSJ,TSBLSJ,DZBLSJ,LFBLSJ,ZJKBLSJ,CDBLSJ,CZBLSJ,SJZBLSJ,QHDBLSJ,HSBLSJ,XJBLSJ,XTBLSJ,HDBLSJ').then(res => {
            const data = res.data.data.data
            // this.barData2 = []
            for (let i = 0; i < data.length; i++) {
              this.barData2.push({
                name: data[i].indexName.substring(0, data[i].indexName.indexOf('市')),
                value: data[i].indexValue
              })
            }
          })
        }
      }
    },
    select2: {
      immediate: true,
      deep: true,
      handler: function () {
        console.log(this.select2)
        this.maxNum = this.select2.time
        this.select2Legend = this.select2.legend
        // 各局办理情况
        axios.get('/monitor/info/apply/' + this.select2.value).then(res => {
          const data = res.data.data
          // console.log(data, d)
          this.acrossData = data
        })
      }
    }
  },
  data () {
    return {
      maxNum: '',
      select2: {},
      select2Legend: '',
      radioTab: [
        {
          name: '办理量',
          value: 'orgAvg',
          time: 1500,
          legend: '单位:件'
        },
        {
          name: '办理时长',
          value: 'orgHours',
          time: 8,
          legend: '单位:小时'
        }
      ],
      barLineName: '单位：件',
      barLineLegend: '办理量',
      acrossData: {
      },
      select: {
        name: '办理量'
      },
      radioData: [
        {
          name: '办理量',
          value: 0
        },
        {
          name: '办理时长',
          value: 1
        }
      ],
      liquidfill: ['维持', 98],
      expenseGoal: [
        {
          name: '减少材料提交',
          num: '10',
          unit: '份'
        }, {
          name: '节约办理时长',
          num: '27',
          unit: '小时'
        }, {
          name: '减少办理环节',
          num: '4',
          unit: '个'
        }, {
          name: '减少办理费用',
          num: '8',
          unit: '元'
        }
      ],
      numberData: [
        {
          name: '今日受理/件',
          value: 0
        }, {
          name: '累计受理/件',
          value: 0
        }
      ],
      numberData2: [
        {
          name: '一日办主体/户',
          value: 0
        }
      ],
      chart3: {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          0,
          0,
          0,
          0,
          0
        ]
      },
      chart10: [],
      rightLine: [
      ],
      barData2: [
      ],
      barColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: 'rgba(79, 255, 148, 0.68)'
        },
        {
          offset: 1,
          color: 'rgba(79, 255, 245, 0.4)'
        }
      ])
    }
  },
  mounted () {
    const date = new Date()
    const h = date.getFullYear()
    let m = date.getMonth() + 1
    let nowm = date.getDate() - 1
    let day = date.getDate()
    if (m < 10) {
      m = '0' + m
    }
    if (nowm < 10) {
      nowm = '0' + nowm
    }
    if (day < 10) {
      day = '0' + day
    }
    const other = `${h}-${m}-${nowm} 00:00:00`
    const now = `${h}-${m}-${day} 00:00:00`
    console.log(other, now, '当前日期')
    // 一日办注册工作开展情况左屏
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=applyDone').then(res => {
      console.log(res.data.data, '一日办注册工作开展情况左屏')
      this.numberData2[0].value = res.data.data.indexValue
    })
    // 一日办注册工作开展情况右屏趋势图
    axios.get('/monitor/info/apply/qushi?&indexCode=applyDone').then(res => {
      const data = res.data.data.infoList
      this.chart10 = []
      for (let i = 0; i < data.length; i++) {
        this.chart10.push({
          name: data[i].dataTime.slice(0, 10),
          value: data[i].indexValue
        })
      }
    })
    // 一日办工作开展情况
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=DRSLL').then(res => {
      this.numberData[0].value = res.data.data.indexValue
    })
    // 一日办工作开展情况
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=entApply').then(res => {
      this.numberData[1].value = res.data.data.indexValue
    })
    // 一窗采集情况柱状图
    axios.get('/monitor/info/apply/zzData?indexCodes=entApply,GAKZSLL,FPSLSLL,CBYGDJSLL').then(res => {
      console.log(res.data.data.data, '一窗采集情况柱状图')
      const data = res.data.data.data
      this.chart3 = {
        xdata: [],
        ydata: []
      }
      for (let i = 0; i < data.length; i++) {
        this.chart3.xdata.push(data[i].indexName)
        this.chart3.ydata.push(data[i].indexValue)
      }
    })
    // 一日办结情况左侧
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=YRBJL').then(res => {
      const data = res.data.data
      this.liquidfill = [data.indexName, data.indexValue]
    })
    // 一日办结情况右屏趋势图
    axios.get('/monitor/info/apply/qushi?&indexCode=BJPJSC').then(res => {
      const data = res.data.data.infoList
      this.rightLine = []
      for (let i = 0; i < data.length; i++) {
        this.rightLine.push({
          name: data[i].dataTime.slice(0, 10),
          value: data[i].indexValue
        })
      }
    })
    // 各局办理情况
    axios.get('/monitor/info/apply/orgAvg').then(res => {
      const data = res.data.data
      this.acrossData = data
    })
  }
}
</script>

<style scoped lang="less">
 .oneDayDouble2 {
    width: 100%;
    height: 100%;
    background:rgba(35,37,57,0.75);
    position: relative;
    border:2px solid rgba(57,131,197,0.69);
    .cuo{
      position: absolute;
      right: 20px;
      top: 10px;
      font-size: 30px;
      cursor: pointer;
    }
    .oneDayName{
      font-size:26px;
      font-family:MicrosoftYaHei;
      color:rgba(255,255,255,1);
    }
 }
</style>
