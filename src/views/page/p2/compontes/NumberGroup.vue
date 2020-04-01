<template>
  <div class="number-group full-height  full-width">
    <container-border3 v-for="(item,index) in data" :key="index" class="item">
      <img :src="img[index].imgUrl" alt="" class="title_img">
      <p class="title_name">{{item.name}}</p>
      <span class="title_num">{{item.num}}</span>
      <span class="title_unit">{{item.unit}}</span>
    </container-border3>
  </div>
</template>

<script>

export default {
  name: 'NumberGroup',
  props: ['data', 'img'],
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .title_img{
    width: 5rem;
    height: 5rem;
    margin:1rem auto;
    display: block;
  }
  .title_name{
    font-size: 2rem;
    display: block;
    text-align: center;
    margin: 0;
    line-height: 4rem;
  }
  .title_num{
    font-size: 40px;
    color:#79DFEF;
    margin-left: 5.5rem;
    font-family:SFNSDisplay;
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
