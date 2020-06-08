<template>
    <div class='righTepidemic'>
        <div class="tepidemicList">
            <div class="list_png">
                <img src="./img/righTepidemic_1.png" alt="">
            </div>
            <div class="list_con">
                出动人员 <span class="span_con">23万</span> 人次，检定温度计量器具 <span class="span_con">3.5万</span> 台件；检定温度计器具<span class="span_con">3.5万</span>台件；检定或校准其他医用计量器具<span class="span_con">3.5万</span>台件；
            </div>
        </div>
        <div class="tepidemicList">
            <div class="list_png">
                <img src="./img/righTepidemic_2.png" alt="">
            </div>
            <div class="list_con">
                已查办涉疫案件 <span class="span_con">2370件</span> 人次，罚款 <span class="span_con">3400余万</span> 元；查处价格违法案件<span class="span_con">1409</span>件；罚款<span class="span_con">1600余万</span>元；
            </div>
        </div>
        <div class="tepidemicList">
            <div class="list_png">
                <img src="./img/righTepidemic_3.png" alt="">
            </div>
            <div class="list_con2">
                全省医用口罩企业由<span class="span_con">11</span>家增加到<span class="span_con">28</span>家，日总产能由<span class="span_con">34万</span>只提升到976万只；全省"红外体温计"总产能达到<span class="span_con">4.1万</span>个，批准<span class="span_con">12种</span>防治新冠肺炎中药制剂；
            </div>
        </div>
        <div class="tepidemicList">
            <div class="list_png">
                <img src="./img/righTepidemic_4.png" alt="">
            </div>
            <div class="list_con">
               妥善处置舆情 <span class="span_con">34</span>件，发布消费警示 <span class="span_con">43</span>篇，推送疫情防控等安全知识信息 <span class="span_con">255</span>条。
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
.righTepidemic{
  width: 100%;
  height: 100%;
  .tepidemicList{
    width: 100%;
    height: 24%;
    margin-bottom: 0.6%;
    .list_png{
       width: 10%;
       height: 100%;
       float: left;
       img{
           width: 50%;
           height: 100%;
       }
    }
    .list_con {
        font-size:30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:40px;
        padding-top: 1.1%;
        .span_con{
            font-family:LESLIE-Regular,LESLIE;
            color: #FF6142;
            font-size: 32px;
        }
    }
    .list_con2 {
        font-size:30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:40px;
        // padding-top: 1.1%;
        .span_con{
            font-family:LESLIE-Regular,LESLIE;
            color: #FF6142;
            font-size: 32px;
        }

    }
  }
}
</style>
