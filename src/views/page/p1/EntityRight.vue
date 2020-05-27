<template>
    <div class="full-width full-height page-style">
        <container title="一企一档" v-if="JSON.stringify(p1)!=='null'" class="info full" style="position: relative">
            <font-awesome-icon class="fa" icon='times'
                               style="position: absolute;right: 30px;font-size: 30px;top: 20px" @click="close"/>
            <table-base-info class="h-4-11" v-if="p1" :data="p1"/>
            <tab-table class="h-7-11" :data="p1"/>
        </container>
        <template v-else>
            <container title="市场主体年报情况" class="h-1-3">
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
                <numberPie :data='pieData'/>
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
</template>

<script>

import { mapActions, mapState } from 'vuex'
import TableBaseInfo from './componets/TableBaseInfo'
import TabTable from './componets/tabTable'
import numberPie from './componets/numberPie'
import ChartMountain from './componets/ChartMountain'
import BorderInOut from './componets/borderInOut'

export default {
  name: 'p1right',
  components: {
    BorderInOut,
    ChartMountain,
    TabTable,
    TableBaseInfo,
    numberPie
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
    }
  },
  props: {
    showDetail: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    console.log(this.$store.state)
  },
  data () {
    return {
      dataTop: [
        {
          name: '应报（户）',
          value: 6041587,
          img: require('./componets/img/nianbao/1.png')
        },
        {
          name: '已报（户）',
          value: 2319583,
          img: require('./componets/img/nianbao/2.png')
        },
        {
          name: '公示率',
          value: '38.39%',
          img: require('./componets/img/nianbao/3.png')
        }
      ],
      barLineData: [
        {
          name: '公有制企业',
          value: 62661,
          value2: 53.44
        },
        {
          name: '私营企业',
          value: 842206,
          value2: 54.75
        },
        {
          name: '外资企业',
          value: 6497,
          value2: 66.72
        },
        {
          name: '个体户',
          value: 1352894,
          value2: 31.75
        },
        {
          name: '农专',
          value: 51927,
          value2: 45.27
        }
      ],
      pieData: {
        all: {
          name: '经营异常主体',
          value: 1025552,
          img: require('./componets/img/yueshu/0.png')
        },
        list: [
          {
            name: '移出',
            value: 458256,
            img: require('./componets/img/yueshu/1.png')
          },
          {
            name: '列异',
            value: 1003764,
            img: require('./componets/img/yueshu/2.png')
          }, {
            name: '列严',
            value: 21788,
            img: require('./componets/img/yueshu/3.png')
          }
        ]
      },
      mountainData: [
        {
          name: '未在规定责令的期限内公示有关企业信息',
          value: 1069,
          color: 'linear-gradient(180deg,rgba(79,255,148,1) 0%,rgba(56,167,120,1) 100%)'
        },
        {
          name: '公示企业信息隐瞒真实信息、弄虚作假',
          value: 5530,
          color: 'linear-gradient(180deg,rgba(87,182,255,1) 0%,rgba(0,138,255,1) 100%)'
        },
        {
          name: '通过登记的住所(经营场所)无法联系',
          value: 97748,
          color: 'linear-gradient(180deg,rgba(255,245,87,1) 0%,rgba(255,188,0,1) 100%)'
        },
        {
          name: '未按规定期限公示年度报告',
          value: 1872436,
          color: 'linear-gradient(180deg,rgba(255,87,87,1) 0%,rgba(255,64,64,1) 100%)'
        }
      ],

      barHorizontalData: [
        { name: '石家庄', value: '4315' },
        { name: '唐山', value: '2366' },
        { name: '秦皇岛', value: '1098' },
        { name: '邯郸', value: '2711' },
        { name: '邢台', value: '1736' },
        { name: '保定', value: '1942' },
        { name: '张家口', value: '1115' },
        { name: '承德', value: '649' },
        { name: '沧州', value: '2388' },
        { name: '廊坊', value: '1927' },
        { name: '衡水', value: '1512' }
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
