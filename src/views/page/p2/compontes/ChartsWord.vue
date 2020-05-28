<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsWord',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    options () {
      return {
        series: [{
          rotationStep: 90,
          sizeRange: [20, 60],
          type: 'wordCloud',
          data: this.data,
          textStyle: {
            normal: {
              // fontFamily: 'PingFang',
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            }
          }
        }]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsWord {
}
</style>
