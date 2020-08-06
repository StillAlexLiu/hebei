<template>
    <div class="overBox">
      <span class="close" @click="close"></span>
      <div class="full" v-if='flag'>
        <p class="title">{{title}}</p>
        <div class="table h-4-5">
          <div class="thead h-1-12">
            <span class="w-1-12">序号</span>
            <span class="w-5-12">案件名称</span>
            <span class="w-1-6">办案机关</span>
            <span class="w-1-6">案件类型</span>
            <span class="w-1-6">立案时间</span>
            <!-- <span class="w-1-8">结案时间</span> -->
          </div>
          <div class="tbody h-11-12">
            <ul class="full">
              <li v-for="(item, index) in list" :key="index" class="h-1-7" @click="detail(item)">
                <span class="w-1-12">{{index+1}}</span>
                <span class="w-5-12 active" :style="{'line-height': 132/Math.ceil(item.caseName.length/26) +'px'}">{{item.caseName}}</span>
                <span class="w-1-6 active" :style="{'line-height': 132/Math.ceil(item.casedep.length/6) +'px'}">{{item.casedep}}</span>
                <span class="w-1-6">{{item.clueType}}</span>
                <span class="w-1-6">{{item.caseFidate}}</span>
                <!-- <span class="w-1-8">{{item.endDate}}</span> -->
              </li>
            </ul>
          </div>
          <div class="fenye">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="size"
              :current-page="current"
              @current-change="handleCurrentChange"
              :total="total">
            </el-pagination>
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
  props: ['type', 'title', 'caseType'],
  components: {
    overDetails
  },
  data () {
    return {
      list: '',
      flag: true,
      overData: '',
      current: 1,
      size: 7,
      total: 100
    }
  },
  mounted () {
    this.getData(this.type)
  },
  methods: {
    handleCurrentChange(val) {
      this.current = val
      this.getData(this.type)
      console.log(`当前页: ${val}current: ${this.current}`);
    },
    close () {
      this.$emit('closeOverBox', false)
    },
    getData (type) {
      console.log(type, 'tt')
      if (this.caseType === 2) {
        this.$get('/monitor/check/getAlertRegister?appDate=' + type + '&current=' + this.current + '&size=' + this.size).then(res => {
          // console.log(res, 'rrrsss稽查')
          this.total = res.data.total
          this.list = res.data.records
        }).catch(err => {
          console.log(err)
        })
      } else if(this.caseType === 6){
        this.$get('monitor/check/getAlertFinish').then(res =>{
          // console.log(res)
          this.list = res.data
        }).catch(err => {
          console.log(err)
        })
      }else {
        this.$get('monitor/check/' + type).then(res =>{
          // console.log(res)
          this.list = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    detail (item) {
      console.log(item, this.type)
      // this.overData = item
      if (this.type === 1 || this.type === 2 || this.type === 3 || this.type === 4 || this.type === 5) {
        this.$get('/monitor/check/detailCase?caseId=' + item.caseId).then(data => {
          console.log(data)
            this.overData = data.data
            // this.warning = true
            // this.over = false
            // this.caseTitle = '案件详情'
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.$get('/monitor/check/placeCase?caseId=' + item.caseId).then(data => {
          console.log(data)
          this.overData = data.data
          // this.warning = true
          // this.over = false
          // this.caseTitle = '案件详情'
        }).catch(err => {
          console.log(err)
        })
      }
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
  .fenye {
    float: right;
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
<style lang="less">
.el-pagination.is-background .el-pager li {
    background: rgba(9,167,219,0.2)!important;
    color: white!important;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
  }
  .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next {
    display: none;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #2D94E1!important;
  }
</style>