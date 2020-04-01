<template>
    <img src="./img/举报类型食品.png" v-if="data.name" class="ComplaintMapInfo"/>
</template>

<script>
export default {
  name: 'ComplaintMapInfo',
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
.ComplaintMapInfo {
    width: 100%;
}
</style>
