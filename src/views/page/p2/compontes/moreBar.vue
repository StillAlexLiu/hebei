<template>
    <div class="moreBar">
        <div class="hengBar" v-for="(item, index) in data" :key="index">
            <p class="BarRight">
                <span>已核查</span>
                {{item.hecha}}件
                <span>监管户数</span>
                {{item.jianguan}}
            </p>
            <echartsHBar :xdata='data[index].xdata' :ydata='data[index].ydata'></echartsHBar>
        </div>
    </div>
</template>

<script>
import echartsHBar from './echarts-hengBar'
export default {
  name: 'ChartBar',
  props: ['data'],
  data () {
    return {
      options: {}
    }
  },
  components: {
    echartsHBar
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.moreBar {
    width: 100%;
    height: 90%;
    overflow-y: auto;
    .hengBar{
        width: 100%;
        height: 25%;
    }
    .BarRight{
        float: right;
        margin: 0;
        margin-right: 5rem;
        span{
            display: inline-block;
            margin-right: 1rem;
        }
    }
}
.moreBar::-webkit-scrollbar {
  display:none
}
</style>
