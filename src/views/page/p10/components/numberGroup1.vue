<template>
    <div class="numberGroup1 full">
        <container-border3 v-for="(item,index) in data" :key="index" class="item" :class="'w-1-'+(data.length+1)">
            <div class="value">{{item.value}}</div>
            <div class="name">{{item.name}}</div>
        </container-border3>
    </div>
</template>

<script>
export default {
  name: 'numberGroup1',
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
.numberGroup1 {
    display: flex;
    direction: ltr;
    justify-content: space-around;
    flex-flow: wrap;
    align-items: center;

    > .item {
        /*background-image: url("./img/背景.png");*/
        height: 45%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        flex-grow: 0;
        flex-basis: 40%;
        text-align: center;
        padding: 20px 0;
        display: table;

        > div {
            display: table-row;
            vertical-align: center;
        }

        .name {
            font-size: 30px;
        }

        .value {
            color: #79DFEF;
            font-size: 50px;
            font-weight: bold;
        }
    }
}
</style>
