<template>
  <div class="full">
        <container title="一企一档" v-if="JSON.stringify(p1)!=='null'" class="info full" style="position: relative">
          <font-awesome-icon class="fa" icon='times'
                                style="position: absolute;right: 30px;font-size: 30px;top: 20px; cursor: pointer;" @click="close"/>
          <table-base-info class="h-4-11" v-if="p1" :data="p1"/>
          <tab-table class="h-7-11" :data="p1"/>
        </container>
        <container-calc type="tb" :number="53" class="EntityLeft full page-style"  v-else>
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio "/>
        </template>
        <div slot="calc" class=" full-width full-height">
          <template>
              <container :title="select.name + '年报情况'" class="h-1-3">
                  <div class="w-1-2 full-height">
                      <BorderInOut class="full" :data="dataTop"/>
                  </div>
                  <div class="w-1-2 full-height">
                      <ChartsBarLine :data="barLineData" :type="['bar', 'bar','line']"
                                    :legend="['公示数', '应报数','公示率']"
                                    :colors="['green', '#4A90E2','#FE6941']"
                                    :units="['户']"
                                    :twoAxis="true"
                                    :dataIndex='[0, 0, 1]'
                                    :dimensions="['name','value', 'value3','value2']"/>
                  </div>
              </container>
              <container class="h-1-3 full-width" title="信用约束">
                  <!-- <numberPie :data='pieData'/> -->
                  <div class="w-1-5 full-height">
                    <boxList :data='expenseGoal'>></boxList>
                  </div>
                  <div class="w-4-5 full-height">
                    <ChartsBarLine :data="barGroupData" :dimensions="['name','step1','step2']"
                               :legend="['列异', '列严']"
                               :type="['bar','bar']"
                               :twoAxis="false"
                               :selectedMode='true'
                               :barWidth='40'
                               :colors="['#4A90E2', '#FFD589']" :units="['户次']"/>
                  </div>
              </container>
              <div class="h-1-3 full-width">
                  <container :title="select.name + '经营异常因素分析'" class="full-height w-1-2">
                      <chart-mountain :data="mountainData"/>
                      <!--                    <ChartPie :data="mountainData"/>-->
                  </container>
                  <container title="失信企业地区分布" class="full-height w-1-2">
                      <ChartsBarLineHorizontal :data="barHorizontalData" :type="['bar']" :legend="['']"
                                              :units="['户']"
                                              :colors="['#FFBB70']"
                                              :dimensions="['name','value']"/>
                  </container>
              </div>
          </template>
        </div>
    </container-calc>
</div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import TableBaseInfo from './componets/TableBaseInfo'
import TabTable from './componets/tabTable'
// import numberPie from './componets/numberPie'
import ChartMountain from './componets/ChartMountain'
import BorderInOut from './componets/borderInOut'
import axios from 'axios'
import Bus from '@/assets/bus.js'
import boxList from './componets/boxList'
// import Mock from 'mockjs'

export default {
  name: 'p1right',
  components: {
    BorderInOut,
    ChartMountain,
    TabTable,
    TableBaseInfo,
    // numberPie,
    boxList
  },
  computed: {
    ...mapState({
      p1: 'p1'
    })
  },
  watch: {
    p1: {
      immediate: true,
      deep: true,
      handler: function () {
        // console.log(this.p1, 'oppppp')
        // this.getTableData(this.p1)
      }
    },
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        // 市场主体年报情况
        axios.get('/monitor/main/getCreditMainReportData?mainClass=' + this.select.value).then(res => {
          const data = res.data.data
          this.dataTop[0].value = data[0].shouldReport
          this.dataTop[1].value = data[0].alreadyReport
          this.dataTop[2].value = data[0].publicityRate + '%'
        })
        // 信用约束
        axios.get('/monitor/main/getCreditConstraintData?mainClass=' + this.select.value + '&type=1').then(res => {
          const data = res.data.data[0]
          this.expenseGoal = [{
            name: '经营异常' + this.select.name,
            num: data.exceptionNum,
            unit: '户'
          }, {
            name: '严重违法失信' + this.select.name,
            num: data.dishonestyNum,
            unit: '户'
          }]
        })
        // 信用约束2
        axios.get('/monitor/main/getCreditConstraintData?mainClass=' + this.select.value + '&type=2').then(res => {
          const data = res.data.data
          // console.log(data, '信用约束2')
          this.barGroupData = []
          for (let i = 0; i < data.length; i++) {
            this.barGroupData.push({
              name: data[i].year,
              step1: data[i].exceptionNum,
              step2: data[i].dishonestyNum
            })
          }
        })
        // 经营异常因素分析
        axios.get('/monitor/main/getAbnormalFactorsData?mainClass=' + this.select.value).then(res => {
          const data = res.data.data
          this.mountainData[0].value = data[0].zelingNum
          this.mountainData[1].value = data[0].cheatNum
          this.mountainData[2].value = data[0].outContactNum
          this.mountainData[3].value = data[0].overdueNum
        })
      }
    }
  },
  props: {
    showDetail: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    axios.get('/monitor/main/getCreditClassReportData').then(res => {
      const data = res.data.data
      // console.log(data, 'ddddd')
      this.barLineData = []
      for (let i = 0; i < data.length; i++) {
        this.barLineData.push({
          name: this.typeFun(data[i].mainClass),
          value: data[i].alreadyReport,
          value2: data[i].publicityRate,
          value3: data[i].shouldReport
        })
      }
    })
    // 失信企业地区分布
    axios.get('/monitor/main/getDishonestyScatterData').then(res => {
      const data = res.data.data
      this.barHorizontalData = []
      for (let i = 0; i < data.length; i++) {
        this.barHorizontalData.push({
          name: data[i].orgName,
          value: data[i].entepriseNum
        })
      }
    })
  },
  data () {
    return {
      barGroupData: [],
      select: {
        name: '企业',
        value: 0
      },
      radioData: [
        {
          name: '主体',
          value: 0
        }, {
          name: '企业',
          value: 1
        },
        {
          name: '农专',
          value: 3
        },
        {
          name: '个体',
          value: 2
        }
      ],
      dataTop: [
        {
          name: '应报（户）',
          value: 0,
          img: require('./componets/img/nianbao/1.png')
        },
        {
          name: '已报（户）',
          value: 0,
          img: require('./componets/img/nianbao/2.png')
        },
        {
          name: '公示率',
          value: 0,
          img: require('./componets/img/nianbao/3.png')
        }
      ],
      barLineData: [],
      expenseGoal: [],
      mountainData: [
        {
          name: '未在规定责令的期限内公示有关企业信息',
          value: 0,
          color: 'linear-gradient(180deg,rgba(255,87,87,1) 0%,rgba(255,64,64,1) 100%)'
        },
        {
          name: '公示企业信息隐瞒真实信息、弄虚作假',
          value: 0,
          color: 'linear-gradient(180deg,rgba(255,245,87,1) 0%,rgba(255,188,0,1) 100%)'
        },
        {
          name: '通过登记的住所(经营场所)无法联系',
          value: 0,
          color: 'linear-gradient(180deg,rgba(87,182,255,1) 0%,rgba(0,138,255,1) 100%)'
        },
        {
          name: '未按规定期限公示年度报告',
          value: 0,
          color: 'linear-gradient(180deg,rgba(79,255,148,1) 0%,rgba(56,167,120,1) 100%)'
        }
      ],
      barHorizontalData: []
    }
  },
  methods: {
    ...mapActions([
      'setPageData'
    ]),
    close () {
      this.setPageData({
        key: 'p1',
        data: null
      })
      Bus.$emit('closeMainBox', false)
    },
    typeFun (type) {
      switch (type) {
        case '市场主体':
          return 0
        case '公有制企业':
          return 'A'
        case '外资企业':
          return 'C'
        case '私营企业':
          return 'B'
        case '个体工商户':
          return 'AA'
        case '农民合作社':
          return 'D'
        case 'A':
          return '公有制企业'
        case 'C':
          return '外资企业'
        case 'B':
          return '私营企业'
        case 'AA':
          return '个体工商户'
        case 'D':
          return '农民合作社'
        case '0':
          return '其他'
        case '':
          return '市场主体'
      }
    }
  }
}
</script>

<style scoped lang="less">
* {
    box-sizing: border-box;
}

.pd {
    padding: 10px;
}

.info {
    padding: 20px;
}

.border {
    border: 1px solid #22aec5;
}

.hall {
    background-color: #132831;
    font-size: 24px;
    line-height: 90px;
    text-indent: 50px;
    font-weight: bold;

    > span {
        background-color: #1e8db0;
        padding: 10px 15px;
        border-radius: 30px;
    }
}

.player {
    padding: 1px;
}

</style>
