<template>
    <div class="Page4 full">
        <div class="h-1-3">
            <container class="w-1-2 full-height" :title="TypeName.name + '监管'">
                <NumberElevator :data='chart4' :type="TypeName.name"></NumberElevator>
            </container>
            <container class="w-1-2 full-height" :title="'全省' + TypeName.name + '增长趋势'">
                <ChartsBarLine :data='chart5' :dimensions="['name','value', 'value1']"
                               :type="['line', 'bar']"
                               :colors="['#61EADF', 'rgba(50,128,223, 0.6)']"
                               :units="['单位：台']"
                               :right="'12%'"
                               :legend="[TypeName.name + '存量数量', TypeName.name + '增量数量']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" :title="TypeName.name + '主要类型分布'">
                <ChartsPie :data='hellowPie2' :showLegend='true' :showValue='true' is-pie/>
            </container>
            <container class="w-1-2 full-height" :title="TypeName.name + '各地区分布'">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']" :type="['bar']"
                               :colors="[barColor]"
                               :border-radius="true"
                               :units="['单位：台']"
                               :legend="[TypeName.name + '数量']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" :title="TypeName.name + '主要行业分析'">
              <ChartsScatter :dimensions="['name','value','size']" :data="scatterData" :base-size="1"
                           :unit="'个'"
                           :size="'4e2'"
                           :showX="false"  :showSize='true'
                           :colors="['#50E3C2','#FF9177','#00B1FA','#8A7CEF','#FFE17D','#00E138','#FF7B83']"/>
              <!-- <ChartsGraph :color="['#FFBF24','#FE6941','#55B0EE','#8A7CEF','#25DD54','#5FE7DC', '#29B2F4', '#8B7AF5', '#FF9177', '#2DACE9']" :data='scatterData'></ChartsGraph> -->
              <!-- <ChartsPie :double-pie="true" :data="pieData4" :center-data="pieCenterData" :showLegend='true'
                           :color="['#FFBF24','#FE6941','#55B0EE','#8A7CEF','#25DD54','#5FE7DC']" :show-value="true"/> -->
            </container>
            <container class="w-1-2 full-height" :title="TypeName.name + '场所分析'">
                <ChartsPie :data="pieData" :is-pie="false" :show-value="true"/>
            </container>
        </div>
    </div>
</template>
<script>
import NumberElevator from '../compontes/Number-elevator'
import Mock from 'mockjs'
import echarts from 'echarts'
// import InfoCard from '../compontes/InfoCard'
// import ChartsPiePercentMode from '../compontes/ChartsPiePercentMode'
import chartsPie from '../compontes/echartsPie'
// import ChartMountain from '../../p1/componets/ChartMountain'
import axios from 'axios'
export default {
  name: 'Page4',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    // ChartsPiePercentMode,
    // InfoCard,
    chartsPie,
    NumberElevator
    // ChartMountain
  },
  computed: {
    TabType () {
      return this.$store.state.facilityTab
    }
  },
  watch: {
    TabType (data) {
      this.TypeName = data
      this.typeTab()
    }
  },
  mounted () {
    this.typeTab()
  },
  methods: {
    typeTab () {
      // 特种设备监控总数
      this.chart4[0].value = ''
      this.chart4[1].value = ''
      this.chart5 = []
      this.hellowPie2 = []
      this.chart3[0].data = []
      this.pieData4 = []
      this.pieData = []
      this.pieCenterData[0].value = ''
      this.pieCenterData[1].value = ''
      axios.get('/monitor/equpMent/getTotalSum?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        console.log(data, this.TypeName, 'kkklk')
        this.chart4[0].value = data.totleSum
        if (this.TypeName.name === '特种设备') {
          this.chart4[1].value = data.enterpriseTotal
        } else {
          this.chart4[1].value = data.totleUse
        }
      })
      // 特种设备增长
      // 线图
      axios.get('/monitor/equpMent/getSpread?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        // 柱图
        axios.get('/monitor/equpMent/getStock?equpType=' + this.TypeName.type).then(res2 => {
          const data2 = res2.data.data
          this.chart5 = []
          for (let i = 0; i < data.length; i++) {
            this.chart5.push({
              name: data[i].year,
              value: data[i].equpNum,
              value1: data2[i].equpNum
            })
          }
        })
      })
      // 特种设备类型分布
      axios.get('/monitor/equpMent/getMold?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        // console.log(data, '特种设备类型分布')
        this.hellowPie2 = []
        for (let i = 0; i < data.length; i++) {
          this.hellowPie2.push({
            name: data[i].equpName,
            value: data[i].equpNum
          })
        }
      })
      // 特种设备地区分布
      axios.get('/monitor/equpMent/getRegions?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        this.chart3[0].data = []
        for (let i = 0; i < data.length; i++) {
          this.chart3[0].data.push({
            name: data[i].areaName,
            value: data[i].equpAreaNum
          })
        }
      })
      // 特种设备行业分布
      axios.get('/monitor/equpMent/getMajor?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        // console.log(data, '特种设备行业分布')
        this.pieData4 = []
        this.scatterData = []
        let count = 0
        for (let i = 0; i < data.length; i++) {
          if (data[i].industryName !== '制造业') {
            this.pieData4.push({
              name: data[i].industryName,
              value: data[i].industryNum
            })
            count += data[i].industryNum
          } else {
            // console.log(data[i], '制造业')
            this.pieCenterData[0].value = data[i].industryNum
          }
          this.scatterData.push({
            name: data[i].industryName,
            value: data[i].industryNum
          })
        }
        // console.log(count)
        this.pieCenterData[1].value = count
      })
      // 特种设备场所分析
      axios.get('/monitor/equpMent/getSecurity?equpType=' + this.TypeName.type).then(res => {
        const data = res.data.data
        this.pieData = []
        for (let i = 0; i < data.length; i++) {
          this.pieData.push({
            name: data[i].typeName,
            value: data[i].riskNum
          })
        }
      })
    },
    typeName (name) {
      switch (name) {
        case 1:
          return '锅炉'
        case 3:
          return '电梯'
        case 2:
          return '压力容器'
        case 8:
          return '压力管道'
        case 4:
          return '起重机械'
        case 9:
          return '客运索道'
        case 6:
          return '大型游乐'
        case 5:
          return '场（厂）内专用机动车辆'
      }
    }
  },
  data: () => {
    return {
      pieCenterData: [
        {
          name: '制造业',
          value: Mock.Random.natural(500, 1300),
          selected: true
        }, {
          name: '非制造业',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      pieData4: [
        {
          name: '国家级',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '省级',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '地市级',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '区县级',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      TypeName: {
        name: '特种设备',
        type: ''
      },
      scatterData: [{
        name: '石油',
        value: 3061
      }, {
        name: '电力',
        value: 2163
        // size: Mock.Random.natural(10, 200)
      }, {
        name: '宾馆',
        value: 3963
      }, {
        name: '食品生产',
        value: 5963
      }, {
        name: '化工',
        value: 2963
      }, {
        name: '化肥',
        value: 1163
      }, {
        name: '住宅小区及公园',
        value: 8063
      }, {
        name: '机械制造',
        value: 5863
      }, {
        name: '制药',
        value: 3803
      }, {
        name: '商场',
        value: 2963
      }, {
        name: '景区',
        value: 5763
      }],
      hellowPie: {
        name: ' ',
        num: 8,
        sum: 2380
      },
      mountainData: [
        {
          name: '重大风险',
          value: 980,
          color: 'linear-gradient(180deg,rgba(255,87,87,1) 0%,rgba(255,64,64,1) 100%)'
        },
        {
          name: '较大风险',
          value: 1020,
          color: 'linear-gradient(180deg,rgba(255,245,87,1) 0%,rgba(255,188,0,1) 100%)'
        },
        {
          name: '一般风险',
          value: 2046,
          color: 'linear-gradient(180deg,rgba(79,255,148,1) 0%,rgba(56,167,120,1) 100%)'
        },
        {
          name: '低风险',
          value: 3868,
          color: 'linear-gradient(180deg,rgba(87,182,255,1) 0%,rgba(0,138,255,1) 100%)'
        }
      ],
      barColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: '#32C7E1'
        },
        {
          offset: 1,
          color: 'rgba(50,198,223,.40)'
        }
      ]),
      chart4: [{
        name: '全省特种设备总量',
        value: 31106
      }, {
        name: '特种设备使用单位数量',
        value: 38106
      }],
      chart5: [
        {
          name: '2010',
          value: '11'
        },
        {
          name: '2011',
          value: '25'
        },
        {
          name: '2012',
          value: '30'
        },
        {
          name: '2013',
          value: '40'
        },
        {
          name: '2014',
          value: '41'
        },
        {
          name: '2015',
          value: '54'
        },
        {
          name: '2016',
          value: '56'
        },
        {
          name: '2017',
          value: '60'
        },
        {
          name: '2018',
          value: '61'
        },
        {
          name: '2019',
          value: '70'
        },
        {
          name: '2020',
          value: '73'
        }],
      chart6: {
        title: '市场主体行业分布',
        img: require('./../compontes/img/qr.png'),
        data: [
          {
            name: '衡水市',
            value: 6061
          },
          {
            name: '廊坊市',
            value: 6963
          },
          {
            name: '沧州市',
            value: 6850
          },
          {
            name: '承德市',
            value: 6177
          },
          {
            name: '张家口市',
            value: 6940
          },
          {
            name: '保定市',
            value: 6194
          },
          {
            name: '邢台市',
            value: 6327
          },
          {
            name: '邯郸市',
            value: 6303
          },
          {
            name: '秦皇岛市',
            value: 6660
          },
          {
            name: '唐山市',
            value: 6630
          },
          {
            name: '石家庄市',
            value: 6219
          }
        ]
      },
      chart3: [{
        data: [
          {
            name: '石家庄市',
            value: '23'
          },
          {
            name: '唐山市',
            value: '16'
          },
          {
            name: '秦皇岛市',
            value: '13'
          },
          {
            name: '邯郸市',
            value: '34'
          },
          {
            name: '邢台市',
            value: '13'
          },
          {
            name: '保定市',
            value: '42'
          },
          {
            name: '张家口市',
            value: '35'
          },
          {
            name: '承德市',
            value: '32'
          },
          {
            name: '沧州市',
            value: '21'
          },
          {
            name: '廊坊市',
            value: '12'
          },
          {
            name: '衡水市',
            value: '45'
          }
        ]
      }, {
        data: [
          {
            name: '石家庄市',
            value: '23'
          },
          {
            name: '唐山市',
            value: '16'
          },
          {
            name: '秦皇岛市',
            value: '13'
          },
          {
            name: '邯郸市',
            value: '34'
          },
          {
            name: '邢台市',
            value: '13'
          },
          {
            name: '保定市',
            value: '42'
          },
          {
            name: '张家口市',
            value: '35'
          },
          {
            name: '承德市',
            value: '32'
          },
          {
            name: '沧州市',
            value: '21'
          },
          {
            name: '廊坊市',
            value: '12'
          },
          {
            name: '衡水市',
            value: '45'
          }
        ]
      }, {
        data: [
          {
            name: '石家庄市',
            value: '23'
          },
          {
            name: '唐山市',
            value: '16'
          },
          {
            name: '秦皇岛市',
            value: '13'
          },
          {
            name: '邯郸市',
            value: '34'
          },
          {
            name: '邢台市',
            value: '13'
          },
          {
            name: '保定市',
            value: '42'
          },
          {
            name: '张家口市',
            value: '35'
          },
          {
            name: '承德市',
            value: '32'
          },
          {
            name: '沧州市',
            value: '21'
          },
          {
            name: '廊坊市',
            value: '12'
          },
          {
            name: '衡水市',
            value: '45'
          }
        ]
      }],
      hellowPie2: [
        {
          value: Mock.Random.natural(30, 200),
          name: '电梯'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '锅炉'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '压力容器'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '压力管道'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '大型游乐设施'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '客运索道'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '起重机械'
        }, {
          value: Mock.Random.natural(30, 200),
          name: '场(厂)内专用机动车辆'
        }
      ],
      pieData: [
        {
          name: '学校',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '机场车站',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '医院',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '宾馆饭店',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '商场',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '住宅',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '其他',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '娱乐',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '企业',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      pieDataPercent: {
        name: '',
        value: '2380',
        percent: '5',
        unit: '件'
      }
    }
  }
}
</script>
<style scoped lang="less">
.Page4 {

}
</style>
