<template>
    <div class="Page2 full " style="position: relative">
        <div class="h-1-3">
            <container class="full-height w-1-2" title="“三小”监管情况">
                <FoodNumberGroup class="full-height w-1-3" :data="groupData"/>
                <div class="full-height w-2-3">
                    <ChartsBarLine :data="linesData" :legend="['小作坊','小餐饮','小摊点']" :type="['line','line','line']"
                                   :two-axis="false"
                                   :colors="['#FE6941','#FFD589','#B8E986']"
                                   :dimensions="['name','value','value1','value2']"/>
                </div>
            </container>
            <container class="full-height w-1-2" title="负面清单">
                <ChartsWord :data="wordData"/>
            </container>
        </div>
        <div class="h-1-3">
            <container class="full-height w-1-2" title="食品安全重点场所监管">
                <ChartsBarLine :data="barLinesData" :legend="['校园','食品生产集中区','食品交易市场','问题发现率']"
                               :type="['bar','bar','bar','line']"
                               :data-index="[0,0,0,1]"
                               :colors="['#FE6941','#4A90E2','#91D243','#FC4A5F']"
                               :units="['当月检查次数（户次）']"
                               :dimensions="['name','value','value1','value2','value3']"/>
            </container>
            <container class="full-height w-1-2" title="特殊食品安全">
                <ChartsBarLine :data="linesData2" :legend="['婴幼儿配方奶粉','保健食品','特殊医学用途配方食品']"
                               :type="['line','line','line']"
                               :two-axis="false"
                               :units="['当月抽检合格率（%）']"
                               :colors="['#FE6941','#FFD589','#B8E986']"
                               :dimensions="['name','value','value1','value2']"/>
            </container>
        </div>
        <div class="h-1-3">
            <container class="full-height w-1-2" title="网络餐饮安全">
                <div slot="right" class="right-btn" @click="btnClick">网络餐饮报告</div>
                <InfoBlock class="full-height w-2-5" :data="blockData"/>
                <div class="full-height w-3-5">
                    <ChartsPie :data="pieData" :show-legend="false" :title="'网络餐饮差评\n因素分析'"/>
                </div>
            </container>
            <container class="full-height w-1-2" title="农产品安全">
                <NumberGroupRight class="full-height w-2-5" :data="listData"/>
                <div class="full-height w-3-5">
                    <ChartsPieValueLegend :data="pieData2" :show-legend="false"/>
                </div>
            </container>
        </div>
        <div class="dia" v-if="diaShow">
            <Table2 :data="data" :column="column"/>
            <div class="close" @click="close">关闭</div>
        </div>
    </div>
</template>

<script>

import FoodNumberGroup from '../compontes/FoodNumberGroup'
import Mock from 'mockjs'
import ChartsWord from '../compontes/ChartsWord'
import InfoBlock from '../compontes/InfoBlock'
import NumberGroupRight from '../compontes/NumberGroupRight'
import Table2 from '../compontes/table2'

export default {
  name: 'Page2R',
  components: { Table2, NumberGroupRight, InfoBlock, ChartsWord, FoodNumberGroup },
  data () {
    return {
      diaShow: false,
      selected: '生产',
      groupData: [{
        name: '小作坊登记证/件',
        value: '1211'
      }, {
        name: '小餐饮登记证/件',
        value: '53742'
      }, {
        name: '小摊点备案卡/件',
        value: '134847'
      }],
      linesData: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }],
      barLinesData: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }],
      linesData2: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }],
      wordData: [
        {
          name: '白酒',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '啤酒',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '葡萄酒',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '罐头',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '乳制品',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '生食水产品',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '保健食品',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '饮料',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '保健食品',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '食品添加剂',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '速冻食品',
          value: Mock.Random.natural(10000, 50000)
        },
        {
          name: '特殊膳食食品',
          value: Mock.Random.natural(10000, 50000)
        }
      ],
      pieData: [{
        name: '环境卫生',
        value: '4545'
      }, {
        name: '吃出异物',
        value: '1857'
      }, {
        name: '食物变质',
        value: '3783'
      }, {
        name: '疑似事故',
        value: '3868'
      }],
      blockData: {
        title: '网络餐饮评价好评率',
        img: require('./../compontes/img/刀叉icon@2x.png'),
        name: '同比增长1.2%',
        value: '72.4%'
      },
      listData: [{
        name: '执法人员/人次',
        value: '154815',
        img: require('./../compontes/img/group/1.png')
      }, {
        name: '检查主体/户次',
        value: '106521',
        img: require('./../compontes/img/group/2.png')
      }],
      pieData2: [{
        name: '已改正',
        value: '45'
      }, {
        name: '为改正',
        value: '7'
      }],
      column: ['门店名', '品类名', '食安差评类型', '吃出异物', '食品变质', '环境卫生', '疑似事故', '评价内容'],
      data: [
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加'],
        ['云膳过桥米线(古美路旗舰', '小吃快餐', ' 食品变质', '0', ' 0', ' 0 ', '0 ', '点评上团的鸡汤米线加']
      ]
    }
  },
  watch: {
    name: {
      immediate: true,
      deep: true,
      handler: function () {
        if (this.name === '生产' || this.name === '流通' || this.name === '餐饮') {
          this.selected = this.name
        }
      }
    }
  },
  props: {
    dimension: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: '生产'
    }
  },
  methods: {
    btnClick () {
      this.diaShow = true
    },
    close () {
      this.diaShow = false
    }
  }
}
</script>

<style scoped lang="less">
.Page2 {
    .right-btn {
        cursor: pointer;
        background-color: #2F77AE;
        font-size: 32px;
        line-height: 53px;
        padding: 0 10px;
    }

    .dia {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .close {
        font-size: 30px;
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px;
        font-weight: bold;
    }
}
</style>
