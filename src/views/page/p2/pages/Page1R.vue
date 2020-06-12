<template>
    <div class="Page1 full">
      <container class="h-1-3 full-width" title="网格化监管">
        <container-center-title2 title="本局双随机监管概念"  class="full-height w-1-2" >
          <div class="w-1-3 full-height" v-for="(item, index) in threePieData" :key='index'>
            <chartsPie :data='item' :is-percent="true" :show='false'/>
          </div>
          <!-- <ChartsBarLine :data="data4" :type="['line']" :dimensions="['name','value']"
            :units="['']"
            :legend="['合格率']" /> -->
        </container-center-title2>
        <container-center-title2 title="各地市抽查情况"  class="full-height w-1-2" >
          <ChartsBarSimple :data="chart3" :dimensions="['name','value']" unit="批次" :barWidth='30' :barRadios='[0, 0, 0, 0]' :legend="['抽查数量']"
            :colors="['#4A90E2','#29C6FF','#91D243','#50E3C2','#82A1FD','#FFD37C','#FF9841','#FF5C2E','#FF92A2','#FF997D','#00B1C8', '#F17777', '#C486F2']"/>
        </container-center-title2>
        <!-- <NumberGroup :data='chart1[dimension]' class="w-1-2 full-height"></NumberGroup>
        <container-center-title2 title="网格化监管趋势分析"  class="full-height w-1-2" >
          <ChartsBarLine :data="data3" :type="['line']" :dimensions="['name','value']"
            :units="['户次']"
            :legend="['监管户次']" />
        </container-center-title2> -->
      </container>
      <div class="full-width h-1-3">
        <container class="w-1-2 full-height" title="跨部门抽查情况">
            <CommonTable :data="tableData" :headers="['抽查事项','部门','抽查主体']" :show-order="false"/>
        </container>
        <container class="w-1-2 full-height" title="抽查户数">
            <div class="w-1-4 full-height">
                <NumberGroup :data='chart1' ></NumberGroup>
            </div>
            <div class="w-3-4 full-height">
                <ChartsBarHorizontal :data="barData"
                                         :color="['#FFD37C','#FF9841','#FF997D','#29C6FF','#6A94FF','#45A4F5']"/>
            </div>
          <!-- <ChartsBarSimple :data="chart3" :dimensions="['name','value']" unit="批次" :barWidth='30' :barRadios='[0, 0, 0, 0]' :legend="['抽查数量']"
            :colors="['#549AE6','#68CAFF','#9BD84C','#5AE7C9','#C0EC91','#92AAF7','#FFDA94','#FEA85F','#FE754A','#FFA2AE','#F7B74D', '#68CAFF', '#549AE6']"/> -->
        </container>
      </div>
      <div class="full-width h-1-3">
        <container class="w-1-2 full-height" title="抽查方式">
            <NumberGroup3 :data="numberGroup"/>
        </container>
        <container class="w-1-2 full-height" title="检查结果公示">
            <ChartsPie :data="pieData" :legend-position="'left'" :show-all="true"/>
        </container>
      </div>
        <!-- <container class="h-2-8" title="综合监管">
            <NumberGroup :data='chart1[dimension]'></NumberGroup>
        </container>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="智慧食品监管">
                <NumberGroup2 :data='chart2[dimension]'></NumberGroup2>
            </container>
            <container class="w-1-2 full-height" title="智慧药械监管">
                <NumberGroup2 :data='chart3[dimension]'></NumberGroup2>
            </container>
        </div>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="特种设备监管">
                <NumberElevator :data='chart4[dimension]'></NumberElevator>
            </container>
            <container class="w-1-2 full-height" title="双随机监管">
                <div class="w-1-2 full-height" v-for="(item, name,index) in chart5[dimension]" :key="index">
                    <echartsPieGroup :data='item' :colors="colors[index]"></echartsPieGroup>
                </div>
            </container>
        </div> -->
    </div>
</template>

<script>
import NumberGroup from '../compontes/NumberGroup'
// import ChartsBarLine from '../../../../components/echarts/ChartsBarLine'
import NumberGroup3 from '../../p7/components/numberGroup3'
import Mock from 'mockjs'
import chartsPie from '../compontes/echartsPie'
// import NumberGroup2 from '../compontes/NumberGroup2'
// import NumberElevator from '../compontes/Number-elevator'
// import echartsPieGroup from '../compontes/echarts-pieGroup'

export default {
  name: 'Page1',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    NumberGroup,
    // ChartsBarLine,
    NumberGroup3,
    chartsPie
    // NumberGroup2,
    // NumberElevator,
    // echartsPieGroup
  },
  data () {
    return {
      barData: [
        {
          name: '省建管局',
          value: 4168
        }, {
          name: '省交通委',
          value: 8168
        }, {
          name: '省监局',
          value: 15168
        }, {
          name: '省环保局',
          value: 23387
        }, {
          name: '省财政局',
          value: 28566
        }, {
          name: '省人保局',
          value: 32899
        }
      ],
      data3: [
        {
          name: '1月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '2月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '3月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '4月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '5月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '6月',
          value: Mock.Random.natural(10, 70)
        }
      ],
      threePieData: [
        {
          name: '任务数',
          num: 41
        }, {
          name: '完成数',
          num: 22
        }, {
          name: '完成率',
          num: 23
        }
      ],
      tableData: [
        {
          con: '商业综合体',
          bm: '省监管局、文厂、消防',
          num: '12户'
        }, {
          con: '大型宾馆',
          bm: '省监管局、公安消防、文厂',
          num: '21户'
        }, {
          con: '外资投资',
          bm: '省监管局、经委',
          num: '37户'
        }, {
          con: '文娱场所',
          bm: '省监管局、文厂、卫计委、经委',
          num: '29户'
        }
      ],
      pieData: [{
        name: '立案处理',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '不予配合',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '已注销',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '责令整改',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '地址失联',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '未发现问题',
        value: Mock.Random.natural(500, 1000)
      }],
      data4: [
        {
          name: '1月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '2月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '3月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '4月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '5月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '6月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '7月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '8月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '9月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '10月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '11月',
          value: Mock.Random.natural(10, 70)
        }, {
          name: '12月',
          value: Mock.Random.natural(10, 70)
        }
      ],
      numberGroup: [
        {
          name: '产业品牌',
          value: 7938,
          img: require('../compontes/img/111.png'),
          unit: ''
        },
        {
          name: '企业品牌',
          value: 1511,
          img: require('../compontes/img/112.png'),
          unit: ''
        },
        {
          name: '区域匹配',
          value: 17075,
          img: require('../compontes/img/113.png'),
          unit: ''
        }
      ],
      chart3: [
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
      colors: [['#FE6941', '#4B8FE2'], ['#B8E986', '#3E404D']],
      chart1: [
        {
          name: '抽查户次',
          value: 23380,
          unit: '户',
          img: require('../compontes/img/标@2x-4_wps图片.png')
        }
      ],
      chart2: [[
        {
          name: '主体数量',
          value: 150,
          name1: '监管户数',
          value1: 397,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 11848,
          name1: '监管户数',
          value1: 17875,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 10680,
          name1: '监管户数',
          value1: 26605,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ], [
        {
          name: '主体数量',
          value: 129,
          name1: '监管户数',
          value1: 487,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 13568,
          name1: '监管户数',
          value1: 1457,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 14670,
          name1: '监管户数',
          value1: 21685,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ], [
        {
          name: '主体数量',
          value: 120,
          name1: '监管户数',
          value1: 337,
          short: '生',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 18648,
          name1: '监管户数',
          value1: 14685,
          short: '流',
          img: require('../compontes/img/text-bg-green.png')
        },
        {
          name: '主体数量',
          value: 10256,
          name1: '监管户数',
          value1: 21215,
          short: '餐',
          img: require('../compontes/img/text-bg-green.png')
        }
      ]],
      // chart3: [[
      //   {
      //     name: '主体数量',
      //     value: 843,
      //     name1: '监管户数',
      //     value1: 1237,
      //     short: '药',
      //     img: require('../compontes/img/text-bg-blue.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 2179,
      //     name1: '监管户数',
      //     value1: 1270,
      //     short: '妆',
      //     img: require('../compontes/img/text-bg-pink.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 1236,
      //     name1: '监管户数',
      //     value1: 79,
      //     short: '械',
      //     img: require('../compontes/img/text-bg-purple.png')
      //   }
      // ], [
      //   {
      //     name: '主体数量',
      //     value: 783,
      //     name1: '监管户数',
      //     value1: 1987,
      //     short: '药',
      //     img: require('../compontes/img/text-bg-blue.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 2239,
      //     name1: '监管户数',
      //     value1: 1180,
      //     short: '妆',
      //     img: require('../compontes/img/text-bg-pink.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 1276,
      //     name1: '监管户数',
      //     value1: 16,
      //     short: '械',
      //     img: require('../compontes/img/text-bg-purple.png')
      //   }
      // ], [
      //   {
      //     name: '主体数量',
      //     value: 923,
      //     name1: '监管户数',
      //     value1: 1117,
      //     short: '药',
      //     img: require('../compontes/img/text-bg-blue.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 2299,
      //     name1: '监管户数',
      //     value1: 1230,
      //     short: '妆',
      //     img: require('../compontes/img/text-bg-pink.png')
      //   },
      //   {
      //     name: '主体数量',
      //     value: 1906,
      //     name1: '监管户数',
      //     value1: 90,
      //     short: '械',
      //     img: require('../compontes/img/text-bg-purple.png')
      //   }
      // ]],
      chart4: [{
        name: '全省特种设备总数',
        value: 892
      }, {
        name: '全省特种设备总数',
        value: 723
      }, {
        name: '全省特种设备总数',
        value: 870
      }],
      chart5: [
        {
          chart1: {
            data: [{
              name: '已完成',
              value: 116
            }, {
              name: '未完成',
              value: 116
            }],
            img: require('../compontes/img/folder1.png')
          },
          chart2: {
            data: [{
              name: '完成率',
              value: 75
            }, {
              name: '',
              value: 25
            }],
            img: require('../compontes/img/folder2.png')
          }
        }, {
          chart1: {
            data: [{
              name: '已完成',
              value: 116
            }, {
              name: '未完成',
              value: 116
            }],
            img: require('../compontes/img/folder1.png')
          },
          chart2: {
            data: [{
              name: '完成率',
              value: 75
            }, {
              name: '',
              value: 25
            }],
            img: require('../compontes/img/folder2.png')
          }
        }, {
          chart1: {
            data: [{
              name: '已完成',
              value: 116
            }, {
              name: '未完成',
              value: 116
            }],
            img: require('../compontes/img/folder1.png')
          },
          chart2: {
            data: [{
              name: '完成率',
              value: 75
            }, {
              name: '',
              value: 25
            }],
            img: require('../compontes/img/folder2.png')
          }
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
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
