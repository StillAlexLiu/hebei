<template>
  <div class="number-group full-height  full-width">
    <container-info-card v-for="(item,index) in data" :key="index" class="item">
     <div class="itemName">{{item.name}}</div>
     <div class="itemNum">
       <p class="num_p1">本年</p>
       <p class="num_p2">{{item.yearData}}</p>
     </div>
     <div class="itemNum">
       <p class="num_p1">累计</p>
       <p class="num_p2">{{item.addup}}</p>
     </div>
    </container-info-card>
  </div>
</template>

<script>

export default {
  name: 'InfoGroup',
  props: ['data'],
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

  > .item {
    flex-grow: 1;
    margin: 1rem 1.5rem;

  }
  .itemName{
    width: 100%;
    height: 140px;
    text-align: center;
    line-height: 140px;
    font-size: 30px;
  }
  .itemNum{
    width: 100px;
    height: 150px;
    float: left;
    margin-left: 10rem;
    margin-top: 2rem;
    .num_p1{
      font-size: 2rem;
    }
    .num_p2{
      font-size: 3rem;
      color: #E59B23;
    }
  }
}
</style>
