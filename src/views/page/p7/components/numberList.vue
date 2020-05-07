<template>
    <div id="numberList">
        <div class="list" v-for="(item, index) in data" :key="index">
            <div class="list_first">
                <div class="listHeader" @click="tabCli(item, index)" :class="{active:active === index}">
                    {{item.name}}
                </div>
            </div>
            <div class="second_list">
                <div v-for="(item2, index) in item.num" :key="index" class="num_list number-font">
                    {{item2}}
                </div>
                <div class="unit">{{item.dw}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {
      active: 0
    }
  },
  methods: {
    tabCli (item, index) {
      this.active = index
      this.$emit('key', item.key)
    }
  }
}
</script>
<style scoped lang='less'>
#numberList {
    width: 100%;
    height: 100%;

    .list {
        width: 33%;
        height: 100%;
        float: left;
    }

    .list_first {
        display: flex;
        height: 78px;
        justify-content: center;
    }

    .second_list {
        display: flex;
        justify-content: center;
        height: calc(100% - 78px);
        width: 100%;
        line-height: 120px;

        > .unit {
            font-size: 36px;
        }
    }

    .listHeader {
        cursor: pointer;
        width: 220px;
        height: 68px;
        background-image: url('../components/img/22.png');
        background-size: 220px 68px;
        background-repeat: no-repeat;
        justify-content: center;
        display: flex;
        line-height: 68px;
        font-size: 36px;
        font-weight: bold;
    }

    .active {

        background-image: url('../components/img/33.png');
    }

    .num_list {
        width: 60px;
        height: 80px;
        background-image: url('../components/img/img／huzhou_img_market_bg@2x.png');
        background-size: 100% 100%;
        line-height: 80px;
        font-size: 72px;
        text-align: center;
        margin: 0 5px;
        color: #D98961;
    }

}
</style>
