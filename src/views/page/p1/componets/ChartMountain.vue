<template>
    <div class="ChartMountain full">
        <div class="item " v-for="(item,index) in data" :key="index">
            <div :style="{'background':item.color}" class="point"></div>
            <div class="name">
                {{item.name}}
            </div>
            <div class="value">{{item.value}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChartMountain',
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
.ChartMountain {
    background-image: url("./img/z.png");
    /*background-image: url("./img/filter.png");*/
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 81%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 0 30px 10px;

    > .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .point {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }

        .name {
            flex-basis: 45%;
            font-size: 18px;
        }

        .value {
            font-size: 30px;
            flex-basis: calc(55% - 24px);
            text-align: center;

            span {
                font-size: 24px;
            }
        }
    }
}
</style>
