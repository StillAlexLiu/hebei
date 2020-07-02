<template>
    <div class="Page2 full " style="position: relative">
      <container class="h-1-3 full-width" title="食品销售监管">
        <container-center-title2 title="食品销售主体地区分布"  class="w-1-2 full-height">
          <ChartsBarSimple :data="leftImage" :dimensions="['name','value']" unit="单位：户" :barWidth='30' :barRadios='[0, 0, 0, 0]' :legend="['主体数量']"
                  :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/>
        </container-center-title2>
        <container-center-title2 title="食品销售检查趋势分析" class="w-1-2 full-height">
          <ChartsBarLine :data="linesData3" :legend="['检查数量']"
                               :type="['line']"
                               :two-axis="false"
                               :isArea="true"
                               :units="['单位户次']"
                               :colors="['#FC4A5F']"
                               :dimensions="['name','value']"/>
        </container-center-title2>
      </container>
      <container class="h-1-3 full-width" title="餐饮监管情况">
        <container-center-title2 title="餐饮检查类型分布"  class="w-1-2 full-height">
          <ChartsPie :data="pieData" :roseType="'radius'" :is-pie="true" :show-value="true"/>
          <!-- <ChartsBarLine :data="barLinesData" :legend="['校园','食品生产集中区','食品交易市场','问题发现率']"
                               :type="['bar','bar','bar','line']"
                               :data-index="[0,0,0,1]"
                               :colors="['#FE6941','#4A90E2','#91D243','#FC4A5F']"
                               :units="['当月检查次数（户次）']"
                               :dimensions="['name','value','value1','value2','value3']"/> -->
        </container-center-title2>
        <container-center-title2 title="餐饮检查趋势分析" class="w-1-2 full-height">
          <ChartsBarLine :data="linesData2" :legend="['检查数量']"
                               :type="['line']"
                               :two-axis="false"
                               :isArea="true"
                               :units="['单位户次']"
                               :colors="['#B8E986']"
                               :dimensions="['name','value']"/>
        </container-center-title2>
      </container>
        <div class="h-1-3">
          <container class="full-height w-1-2" title="“三小”监管情况">
                <!-- <div slot="right" class="right-btn" @click="btnClick">网络餐饮报告</div> -->
            <FoodNumberGroup class="full-height w-1-3" :data="groupData"/>
            <div class="full-height w-2-3">
                <ChartsBarLine :data="linesData" :legend="['小作坊','小餐饮','小摊点']" :type="['line','line','line']"
                                :two-axis="false"
                                :units="['单位：当月登记/备案数（户）']"
                                :colors="['#FE6941','#FFD589','#B8E986']"
                                :dimensions="['name','value','value1','value2']"/>
            </div>
          </container>
          <container class="full-height w-1-2" title="特殊食品安全">
            <ChartsBarLine :data="linesData5" :legend="['婴幼儿配方奶粉','保健食品','特殊医学用途配方食品']" :type="['line','line','line']"
                                :two-axis="false"
                                :units="['监管户次']"
                                :colors="['#FE6941','#FFD589','#B8E986']"
                                :dimensions="['name','value','value1','value2']"/>
          </container>
        </div>
        <div class="dia" v-if="diaShow">
            <Table2 :data="data" :column="column"/>
            <div class="close" @click="close">×</div>
        </div>
    </div>
</template>

<script>

import FoodNumberGroup from '../compontes/FoodNumberGroup'
import Mock from 'mockjs'
// import ChartsWord from '../compontes/ChartsWord'
// import InfoBlock from '../compontes/InfoBlock'
// import NumberGroupRight from '../compontes/NumberGroupRight'
import Table2 from '../compontes/table2'

export default {
  name: 'Page2R',
  components: { Table2, FoodNumberGroup },
  data () {
    return {
      pieData: [
        {
          name: '重量检查',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '日常检查',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '检查要点',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '现场执法',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      leftImage: [
        {
          name: '唐山市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '石家庄市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '保定市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '辛集市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '定州市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '秦皇岛市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '廊坊市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '承德市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '沧州市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '邢台市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '衡水市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '邯郸市',
          value: Mock.Random.natural(1, 20)
        }, {
          name: '张家口市',
          value: Mock.Random.natural(1, 20)
        }
      ],
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
      linesData5: [{
        name: '2019-11',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
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
        name: '1月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '3月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '4月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '5月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '6月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '7月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '8月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '9月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '10月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '11月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '12月',
        value: Mock.Random.natural(10000, 50000)
      }],
      linesData3: [{
        name: '1月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '3月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '4月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '5月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '6月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '7月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '8月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '9月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '10月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '11月',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '12月',
        value: Mock.Random.natural(10000, 50000)
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
      // column: ['门店名', '品类名', '食安差评类型', '吃出异物', '食品变质', '环境卫生', '疑似事故', '评价内容'],
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
        right: 20px;
        top: -10px;
        padding: 10px;
        font-weight: bold;
    }
}
</style>
