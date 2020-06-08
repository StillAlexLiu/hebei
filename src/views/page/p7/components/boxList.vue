<template>
    <div class='onleOneBox'>
      <div class="son" v-for="(item, index) in data" :key="index">
          <p class="sonName">{{ item.name }}</p>
          <p class="sonSum">{{ item.num }}<span>{{ item.unit }}</span> </p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .onleOneBox {
    width: 100%;
    height: 100%;
    position: flex;
    .son {
      width: 58%;
      height: 31%;
      margin: 2% auto;
      text-align: center;
      background: url('./img/img／mhzhjg_img_little_default@2x_wps图片.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: flex;
      position: relative;
      .sonSum{
        font-size:42px;
        position: absolute;
        bottom: 1%;
        width: 100%;
        font-family:LESLIE-Regular,LESLIE;
        font-weight:400;
        color:rgba(97,234,223,1);
        margin: 0;
        text-align: center;
        span {
          font-size:22px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(97,234,223,1);
        }
      }
      .sonName {
        width: 60%;
        margin: 2% auto;
        text-align: center;
        display: inline-block;
        font-family:PingFangSC-Medium,PingFang SC;
        font-size: 26px;
        font-weight:500;
      }
    }
  }
</style>
