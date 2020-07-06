<template>
    <div class='backList'>
        <div class="list" v-for="(item, index) in data" :key="index">
            <div class="list_title">
                {{ item.title }}
            </div>
            <div class="list_num">
                {{ item.num }}<span>{{ item.unit }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.backList {
    width: 90%;
    height: 90%;
    margin: 5% 0 0 5%;
    background: url('./img/编组 3@2x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 7% 0;

    .list {
        width: 153px;
        height: 124px;
        display: inline-block;
        text-align: center;
        padding-top: 1%;

        .list_title {
            width: 100%;
            font-size: 23px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            padding-bottom: 15%;
        }

        .list_num {
            font-size: 32px;
            font-family: LESLIE-Regular, LESLIE;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);

            span {
                font-size: 20px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
            }
        }
    }

    .list:nth-child(4) {
        margin-left: 75px;
    }

    .list:nth-child(6) {
        margin-left: 150px;
    }
}
</style>
