<template>
    <div class="MonitorRight full">
        <!--        idKey用于多地图实例切换不冲突-->
        <CenterMap class="full" :idKey="23"/>
    </div>
</template>

<script>
import CenterMap from '../map/CenterMap'

export default {
  name: 'MonitorRight',
  components: { CenterMap }
}
</script>

<style scoped lang="less">
.MonitorRight {
    padding: 30px 30px 30px 0;
}
</style>
