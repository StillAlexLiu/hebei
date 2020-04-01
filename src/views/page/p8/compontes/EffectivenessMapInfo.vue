<template>
    <div v-if="data.name" class="EffectivenessMapInfo">
        <container-info>
            <div style="height: 50px;font-size:20px">{{data.name}}考勤率</div>
            <ChartLiquidfill style="height: 300px" :data="liquidfull"/>
        </container-info>
    </div>
</template>

<script>
import ChartLiquidfill from './ChartLiquidfill'
import Mock from 'mockjs'

export default {
  name: 'EffectivenessMapInfo',
  components: { ChartLiquidfill },
  data () {
    return {
      liquidfull: ['', Mock.Random.natural(70, 100)]
    }
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler: function () {
        this.liquidfull = ['', Mock.Random.natural(70, 100)]
      }
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.EffectivenessMapInfo {
    height: 400px;
}
</style>
