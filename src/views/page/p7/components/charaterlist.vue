<template>
    <div id="charaterlist">
        <div class="list_header">
            {{data.name}}
        </div>
        <div class="list_img"></div>
        <div class="list_botton" v-for="(item, index) in data.data" :key="index">
            <span class="btn_span1 number-font">{{item.name}}</span>
            <span class="number-font">{{item.num}}</span>
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
#charaterlist {
    text-align: center;
    margin: 7rem 3rem;

    .list_header {
        width: 100%;
        height: 68px;
        line-height: 68px;
        font-size: 36px;
        font-weight: bold;
        background: #3483C3;
    }

    .list_img {
        width: 100%;
        height: 10px;
        background-image: url('./img/twobar.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .list_botton {
        width: 100%;
        height: 120px;
        line-height: 120px;
        background: #1B296A;

        .number-font {
            color: #fff !important;
        }

        span {
            font-size: 36px;
        }

        .btn_span1 {
            margin-right: 10px;
            font-size: 20px;
        }
    }
}
</style>
