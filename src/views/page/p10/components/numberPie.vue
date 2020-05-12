<template>
    <div class="numberPie full">
        <div class="item" v-for="(item, index) in data" :key="index"
             :style="{'background-image': 'url(' + item.img + ')'}">
            <div class="number_name2 ">
                <div class="number-font value">{{item.num}}件</div>
                <div class="name"> {{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'numberPie',
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
<style lang="less">
.numberPie {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;

    .item {
        flex: 1;
        background-position: center;
        background-size: 90% auto;
        background-repeat: no-repeat;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .value {
        font-size: 36px;
    }

    .name {
        font-size: 24px;
    }
}
</style>
