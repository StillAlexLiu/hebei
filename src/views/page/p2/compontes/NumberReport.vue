<template>
  <div class="number-group full-height  full-width">
    <container-border31 v-for="(item,index) in accept_data" :key="index" class="item">
      <img :src="img[index].imgUrl" alt="">
      <p class="name_p1">{{item.name1}}次</p>
      <p class="num_p1">{{item.num1}}次</p>
    </container-border31>
  </div>
</template>

<script>

export default {
  name: 'NumberGroup2',
  props: ['accept_data', 'img'],
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
  img {
    width: 7rem;
    height: 7rem;
    margin-top: 15px;
    display: block;
    margin: 3rem auto 2rem;
  }
  .name_p1{
    font-size: 3rem;
    margin: 5rem 0 0 0;
    text-align: center;
    display: block;
  }
  .num_p1 {
    color: #FE6145;
    font-family:SFNSDisplay;
    font-size: 2.5rem;
    margin:2rem 0 0 0 ;
    font-weight: bold;
    text-align: center;
  }
  > .item {
    width: 27rem;
  }
}
</style>
