<template>
  <div id="pnglist">
      <ul>
          <li v-for="(item, index) in data" :key="index" >
              <img :src="item.imgurl" alt="">
              <p class="list_p1">{{item.name}}</p>
              <p class="list_p2">{{item.num}} <span class="list_p3">{{item.dw}}</span> </p>
              <div class="list_zb">
                {{item.gl}}%
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {
    }
  }
}
</script>
<style scoped lang='less'>
#pnglist {
    width: 100%;
    height: 100%;
    background: rgba(8,11,54,0.4);
    ul{
        width: 100%;
        height: 100%;
        li{
            width: 25%;
            height: 78%;
            float: left;
            list-style: none;
            margin-top: 3%;
            img{
                width: 70%;
                height: 11rem;
                border-bottom: 1px solid #F45E41;
                padding-bottom: 15px;
            }
            .list_p1{
                font-size: 1.4rem;
                margin: 0;
                line-height: 2.5rem;
                width: 75%;
                text-align: center;
            }
            .list_p2{
                font-size: 2.5rem;
                margin: 0;
                line-height: 2.5rem;
                color: #F45E41;
                font-weight: bold;
                border-bottom: 1px solid #F45E41;
                text-align: center;
                width: 70%
            }
            .list_p3{
              font-size: 1.5rem;
              margin: 0;
              line-height: 2.5rem;
              color: #F45E41;
              font-weight: bold;
              text-align: center;
              width: 70%
            }
        }
    }
    .list_zb{
      width: 5rem;
      height: 3rem;
      background-color: #F45E41;
      margin: 1rem 3.5rem;
      float: left;
      line-height: 3rem;
      text-align: center;
    }
}
</style>
