<template>
    <div class="overBox">
      <span class="close" @click="close"></span>
      <div class="full" v-if='flag'>
        <p class="title">{{title}}</p>
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
              <li v-for="(item, index) in list" :key="index" class="h-1-7" @click="detail(item)">
                <span class="w-1-12">{{index+1}}</span>
                <span class="w-5-12 active" :style="{'line-height': 132/Math.ceil(item.caseName.length/26) +'px'}">{{item.caseName}}</span>
                <span class="w-1-8 active" :style="{'line-height': 132/Math.ceil(item.casedep.length/6) +'px'}">{{item.casedep}}</span>
                <span class="w-1-8">{{item.clueType}}</span>
                <span class="w-1-8">{{item.caseFidate}}</span>
                <span class="w-1-8">{{item.endDate}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <overDetails :listData='overData' :title2='title' @back='flag = !flag' v-else/>
    </div>
</template>

<script>
import overDetails from './overDetails'
export default {
  name: 'overBox',
  props: ['type', 'title'],
  components: {
    overDetails
  },
  data () {
    return {
      list: '',
      flag: true,
      overData: ''
    }
  },
  mounted () {
    this.getData(this.type)
  },
  methods: {
    close () {
      this.$emit('closeOverBox', false)
    },
    getData (type) {
      this.$get('monitor/check/' + type).then(res =>{
        // console.log(res)
        this.list = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    detail (item) {
      console.log(item)
      this.overData = item
    }
  },
  watch: {
    type: function () {
      this.getData(this.type)
      this.flag = true
    },
    overData: function () {
      this.flag = !this.flag
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
    cursor: pointer;
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
          cursor: pointer;
          // vertical-align: middle;
          .active{
            text-align: left;
            padding: 0 20px;
          }
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
