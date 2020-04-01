<template>
  <div class="number-group full-height  full-width">
    <container-border3 v-for="(item,index) in data2" :key="index" class="item">
      <img :src="imgs[index].imgUrl" alt="" class="title_img">
      <p class="title_name2">{{item.title}}</p>
      <div class="box_box">
        <p class="title_name">{{item.name1}}</p>
        <p class="title_num">{{item.num1}}</p>
      </div>
      <div class="box">
        <p class="title_name">{{item.name2}}</p>
        <p class="title_num title_num3">{{item.num2}}</p>
      </div>
    </container-border3>
  </div>
</template>

<script>

export default {
  name: 'NumberGroup',
  props: ['data2', 'imgs'],
  data: () => {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.number-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .box_box{
      width: 100%;
      height: 3rem;
  }
  .title_img{
    width: 5rem;
    height: 5rem;
    margin:1rem auto;
    display: block;
  }
  .title_name{
    font-size: 2rem;
    margin: 0;
    float: left;
    line-height: 2rem;
    margin: 1rem 1rem 0 7rem;
  }
  .title_name2{
    font-size: 3rem;
    display: block;
    text-align: center;
    margin: 0;
    line-height: 4rem;
  }
  .title_num{
    font-size: 3rem;
    color:rgb(12,226,81);
    line-height: 4rem;
    font-family:SFNSDisplay;
    margin-left:2rem;
  }
  .title_num3{
      color:rgb(251,122,31)
  }
  .title_unit{
    font-size: 18px;
    color:#79DFEF;
  }
  > .item {
    flex-grow: 1;
    margin: 3rem 1rem;

  }
}
</style>
