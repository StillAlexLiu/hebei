<template>
  <div class="number-group full-height  full-width">
    <container-border31 v-for="(item,index) in accept_data" :key="index" class="item">
      <img :src="img[index].imgUrl" alt="">
      <p class="name_p1">{{item.name1}}</p>
      <p class="num_p1">{{item.num1}}</p>
      <p class="name_p1">{{item.name2}}</p>
      <p class="num_p2">{{item.num2}}</p>
    </container-border31>
  </div>
</template>

<script>

export default {
  name: 'NumberGroup2',
  props: ['accept_data', 'img'],
  data: () => {
    return {
      data: [1, 2, 3]
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
    margin: 2rem auto 2rem;
  }
  .name_p1{
    font-size: 2rem;
    margin: 2rem 0 0 0;
    text-align: center;
    display: block;
  }
  .num_p1 {
    color: #FE6145;
    font-family:SFNSDisplay;
    font-size: 2rem;
    margin:5px 0 0 0 ;
    font-weight: bold;
    text-align: center;
  }
  .num_p2 {
    color: #B4EC51;
    font-family:SFNSDisplay;
    font-size: 2rem;
    margin:5px 0 0 0 ;
    font-weight: bold;
    text-align: center;
  }
  > .item {
    flex-grow: 1;
    margin: 5rem 0;
    width: 30rem;
  }
}
</style>
