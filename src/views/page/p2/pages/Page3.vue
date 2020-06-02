<template>
    <div class="Page3 full">
        <container class="h-1-3" title="产品质量安全监管">
            <NumberTop :data='data2[dimension]'></NumberTop>
        </container>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="近五年抽检产品统计">
                <ChartsBarLine :data='barsData[dimension]'
                               :dimensions="['name','value','value1','value2','value3','value4']"
                               :type="['bar','bar','bar','bar','bar']"
                               :colors="['#4A90E2','#50E3C2','#50E3C2','#FE9E55','#B8E986']"
                               :units="['抽查产品数']"
                               :two-axis="false"
                               :legend="['食品','工业品','药品','化妆品','医疗器械']"></ChartsBarLine>
            </container>
            <container class="w-1-2 full-height" title="产品质量抽检不合适趋势">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['line']"
                               :colors="['#61EADF']"
                               :units="['不合格率']"
                               :legend="['不合格率']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="缺陷产品召回情况">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['line']"
                               :colors="['#F59E83']"
                               :legend="['监督检查数量']"></ChartsBarLine>
            </container>
            <container class="w-1-2 full-height" title="重点产品分布分析">
                <ChartsBarSimple :data="chart3[dimension].data" :dimensions="['name','value']" unit="挽歌"
                                 :show-value="false"
                                 :colors="['#4A90E2','#5DC3FF','#91D243','#50E3C2','#B8E986','#87A0F6','#FFD589','#FE9E55','#FE6941','#FF98A4','#22AEC5']"/>
            </container>
        </div>
    </div>
</template>

<script>
import NumberTop from '../compontes/NumberTop'
import echarts from 'echarts'
import Mock from 'mockjs'

export default {
  name: 'Page3',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    NumberTop
  },
  data () {
    return {
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
            name: '1月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '2月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '3月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '4月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '5月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '6月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '7月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '8月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '9月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '10月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '11月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '12月',
            value: Mock.Random.natural(1, 20)
          }
        ]
      }, {
        data: [
          {
            name: '1月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '2月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '3月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '4月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '5月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '6月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '7月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '8月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '9月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '10月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '11月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '12月',
            value: Mock.Random.natural(1, 20)
          }
        ]
      }, {
        data: [
          {
            name: '1月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '2月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '3月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '4月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '5月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '6月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '7月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '8月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '9月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '10月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '11月',
            value: Mock.Random.natural(1, 20)
          }, {
            name: '12月',
            value: Mock.Random.natural(1, 20)
          }
        ]
      }],
      barsData: [[
        {
          name: '2015',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2016',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2017',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2018',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2019',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }
      ], [
        {
          name: '2015',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2016',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2017',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2018',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2019',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }
      ], [
        {
          name: '2015',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2016',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2017',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2018',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }, {
          name: '2019',
          value: Mock.Random.natural(200, 400),
          value1: Mock.Random.natural(200, 400),
          value2: Mock.Random.natural(200, 400),
          value3: Mock.Random.natural(200, 400),
          value4: 31
        }
      ]],
      data2: [
        [{
          title: '国家级监督抽检',
          short: '检',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '抽检批次',
            value: '397'
          }, {
            name: '合格率',
            value: '117'
          }]
        }, {
          title: '省级监督抽查',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '抽检件数',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '缺陷产品召回',
          short: '溯',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '召回批次',
            value: '267'
          }, {
            name: '召回种类',
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
          title: '国家级监督抽检',
          short: '检',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '抽检批次',
            value: '397'
          }, {
            name: '合格率',
            value: '117'
          }]
        }, {
          title: '省级监督抽查',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '抽检件数',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '缺陷产品召回',
          short: '溯',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '召回批次',
            value: '267'
          }, {
            name: '召回种类',
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
          title: '国家级监督抽检',
          short: '检',
          img: require('./../compontes/img/text-bg-green.png'),
          data: [{
            name: '抽检批次',
            value: '397'
          }, {
            name: '合格率',
            value: '117'
          }]
        }, {
          title: '省级监督抽查',
          short: '抽',
          img: require('./../compontes/img/text-bg-purple.png'),
          data: [{
            name: '抽检件数',
            value: '6274'
          }, {
            name: '合格率',
            value: '97.63%'
          }]
        }, {
          title: '缺陷产品召回',
          short: '溯',
          img: require('./../compontes/img/text-bg-red.png'),
          data: [{
            name: '召回批次',
            value: '267'
          }, {
            name: '召回种类',
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
.Page3 {

}
</style>
