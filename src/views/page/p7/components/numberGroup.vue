<template>
    <div class="full numberGroup">
        <div v-for="(item,index) in data" class="item" :key="index">
            <div class="img h-3-7"><img :src="item.img"></div>
            <div class="name h-2-7">{{item.name}}</div>
            <div class="value h-2-7 number-font">{{item.value}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'numberGroup',
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
.numberGroup {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-flow: nowrap;
    align-items: center;
    padding: 20px;

    > .item {
        height: 90%;
        margin: 0 10px;
        flex: 1;
        background-image: url("./img/背景.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        text-align: center;
        padding: 40px 0;

        img {
            height: 114px;
        }

        .name {
            font-size: 34px;
        }

        .value {
            font-size: 82px;
            color: #79DFEF;
        }
    }
}
</style>
