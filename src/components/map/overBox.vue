<template>
    <div class="overBox">
      <span class="close" @click="close"></span>
      <p class="title">已办结案件</p>
      <div class="table h-4-5">
        <div class="thead h-1-12">
          <span class="w-1-12">序号</span>
          <span class="w-5-12">案件名称</span>
          <span class="w-1-8">办案机关</span>
          <span class="w-1-8">案件类型</span>
          <span class="w-1-8">立案时间</span>
          <span class="w-1-8">结案时间</span>
        </div>
        <div class="tbody h-11-12">
          <ul class="full">
            <li v-for="item in 10" :key="item" class="h-1-7">
              <span class="w-1-12">序号</span>
              <span class="w-5-12">案件名称</span>
              <span class="w-1-8">办案机关</span>
              <span class="w-1-8">案件类型</span>
              <span class="w-1-8">立案时间</span>
              <span class="w-1-8">结案时间</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'overBox',
  props: ['type'],
  data () {
    return {
      list: ''
    }
  },
  methods: {
    close () {
      this.$emit('closeOverBox', false)
    }
  }
}
</script>

<style scoped lang="less">
.overBox{
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
  .table{
    width: 92%;
    margin: 0 auto;
    .thead{
      text-align: center;
      background:rgba(15,40,52,1);
      font-size: 35px;
      line-height: 84px;
    }
    .tbody{
      overflow: scroll;
      ul{
        margin: 0;
        padding: 0;
        li{
          font-size: 30px;
          line-height: 132px;
          list-style: none;
          text-align: center;
        }
        li:nth-child(2n){
          background:rgba(52,140,166,.1);
        }
      }
    }
    .tbody::-webkit-scrollbar{
      display: none!important;
    }
  }
}
</style>