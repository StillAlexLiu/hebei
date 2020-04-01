<template>
    <div class="full numberGroup">
        <div v-for="(item,index) in data" class="item" :key="index">
            <img :src="item.img">
            <p class="name">{{item.name}}</p>
            <p class="value">{{item.value}}</p>
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
    direction: ltr;
    justify-content: space-around;
    flex-flow: nowrap;
    align-items: center;

    > .item {
        height: 90%;
        background-image: url("./img/背景.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        flex-grow: 0;
        flex-basis: 30%;
        text-align: center;
        padding: 40px 0;

        > img {
            height: 20%;
        }

        .name {
            font-size: 34px;
            font-weight: bold;
        }

        .value {
            font-size: 90px;
            font-weight: bold;
            color: #79DFEF;
            margin: 0;
        }
    }
}
</style>
