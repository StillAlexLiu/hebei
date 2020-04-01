<template>
    <div class="Page2_1 full">
        <container class="h-1-3" title="智慧食品生产监管">
            <NumberTop :data2='data2[dimension]' :imgs='images1'></NumberTop>
        </container>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="监督检查发现问题类型占比分析">
                <echartsHollowPie :data='hellowPie2[dimension]'></echartsHollowPie>
            </container>
            <container class="w-1-2 full-height" title="各市监督抽检情况统计">
                <echartsBar :xdata='chart3[dimension].xdata' :ydata='chart3[dimension].ydata'></echartsBar>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="食品抽检不合格情况分析">
                <echartsHollowPie :data='hellowPie3[dimension]'></echartsHollowPie>
            </container>
            <container class="w-1-2 full-height" title="各市抽检清空统计">
                <!-- <echartsBar :xdata='chart3[dimension].xdata' :ydata='chart3[dimension].ydata'></echartsBar> -->
                <echartsWline :data='rightLine'></echartsWline>
            </container>
        </div>
    </div>
</template>

<script>
import NumberTop from '../compontes/NumberTop'
import echartsBar from '../compontes/echarts-bar'
import echartsHollowPie from '../compontes/echartsHollowPie'
import echartsWline from '../../p7/components/echarts-wLine'
export default {
  name: 'Page2_1',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    echartsBar,
    echartsHollowPie,
    NumberTop,
    echartsWline
  },
  data () {
    return {
      rightLine: {
        legend: [
          '抽检件数'
        ],
        xdata: [
          '石家庄市',
          '唐山市',
          '秦皇岛市',
          '邯郸市',
          '邢台市',
          '保定市',
          '张家口市',
          '承德市',
          '沧州市',
          '廊坊市',
          '衡水市'
        ],
        ydata: [
          [
            20,
            19,
            11,
            20,
            30,
            10,
            20,
            19,
            11,
            20,
            30
          ]
        ]
      },
      chart3: [{
        xdata: [
          '石家庄市',
          '唐山市',
          '秦皇岛市',
          '邯郸市',
          '邢台市',
          '保定市',
          '张家口市',
          '承德市',
          '沧州市',
          '廊坊市',
          '衡水市'
        ],
        ydata: [
          '6',
          '6',
          '9',
          '10',
          '0',
          '14',
          '6',
          '8',
          '16',
          '6',
          '3',
          '5',
          '7',
          '2'
        ]
      }, {
        xdata: [
          '石家庄市',
          '唐山市',
          '秦皇岛市',
          '邯郸市',
          '邢台市',
          '保定市',
          '张家口市',
          '承德市',
          '沧州市',
          '廊坊市',
          '衡水市'
        ],
        ydata: [
          '26',
          '7',
          '19',
          '10',
          '5',
          '4',
          '3',
          '8',
          '6',
          '6',
          '2',
          '6',
          '7',
          '1'
        ]
      }, {
        xdata: [
          '石家庄市',
          '唐山市',
          '秦皇岛市',
          '邯郸市',
          '邢台市',
          '保定市',
          '张家口市',
          '承德市',
          '沧州市',
          '廊坊市',
          '衡水市'
        ],
        ydata: [
          '6',
          '6',
          '9',
          '0',
          '7',
          '14',
          '6',
          '8',
          '6',
          '6',
          '13',
          '5',
          '17',
          '7'
        ]
      }],
      hellowPie2: [{
        name1: '问题类型占比',
        pieData: [
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
        name1: '抽检不合格类型占比',
        pieData: [
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
        name1: '抽检不合格类型占比',
        pieData: [
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
        name1: '抽检类型占比',
        pieData: [
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
        name1: '抽检类型占比',
        pieData: [
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
        name1: '抽检类型占比',
        pieData: [
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
      data2: [[
        {
          title: '监管检查',
          name1: '监管户数',
          num1: '17875',
          name2: '发现问题',
          num2: '1013'
        }, {
          title: '监督抽检',
          name1: '检验件数',
          num1: '6274',
          name2: '合格率',
          num2: '97.63%'
        }, {
          title: '食品安全追溯',
          name1: '注册使用数',
          num1: '267',
          name2: '注册使用率',
          num2: '100%'
        }, {
          title: '守信超市',
          name1: '创建数量',
          num1: '684',
          name2: '创建比例',
          num2: '61.03%'
        }
      ], [
        {
          title: '监管检查',
          name1: '监管户数',
          num1: '12375',
          name2: '发现问题',
          num2: '1153'
        }, {
          title: '监督抽检',
          name1: '检验件数',
          num1: '6234',
          name2: '合格率',
          num2: '89.63%'
        }, {
          title: '食品安全追溯',
          name1: '注册使用数',
          num1: '257',
          name2: '注册使用率',
          num2: '78%'
        }, {
          title: '守信超市',
          name1: '创建数量',
          num1: '164',
          name2: '创建比例',
          num2: '66.03%'
        }
      ], [
        {
          title: '监管检查',
          name1: '监管户数',
          num1: '12675',
          name2: '发现问题',
          num2: '1213'
        }, {
          title: '监督抽检',
          name1: '检验件数',
          num1: '6254',
          name2: '合格率',
          num2: '87.63%'
        }, {
          title: '食品安全追溯',
          name1: '注册使用数',
          num1: '277',
          name2: '注册使用率',
          num2: '99%'
        }, {
          title: '守信超市',
          name1: '创建数量',
          num1: '614',
          name2: '创建比例',
          num2: '58.03%'
        }
      ]],
      images1: [
        {
          imgUrl: require('../compontes/img/60.png')
        }, {
          imgUrl: require('../compontes/img/64.png')
        }, {
          imgUrl: require('../compontes/img/63.png')
        }, {
          imgUrl: require('../compontes/img/52.png')
        }
      ]
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
