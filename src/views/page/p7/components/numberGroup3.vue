<template>
    <div class="full numberGroup">
        <div v-for="(item,index) in data" class="item" :key="index">
            <div class="img h-3-7"><img :src="item.img"></div>
            <div class="name h-1-7">{{item.name}}</div>
            <div class="value h-3-7 number-font">{{item.value}}<span>{{ item.unit }}</span></div>
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
        height: 100%;
        margin: 0 10px;
        flex: .3;
        background-image: url("./img/bg3.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        text-align: center;
        // padding: 20px 0;

        img {
            height: 100px;
        }

        .name {
            font-size: 30px;
        }

        .value {
            font-size: 72px;
            color: rgba(97, 234, 223, 1);
            line-height: 130px;
            span {
                font-size: 30px;
                color: rgba(97, 234, 223, 1);
            }
        }
    }
}
</style>
