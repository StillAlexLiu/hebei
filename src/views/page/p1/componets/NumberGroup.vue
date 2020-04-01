<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="w-1-3 item">
            <div class="w-2-5 img full-height">
                <span><img src="./img/png4.png" alt=""></span>
            </div>
            <div class="w-3-5 number full-height">
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
        display: table;

        span {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }

        img {
            width: 70%;
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
            /*font-weight: bold;*/
            font-size: 36px;
        }

    }

    > .item {
        /*margin: 30px 0;*/
    }
}
</style>
