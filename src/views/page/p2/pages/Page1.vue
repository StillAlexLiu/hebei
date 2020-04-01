<template>
    <div class="Page1 full">
        <container class="h-2-8" title="综合监管">
            <NumberGroup :data='chart1[dimension]' :img='img_data1' ></NumberGroup>
        </container>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="智慧食品监管">
              <NumberGroup2 :accept_data='chart2[dimension]' :img='img_data2[dimension]' ></NumberGroup2>
            </container>
            <container class="w-1-2 full-height" title="智慧药械监管">
              <NumberGroup2 :accept_data='chart3[dimension]' :img='img_data3' ></NumberGroup2>
            </container>
        </div>
        <div class="h-3-8">
            <container class="w-1-3 full-height" title="特种设备监管">
              <NumberElevator :data='chart4[dimension]'></NumberElevator>
            </container>
            <container class="w-2-3 full-height" title="双随机监管">
              <div class="w-1-3 full-height" v-for="(item, index) in chart5[dimension]" :key="index">
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
      img_data1: [
        {
          imgUrl: require('../compontes/img/png1.png')
        }, {
          imgUrl: require('../compontes/img/png2.png')
        }, {
          imgUrl: require('../compontes/img/png3.png')
        }, {
          imgUrl: require('../compontes/img/png4.png')
        }, {
          imgUrl: require('../compontes/img/png5.png')
        }, {
          imgUrl: require('../compontes/img/png6.png')
        }
      ],
      chart1: [[
        {
          name: '综合监管',
          num: 4032,
          unit: '户次'
        },
        {
          name: '智能预警',
          num: 2108,
          unit: '户次'
        },
        {
          name: '无证无照',
          num: 134,
          unit: '户次'
        },
        {
          name: '投诉举报',
          num: 1940,
          unit: '件'
        },
        {
          name: '场地查看',
          num: 230,
          unit: '件'
        },
        {
          name: '案件管理',
          num: 122,
          unit: '件'
        }
      ], [
        {
          name: '综合监管',
          num: 3932,
          unit: '户次'
        },
        {
          name: '智能预警',
          num: 2208,
          unit: '户次'
        },
        {
          name: '无证无照',
          num: 154,
          unit: '户次'
        },
        {
          name: '投诉举报',
          num: 1740,
          unit: '件'
        },
        {
          name: '场地查看',
          num: 590,
          unit: '件'
        },
        {
          name: '案件管理',
          num: 122,
          unit: '件'
        }
      ], [
        {
          name: '综合监管',
          num: 4132,
          unit: '户次'
        },
        {
          name: '智能预警',
          num: 1908,
          unit: '户次'
        },
        {
          name: '无证无照',
          num: 124,
          unit: '户次'
        },
        {
          name: '投诉举报',
          num: 1240,
          unit: '件'
        },
        {
          name: '场地查看',
          num: 300,
          unit: '件'
        },
        {
          name: '案件管理',
          num: 112,
          unit: '件'
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
          name1: '主体数量',
          num1: 150,
          name2: '监管户数',
          num2: 397
        },
        {
          name1: '主体数量',
          num1: 11848,
          name2: '监管户数',
          num2: 17875
        },
        {
          name1: '主体数量',
          num1: 10680,
          name2: '监管户数',
          num2: 26605
        }
      ], [
        {
          name1: '主体数量',
          num1: 129,
          name2: '监管户数',
          num2: 487
        },
        {
          name1: '主体数量',
          num1: 13568,
          name2: '监管户数',
          num2: 14575
        },
        {
          name1: '主体数量',
          num1: 14670,
          name2: '监管户数',
          num2: 21685
        }
      ], [
        {
          name1: '主体数量',
          num1: 120,
          name2: '监管户数',
          num2: 337
        },
        {
          name1: '主体数量',
          num1: 18648,
          name2: '监管户数',
          num2: 14685
        },
        {
          name1: '主体数量',
          num1: 10256,
          name2: '监管户数',
          num2: 21215
        }
      ]],
      chart3: [[
        {
          name1: '主体数量',
          num1: 843,
          name2: '监管户数',
          num2: 1237
        },
        {
          name1: '主体数量',
          num1: 2179,
          name2: '监管户数',
          num2: 1270
        },
        {
          name1: '主体数量',
          num1: 1236,
          name2: '监管户数',
          num2: 79
        }
      ], [
        {
          name1: '主体数量',
          num1: 783,
          name2: '监管户数',
          num2: 1987
        },
        {
          name1: '主体数量',
          num1: 2239,
          name2: '监管户数',
          num2: 1180
        },
        {
          name1: '主体数量',
          num1: 1276,
          name2: '监管户数',
          num2: 16
        }
      ], [
        {
          name1: '主体数量',
          num1: 923,
          name2: '监管户数',
          num2: 1117
        },
        {
          name1: '主体数量',
          num1: 2299,
          name2: '监管户数',
          num2: 1230
        },
        {
          name1: '主体数量',
          num1: 1906,
          name2: '监管户数',
          num2: 90
        }
      ]],
      chart4: [{
        name: '全省特种设备总数',
        num: 892
      }, {
        name: '全省特种设备总数',
        num: 723
      }, {
        name: '全省特种设备总数',
        num: 870
      }],
      chart5: [[
        {
          name: '发布任务',
          num: 369
        },
        {
          name: '涉及主体',
          num: 369
        },
        {
          name: '完成检查',
          num: 151
        }
      ], [
        {
          name: '发布任务',
          num: 569
        },
        {
          name: '涉及主体',
          num: 578
        },
        {
          name: '完成检查',
          num: 129
        }
      ], [
        {
          name: '发布任务',
          num: 169
        },
        {
          name: '涉及主体',
          num: 299
        },
        {
          name: '完成检查',
          num: 567
        }
      ]],
      img_data3: [
        {
          imgUrl: require('../compontes/img/png10.png'),
          name1: '主体数量',
          num1: '943',
          name2: '监管户次',
          num2: '1337'
        }, {
          imgUrl: require('../compontes/img/png11.png'),
          name1: '主体数量',
          num1: '2149',
          name2: '监管户次',
          num2: '1200'
        }, {
          imgUrl: require('../compontes/img/png12.png'),
          name1: '主体数量',
          num1: '1456',
          name2: '监管户次',
          num2: '56'
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
