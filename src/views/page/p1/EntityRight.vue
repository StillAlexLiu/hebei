<template>
  <div class="full">
        <container title="一企一档" v-if="JSON.stringify(p1)!=='null'" class="info full" style="position: relative">
          <font-awesome-icon class="fa" icon='times'
                                style="position: absolute;right: 30px;font-size: 30px;top: 20px" @click="close"/>
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
                      <ChartsBarLine :data="barLineData" :type="['bar','line']"
                                    :legend="['公示数','公示率']"
                                    :colors="['#4A90E2','#FE6941']"
                                    :units="['户','%']"
                                    :dimensions="['name','value','value2']"/>
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
                               :colors="['#4A90E2', '#FFD589']" :units="['户次']"/>
                  </div>
              </container>
              <div class="h-1-3 full-width">
                  <container title="经营异常因素分析" class="full-height w-1-2">
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
import Mock from 'mockjs'

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
        // this.getTableData(this.p1)
      }
    },
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        this.expenseGoal = [{
          name: '经营异常' + this.select.name,
          num: '14.03',
          unit: '万户'
        }, {
          name: '严重违法失信' + this.select.name,
          num: '2.02',
          unit: '万户'
        }]
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
    // 市场主体年报情况
    axios.get('/monitor/main/getCreditMainReportData').then(res => {
      const data = res.data.data
      this.dataTop[0].value = data[0].shouldReport
      this.dataTop[1].value = data[0].alreadyReport
      this.dataTop[2].value = data[0].publicityRate + '%'
    })
    axios.get('/monitor/main/getCreditClassReportData').then(res => {
      const data = res.data.data
      // console.log(data, 'ddddd')
      this.barLineData = []
      for (let i = 0; i < data.length; i++) {
        this.barLineData.push({
          name: this.typeFun(data[i].mainClass),
          value: data[i].alreadyReport,
          value2: data[i].publicityRate
        })
      }
    })
    // 信用约束
    axios.get('/monitor/main/getCreditConstraintData').then(res => {
      const data = res.data.data
      this.pieData.all.value = data[0].exceptionTotal
      this.pieData.list[0].value = data[0].moveNum
      this.pieData.list[1].value = data[0].exceptionNum
      this.pieData.list[2].value = data[0].dishonestyNum
    })
    // 经营异常因素分析
    axios.get('/monitor/main/getAbnormalFactorsData').then(res => {
      const data = res.data.data
      this.mountainData[0].value = data[0].zelingNum
      this.mountainData[1].value = data[0].cheatNum
      this.mountainData[2].value = data[0].outContactNum
      this.mountainData[3].value = data[0].overdueNum
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
      barGroupData: [
        {
          name: '1月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '2月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '3月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '4月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '5月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '6月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '7月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '8月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '9月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '10月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '11月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }, {
          name: '12月',
          step1: Mock.Random.natural(1000, 2000),
          step2: Mock.Random.natural(1000, 2000)
        }
      ],
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
          value: 2
        },
        {
          name: '个体',
          value: 3
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
      barLineData: [
        // {
        //   name: '公有制企业',
        //   value: 62661,
        //   value2: 53.44
        // },
        // {
        //   name: '私营企业',
        //   value: 842206,
        //   value2: 54.75
        // },
        // {
        //   name: '外资企业',
        //   value: 6497,
        //   value2: 66.72
        // },
        // {
        //   name: '个体户',
        //   value: 1352894,
        //   value2: 31.75
        // },
        // {
        //   name: '农专',
        //   value: 51927,
        //   value2: 45.27
        // }
      ],
      expenseGoal: [{
        name: '经营异常个体',
        num: '14.03',
        unit: '万户'
      }, {
        name: '严重违法失信',
        num: '2.02',
        unit: '万户'
      }],
      pieData: {
        all: {
          name: '经营异常主体',
          value: 0,
          img: require('./componets/img/yueshu/0.png')
        },
        list: [
          {
            name: '移出',
            value: 0,
            img: require('./componets/img/yueshu/1.png')
          },
          {
            name: '列异',
            value: 0,
            img: require('./componets/img/yueshu/2.png')
          }, {
            name: '列严',
            value: 0,
            img: require('./componets/img/yueshu/3.png')
          }
        ]
      },
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
      barHorizontalData: [
        // { name: '石家庄', value: '4315' },
        // { name: '唐山', value: '2366' },
        // { name: '秦皇岛', value: '1098' },
        // { name: '邯郸', value: '2711' },
        // { name: '邢台', value: '1736' },
        // { name: '保定', value: '1942' },
        // { name: '张家口', value: '1115' },
        // { name: '承德', value: '649' },
        // { name: '沧州', value: '2388' },
        // { name: '廊坊', value: '1927' },
        // { name: '衡水', value: '1512' }
      ]
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
