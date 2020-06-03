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
            <container-center-title2 class="full-height w-1-2" title="抽查批次趋势">3</container-center-title2>
            <container-center-title2 class="full-height w-1-2" title="抽查不合格项分析">4</container-center-title2>
        </container>
        <container class="h-4-11 w-1-2" title="劣质散煤管控">5</container>
        <container class="h-4-11 w-1-2" title="成品油市场整治">6</container>
    </div>
</template>

<script>
import ProductGroup from '../compontes/ProductGroup'

export default {
  name: 'Page3R',
  components: { ProductGroup },
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
      }]
    }
  }
}
</script>

<style scoped lang="less">
.Page3R {
}
</style>
