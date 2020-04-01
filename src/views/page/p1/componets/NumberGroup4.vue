<template>
    <div class="NumberGroup4 full">
        <div class="item full-height w-1-3" v-for="(item,index) in data" :key="index">
            <div class="img h-3-6"><img alt="" :src="item.img"></div>
            <div class="name h-1-6">{{item.name}}</div>
            <div class="value h-1-6">{{item.value}}</div>
            <div class="unit h-1-6">{{item.unit}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NumberGroup4',
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
.NumberGroup4 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    .item {
        background-image: url("./img/诚信典型背景图.png");
        background-size: 90% 90%;
        background-repeat: no-repeat;
        background-position: center;
        flex-grow: 1;
        text-align: center;
        padding: 50px 0;
        font-size: 24px;

        img {
            height: 70%;
            margin-top: 10px;
        }

        .name {
            padding-top: 10px;
            font-size: 30px;
        }

        .value {
            font-size: 34px;
            font-weight: bold;
            color: #79DFEF;
        }
    }
}
</style>
