<template>
    <div class='RightNumberGroup'>
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="name h-1-3">{{ item.name }}</div>
            <div class="value h-2-3 number-font" :style="{color:colors[index]&&colors[index]!==''?colors[index]:''}">{{
                item.value }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RightNumberGroup',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    colors: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.RightNumberGroup {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 300px;

    .item {
        background-image: url("./img/RightNumberGroup.png");
        background-size: 100% 100%;
        flex-basis: 180px;
        text-align: center;
        padding: 5px 0;

        .name {
            font-size: 20px;
        }

        .value {
            font-size: 42px;
        }
    }
}
</style>
