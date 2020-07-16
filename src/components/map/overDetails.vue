<template>
    <div class="overDetails">
      <span class="back" @click="back"></span>
      <p class="title">已办结案件详情</p>
      <div class="main h-4-5">
        <p>{{listData.caseName}}</p>
        <div class="left w-1-2">
          <p><span>案件编号：</span>{{listData.caseNo}}</p>
          <p><span>案发地：</span>{{listData.caseSpot}}</p>
          <p :title='listData.caseReason'><span>案由：</span>{{listData.caseReason}}</p>
          <p><span>适用程序：</span>{{listData.appprRocedure}}</p>
          <p><span>是否涉外案件：</span>{{listData.caseForsign}}</p>
          <p><span>立案机关：</span>{{listData.caseFiauth}}</p>
          <p><span>执行日期：</span>{{listData.exeDate}}</p>
          <p><span>未执行原因类别：</span>{{listData.unexeReaSort}}</p>
          <p><span>罚没金额：</span>{{listData.punIsham}}</p>
          <p><span>办案机构：</span>{{listData.casedep}}</p>
          <p><span>办案期限：</span>{{listData.deadLine}}</p>
        </div>
        <div class="right w-1-2">
          <p><span>案发地所在行政区划：</span>{{listData.casesceDistrict}}</p>
          <p><span>案发时间：</span>{{listData.caseTime}}</p>
          <p><span>案值：</span>{{listData.caseVal}}</p>
          <p><span>是否利用网络：</span>{{listData.caseInterneTsign}}</p>
          <p><span>登记时间:</span>{{listData.regtime}}</p>
          <p><span>立案日期：</span>{{listData.caseFidate}}</p>
          <p><span>执行类别：</span>{{listData.exeSort}}</p>
          <p><span>案件状态：</span>{{listData.caseState}}</p>
          <p><span>案件结果：</span>{{listData.caseResult}}</p>
          <p><span>结案日期：</span>{{listData.endDate}}</p>
          <p><span>预警级别：</span>{{listData.warningName}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'overDetails',
  props: ['listData'],
  data () {
    return {
      list: ''
    }
  },
  methods: {
    back () {
      this.$emit('back', false)
    }
  },
  mounted () {
    for (let i in this.listData) {
      if (this.listData[i] === 'null') {
        this.listData[i] = ''
      }
    }
  },
  watch: {
    listData: function () {
      for (let i in this.listData) {
        if (this.listData[i] === 'null') {
          this.listData[i] = ''
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.overDetails{
  width: 100%;
  height: 100%;
  .back{
    display: inline-block;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 108px;
    right: 100px;
    z-index: 101;
    background: url('img/back.png') no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
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
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
