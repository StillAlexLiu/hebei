<template>
    <div class='ImageData'>
        <div class="imageBox">
            <img :src="data.imgUrl" alt="">
            <div class="boxTitle">
                {{data.title}}
            </div>
            <div class="boxCon">
                {{data.con}}{{data.unit}}
            </div>
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
    return {}
  }
}
</script>

<style scoped lang="less">
.ImageData {
  width: 100%;
  height: 100%;
  padding: 5% 10%;
  .imageBox{
    width: 100%;
    height: 100%;
    background-image: url('./img/2.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 15% 0 0 22%;
    img {
        width: 27%;
        height: 60%;
        float: left;
    }
    .boxTitle{
        padding-left: 10%;
        padding-top: 5%;
        font-size:24px;
        display: inline-block;
        width: 70%;
        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
    .boxCon{
        padding-left: 10%;
        padding-top: 5%;
        display: inline-block;
        width: 70%;
        font-size:40px;
        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
        font-weight:bold;
        color:rgba(255,255,255,1);
    }
  }
}
</style>
