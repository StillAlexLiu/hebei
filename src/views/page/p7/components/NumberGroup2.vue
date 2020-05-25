<template>
    <div class='NumberGroup2 full'>
        <div v-for="(item,index) in data" :key="index" class="item">
            <div class="name">{{ item.name }}</div>
            <div class="value number-font">{{ item.value }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NumberGroup2',
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
.NumberGroup2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 10px 0;

    > .item {
        background-image: url("./img/bg2.png");
        background-size: 165px 113px;
        background-position: center;
        background-repeat: no-repeat;
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        > .name {
            font-size: 18px;
            white-space: pre-wrap;
        }

        .value {
            color: #F5A623;
            font-size: 44px;
        }
    }
}
</style>
