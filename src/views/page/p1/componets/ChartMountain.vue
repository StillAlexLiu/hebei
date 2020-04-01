<template>
    <div class="ChartMountain full">
        <div class="item " v-for="(item,index) in data" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="value">{{item.value}}<span>户</span></div>
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
    background-image: url("./img/分组 6.png");
    background-position: center right;
    background-size: 65% auto;
    background-repeat: no-repeat;
    vertical-align: middle;
    display: table;
    padding: 15px 0;

    > .item {
        display: table-row;
        width: 100%;

        > div {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }

        .name {
            width: 36%;
            font-size: 24px;
        }

        .value {
            font-size: 30px;

            span {
                font-size: 24px;
            }
        }
    }
}
</style>
