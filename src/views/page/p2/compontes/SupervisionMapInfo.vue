<template>
    <div class="SupervisionMapInfo">
        <img src="./img/食品弹框.png" style="width: 100%" v-if="data.name==='综合监管'"/>
        <img src="./img/食品弹框.png" style="width: 100%" v-else-if="data.name==='智慧食品监管'"/>
        <ElevatorInfo v-else-if="data.name==='特种设备监管'" :data="data"/>
        <roll-table v-else :data="table" :dimension="dimension" class="full-width"/>
    </div>
</template>

<script>
import ElevatorInfo from './ElevatorInfo'

export default {
  name: 'SupervisionMapInfo',
  components: { ElevatorInfo },
  props: {
    table: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dimension: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.SupervisionMapInfo {

}
</style>
