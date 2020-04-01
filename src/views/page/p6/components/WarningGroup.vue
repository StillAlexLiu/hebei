<template>
  <div class="number-group full-height  full-width">
    <ContainerWarning v-for="(item,index) in data" :key="index" class="item" :level="index">
      <p class="item_num">{{item.num}}</p>
      <div class="item_color" :style="{'background':item.color}"></div>
      <div class="item_div">
        <div class="item_name">{{item.colorName}}</div>
      </div>
    </ContainerWarning>
  </div>
</template>

<script>

export default {
  name: 'WarningGroup',
  props: ['data'],
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

  > .item {
    flex-grow: 1;
    margin: 1rem 1.5rem;

  }
  .item_num{
    font-size: 6rem;
    margin: 13rem 0 0 0;
    text-align: center;
  }
  .item_color{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    float: left;
    margin: 2rem 0 0 12rem;
    }
  .item_div{
    width:60%;
    line-height: 60px;
    text-align: center;
    float: right;
    .item_name{
      float: left;
      text-align: left;
      font-size: 1.5rem;
    }
  }
}
</style>
