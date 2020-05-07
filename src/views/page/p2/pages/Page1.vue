<template>
    <div class="Page1 full">
        <container class="h-2-8" title="综合监管">
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
                <div class="w-1-2 full-height" v-for="(item, index) in chart5[dimension]" :key="index">
                    <echartsPieGroup :data='item'></echartsPieGroup>
                </div>
            </container>
        </div>
    </div>
</template>

<script>
import NumberGroup from '../compontes/NumberGroup'
import NumberGroup2 from '../compontes/NumberGroup2'
import NumberElevator from '../compontes/Number-elevator'
import echartsPieGroup from '../compontes/echarts-pieGroup'

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
    NumberGroup2,
    NumberElevator,
    echartsPieGroup
  },
  data () {
    return {
      chart1: [[
        {
          name: '综合监管',
          value: 4032,
          unit: '户次',
          img: require('../compontes/img/1.png')
        },
        {
          name: '智能预警',
          value: 2108,
          unit: '户次',
          img: require('../compontes/img/2.png')
        },
        {
          name: '无证无照',
          value: 134,
          unit: '户次',
          img: require('../compontes/img/3.png')
        },
        {
          name: '投诉举报',
          value: 1940,
          unit: '件',
          img: require('../compontes/img/4.png')
        },
        {
          name: '场地查看',
          value: 230,
          unit: '件',
          img: require('../compontes/img/5.png')
        },
        {
          name: '案件管理',
          value: 122,
          unit: '件',
          img: require('../compontes/img/6.png')
        }
      ], [
        {
          name: '综合监管',
          value: 3932,
          unit: '户次',
          img: require('../compontes/img/1.png')
        },
        {
          name: '智能预警',
          value: 2208,
          unit: '户次',
          img: require('../compontes/img/2.png')
        },
        {
          name: '无证无照',
          value: 154,
          unit: '户次',
          img: require('../compontes/img/3.png')
        },
        {
          name: '投诉举报',
          value: 1740,
          unit: '件',
          img: require('../compontes/img/4.png')
        },
        {
          name: '场地查看',
          value: 590,
          unit: '件',
          img: require('../compontes/img/5.png')
        },
        {
          name: '案件管理',
          value: 122,
          unit: '件',
          img: require('../compontes/img/6.png')
        }
      ], [
        {
          name: '综合监管',
          value: 4132,
          unit: '户次',
          img: require('../compontes/img/1.png')
        },
        {
          name: '智能预警',
          value: 1908,
          unit: '户次',
          img: require('../compontes/img/2.png')
        },
        {
          name: '无证无照',
          value: 124,
          unit: '户次',
          img: require('../compontes/img/3.png')
        },
        {
          name: '投诉举报',
          value: 1240,
          unit: '件',
          img: require('../compontes/img/4.png')
        },
        {
          name: '场地查看',
          value: 300,
          unit: '件',
          img: require('../compontes/img/5.png')
        },
        {
          name: '案件管理',
          value: 112,
          unit: '件',
          img: require('../compontes/img/6.png')
        }
      ]],
      img_data2: [[
        {
          imgUrl: require('../compontes/img/png7.png')
        }, {
          imgUrl: require('../compontes/img/png8.png')
        }, {
          imgUrl: require('../compontes/img/png9.png')
        }
      ], [
        {
          imgUrl: require('../compontes/img/png7.png')
        }, {
          imgUrl: require('../compontes/img/png8.png')
        }, {
          imgUrl: require('../compontes/img/png9.png')
        }
      ], [
        {
          imgUrl: require('../compontes/img/png7.png')
        }, {
          imgUrl: require('../compontes/img/png8.png')
        }, {
          imgUrl: require('../compontes/img/png9.png')
        }
      ]],
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
      chart3: [[
        {
          name: '主体数量',
          value: 843,
          name1: '监管户数',
          value1: 1237,
          short: '药',
          img: require('../compontes/img/text-bg-blue.png')
        },
        {
          name: '主体数量',
          value: 2179,
          name1: '监管户数',
          value1: 1270,
          short: '妆',
          img: require('../compontes/img/text-bg-pink.png')
        },
        {
          name: '主体数量',
          value: 1236,
          name1: '监管户数',
          value1: 79,
          short: '械',
          img: require('../compontes/img/text-bg-purple.png')
        }
      ], [
        {
          name: '主体数量',
          value: 783,
          name1: '监管户数',
          value1: 1987,
          short: '药',
          img: require('../compontes/img/text-bg-blue.png')
        },
        {
          name: '主体数量',
          value: 2239,
          name1: '监管户数',
          value1: 1180,
          short: '妆',
          img: require('../compontes/img/text-bg-pink.png')
        },
        {
          name: '主体数量',
          value: 1276,
          name1: '监管户数',
          value1: 16,
          short: '械',
          img: require('../compontes/img/text-bg-purple.png')
        }
      ], [
        {
          name: '主体数量',
          value: 923,
          name1: '监管户数',
          value1: 1117,
          short: '药',
          img: require('../compontes/img/text-bg-blue.png')
        },
        {
          name: '主体数量',
          value: 2299,
          name1: '监管户数',
          value1: 1230,
          short: '妆',
          img: require('../compontes/img/text-bg-pink.png')
        },
        {
          name: '主体数量',
          value: 1906,
          name1: '监管户数',
          value1: 90,
          short: '械',
          img: require('../compontes/img/text-bg-purple.png')
        }
      ]],
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
      ],
      img_data3: [
        {
          imgUrl: require('../compontes/img/png10.png'),
          name: '主体数量',
          value: '943',
          name1: '监管户次',
          value1: '1337'
        }, {
          imgUrl: require('../compontes/img/png11.png'),
          name: '主体数量',
          value: '2149',
          name1: '监管户次',
          value1: '1200'
        }, {
          imgUrl: require('../compontes/img/png12.png'),
          name: '主体数量',
          value: '1456',
          name1: '监管户次',
          value1: '56'
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
</style>
