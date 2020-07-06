<template>
  <chart :options="options" @click="click"/>
</template>

<script>
export default {
  name: 'MapHebeiWithClick',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    options () {
      return {
        geo: {
          show: true,
          map: 'hebei',
          itemStyle: {
            areaColor: '#2c4267'
          },
          emphasis: {
            itemStyle: {
              areaColor: '#2c4267'
            }
          }
        },
        series: [{
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: this.showPointList,
          rippleEffect: {
            period: this.timesPoint / 1000
          },
          symbolSize: 20,
          itemStyle: {
            color: '#80d034'
          }
        }]
      }
    }
  },
  data () {
    return {
      timer: 0, // 接口定时器
      timerPoint: 3000, // 点定时器
      arrayIndex: 0, // 返回的数组中平分后的index索引
      // times: 300000 // 5分钟，每隔5分钟调用一次
      times: 20000, // 5分钟，每隔5分钟调用一次
      timesPoint: 4000, // 平分后数据点更新时间，同样也是点的显示时间
      showPointList: [] // 要展现的数据点
    }
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler: function () {
        if(this.data.length > 0) {
          this.start()
          this.timesPoint = this.data.length * 500
        }
      }
    },
  },
  mounted () {
    // this.start()
  },
  beforeDestroy () {
    this.stop()
  },
  methods: {
    start () { // 开启接口定时器
      this.stop() // 先停止
      this.startAnimation()
      // this.timer = setInterval(() => {
      //   this.startAnimation()
      // }, this.times)
    },
    stop () { // 停止
      this.stopAnimation()
      try {
        clearInterval(this.timer)
      } catch (e) {
        console.log(e)
      }
    },
    startAnimation () { // 开始动画
      this.stopAnimation()
      // 这里先这样写，后面连接接口后改为promise，在then里面执行下面这些代码,把异步开始到异步结束代码放在获取数据后的异步操作里面
      const data = this.getMapData()
      // 异步开始
      const step = this.times / this.timesPoint
      if (data.data.mapList.length > 0) {
        this.showPoint(data.data.mapList, this.arrayIndex, step)
        this.timerPoint = setInterval(() => {
            this.arrayIndex++
            if (this.arrayIndex < this.data.length) {
              this.showPoint(data.data.mapList, this.arrayIndex, step)
            }
          }, this.timesPoint)
        }
      // 异步结束
    },
    stopAnimation () { // 停止动画
      this.arrayIndex = 0
      try {
        clearInterval(this.timerPoint)
      } catch (e) {
        console.log(e)
      }
    },
    showPoint (data, index, step) {
      console.log(data, index, step, '切换')
      const len = data.length
      const startI = Math.floor(len * (index / step))
      const endI = Math.floor(len * ((index + 1) / step))
      const selectedData = data.slice(startI, endI)
      this.makePointData(selectedData)
    },
    makePointData (list) {
      this.showPointList = []
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        this.showPointList.push([item.longitude, item.latitude])
      }
    },
    click (params) {
      const name = params[0].name
    },
    getMapData (startTime, times) { // 接口返回数据，这里改为return promise，实现异步
      return {
        code: 200,
        success: true,
        data: {
          mapList: this.data
        },
        msg: '操作成功'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .MapHebeiWithClick {
  }
</style>
