<template>
    <div class="Page2_1 full">
        <container class="h-1-3" title="智慧食品流通监管">
            <NumberTop :data='data2[dimension]'></NumberTop>
        </container>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="监督检查发现问题类型占比分析">
                <ChartsPiePiecewise :data='hellowPie2[dimension].data'
                                    :title="hellowPie2[dimension].title"></ChartsPiePiecewise>
            </container>
            <container class="w-1-2 full-height" title="各市监督抽检情况统计">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['bar']"
                               :colors="[barColor]"
                               :units="['单位：户次']"
                               :legend="['监督检查数量']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="各市视频安全追溯情况统计">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['bar']"
                               :colors="[barColor]"
                               :legend="['监督检查数量']"></ChartsBarLine>
            </container>
            <container class="w-1-2 full-height" title="各市守信超市统计">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']"
                               :type="['bar']"
                               :colors="[barColor]"
                               :legend="['监督检查数量']"></ChartsBarLine>
            </container>
        </div>
    </div>
</template>

<script>
import NumberTop from '../compontes/NumberTop'
import echarts from 'echarts'

export default {
  name: 'Page2_2',
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
      data2: [
        [{
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
