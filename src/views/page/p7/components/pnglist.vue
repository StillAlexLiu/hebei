<template>
    <div id="pnglist">
          <div v-for="(item, index) in data.dataList" :key="index" class="item">
            <div class="img border-bottom h-2-5">
                <img :src="item.imgurl" alt="">
            </div>
            <div class="text border-bottom h-2-5">
                <div class="list_p1 ">{{item.name}}</div>
                <div class="list_p2  number-font">{{item.num}} <span class="list_p3">{{item.dw}}</span></div>
            </div>
            <div class="list_zb h-1-5">
                <div>
                    {{item.gl}}%
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {}
  }
}
</script>
<style scoped lang='less'>
#pnglist {
    width: 100%;
    height: 100%;
    // align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    .item {
        flex: 1;
        float: left;
        padding: 0 10px;
    }

    .border-bottom {
        border-bottom: 1px solid #F45E41;
    }
    img {
        width: 84px;
        height: 84px;
    }

    .list_p1 {
        font-size: 24px;
    }

    .list_p2 {
        color: #F45E41;
        font-size: 48px;
    }

    .list_p3 {
        color: #F45E41;
        font-size: 30px;;
    }

    .list_zb {
        padding-top: 9px;

        > div {
            width: 68px;
            height: 24px;
            background: linear-gradient(270deg, rgba(237, 92, 97, 0.42) 0%, rgba(237, 92, 97, 1) 100%);
            margin: 0 auto;
            line-height: 24px;
            font-size: 20px;
        }
    }
}
</style>
