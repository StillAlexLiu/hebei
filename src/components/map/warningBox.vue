<template>
    <div class="warningBox">
      <span class="close" @click="close"></span>
      <p class="title">{{title}}</p>
      <div class="main h-4-5">
        <p>{{wData.caseName}}</p>
        <div class="left w-1-2">
          <p><span>案件编号</span>{{wData.caseNo}}</p>
          <p><span>案发地</span>{{wData.caseSpot}}</p>
          <p :title='wData.caseReason'><span>案由</span>{{wData.caseReason}}</p>
          <p><span>适用程序</span>{{wData.appprRocedure}}</p>
          <p><span>是否涉外案件</span>{{wData.caseForsign}}</p>
          <p><span>立案机关</span>{{wData.caseFiauth}}</p>
          <!-- <p><span>执行日期</span>{{wData.exeDate}}</p> -->
          <!-- <p><span>未执行原因类别：</span>{{wData.unexeReaSort}}</p> -->
          <p><span>罚没金额</span>{{wData.punIsham}}</p>
          <p><span>办案机构</span>{{wData.casedep}}</p>
          <p><span>办案期限</span>{{wData.deadLine}}</p>
          <p><span>结案日期</span>{{wData.endDate}}</p>
        </div>
        <div class="right w-1-2">
          <p><span>案发地所在行政区划</span>{{wData.casesceDistrict}}</p>
          <p><span>案发时间</span>{{wData.caseTime}}</p>
          <p><span>案值</span>{{wData.caseVal}}</p>
          <p><span>是否利用网络</span>{{wData.caseInterneTsign}}</p>
          <p><span>案件类别</span>{{wData.clueType}}</p>
          <p><span>立案日期</span>{{wData.caseFidate}}</p>
          <!-- <p><span>执行类别</span>{{wData.exeSort}}</p> -->
          <p><span>案件状态</span>{{wData.caseState}}</p>
          <p><span>案件结果</span>{{wData.caseResult}}</p>
          <p><span>办案人员</span>{{wData.userNameMain}}</p>
          <p><span>预警级别</span>{{wData.warningName}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'warningBox',
  props: ['wData', 'title'],
  data () {
    return {
      list: ''
    }
  },
  methods: {
    close () {
      this.$emit('close', false)
    }
  },
  mounted () {
    console.log(this.wData)
    for (const i in this.wData) {
      if (this.wData[i] === 'null') {
        this.wData[i] = ''
      }
    }
  },
  watch: {
    wData: function () {
      for (const ia in this.wData) {
        if (this.wData[ia] === 'null') {
          this.wData[ia] = ''
        }
      }
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
    cursor: pointer;
  }
  .title{
    font-size: 60px;
    text-align: center;
    line-height: 164px;
    margin: 20px auto;
    color: #92B9FF;
    font-weight:600;
  }
  .main{
     .people{
    font-size: 35px;
    text-align: left;
    span{
      margin-left: 5%;
    }
  }
    >p{
      text-align: center;
      font-size: 50px;
      margin: 40px auto;
    }
    .left,.right{
      p{
        font-size: 35px;
        line-height: 80px;
        margin: 0;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background:rgba(16,88,148,0.2);
        line-height: 60px;
        margin: 15px 0;
        span:first-child{
          display: inline-block;
          width: 35%;
          text-align: right;
          background:rgba(16,88,148,0.2);
          padding-right: 20px;
          margin-right: 20px;
        }
      }
    }
    .right{
      p{
        width: 94%;
        margin-left: 3%;
      }
    }
    .left{
      p{
        width: 97%;
        margin-left: 3%;
      }
    }
  }
 
}
</style>
