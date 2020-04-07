<template>
    <container-calc type="tb" :number="50" class="EntityLeft full-width full-height">
        <div slot="calc" class="border full-width full-height">
            <container class="full-width h-1-3" title="各部门抽查情况">
              <ChartBar :data='barData' />
            </Container>
            <Container class="w-1-2 h-1-3" title="跨部门抽查情况">
              <tableHeader :data='numList'/>
            </Container>
            <Container class="w-1-2 h-1-3" title="抽查户数">
              <div class="w-1-3 full-height">
                <NumberLeft :data='dataNumber2' />
              </div>
              <div class="w-2-3 full-height">
                <echartsAccrossBar :data='accrossData' />
              </div>
            </Container>
            <Container class="w-1-2 h-1-3" title="检查方式">
              <NumberForEntity :data="dataNumber" class="full"/>
            </Container>
            <Container class="w-1-2 h-1-3" title="检查结果公示">
              <echartsPie :data='chart3' />
            </Container>
        </div>
    </container-calc>
</template>

<script>
import ChartBar from '../compontes/echarts-xxbar'
import tableHeader from '../compontes/table'
import NumberForEntity from '../../p0/components/NumberForEntity'
import echartsPie from '../../p5/compontes/complaintPie'
import Mock from 'mockjs'
import NumberLeft from '../compontes/NumberLeft'
import echartsAccrossBar from '../compontes/echarts-accrossBar'
export default {
  name: 'page5Right',
  components: {
    ChartBar,
    tableHeader,
    NumberForEntity,
    echartsPie,
    NumberLeft,
    echartsAccrossBar
  },
  data () {
    return {
      barData: {
        xdata: ['省房管局', '省民房办', '省归土局', '吴卫计委', '省公安分局', '省文广局', '省市监局', '省发改委', '省司法局', '省建管委', '省交通委', '省民政局', '省人保局', '省安监局', '省财政局', '省农委', '省环保局', '省经委', '省水务局'],
        ydata: [Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800),
          Mock.Random.natural(2000, 4800)]
      },
      numList: [{
        place_name: ' 电商物流港',
        place_property: '商业综合体',
        total: Mock.Random.natural(2000, 4800)
      },
      {
        place_name: ' 天地（商场）',
        place_property: '商业综合体',
        total: Mock.Random.natural(2000, 4800)
      },
      {
        place_name: '龙湖天街（商场）',
        place_property: '商业综合体',
        total: Mock.Random.natural(2000, 4800)
      }
      ],
      dataNumber: [{
        name: '实地调查',
        value: Mock.Random.natural(100, 1800),
        icon: require('../../p0/components/img/n1.png')
      }, {
        name: '网络测试',
        value: Mock.Random.natural(100, 1800),
        icon: require('../../p0/components/img/n2.png')
      }, {
        name: '书面检查',
        value: Mock.Random.natural(2000, 4800),
        icon: require('../../p0/components/img/n3.png')
      }],
      chart3: [
        { name: '12345市民热线', value: '21583', percent: '' },
        { name: '12358价格热线', value: '357', percent: '' },
        { name: '全国12315热线', value: '25039', percent: '' },
        { name: '12331热线', value: '6332', percent: '' },
        { name: '网格化平台', value: '1602', percent: '' },
        { name: '12315消费热线', value: '19557', percent: '' },
        { name: '12365质量热线', value: '1123', percent: '' }
      ],
      dataNumber2: [{
        num: Mock.Random.natural(100, 1800),
        name: '抽查户数',
        dw: '户'
      }],
      accrossData: {
        ydata: ['省财政局', '省人保局', '省环保局', '省监局', '省交通委', '省建管委'],
        xdata: [Mock.Random.natural(1700, 1800), Mock.Random.natural(1600, 1700), Mock.Random.natural(1500, 1600), Mock.Random.natural(1400, 1500), Mock.Random.natural(1300, 1400), Mock.Random.natural(1200, 1300)]
      }
    }
  }
}
</script>

<style scoped lang="less">
.page5Right {

}
</style>
