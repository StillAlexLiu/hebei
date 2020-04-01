<template>
    <div class="Page4 full">
        <div class="h-1-3">
            <container class="w-2-5 full-height" title="特种设备监管">
                <NumberElevator :data='chart4[dimension]'></NumberElevator>
            </container>
            <div class="w-3-5 full-height">
                <echartsBgBar :xdata='chart5[dimension].xdata' :ydata='chart5[dimension].ydata'></echartsBgBar>
            </div>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="特种设备类型分布">
                <echartsbypie :data='hellowPie2[dimension]'></echartsbypie>
            </container>
            <container class="w-1-2 full-height" title="各市分布数量">
                <echartsBar :xdata='chart3[dimension].xdata' :ydata='chart3[dimension].ydata'></echartsBar>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="电梯二维码覆盖情况">
                <echartsNdge :data='chart6[dimension]'></echartsNdge>
            </container>
            <container class="w-1-2 full-height" title="老旧特种设备占比情况">
                <echartsliqudfill :data='liquidfull[dimension]'></echartsliqudfill>
            </container>
        </div>
    </div>
</template>
<script>
import NumberElevator from '../compontes/Number-elevator'
import echartsBgBar from '../compontes/echartsBgBar'
import echartsNdge from '../compontes/echarts-ndgr'
import echartsBar from '../compontes/echarts-bar'
import echartsbypie from '../compontes/echarts-bypie'
import echartsliqudfill from '../compontes/echarts-liquidfill.vue'
import Mock from 'mockjs'

export default {
  name: 'Page4',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    NumberElevator,
    echartsBgBar,
    echartsNdge,
    echartsBar,
    echartsbypie,
    echartsliqudfill
  },
  data: () => {
    return {
      chart4: [{
        name: '全省特种设备总量',
        num: 31106
      }, {
        name: '全省特种设备总量',
        num: 38106
      }, {
        name: '全省特种设备总量',
        num: 47106
      }],
      chart5: [{
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
          '16',
          '16',
          '19',
          '10',
          '11',
          '14',
          '35',
          '18',
          '16',
          '16',
          '13',
          '15',
          '17',
          '12'
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
          '36',
          '36',
          '39',
          '10',
          '30',
          '14',
          '36',
          '38',
          '16',
          '36',
          '13',
          '35',
          '37',
          '32'
        ]
      }],
      chart6: [{
        name: '市场主体行业分布',
        data: [
          {
            name: '衡水市',
            value: 3061
          },
          {
            name: '廊坊市',
            value: 2963
          },
          {
            name: '沧州市',
            value: 2850
          },
          {
            name: '承德市',
            value: 2177
          },
          {
            name: '张家口市',
            value: 1940
          },
          {
            name: '保定市',
            value: 1594
          },
          {
            name: '邢台市',
            value: 1327
          },
          {
            name: '邯郸市',
            value: 1303
          },
          {
            name: '秦皇岛市',
            value: 1160
          },
          {
            name: '唐山市',
            value: 2630
          },
          {
            name: '石家庄市',
            value: 3319
          }
        ]
      }, {
        name: '市场主体行业分布',
        data: [
          {
            name: '衡水市',
            value: 3561
          },
          {
            name: '廊坊市',
            value: 2563
          },
          {
            name: '沧州市',
            value: 2550
          },
          {
            name: '承德市',
            value: 2577
          },
          {
            name: '张家口市',
            value: 3240
          },
          {
            name: '保定市',
            value: 2594
          },
          {
            name: '邢台市',
            value: 2327
          },
          {
            name: '邯郸市',
            value: 2303
          },
          {
            name: '秦皇岛市',
            value: 2160
          },
          {
            name: '唐山市',
            value: 2630
          },
          {
            name: '石家庄市',
            value: 2319
          }
        ]
      }, {
        name: '市场主体行业分布',
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
      }],
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
          '16',
          '16',
          '19',
          '10',
          '10',
          '14',
          '16',
          '18',
          '16',
          '16',
          '13',
          '15',
          '17',
          '12'
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
          '36',
          '36',
          '39',
          '10',
          '30',
          '14',
          '36',
          '38',
          '16',
          '36',
          '33',
          '35',
          '37',
          '32'
        ]
      }],
      hellowPie2: [{
        name1: '',
        pieData: [
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
        ]
      }, {
        name1: '',
        pieData: [
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
        ]
      }, {
        name1: '',
        pieData: [
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
        ]
      }],
      liquidfull: [['维持', 10], ['维持', 30], ['维持', 50]]
    }
  }
}
</script>
<style scoped lang="less">
.Page4 {

}
</style>
