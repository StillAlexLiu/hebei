<template>
    <div class="warningBox">
      <span class="close" @click="close"></span>
      <p class="title">案件详情</p>
      <div class="main h-4-5">
        <p>关于唐山市丰润区顺意堂大药房涉嫌销售侵权口罩</p>
        <div class="left w-1-2">
          <p><span>案件编号：</span></p>
          <p><span>案发地：</span></p>
          <p><span>案由：</span></p>
          <p><span>适用程序：</span></p>
          <p><span>是否涉外案件：</span></p>
          <p><span>立案机关：</span></p>
          <p><span>执行日期：</span></p>
          <p><span>未执行原因类别：</span></p>
          <p><span>罚没金额：</span></p>
          <p><span>办案机构：</span></p>
          <p><span>办案期限：</span></p>
        </div>
        <div class="right w-1-2">
          <p><span>案发地所在行政区划：</span></p>          
          <p><span>案发时间：</span></p>
          <p><span>案值：</span></p>
          <p><span>是否利用网络：</span></p>
          <p><span>案件类别：</span></p>
          <p><span>立案日期：</span></p>
          <p><span>执行类别：</span></p>
          <p><span>案件状态：</span></p>
          <p><span>案件结果：</span></p>
          <p><span>结案日期：</span></p>
          <p><span>预警级别：</span></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'warningBox',
  props: ['id'],
  data () {
    return {
      list: ''
    }
  },
  methods: {
    close () {
      this.$emit('close', false)
    }
  }
}
</script>

<style scoped lang="less">
.warningBox{
  width: 79%;
  height: 82.8%;
  margin: 100px auto;
  background: url('img/warningBox.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  z-index: 100;
  .close{
    display: inline-block;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 108px;
    right: 40px;
    z-index: 101;
    background: url('img/close.png') no-repeat;
    background-size: 100% 100%;
  }
  .title{
    font-size: 60px;
    text-align: center;
    line-height: 164px;
    margin: 20px auto;
  }
  .main{
    >p{
      text-align: center;
      font-size: 50px;
      margin: 20px auto;
    }
    .left,.right{
      p{
        font-size: 35px;
        line-height: 80px;
        margin: 0;
        span:first-child{
          display: inline-block;
          width: 35%;
          text-align: right;
        }
      }
    }
  }
}
</style>