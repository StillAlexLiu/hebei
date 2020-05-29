<template>
    <div class='Page4R'>
        <container class="h-1-3 w-1-2" title="特种设备安全监察力量">
            <NumberGroupPage4 class="w-1-3 full-height" :data="listData"/>
            <ContainerCenterTitle2 class="w-2-3 full-height" title="安全监察人员情况">
                <ChartsPie :double-pie="true" :data="pieData" :center-data="pieCenterData"
                           :color="['#FFBF24','#FE6941','#55B0EE','#8A7CEF','#25DD54','#5FE7DC']" :show-value="true"/>
            </ContainerCenterTitle2>
        </container>
        <container class="h-1-3 w-1-2" title="特种设备检验检测力量">
            <ChartsScatter :dimensions="['name','value','size']" :data="scatterData" :base-size="8"
                           :unit="'个'"
                           :showX="false"
                           :colors="['#50E3C2','#FF9177','#00B1FA','#8A7CEF','#FFE17D','#00E138','#FF7B83']"/>
        </container>
        <container class="h-1-3 w-1-2">
            <ChartsPiePiecewise :data="pieData2" :title="'总数\n3278'" :titleSize="48"/>
        </container>
        <container class="h-1-3 w-1-2">
            <ChartsBarLine :data="linesData" :legend="['持证人数']"
                           :type="['line']"
                           :two-axis="false"
                           :units="['人']"
                           :colors="['#61EADF']"
                           :dimensions="['name','value']"/>
        </container>
        <container class="h-1-3 w-1-1">
            <div class="w-2-10 full-height">
                <tab class="full" :data="tabData"/>
            </div>
            <container-center-title2 class="w-3-10 full-height" title="发现问题情况">
                <ChartsPie :data="pieData3" :is-pie="true" :show-legend="false" show-value unit="条"/>
            </container-center-title2>
            <container-center-title2 class="w-5-10 full-height" title="检验数量趋势">
                <ChartBar :data="barData" :dimensions="['name','value']"
                          :unit="'台'"/>
            </container-center-title2>
        </container>
    </div>
</template>

<script>
import NumberGroupPage4 from '../compontes/NumberGroupPage4'
import Mock from 'mockjs'
import Tab from '../compontes/Tab'
import ChartBar from '../compontes/ChartBar'

export default {
  name: 'Page4R',
  components: { ChartBar, Tab, NumberGroupPage4 },
  data () {
    return {
      tabData: [
        {
          name: '制造监督检验',
          value: '0'
        },
        {
          name: '安装改造维修监督检验',
          value: '1'
        },
        {
          name: '定期检验',
          value: '2'
        }],
      listData: [{
        name: '专职监察机构/个',
        value: '193'
      }, {
        name: '兼职监察机构/个',
        value: '168'
      }],
      pieData: [{
        name: '省级',
        value: Mock.Random.natural(100, 200)
      }, {
        name: '地市级',
        value: Mock.Random.natural(100, 200)
      }, {
        name: '区县级',
        value: Mock.Random.natural(100, 200)
      }, {
        name: '区县派出机构',
        value: Mock.Random.natural(100, 200)
      }],
      pieCenterData: [{
        name: 'A类',
        value: Mock.Random.natural(10, 200)
      }, {
        name: 'B类',
        value: Mock.Random.natural(10, 200)
      }],
      scatterData: [{
        name: '起重机械检验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '无损检测机',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '综合机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '设计文件鉴定机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '安全阀校验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '能效测试机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '气瓶检验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }],
      pieData2: [{
        name: '锅炉',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力容器',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力管道',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '电梯',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '起重机械',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '安全附件',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力管道元件制造单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '移动式压力容器',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '气瓶充装单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '车用气瓶安装单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '大型游乐设施安装改造单位',
        value: Mock.Random.natural(10, 200)
      }],
      linesData: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000)
      }],
      pieData3: [{
        name: '焊接方面',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '材料方面',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '出厂资料',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '其他',
        value: Mock.Random.natural(10, 100)
      }],
      barData: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000)
      }]
    }
  }
}
</script>

<style scoped lang="less">
.Page4R {
}
</style>
