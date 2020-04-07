<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="w-1-3 item">
            <div class="w-4-11 img full-height">
                <img :src="item.img" alt="">
            </div>
            <div class="w-7-11 number full-height">
                <div class="name"> {{item.name}}</div>
                <div class="value number-font">{{item.value}}</div>
            </div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup',
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
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;

    .img {
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 10px;

        img {
            width: 86%;
        }
    }

    .number {

        display: flex;
        flex-direction: column;
        justify-content: center;

        .name {
            font-size: 24px;
        }

        .value {
            font-size: 36px;
        }

    }

    > .item {
        margin: 10px 0;
    }
}
</style>
