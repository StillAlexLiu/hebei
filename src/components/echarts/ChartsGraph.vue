<template>
  <chart :options='options' />
</template>

<script>
export default {
  name: 'ChartsBarSimple',
  props: {
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        this.options = this.getOption()
      }
    }
  },
  methods: {
    getOption () {
      var data = []
      for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].value > 5000) {
              data.push({
                name: this.data[i].name,
                value: this.data[i].value,
                symbolSize: this.data[i].value * 0.001,
                draggable: true,
                itemStyle: {
                normal: {
                    shadowBlur: 100,
                    shadowColor: this.color[i],
                    color: this.color[i]
                }
              }
            })
          } else {
              data.push({
                name: this.data[i].name,
                value: this.data[i].value,
                symbolSize: this.data[i].value * 0.05,
                draggable: true,
                itemStyle: {
                normal: {
                    shadowBlur: 100,
                    shadowColor: this.color[i],
                    color: this.color[i]
                }
              }
            })
          }
          
      }
      return {
        tooltip: {},
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100
        },
        animationEasingUpdate: 'bounceIn',
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500,
              edgeLength: 10
            },
            roam: false,
            label: {
              normal: {
                show: true,
                color: 'white'
              }
            },
            width: '100%',
            height: '100%',
            data: data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.ChartBar {
}
</style>
