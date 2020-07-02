<template>
    <div class='SupervisionCenter'>
      <div class="close">
        <span @click="closeBox">×</span>
      </div>
      <div class="centerBox">
        <div class="w-4-5 full-height">
          <!-- <oneDayTour></oneDayTour> -->
          <oneDayDouble></oneDayDouble>
        </div>
        <div class="w-1-5 full-height">
          <Container class="full-width h-3-5" :title="'一日办地图'"></Container>
          <Container class="full-width h-2-5" :title="'数据对接监控'"></Container>
        </div>
      </div>
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
import oneDayTour from './componets/oneDayTour'
import oneDayDouble from './componets/oneDayDouble'
export default {
  name: 'SupervisionCenter',
    data() {
      return {
      }
  },
  components: {
    oneDayTour,
    oneDayDouble
  },
  created() {
  },
  mounted() {
  },
  methods: {
    closeBox () {
      Bus.$emit('getTarget', false)
    }
  }
}
</script>

<style scoped lang="less">
.SupervisionCenter{
    width: 100%;
    height: 97.5%;
    margin-top: 2.5%;
    background: rgba(25,27,48,1);
    .close{
      width: 100%;
      height: 50px;
      padding-right: 2%;
      font-size: 40px;
      text-align: right;
      span {
        cursor: pointer;
      }
    }
    .centerBox{
      width: 100%;
      height: calc(~"100% - 50px - 4.5%");
    }
}
</style>
