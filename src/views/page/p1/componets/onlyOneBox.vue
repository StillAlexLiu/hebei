<template>
    <div class='onleOneBox'>
      <div class="son">
          <p class="sonName">{{ data.name }}</p>
          <p class="sonSum">{{ data.num }}<span>{{data.unit}}</span> </p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
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
      width: 100%;
      height: 70%;
      text-align: center;
      margin: 20% auto 5%;
      background: url('../../p7/components/img/img／mhzhjg_img_little_default@2x_wps图片.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: flex;
      .sonSum{
        font-size:42px;
        font-family:LESLIE-Regular,LESLIE;
        font-weight:400;
        color:rgba(97,234,223,1);
        margin: 0;
        text-align: center;
        span {
          font-size:22px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color: white;
        }
      }
      .sonName {
        width: 60%;
        margin: 22% auto;
        text-align: center;
        display: inline-block;
        font-family:PingFangSC-Medium,PingFang SC;
        font-size: 26px;
        font-weight:500;
      }
    }
  }
</style>
