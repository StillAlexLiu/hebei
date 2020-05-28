<template>
    <div class='Page4R'>
        <container class="h-1-3 w-1-2">
            <NumberGroupPage4 class="w-1-3 full-height" :data="listData"/>
            <ContainerCenterTitle2 class="w-2-3 full-height" title="安全监察人员情况">
                <ChartsPie :double-pie="true" :data="pieData" :center-data="pieCenterData"
                           :color="['#FFBF24','#FE6941','#55B0EE','#8A7CEF','#25DD54','#5FE7DC']" :show-value="true"/>
            </ContainerCenterTitle2>
        </container>
        <container class="h-1-3 w-1-2"></container>
        <container class="h-1-3 w-1-2"></container>
        <container class="h-1-3 w-1-2"></container>
        <container class="h-1-3 w-1-1"></container>
    </div>
</template>

<script>
import NumberGroupPage4 from '../compontes/NumberGroupPage4'
import Mock from 'mockjs'

export default {
  name: 'Page4R',
  components: { NumberGroupPage4 },
  data () {
    return {
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
      }]
    }
  }
}
</script>

<style scoped lang="less">
.Page4R {
}
</style>
