<template>
  <div id="leftImgae">
      <div class="left">
          <div class="leftBox" v-for="(item, index) in data.list1Data" :key="index">
              <p>{{item.name}}</p>
              <span class="box_sp1">{{item.num}}</span>
              <span class="box_sp2">{{item.dw}}</span>
          </div>
      </div>
      <div class="right">
          <ul>
              <li v-for="(item, index) in data.list2Data" :key="index">
                  <p>{{item.name}}</p>
                  <p>{{item.num}}</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {}
  }
}
</script>
<style scoped lang='less'>
 #leftImgae{
     width: 100%;
     height: 100%;
     .left{
         width: 30%;
         height: 100%;
         float: left;
         text-align: center;
         .leftBox{
             width: 100%;
             height: 50%;
             p{
                 font-size: 20px;
             }
             .box_sp1{
                 font-size: 30px;
                 color: #BE483A;
             }
             .box_sp2{
                 font-size: 20px;
                 margin-left: 10px;
             }
         }
     }
     .right{
         width: 70%;
         height: 100%;
         background-image: url('../components/img/five.png');
         background-size: 100% 100%;
         background-repeat: no-repeat;
         float: left;
         ul{
             width: 100%;
             height: 100%;
             list-style: none;
             li{
                 float: left;
                 width: 30%;
                 height: 130px;
                 margin-right: 1rem;
                 text-align: center;
                 font-size: 2rem;
                 padding-top: 2rem;
             }
             li:nth-child(4){
                 margin-left: 9rem;
             }
             li:nth-child(1){
                margin-left: 0rem;
                margin-right: 2rem;
             }
         }
     }
 }
</style>
