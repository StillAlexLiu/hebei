<template>
    <div class='Page3R'>
        <container class="h-3-11" title="工许获证情况">
            <container-center-title2 class="full-height w-5-9" title="国发证310家">
                <ProductGroup :data="group1"/>
            </container-center-title2>
            <container-center-title2 class="full-height w-4-9" title="省发证1824家">
                <ProductGroup :data="group2"/>
            </container-center-title2>
        </container>
        <container class="h-4-11" title="食品相关产品安全情况">
            <container-center-title2 class="full-height w-1-2" title="抽查批次趋势">
                <ChartsBarLine :data="lineData" :type="['line']" :legend="['抽查批次']" :dimensions="['name','value']"
                               :units="['批次']" :colors="['#61EADF']"/>
            </container-center-title2>
            <container-center-title2 class="full-height w-1-2" title="抽查不合格项分析">
                <ChartsPie :data="pieData" :legend-position="'left'" :show-all="true"/>
            </container-center-title2>
        </container>
        <container class="h-4-11 w-1-2" title="劣质散煤管控">
            <NumberGroupRight3 class="w-1-4 full-height" :data="group3"/>
            <div class="w-3-4 full-height">
                <ChartsBarLine :data="barLineData" :type="['bar','line']" :legend="['批次','合格率']"
                               :dimensions="['name','value','value1']"
                               :units="['批次','合格率']" :colors="['#87A0F6','#79DFEF']"/>
            </div>
        </container>
        <container class="h-4-11 w-1-2" title="成品油市场整治">
            <NumberGroupRight3 class="w-1-4 full-height" :data="group4"/>
            <div class="w-3-4 full-height">
                <ChartsBarLine :data="barLineData1" :type="['bar','line']" :legend="['批次','合格率']"
                               :dimensions="['name','value','value1']"
                               :units="['批次','合格率']" :colors="['#5DC3FF','#FF997D']"/>
            </div>
        </container>
    </div>
</template>

<script>
import ProductGroup from '../compontes/ProductGroup'
import Mock from 'mockjs'
import NumberGroupRight3 from '../compontes/NumberGroupRight3'

export default {
  name: 'Page3R',
  components: { NumberGroupRight3, ProductGroup },
  data () {
    return {
      group1: [{
        name: '建筑用钢筋',
        short: '筋',
        img: 'red',
        value: '52',
        unit: '家'
      }, {
        name: '广播电视传输',
        short: '设',
        img: 'skyBlue',
        value: '52',
        unit: '家'
      }, {
        name: '水泥',
        short: '泥',
        img: 'blue',
        value: '52',
        unit: '家'
      }, {
        name: '预应力混凝土铁路桥简支梁',
        short: '土',
        img: 'green',
        value: '52',
        unit: '家'
      }, {
        name: '人民币鉴别仪',
        short: '仪',
        img: 'orange',
        value: '52',
        unit: '家'
      }],
      group2: [{
        name: '电线电缆',
        short: '电',
        img: 'skyBlue',
        value: '52',
        unit: '家'
      }, {
        name: '危险化学品',
        short: '化',
        img: 'pinkPurple',
        value: '52',
        unit: '家'
      }, {
        name: '危险化学品包装物',
        short: '包',
        img: 'yellow',
        value: '52',
        unit: '家'
      }, {
        name: '化肥',
        short: '肥',
        img: 'darkBlue',
        value: '52',
        unit: '家'
      }],
      lineData: [{
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
      }],
      pieData: [{
        name: '氧气透过量',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '总活性物质',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '剥离力',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '三聚氰胺迁移量',
        value: Mock.Random.natural(500, 1000)
      }, {
        name: '其他',
        value: Mock.Random.natural(500, 1000)
      }],
      group3: [{
        name: '立案',
        value: '52',
        unit: '起'
      }, {
        name: '结案',
        value: '52',
        unit: '起'
      }, {
        name: '取缔无照经营',
        value: '52',
        unit: '户'
      }],
      group4: [{
        name: '立案',
        value: '52',
        unit: '起'
      }, {
        name: '结案',
        value: '52',
        unit: '家'
      }, {
        name: '责令整改通知',
        value: '52',
        unit: '户'
      }],
      barLineData: [
        {
          name: '1月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '2月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '3月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '4月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '5月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '6月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }
      ],
      barLineData1: [
        {
          name: '1月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '2月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '3月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '4月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '5月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }, {
          name: '6月',
          value: Mock.Random.natural(500, 1000),
          value1: Mock.Random.natural(50, 100)
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.Page3R {
}
</style>
