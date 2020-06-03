<template>
    <div class='titleList'>
      <ul class="topList">
          <li v-for="(item, index) in data.topData" :key="index">
              <div class="listName">
                  {{item.name}}
              </div>
              <div class="listNumber">
                  {{item.value}}{{item.unit}}
              </div>
          </li>
      </ul>
      <ul class="bottonList">
          <li class="full-height" v-for="(item, index) in data.imgData" :key="index">
              <div class="imgBox">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="imgTitle">
                  {{item.title}}
              </div>
              <div class="imgUnit">
                  {{item.num}}{{item.unit}}
              </div>
          </li>
      </ul>
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
.titleList{
  width: 100%;
  height: 100%;
  .topList{
    width: 100%;
    height: 100px;
    line-height: 100px;
    margin: 0;
    padding: 0;
    margin-bottom: 1%;
    li{
        background: url('./img/titleTop.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        list-style: none;
        padding-left: 1%;
        width: 49%;
        float: left;
        margin-right: 1%;
        .listName{
            font-size:27px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            width: 54%;
            text-align: left;
            float: left;
        }
        .listNumber{
            font-size:26px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(121,223,239,1);
            float: left;
            width: 45%;
            text-align: center;
        }
    }
  }
  .bottonList{
    width: 100%;
    margin: 0;
    padding: 0;
    height: 311px;
    li{
      float: left;
      width: 31.6%;
      margin-right: 2%;
      list-style: none;
      padding: 1% 6%;
      background:rgba(19,40,49,0.1);
      border:1px solid rgba(74,144,226,0.31);
      .imgBox{
        width: 100%;
        height: 40%;
        text-align: center;
        padding-top: 5%;
        border-bottom: 3px solid rgba(35, 65, 106, 1);
        img {
            width: 90px;
            height: 90px;
        }
      }
      .imgTitle{
          width: 100%;
          font-size:27px;
          font-family:PingFang-SC-Regular,PingFang-SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height: 40px;
          padding-top: 10%;
          min-height: 100px;
          text-align: center;
      }
      .imgUnit{
          font-size:28px;
          font-family:PingFang-SC-Regular,PingFang-SC;
          font-weight:400;
          color:rgba(121,223,239,1);
          width: 100%;
          text-align: center;
          padding-top: 15%;
      }
    }
    li:last-child {
        margin-right: 0;
    }
  }
}
</style>
