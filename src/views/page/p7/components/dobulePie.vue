<template>
  <div id="dobulePie">
      <div class="w-1-2 full-height pieClass" v-for="(item, index) in data" :key="index">
          <div :style="{'background':item.color}">
              <span>{{item.num}}</span>
          </div>
          <p>{{item.name}}</p>
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
#dobulePie {
  width: 100%;
  height: 100%;
  .pieClass{
    //   padding: 10% 0 0 10%;
      div{
        border-radius: 50%;
        width: 80%;
        height: 28rem;
        margin: 10% 0 0 10%;
        line-height: 28rem;
        text-align: center;
        span{
            text-align: center;
            line-height: 190px;
            font-size: 25px;
            color: white;
            font-weight: bold;
        }
      }
      p{
          font-size: 25px;
          margin: 10px 0 0 0;
          text-align: center;
      }
  }
}
</style>
