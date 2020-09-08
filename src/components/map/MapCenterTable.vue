<template>
    <div class="mapCenterTable" :class="{full_hetght : flag}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MapInfoBlock',
  data () {
    return {
      flag: false
    }
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style scoped lang="less">
.mapCenterTable {
    position: absolute;
    top: 150px;
    left: 700px;
    // width: 1500px;
    // height: 95%;
    // overflow-y: auto;
}
.full_hetght{
    height: 60%;
}
</style>
