<template>
    <div class="full-width full-height">
        <div v-if="JSON.stringify(p1)!=='null'" class="info full">
            <table-base-info class="h-1-4" v-if="p1" :data="p1"/>
            <div class="h-3-4" style="padding-top: 20px">
                <tab-table class="full" :data="p1"/>
            </div>
        </div>
        <template v-else>
            <div class="h-1-3">
                <container title="企业年报" class=" w-1-2 full-height ">
                    <div class="full-height w-1-4 text-center">
                        <img src="./componets/img/rlt.png" alt="" style="width: 100%;padding: 70px 20px;"/>
                    </div>
                    <div class="w-3-4 full-height" style="padding: 20px 0">
                        <BorderInOut class="full" :data="dataTop"/>
                    </div>
                </container>
                <container title="公示抽查" class="w-1-2  full-height">
                    <NumberGroup4 :data="NumberGroup5Data"/>
                </container>
            </div>
            <container class="h-1-3 full-width" title="信用约束">
                <div class="full-height w-1-5">
                    <NumberGroup2 :data='numberData' class="full"/>
                </div>
                <div class="w-4-5 full-height">
                    <numberPie :data2='pieData'/>
                </div>
            </container>
            <div class="h-1-3 full-width">
                <container title="失信惩戒" class="full-height w-1-2">
                    <container-info class="full">
                        <chart-mountain :data="mountainData"/>
                    </container-info>
                </container>
                <container title="守信激励" class="full-height w-1-2">
                    <NumberGroup4 :data="NumberGroup4Data"/>
                </container>
            </div>
        </template>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import TableBaseInfo from './componets/TableBaseInfo'
import TabTable from './componets/tabTable'
import NumberGroup2 from './componets/numberGroup2'
import Mock from 'mockjs'
import numberPie from './componets/numberPie'
import ChartMountain from './componets/ChartMountain'
import NumberGroup4 from './componets/NumberGroup4'
import BorderInOut from './componets/borderInOut'

export default {
  name: 'p1right',
  components: {
    BorderInOut,
    NumberGroup4,
    ChartMountain,
    TabTable,
    TableBaseInfo,
    NumberGroup2,
    numberPie,
  },
  computed: {
    ...mapState({
      p1: 'p1'
    })
  },
  watch: {
    p1: {
      immediate: true,
      deep: true,
      handler: function () {
        // this.getTableData(this.p1)
      }
    }
  },
  props: {
    showDetail: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    console.log(this.$store.state)
  },
  data () {
    return {
      rightTop: [
        [
          {
            name: '今日叫号数',
            num: Mock.Random.natural(1000, 20000)
          },
          {
            name: '环比',
            num: '0.14',
            jiantou: 1
          }
        ],
        [
          {
            name: '今日叫号数',
            num: Mock.Random.natural(1000, 20000)
          },
          {
            name: '环比',
            num: '0.14',
            jiantou: 2
          }
        ]
      ],

      group3: [
        {
          name: '个体户',
          num: Mock.Random.natural(100, 2000)
        }, {
          name: '企业',
          num: Mock.Random.natural(100, 2000)
        }, {
          name: '高校',
          num: Mock.Random.natural(100, 2000)
        }, {
          name: '科研组织',
          num: Mock.Random.natural(100, 2000)
        }
      ],
      barData2: [
        {
          name: '01/21',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '01/22',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '01/26',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '01/27',
          value: Mock.Random.natural(100, 2000)
        }
      ],
      videoUrl: this.$dataAll.videoUrl,
      imgUrl1: {
        img1: require('./componets/img/png5.png'),
        img2: require('./componets/img/png6.png')
      },
      imgUrl2: {
        img1: require('./componets/img/png7.png'),
        img2: require('./componets/img/png8.png')
      },
      numberData: [
        {
          name1: '经营异常企业',
          num1: Mock.Random.natural(100, 2000)
        }
      ],
      pieData: [
        {
          num: Mock.Random.natural(1000, 2000),
          name: '列严',
          img: require('./componets/img/jingyingyichang3.png')
        },
        {
          num: Mock.Random.natural(1000, 2000),
          name: '列异',
          img: require('./componets/img/31.png')
        }, {
          num: Mock.Random.natural(1000, 2000),
          name: '移出',
          img: require('./componets/img/32.png')
        }
      ],
      mountainData: [
        {
          name: '清理“僵尸”企业',
          value: Mock.Random.natural(100, 500)
        },
        {
          name: '失信企业股权冻结',
          value: Mock.Random.natural(100, 500)
        },
        {
          name: '预警企业内部监控',
          value: Mock.Random.natural(100, 500)
        }
      ],
      NumberGroup4Data: [
        {
          name: '诚信典型',
          img: require('./componets/img/诚信典型.png'),
          value: Mock.Random.natural(100, 500),
          unit: '户'
        },
        {
          name: '绿色通道',
          img: require('./componets/img/绿色通道.png'),
          value: Mock.Random.natural(100, 500),
          unit: '户次'
        },
        {
          name: '容缺受理',
          img: require('./componets/img/容缺受理.png'),
          value: Mock.Random.natural(100, 500),
          unit: '户次'
        }
      ],
      NumberGroup5Data: [
        {
          name: '抽查总数（家）',
          img: require('./componets/img/ri1.png'),
          value: Mock.Random.natural(100, 500),
          unit: ''
        },
        {
          name: '完成率',
          img: require('./componets/img/ri2.png'),
          value: Mock.Random.natural(100, 500),
          unit: ''
        },
        {
          name: '正常率',
          img: require('./componets/img/ri3.png'),
          value: Mock.Random.natural(100, 500),
          unit: ''
        }
      ],
      dataTop: [
        {
          name: '应报（件）',
          value: Mock.Random.natural(100, 500)
        },
        {
          name: '已报（件）',
          value: Mock.Random.natural(100, 500)
        },
        {
          name: '公示率',
          value: Mock.Random.natural(10, 90) + '%'
        }
      ]
    }
  },
  methods: {
    // getTableData (data) {
    //   console.log(data)
    //   this.tableData = data
    // }
  }
}
</script>

<style scoped lang="less">
* {
    box-sizing: border-box;
}

.pd {
    padding: 10px;
}

.info {
    padding: 20px;
}

.border {
    border: 1px solid #22aec5;
}

.hall {
    background-color: #132831;
    font-size: 24px;
    line-height: 90px;
    text-indent: 50px;
    font-weight: bold;

    > span {
        background-color: #1e8db0;
        padding: 10px 15px;
        border-radius: 30px;
    }
}

.player {
    padding: 1px;
}

</style>
