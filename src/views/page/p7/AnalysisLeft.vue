<template>
    <!--    <container-calc type="tb" :number="50" class="AnalysisLeft full  block-padding">-->
    <!--        <template slot="fix">-->
    <!--            <RadioSimple :data="[{name:'市场准入'}]" class="w-1-4 full-height radio"/>-->
    <!--        </template>-->
    <!--        <div slot="calc" class="border full">-->
    <div class="AnalysisLeft full page-style">
        <div class="h-2-8">
            <container class="full-height w-1-2" title="一网通办办理事项">
                <pnglist :data='chart1'></pnglist>
            </container>
            <container class="full-height w-1-2" title="证照分离改革情况">
                <pnglist :data='chart2'></pnglist>
            </container>
        </div>
        <container class="h-3-8" title="监管基础">
            <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist2'/>
            </div>
            <div class="w-2-6 full-height">
                <ChartsPie :data='hellowPie2' :is-pie="true"/>
            </div>
            <div class="w-1-6 full-height">
                <charaterlist :data='charaterlist1'/>
            </div>
            <div class="w-2-6 full-height">
                <ChartsPie :data='hellowPie'/>
            </div>
        </container>
        <div class="h-3-8">
            <container class="full-height w-1-2" title="品牌力量">
                <number-group :data="numberGroup"/>
            </container>
            <container class="full-height w-1-2" title="标准化建设">
                <div class="w-3-7 full-height">
                    <ChartsPie :data="pieData" is-pie/>
                </div>
                <value-only class="w-4-7 full-height" :data="data3"/>
            </container>
        </div>
    </div>
    <!--    </container-calc>-->
</template>

<script>
import pnglist from './components/pnglist'
import charaterlist from './components/charaterlist'
import Mock from 'mockjs'
import NumberGroup from './components/numberGroup'
import ValueOnly from './components/valueOnly'
import ChartsPie from '../p2/compontes/ChartsPie'

export default {
  name: 'AnalysisLeft',
  components: {
    ChartsPie,
    ValueOnly,
    NumberGroup,
    pnglist,
    charaterlist
  },
  data () {
    return {
      chart1: [
        {
          imgurl: require('./components/img/1.png'),
          name: '入网办理事项',
          num: '25',
          dw: '件',
          gl: '5'
        }, {
          imgurl: require('./components/img/2.png'),
          name: '网上收件数',
          num: '10226',
          dw: '件',
          gl: '15'
        }, {
          imgurl: require('./components/img/3.png'),
          name: '平均办结时间',
          num: '1.5',
          dw: '天',
          gl: '25'
        }, {
          imgurl: require('./components/img/4.png'),
          name: '一次办结率',
          num: '100',
          dw: '%',
          gl: '35'
        }
      ],
      chart2: [
        {
          imgurl: require('./components/img/5.png'),
          name: '双告知数',
          num: '1246',
          dw: '件',
          gl: '0'
        }, {
          imgurl: require('./components/img/6.png'),
          name: '全程电子化数',
          num: '3',
          dw: '件',
          gl: '15'
        }, {
          imgurl: require('./components/img/7.png'),
          name: '食品许可告知承诺',
          num: '2560',
          dw: '件',
          gl: '5'
        }, {
          imgurl: require('./components/img/8.png'),
          name: '简易注销数',
          num: '106',
          dw: '户',
          gl: '1'
        }
      ],
      charaterlist1: {
        name: '检测机构情况',
        data: [
          {
            name: '总户数',
            num: 97
          }, {
            name: '新增主体',
            num: 3
          }
        ]
      },
      hellowPie: [
        {
          value: Mock.Random.natural(10, 70),
          name: '计量标准'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '医疗器械'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '药品'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '食品'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '产品质量'
        },
        {
          value: Mock.Random.natural(10, 70),
          name: '特种设备'
        }
      ],
      numberGroup: [
        {
          name: '产品品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x.png')
        },
        {
          name: '企业品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x(1).png')
        },
        {
          name: '区域品牌',
          value: Mock.Random.natural(10, 70),
          img: require('./components/img/icon／mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x(2).png')
        }
      ],
      pieData: [{
        name: '标准过期',
        value: Mock.Random.natural(10, 70)
      }, {
        name: '未申请标准化',
        value: Mock.Random.natural(10, 70)
      }, {
        name: '已标准化',
        value: Mock.Random.natural(10, 70)
      }],
      data3: {
        name: '标准示范企业',
        value: Mock.Random.natural(10, 70)
      },
      charaterlist2: {
        name: '数量',
        data: [
          {
            name: '总人数',
            num: '7217人'
          }, {
            name: '新增',
            num: '716人'
          }
        ]
      },
      hellowPie2: [
        {
          value: '1115',
          name: '执法人员'
        }, {
          value: '1250',
          name: '审查人员'
        }, {
          value: '1893',
          name: '雇员'
        }
      ],
      dobulePie: [
        {
          color: '#AD5F53',
          name: '注册数（户）',
          num: 982
        }, {
          color: '#278499',
          name: '注册资本（亿元）',
          num: 1.2
        }
      ],
      lines: {
        name: '本省',
        name1: '外省',
        name2: '外省2',
        line1Name: '迁入',
        line1Num: 1181,
        line2Name: '迁出',
        line2Num: 741
      }
    }
  }
}
</script>

<style scoped lang="less">
.AnalysisLeft {

}
</style>
