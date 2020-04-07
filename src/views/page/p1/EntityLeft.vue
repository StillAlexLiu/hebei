<template>
    <container-calc type="tb" :number="53" class="EntityLeft full">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-2-7 full-height radio " style="margin-left: 15px"/>
        </template>
        <div slot="calc" class=" full-width full-height">
            <Container class=" h-1-3" :title="select.value===0?'市场主体趋势':'新增市场主体趋势'">
                <div class="w-1-2 full-height">
                    <ChartBar :data="barData" :dimensions="['name','value']"
                              :unit="'户'"/>
                </div>
                <NumberGroup class="w-1-2 full-height" :data="quantityData"></NumberGroup>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体产业占比':'新增市场主体产业占比'">
                <div class="full-height w-1-3" v-for="(item,index) in pieData" :key="index">
                    <ChartPie3 :data="item" :max="getMax(pieData)"/>
                </div>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体规模情况（1000万以上）':'新增市场主体规模情况（1000万以上）'">
                <ChartBarLine :data="barGroupData" :dimensions="['year','step1','step2','step3']"
                              :legend="['1000-5000万元','5000-1亿元','1亿元以上']"
                              :type="['bar','bar','bar']"
                              :twoAxis="false"
                              :colors="['#FFD589', '#4A90E2', '#B8E986']" :units="['户']"/>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===1" :title="'新增市场主体行业TOP5'">
                <ChartHalfPie :data="halfPieData"/>
            </Container>
            <Container class="w-1-2 h-1-3" :title="select.value===0?'市场主体区域分布':'新增市场主体区域分布'">
                <ChartBarSimple :data="barData2" :dimensions="['name','value']" unit="户"
                                :colors="['#4A90E2','#5DC3FF','#91D243','#50E3C2','#B8E986','#87A0F6','#FFD589','#FE9E55','#FE6941','#FF98A4','#22AEC5']"/>
            </Container>
            <Container class="w-1-2 h-1-3" v-if="select.value===0" :title="select.value===0?'市场主体生命周期分析':'市场主体生命周期分析'">
                <ChartBarLine v-if="select.value===0" :data="barGroupData2"
                              :dimensions="['year','step1','step2','step3']"
                              :legend="['10年以下','10-20年','20年以上']"
                              :type="['bar','bar','bar']"
                              :twoAxis="false"
                              :colors="['#B8E986', '#FF98A4', '#4A90E2']" :units="['户']"/>
            </Container>
        </div>
    </container-calc>
</template>

<script>
import Mock from 'mockjs'
import ChartBar from './componets/ChartBar'
import NumberGroup from './componets/NumberGroup'
import ChartPie3 from './componets/ChartPie3'
import ChartBarSimple from './componets/ChartBarSimple'
import ChartBarLine from './componets/ChartBarLine'
import ChartHalfPie from './componets/ChartHalfPie'
import { mapState } from 'vuex'

export default {
  name: 'EntityLeft',
  components: {
    ChartHalfPie,
    ChartBarLine,
    ChartBarSimple,
    ChartPie3,
    NumberGroup,
    ChartBar
  },
  data () {
    return {
      select: {},
      entityType: '',
      radioData: [
        {
          name: '存量情况',
          value: 0
        },
        {
          name: '增量情况',
          value: 1
        }
      ],
      config: this.$dataAll.p1,
      barData: [], // 第一个柱图
      quantityData: [], // 柱图右侧
      pieData: [], // 三个饼图
      barGroupData: [], // 第二行第二个柱形图
      barData2: [],
      halfPieData: [],
      barGroupData2: [],
      stock: {
        block1: {
          chart: {
            data: [{
              name: '2015',
              value: 2514110
            }, {
              name: '2016',
              value: 3178772
            }, {
              name: '2017',
              value: 3994855
            }, {
              name: '2018',
              value: 4913867
            }, {
              name: '2019',
              value: 6101933

            }, {
              name: '2020',
              value: 6275815
            }]
          },
          info: [
            {
              'name': '总数',
              'value': 6275815,
              img: require('./componets/img/entity/entity-zong.png')
            },
            {
              'name': '公有制企业',
              'value': 119946,
              img: require('./componets/img/entity/entity-gong.png')
            },
            {
              'name': '外资企业',
              'value': 9863,
              img: require('./componets/img/entity/entity-wai.png')
            },
            {
              'name': '私营企业',
              'value': 1597234,
              img: require('./componets/img/entity/entity-si.png')
            },
            {
              'name': '个体工商户',
              'value': 4433075,
              img: require('./componets/img/entity/entity-ge.png')
            },
            {
              'name': '农民合作社',
              'value': 115576,
              img: require('./componets/img/entity/entity-nong.png')
            }]
        },
        block2: {
          chart: Mock.mock({
            'data': [
              {
                name: '第一产业',
                value: 338486,
                icon: require('./componets/img/pie/pie1.png'),
                color: '#22AEC5'
              },
              {
                name: '第二产业',
                'value': 885046,
                icon: require('./componets/img/pie/pie2.png'),
                color: '#35A3FF'
              },
              {
                name: '第三产业',
                value: 5051233,
                icon: require('./componets/img/pie/pie3.png'),
                color: '#FE6941'
              }
            ]
          })
        },
        block3: {
          chart: {
            data: [
              { 'year': '2015', 'step1': '82613', 'step2': '14805', 'step3': '9141' },
              { 'year': '2016', 'step1': '102655', 'step2': '17887', 'step3': '10738' },
              { 'year': '2017', 'step1': '124680', 'step2': '21483', 'step3': '12642' },
              { 'year': '2018', 'step1': '145582', 'step2': '25036', 'step3': '14270' },
              { 'year': '2019', 'step1': '166255', 'step2': '28305', 'step3': '15780' },
              { 'year': '2020', 'step1': '169544', 'step2': '28858', 'step3': '16025' }
            ]
          }
        },
        block4: {
          chart: {
            data: [
              { 'name': '石家庄', 'value': '1162414' },
              { 'name': '唐山', 'value': '682831' },
              { 'name': '秦皇岛', 'value': '269928' },
              { 'name': '邯郸', 'value': '836839' },
              { 'name': '邢台', 'value': '608637' },
              { 'name': '保定', 'value': '864944' },
              { 'name': '张家口', 'value': '304699' },
              { 'name': '承德', 'value': '262762' },
              { 'name': '沧州', 'value': '504944' },
              { 'name': '廊坊', 'value': '418882' },
              { 'name': '衡水', 'value': '356428' },
              { 'name': '雄安新区', 'value': '2424' }
            ]
          }
        },
        block5: {
          chart: {
            data: [
              { 'year': '2015', 'step1': '2271083', 'step2': '225294', 'step3': '17733' },
              { 'year': '2016', 'step1': '2882336', 'step2': '275685', 'step3': '20751' },
              { 'year': '2017', 'step1': '3629123', 'step2': '341407', 'step3': '24325' },
              { 'year': '2018', 'step1': '4376287', 'step2': '507951', 'step3': '29629' },
              { 'year': '2019', 'step1': '5422692', 'step2': '642970', 'step3': '36271' },
              { 'year': '2020', 'step1': '5436070', 'step2': '784325', 'step3': '55403' }
            ]
          }
        }
      },
      newly: {
        block1: {
          chart: {
            data: [{
              name: '2015',
              value: 492204
            }, {
              name: '2016',
              value: 664641
            }, {
              name: '2017',
              value: 816063
            }, {
              name: '2018',
              value: 918975
            }, {
              name: '2019',
              value: 1188032

            }, {
              name: '2020',
              value: 174923
            }]
          },
          info: [
            {
              'name': '总数',
              'value': 174923,
              img: require('./componets/img/entity/entity-zong.png')
            },
            {
              'name': '公有制企业',
              'value': 2001,
              img: require('./componets/img/entity/entity-gong.png')
            },
            {
              'name': '外资企业',
              'value': 102,
              img: require('./componets/img/entity/entity-wai.png')
            },
            {
              'name': '私营企业',
              'value': 51208,
              img: require('./componets/img/entity/entity-si.png')
            },
            {
              'name': '个体工商户',
              'value': 121110,
              img: require('./componets/img/entity/entity-ge.png')
            },
            {
              'name': '农民合作社',
              'value': 485,
              img: require('./componets/img/entity/entity-nong.png')
            }]
        },
        block2: {
          chart: Mock.mock({
            'data': [
              {
                name: '第一产业',
                value: 7771,
                icon: require('./componets/img/pie/pie1.png'),
                color: '#22AEC5'
              },
              {
                name: '第二产业',
                'value': 28407,
                icon: require('./componets/img/pie/pie2.png'),
                color: '#35A3FF'
              },
              {
                name: '第三产业',
                value: 138740,
                icon: require('./componets/img/pie/pie3.png'),
                color: '#FE6941'
              }
            ]
          })
        },
        block3: {
          chart: {
            data: [
              { 'year': '2015', 'step1': '14958', 'step2': '2314', 'step3': '1119' },
              { 'year': '2016', 'step1': '20043', 'step2': '3082', 'step3': '1598' },
              { 'year': '2017', 'step1': '22026', 'step2': '3597', 'step3': '1904' },
              { 'year': '2018', 'step1': '20902', 'step2': '3556', 'step3': '1628' },
              { 'year': '2019', 'step1': '20673', 'step2': '3268', 'step3': '1509' },
              { 'year': '2020', 'step1': '3346', 'step2': '560', 'step3': '246' }
            ]
          }
        },
        block4: {
          chart: {
            data: [
              { 'name': '石家庄', 'value': '37798' },
              { 'name': '唐山', 'value': '21996' },
              { 'name': '秦皇岛', 'value': '5753' },
              { 'name': '邯郸', 'value': '19318' },
              { 'name': '邢台', 'value': '21030' },
              { 'name': '保定', 'value': '19941' },
              { 'name': '张家口', 'value': '5703' },
              { 'name': '承德', 'value': '5247' },
              { 'name': '沧州', 'value': '12823' },
              { 'name': '廊坊', 'value': '14375' },
              { 'name': '衡水', 'value': '10776' },
              { 'name': '雄安新区', 'value': '163' }
            ]
          }
        },
        block5: {
          chart: {
            data: [
              { 'name': '交通运输、仓储和邮政业', 'value': '9426' },
              { 'name': '居民服务、修理和其他服务业', 'value': '12568' },
              { 'name': '住宿和餐饮业', 'value': '14373' },
              { 'name': '制造业', 'value': '20234' },
              { 'name': '批发和零售业', 'value': '81718' }
            ]
          }
        }
      }
    }
  },
  computed: {
    ...mapState({
      globalMapSelect: 'globalMapSelect'
    })
  },
  mounted () {
  },
  watch: {
    globalMapSelect: {
      immediate: false,
      deep: true,
      handler: function () {
        if (this.globalMapSelect && this.globalMapSelect.items.length > 0 && this.globalMapSelect.tab.name === '市场主体') {
          this.entityType = this.globalMapSelect.items[0].name
        } else {
          this.entityType = ''
        }
        this.showEntityData(this.entityType)
      }
    },
    select: {
      immediate: true,
      deep: true,
      handler: function () {
        this.dispatchSelect()
      }
    }
  },
  methods: {
    getData (func, data) {
      func.then(value => {
        data = value.data
      })
    },
    dispatchSelect () {
      if (this.select.value === 0) {
        this.getStock()
      }
      if (this.select.value === 1) {
        this.getNewly()
      }
    },
    getStock () {
      this.barData = this.stock.block1.chart.data
      this.quantityData = this.stock.block1.info
      this.pieData = this.stock.block2.chart.data
      this.barGroupData = this.stock.block3.chart.data
      this.barData2 = this.stock.block4.chart.data
      this.barGroupData2 = this.stock.block5.chart.data
    },
    getNewly () {
      this.barData = this.newly.block1.chart.data
      this.quantityData = this.newly.block1.info
      this.pieData = this.newly.block2.chart.data
      this.barGroupData = this.newly.block3.chart.data
      this.barData2 = this.newly.block4.chart.data
      this.halfPieData = this.newly.block5.chart.data
    },
    showEntityData (type) {
      console.log(type)
      if (type === '') { // 未选中则显示整体
        this.dispatchSelect()
      } else {

      }
    },
    getMax (data) { // 获取饼图的总数
      let rtn = 0
      for (let i = 0; i < data.length; i++) {
        rtn += data[i].value * 1
      }
      return rtn
    }
  }
}
</script>

<style scoped lang="less">
.EntityLeft {
    padding: 10px 0;

    .radio {
        font-size: 32px;
    }

    .border {
        border: 1px solid #22aec5;
    }
}
</style>
