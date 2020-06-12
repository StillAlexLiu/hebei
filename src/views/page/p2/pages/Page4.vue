<template>
    <div class="Page4 full">
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="特种设备监管">
                <NumberElevator :data='chart4[dimension]'></NumberElevator>
            </container>
            <container class="w-1-2 full-height" title="全省特种设备增长趋势">
                <ChartsBarLine :data='chart5' :dimensions="['name','value']"
                               :type="['line']"
                               :colors="['#61EADF']"
                               :units="['单位：台']"
                               :legend="['特种设备数量']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="特种设备类型分布">
                <ChartsPie :data='hellowPie2' is-pie/>
            </container>
            <container class="w-1-2 full-height" title="特种设备各地区分布">
                <ChartsBarLine :data='chart3[dimension].data' :dimensions="['name','value']" :type="['bar']"
                               :colors="[barColor]"
                               :border-radius="true"
                               :units="['单位：台']"
                               :legend="['特种设备数量']"></ChartsBarLine>
            </container>
        </div>
        <div class="h-1-3">
            <container class="w-1-2 full-height" title="二维码覆盖情况">
                <ChartsPiePiecewise :data='chart6.data'
                                    :show-value="true"
                                    :img="chart6.img"></ChartsPiePiecewise>
            </container>
            <container class="w-1-2 full-height" title="老旧特种设备占比">
                <chartsPie :data='hellowPie' :is-percent="true"/>
                <!-- <ChartsPiePercentMode :data="pieDataPercent"/> -->
                <!--                <echartsliqudfill :data='liquidfull[dimension]'></echartsliqudfill>-->
            </container>
        </div>
    </div>
</template>
<script>
import NumberElevator from '../compontes/Number-elevator'
import Mock from 'mockjs'
import echarts from 'echarts'
// import InfoCard from '../compontes/InfoCard'
// import ChartsPiePercentMode from '../compontes/ChartsPiePercentMode'
import chartsPie from '../compontes/echartsPie'
export default {
  name: 'Page4',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
    // ChartsPiePercentMode,
    // InfoCard,
    chartsPie,
    NumberElevator
  },
  data: () => {
    return {
      hellowPie: {
        name: ' ',
        num: 8,
        sum: 2380
      },
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
      chart4: [{
        name: '全省特种设备总量',
        value: 31106
      }, {
        name: '全省特种设备总量',
        value: 38106
      }, {
        name: '全省特种设备总量',
        value: 47106
      }],
      chart5: [
        {
          name: '2010',
          value: '11'
        },
        {
          name: '2011',
          value: '25'
        },
        {
          name: '2012',
          value: '30'
        },
        {
          name: '2013',
          value: '40'
        },
        {
          name: '2014',
          value: '41'
        },
        {
          name: '2015',
          value: '54'
        },
        {
          name: '2016',
          value: '56'
        },
        {
          name: '2017',
          value: '60'
        },
        {
          name: '2018',
          value: '61'
        },
        {
          name: '2019',
          value: '70'
        },
        {
          name: '2020',
          value: '73'
        }],
      chart6: {
        title: '市场主体行业分布',
        img: require('./../compontes/img/qr.png'),
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
      },
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
      hellowPie2: [
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
      ],
      pieDataPercent: {
        name: '',
        value: '2380',
        percent: '5',
        unit: '件'
      }
    }
  }
}
</script>
<style scoped lang="less">
.Page4 {

}
</style>
