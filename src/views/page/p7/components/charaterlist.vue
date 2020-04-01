<template>
  <div id="charaterlist">
      <div class="list_header">
          {{data.name}}
      </div>
      <div class="list_img"></div>
      <div class="list_botton" v-for="(item, index) in data.data" :key="index">
          <span class="btn_span1">{{item.name}}</span>
          <span>{{item.num}}</span>
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
#charaterlist{
    text-align: center;
    margin: 7rem 3rem;
    .list_header{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 19px;
        font-weight: bold;
        background: #30ACC6;
    }
    .list_img{
        width: 100%;
        height: 10px;
        background-image: url('./img/twobar.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .list_botton{
        width: 100%;
        height: 70px;
        line-height: 70px;
        background: #135677;
        span {
            font-size: 20px;
        }
        .btn_span1{
            margin-right: 10px;
        }
    }
}
</style>
