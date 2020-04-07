<template>
    <div class="full-width full-height">
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
                    <ChartBarLine :data="barLineData" :type="['bar','line']"
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
                </container>
                <container title="失信企业地区分布" class="full-height w-1-2">
                    <ChartBarLineHorizontal :data="barHorizontalData" :type="['bar']" :legend="['']"
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
import ChartBarLine from './componets/ChartBarLine'
import ChartBarLineHorizontal from './componets/ChartBarLineHorizontal'

export default {
  name: 'p1right',
  components: {
    ChartBarLineHorizontal,
    ChartBarLine,
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
          value: 6097056,
          img: require('./componets/img/nianbao/1.png')
        },
        {
          name: '已报（户）',
          value: 1346339,
          img: require('./componets/img/nianbao/2.png')
        },
        {
          name: '公示率',
          value: '22.08%',
          img: require('./componets/img/nianbao/3.png')
        }
      ],
      barLineData: [
        {
          'name': '公有制企业',
          'value': 29917,
          'value2': 25.36
        },
        {
          'name': '私营企业',
          'value': 517733,
          'value2': 33.47
        },
        {
          'name': '外资企业',
          'value': 3844,
          'value2': 39.38
        },
        {
          'name': '个体户',
          'value': 766568,
          'value2': 17.80
        },
        {
          'name': '农专',
          'value': 27198,
          'value2': 23.63
        }
      ],
      pieData: {
        all: {
          name: '经营异常主体',
          value: 1057812,
          img: require('./componets/img/yueshu/0.png')
        },
        list: [
          {
            name: '移出',
            value: 446213,
            img: require('./componets/img/yueshu/1.png')
          },
          {
            name: '列异',
            value: 1036061,
            img: require('./componets/img/yueshu/2.png')
          }, {
            name: '列严',
            value: 21751,
            img: require('./componets/img/yueshu/3.png')
          }
        ]
      },
      mountainData: [
        {
          name: '未在规定责令的期限内公示有关企业信息',
          value: 1114,
          color: 'linear-gradient(180deg,rgba(79,255,148,1) 0%,rgba(56,167,120,1) 100%)'
        },
        {
          name: '公示企业信息隐瞒真实信息、弄虚作假',
          value: 5761,
          color: 'linear-gradient(180deg,rgba(87,182,255,1) 0%,rgba(0,138,255,1) 100%)'
        },
        {
          name: '通过登记的住所(经营场所)无法联系',
          value: 96599,
          color: 'linear-gradient(180deg,rgba(255,245,87,1) 0%,rgba(255,188,0,1) 100%)'
        },
        {
          name: '未按规定期限公示年度报告',
          value: 1888870,
          color: 'linear-gradient(180deg,rgba(255,87,87,1) 0%,rgba(255,64,64,1) 100%)'
        }
      ],

      barHorizontalData: [
        { 'name': '承德', 'value': '630' },
        { 'name': '秦皇岛', 'value': '1100' },
        { 'name': '张家口', 'value': '1120' },
        { 'name': '衡水', 'value': '1508' },
        { 'name': '邢台', 'value': '1729' },
        { 'name': '廊坊', 'value': '1930' },
        { 'name': '保定', 'value': '1937' },
        { 'name': '唐山', 'value': '2381' },
        { 'name': '沧州', 'value': '2400' },
        { 'name': '邯郸', 'value': '2706' },
        { 'name': '石家庄', 'value': '4281' }
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
