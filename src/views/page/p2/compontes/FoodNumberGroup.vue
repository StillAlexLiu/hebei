<template>
    <div class='FoodNumberGroup'>
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="h-1-3  full-width">
            <div class="name h-1-2"> {{item.name}}</div>
            <div class="value h-1-2 number-font">{{item.value}}</div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>
export default {
  name: 'FoodNumberGroup',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.FoodNumberGroup {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 5px 0;
    text-align: center;

    .name {
        font-size: 24px;
        line-height: 60px;
    }

    .value {
        font-size: 42px;
    }

}
</style>
