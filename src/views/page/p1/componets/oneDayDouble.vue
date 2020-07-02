<template>
    <div class='oneDayDouble'>
        <div class="full-width h-1-3">
           <container class="w-1-2 full-height" :title="'一日办注册工作开展情况'">
               <NumberGroup4 :data='numberData2' class="full-height w-1-4"></NumberGroup4>
                <div class="w-3-4 full-height">
                    <ChartsBarLine :data='chart10' :dimensions="['name','value']" :legend="['一日办主体数量']"
                               :type="['line']" :colors="['#61EADF']"  :units="['单位：家']"/>
                </div>
            </container>
            <container class="w-1-2 full-height" :title="'一日办成效'">
                <div class="w-1-4 full-height" v-for="(item, index) in expenseGoal" :key="index">
                    <onlyOneBox :data='item'></onlyOneBox>
                </div>
            </container> 
        </div>
        <container class="full-width h-1-3" :title="'一日办工作开展情况'">
            <container-center-title2 title="一窗采集情况" class="full-height w-1-2">
                <NumberGroup :data='numberData' class="full-height w-1-3"></NumberGroup>
                <div class="w-2-3 full-height">
                    <comPlaintBarR :data='chart3' legend="受理数量"></comPlaintBarR>
                </div>
            </container-center-title2>
            <container-center-title2 title="一日办结情况" class="full-height w-1-2">
                <NumberGroup4 :data='numberData2' class="full-height w-1-3"></NumberGroup4>
                <div class="w-2-3 full-height">
                    <ChartsBarLine :data='rightLine' :dimensions="['name','value']"
                               :legend="['执法办案趋势']"
                               :colors="['#55B0EE']"
                               :is-area="true"
                               :units="['数量(件)']"
                               :type="['line']"/>
                </div>
            </container-center-title2>
        </container>
        <div class="full-height h-1-3">
            <container-center-title2 title="各局办理情况" class="full-height w-1-2">

            </container-center-title2>
            <container-center-title2 title="各市办理情况" class="full-height w-1-2">
                <div class="full-width h-1-5">

                </div>
                <div class="full-width h-4-5">
                    <ChartsBarLine :data="barData2" :dimensions="['name','value']" :units="['%']"
                               :type="['bar']"
                               :border-radius="false"
                               :bar-width="56"
                               :legend="['通过率']"
                               :colors="[barColor]"/>
                </div>
            </container-center-title2>
        </div>
    </div>
</template>

<script>
import onlyOneBox from './onlyOneBox'
import Mock from 'mockjs'
import NumberGroup from '../../p0/components/NumberGroup'
import comPlaintBarR from '../../p5/compontes/comPlaintBarR'
import NumberGroup4 from '../componets/NumberGroup4'
import echarts from 'echarts'
export default {
  components: {
    onlyOneBox,
    NumberGroup,
    comPlaintBarR,
    NumberGroup4
  },
  data() {
    return {
      expenseGoal: [
        {
            name: '减少材料提交',
            num: '1.2',
            unit: '份'
        }, {
            name: '节约办理时长',
            num: '3',
            unit: '小时'
        }, {
            name: '减少办理环节',
            num: '3083',
            unit: '个'
        }, {
            name: '减少办理费用',
            num: '523',
            unit: '元'
        }
      ],
      numberData: [
        {
          name: '今日受理/件',
          value: Mock.Random.natural(100, 2000)
        }, {
          name: '累计受理/件',
          value: Mock.Random.natural(100, 2000)
        }
      ],
      numberData2: [
        {
          name: '一日办主体/家',
          value: Mock.Random.natural(100, 2000)
        }
      ],
      chart3: {
        xdata: [
          '2016',
          '2017',
          '2018',
          '2019',
          '2020'
        ],
        ydata: [
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000),
          Mock.Random.natural(100, 2000)
        ]
      },
      chart10: [{
        name: '1月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '2月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '3月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '4月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '5月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '6月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '7月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '8月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '9月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '10月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '11月',
        value: Mock.Random.natural(75, 100)
      }, {
        name: '12月',
        value: Mock.Random.natural(75, 100)
      }],
      rightLine: [
        {
          name: '1月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '2月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '3月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '4月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '5月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '6月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '7月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '8月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '9月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '10月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '11月',
          value: Mock.Random.natural(500, 1000)
        }, {
          name: '12月',
          value: Mock.Random.natural(500, 1000)
        }
      ],
      barData2: [
        {
          name: '食品',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '药械',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '特种设备',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '计量',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '广告',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '实验室',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '工业产量',
          value: Mock.Random.natural(0, 100)
        }, {
          name: '化妆品',
          value: Mock.Random.natural(0, 100)
        }
      ],
      barColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        {
          offset: 0,
          color: 'rgba(79, 255, 148, 0.68)'
        },
        {
          offset: 1,
          color: 'rgba(79, 255, 245, 0.4)'
        }
      ])
    }
  }
}
</script>

<style scoped lang="less">
 .oneDayDouble {
    width: 100%;
    height: 100%;
    background:rgba(35,37,57,0.75);
    border:2px solid rgba(57,131,197,0.69)
 }
</style>
