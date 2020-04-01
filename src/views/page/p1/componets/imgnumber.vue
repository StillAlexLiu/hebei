<template>
  <div class="number-groap full-height  full-width">
    <div class="w-1-2 full-height left1_div" >
        <p class="data_img h-1-3"><img :src="img.img1" alt=""></p>
        <p class="data_num num1 ">{{data[0].num}}</p>
        <p class="data_name">{{data[0].name}}</p>
    </div>
    <div class="w-1-2 full-height">
        <p class="data_img h-1-3"><img :src="img.img2" alt=""></p>
        <p  v-if="data[1].jiantou == 1" class="data_num num2">{{data[1].num}}%
          <span class="span_img">
            <img src="./img/shang.png" alt="">  
          </span>
        </p>
        <p  v-if="data[1].jiantou == 2" class="data_num num3">{{data[1].num}}%
          <span class="span_img">
            <img src="./img/xia.png" alt="">  
          </span>
        </p>
        <p class="data_name">{{data[1].name}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NumberImg',
  props: ['data', 'img'],
  data: () => {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.number-groap {
    width: 100%;
    height: 100%;
    background-image: url('./img/背景框.png');
    background-size: 90% 90%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 5%;
    .left1_div {
        background-image: url('./img/png9.png');
        background-size: 5px 200px;
        background-position: right;
        background-repeat: no-repeat;
    }
    .data_img>img {
        width: 6rem;
        height: 6rem;
        margin: 5rem 2rem 0 14rem;
    }
    .data_num {
        color: #79DFEF;
        font-size: 5rem;
        text-align: center;
        margin: 0;
        line-height: 10rem;
    }
    .data_name {
        color: white;
        font-size: 2.5rem;
        text-align: center;
        margin: 0;
        line-height: 5rem;
    }
    .span_img img{
      width: 5rem;
      height: 5rem;
    }
    .num2{
      color: rgb(246, 135, 49)!important;
    }
    .num3{
      color: rgb(125, 184, 71)!important;
    }
}
</style>
