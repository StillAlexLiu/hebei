<template>
    <div class="Page2_1 full">
        <container class="h-1-3" title="食品相关主体情况">
            <!-- <NumberTop :data='data2[dimension]'></NumberTop> -->
            <div class="w-1-2 full-height">
              <NumberGroup :data='numberData' class="full"/>
            </div>
            <div class="w-1-2 full-height">
              <container-center-title2 title="食品许可办理趋势"  class="full" >
                <ChartsBarLine :data="linesData2" :legend="['食品生产','食品销售','食品经营(非销售)']"
                               :type="['line','line','line']"
                               :two-axis="false"
                               :units="['单位：家']"
                               :colors="['#FFD589','#FE6941','#61EADF']"
                               :dimensions="['name','value','value1','value2']"/>
              </container-center-title2>
            </div>
        </container>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="主要生产食品类型">
                <!-- <ChartsPiePiecewise :data='hellowPie2[dimension].data'
                                    :img="img"
                                    :img-size="[90,90]"
                                    :img-position="['center','30%']"
                                    :title-position="['center','55%']"
                                    :title="hellowPie2[dimension].title"/> -->
              <ChartsScatter :dimensions="['name','value','size']" :data="scatterData" :base-size="1"
                           :unit="'个'"
                           :showX="false"  :showSize='true'
                           :colors="['#F05561','#35D35D','#BF72F4','#8B7AF5','#27B14A','#E95F37','#E7C048','#FF9177','#E6AB03','#29B2F4','#5B8FF9','#14D2C6','#27B14A']"/>
            </container>
            <container class="w-1-2 full-height" title="食品生产主体区域分布">
                <!-- <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['bar']"
                               :units="['单位：户次']"
                               :colors="[barColor]"
                               :legend="['监督检查数量']"></ChartsBarLine> -->
              <ChartsBarLine :data="barData3" :dimensions="['name','value']" :units="['单位：户']"
                               :type="['bar']"
                               :border-radius="false"
                               :bar-width="30"
                               :legend="['主体数量']"
                               :colors="[barColor2]"/>
            </container>
        </div>
        <container class="h-1-3" title="食品生产监管情况">
          <container-center-title2 title="食品生产检查需整改情况"  class="full-height w-1-4" >
            <ChartsLiquidFill :data='liquidfill'/>
          </container-center-title2>
          <container-center-title2 title="食品生产监管趋势"  class="full-height w-3-4" >
            <ChartsBarLine :data='chart10' :dimensions="['name','value']" :legend="['监管户次']"
                               :type="['line']" :colors="['#5B8FF9']" smooth :units="['单位：户次']"/>
          </container-center-title2>
        </container>
        <!-- <div class="h-1-3">
            <container class="w-1-2 full-height" title="食品抽检不合格情况分析">
                <ChartsPie :data='hellowPie3[dimension].data'
                           :title="hellowPie3[dimension].title"></ChartsPie>
            </container>
            <container class="w-1-2 full-height" title="各市抽检情况统计">
                <ChartsBarLine :data='chart4[dimension].data' :dimensions="['name','value']"
                               :type="['line']"
                               :colors="['#FE6941']"
                               :is-area="true"
                               :units="['单位：件']"
                               :smooth="true"
                               :legend="['抽查件数']"></ChartsBarLine>
            </container>
        </div> -->
    </div>
</template>

<script>
import echarts from 'echarts'
import NumberTop from '../compontes/NumberTop'
import Mock from 'mockjs'
import NumberGroup from '../../p3/components/NumberGroup'
export default {
  name: 'Page2_1',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    NumberTop,
    NumberGroup
  },
  data () {
    return {
      numberData: [
        {
          imgUrl: require('../compontes/img/group/3.png'),
          name1: '食品生产',
          num1: 301,
          unit: '户'
        }, {
          imgUrl: require('../compontes/img/group/4.png'),
          name1: '食品经营(销售)',
          num1: 12,
          unit: '户'
        }, {
          imgUrl: require('../compontes/img/group/5.png'),
          name1: '食品经营(非销售)',
          num1: 1,
          unit: '户'
        }
      ],
      linesData2: [{
        name: '2015',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2016',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2017',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2018',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }, {
        name: '2019',
        value: Mock.Random.natural(10000, 50000),
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000)
      }],
      chart10: [{
        name: '2019.06',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.07',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.08',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.09',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.10',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.11',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2019.12',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.01',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.02',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.03',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.04',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.05',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2020.06',
        value: Mock.Random.natural(75, 100)
      }],
      liquidfill: ['维持', 92.2],
      barData3: [
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
      ],
      barColor2: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: 'rgba(34, 174, 197, 1)'
        },
        {
          offset: 1,
          color: 'rgba(37, 67, 95, .3)'
        }
      ]),
      scatterData: [{
        name: '冷冻饮料',
        value: 3061
      }, {
        name: '乳制品',
        value: 2163
        // size: Mock.Random.natural(10, 200)
      }, {
        name: '速冻食品',
        value: 3963
      }, {
        name: '粗粮加工品',
        value: 5963
      }, {
        name: '罐头',
        value: 2963
      }, {
        name: '调味品',
        value: 1163
      }, {
        name: '薯类和膨化食品',
        value: 8063
      }, {
        name: '油脂及其制品',
        value: 5863
      }, {
        name: '食用油',
        value: 3803
      }, {
        name: '方便食品',
        value: 2963
      }, {
        name: '饮料',
        value: 5763
      }, {
        name: '肉制品',
        value: 1763
      }, {
        name: '饼干',
        value: 5063
      }],
      img: require('./../compontes/img/info.png'),
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
      chart4: [{
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
      hellowPie2: [{
        title: '问题类型占比',
        data: [
          {
            value: 31,
            name: '生产环境条件'
          }, {
            value: 219,
            name: '进货查验'
          }, {
            value: 120,
            name: '生产过程控制'
          }, {
            value: 103,
            name: '产品检验'
          }, {
            value: 32,
            name: '从业人员管理'
          }, {
            value: 27,
            name: '不合格管理和食品召回'
          }, {
            value: 21,
            name: '废弃油脂处置'
          }
        ]
      }, {
        title: '抽检不合格类型占比',
        data: [
          {
            value: 11,
            name: '不正当竞争'
          }, {
            value: 59,
            name: '产品质量'
          }, {
            value: 20,
            name: '广告'
          }, {
            value: 30,
            name: '其他'
          }, {
            value: 12,
            name: '药械化'
          }, {
            value: 17,
            name: '特种设备'
          }, {
            value: 21,
            name: '食品安全'
          }
        ]
      }, {
        title: '抽检不合格类型占比',
        data: [
          {
            value: 21,
            name: '不正当竞争'
          }, {
            value: 69,
            name: '产品质量'
          }, {
            value: 50,
            name: '广告'
          }, {
            value: 40,
            name: '其他'
          }, {
            value: 22,
            name: '药械化'
          }, {
            value: 17,
            name: '特种设备'
          }, {
            value: 31,
            name: '食品安全'
          }
        ]
      }],
      hellowPie3: [{
        title: '抽检不合格类型',
        data: [
          {
            value: 321,
            name: '色值，还原糖分'
          }, {
            value: 2119,
            name: '二氧化硫残留量'
          }, {
            value: 1230,
            name: '铜绿假单病菌'
          }, {
            value: 1013,
            name: '菌落总数'
          }
        ]
      }, {
        title: '抽检不合格类型',
        data: [
          {
            value: 331,
            name: '色值，还原糖分'
          }, {
            value: 2149,
            name: '二氧化硫残留量'
          }, {
            value: 1210,
            name: '铜绿假单病菌'
          }, {
            value: 1103,
            name: '菌落总数'
          }
        ]
      }, {
        title: '抽检不合格类型',
        data: [
          {
            value: 315,
            name: '色值，还原糖分'
          }, {
            value: 2195,
            name: '二氧化硫残留量'
          }, {
            value: 1201,
            name: '铜绿假单病菌'
          }, {
            value: 1013,
            name: '菌落总数'
          }
        ]
      }],
      data2: [
        [{
          title: '监督检查',
          short: '检',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '监管户次',
            value: '397'
          }, {
            name: '发现问题',
            value: '117'
          }]
        }, {
          title: '监督抽检',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '检验批次',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '食品安全追溯',
          short: '溯',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '注册数',
            value: '267'
          }, {
            name: '注册使用率',
            value: '100%'
          }]
        }, {
          title: '远程监控',
          short: '远',
          img: require('./../compontes/img/text-bg-blue.png'),
          data: [{
            name: '接入数',
            value: '2'
          }, {
            name: '预警数',
            value: '0'
          }]
        }], [{
          title: '监管检查',
          short: '检',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '监管户次',
            value: '397'
          }, {
            name: '发现问题',
            value: '117'
          }]
        }, {
          title: '监督抽检',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '检验件数',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '食品安全追溯',
          short: '溯',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '注册数',
            value: '267'
          }, {
            name: '注册使用率',
            value: '100%'
          }]
        }, {
          title: '远程监控',
          short: '远',
          img: require('./../compontes/img/text-bg-blue.png'),
          data: [{
            name: '接入数',
            value: '2'
          }, {
            name: '预警数',
            value: '0'
          }]
        }], [{
          title: '监管检查',
          short: '检',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '监管户次',
            value: '397'
          }, {
            name: '发现问题',
            value: '117'
          }]
        }, {
          title: '监督抽检',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '检验件数',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '食品安全追溯',
          short: '溯',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '注册数',
            value: '267'
          }, {
            name: '注册使用率',
            value: '100%'
          }]
        }, {
          title: '远程监控',
          short: '远',
          img: require('./../compontes/img/text-bg-blue.png'),
          data: [{
            name: '接入数',
            value: '2'
          }, {
            name: '预警数',
            value: '0'
          }]
        }]]
    }
  },
  watch: {
    dimension: {
      immediate: true,
      deep: true,
      handler: function () {
      }
    }
  }
}
</script>

<style scoped lang="less">
.Page2_1 {

}
</style>
