<template>
    <div class="borderInOut">
        <div class="item" v-for="(item,index) in data" :key="index" :class="index===0?'':'border-right'">
            <div><img :src="item.img"></div>
            <div class="value number-font" :class="isPercent(item.value)?'percent':''">{{item.value}}</div>
            <div class="name">{{item.name}}</div>
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
  },
  methods: {
    isPercent (value) {
      let str = value.toString()
      return str.substring(str.length - 1, str.length) === '%'
    }
  }
}
</script>

<style scoped lang="less">
.borderInOut {
    background-image: url("./img/right-bg.png");
    background-size: 100% 30%;
    background-position: 0 80%;
    background-repeat: no-repeat;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    text-align: center;
    padding: 110px 0;

    > .item {
        flex-grow: 1;
        height: 100%;
        width: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        img {
            width: 40px;
        }

        .name {
            font-size: 28px;
        }

        .value {
            font-size: 52px;
            line-height: 52px;
            color: #79DFEF;
        }
    }

    .percent {
        color: #F88B30 !important;
    }

    .border-right {
        /*border-left: 1px solid #1E8DB0;*/
        background-image: linear-gradient(0, #1E8DB0, #1E8DB0);
        background-size: 2px 60%;
        background-position: left center;
        background-repeat: no-repeat;
    }
}
</style>
