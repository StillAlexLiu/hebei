<template>
    <img src="./img/备案许可弹框.png" v-if="data.name" :alt="data.name" class="ComplaintMapInfo"/>
<!--    <div>{{data.name}}</div>-->
</template>

<script>
export default {
  name: 'KeepOnRecordMapInfo',
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
