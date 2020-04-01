<template>
  <div id="numberList">
    <div class="list"  v-for="(item, index) in data" :key="index">
      <div class="list_first">
        <div class="listHeader" @click="tabCli(item, index)" :class="{newBG : active == index}">
            {{item.name}}
        </div>
      </div>
      <div class="second_list">
        <div v-for="(item2, index) in item.num" :key="index" class="num_list">
          {{item2}}
        </div>
        <span>{{item.dw}}</span>
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
#numberList{
    widows: 100%;
    height: 100%;
    .list{
      width: 33%;
      height: 100%;
      float: left;
    }
    .list_first{
        display: flex;
        justify-content: center;
    }
    .second_list{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        span{
            font-size: 25px;
            margin-top: 60px;
        }
    }
    .listHeader{
        cursor: pointer;
        width: 200px;
        height: 50px;
        background-image: url('../components/img/22.png');
        background-size: 200px 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        line-height: 50px;
        font-size: 25px;
        font-weight: bold;
    }
    .num_list{
        width: 10%;
        height: 50%;
        float: left;
        background: #123C79;
        border: 5px solid #165B90;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #D98961;
        font-size: 40px;
        font-weight: bold;
    }
    .newBG{
      border-bottom: 50px solid #E95128;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      width: 200px;
    }
}
</style>
