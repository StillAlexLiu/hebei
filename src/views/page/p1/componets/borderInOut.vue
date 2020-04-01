<template>
    <div class="borderInOut">
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="name"><span>{{item.name}}</span></div>
            <div class="value"><span>{{item.value}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'borderInOut',
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
.borderInOut {
    background-image: url("./img/border-out.png");
    background-size: 100% 100%;
    background-position: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    text-align: center;
    padding: 0 10px;

    > .item {
        flex-grow: 1;
        display: table;
        height: 100%;
        width: 0;
        background-size: 96% 90%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("./img/border-in.png");

        > div {
            display: table-row;

            > * {
                display: table-cell;
                vertical-align: middle;
            }

        }

        .name {

        }

        .value {
            > * {
                font-size: 40px;
                color: #79DFEF;
            }
        }
    }
}
</style>
