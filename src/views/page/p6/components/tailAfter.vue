<template>
  <div class="tailAfter">
    <div class="handler">{{handleInfo}}</div>
    <div id="tailAfter">
      <div class="afterBox" v-for="(item,index) in data" :key="index" :style='{"background-image":"url("+image+")"}'>
        <p class="box_p1">{{item.name}}</p>
        <p class="box_p1">{{item.num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['data', 'image', 'handleInfo'],
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.tailAfter {
  height: 100%;
}

.handler {
  height: 3rem;
  text-align: left;
  font-size: 1.8rem;
}

#tailAfter {
  width: 100%;
  height: calc(~"100% - 3rem");
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .afterBox {
    width: 18rem;
    height: 14rem;
    // background-image: url('../../../assets/img/p6/绿色.png');
    background-size: 14rem 14rem;
    background-position: left;
    background-repeat: no-repeat;
    /*margin-right: 3rem;*/
    padding-right: 4rem;
    position: relative;

    .box_p1 {
      line-height: 6rem;
      font-size: 2rem;
      margin: 0;
    }
  }

  .afterBox:after {
    content: '';
    width: 4rem;
    height: .2rem;
    display: block;
    position: absolute;
    background-color: hsla(90, 69%, 72%, .47);
    top: 6rem;
    left: 14rem;
  }

  .afterBox:last-child:after {
    content: '';
    width: 0;
  }
}
</style>
