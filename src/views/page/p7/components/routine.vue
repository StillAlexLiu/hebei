<template>
  <div id="routine">
      <div class="routine_lie" v-for="(item, index) in data" :key="index">
          <span class="item_left">{{item.name}}</span>
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
    #routine{
        width: 75%;
        margin: 5% auto;
        .routine_lie{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: white;
            font-size: 25px;
        }
        .routine_lie:nth-child(even){
            background: #0DA7C1;
        }
        .routine_lie:nth-child(odd){
            background: #41C8DE;
        }
        .item_left{
            margin-right: 20px;
        }
    }
</style>
