<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
  props: ['data'],
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
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      return {
        title: {
          text: this.data.name1,
          subtext: this.data.name2,
          x: 'center',
          y: 'center',
          textStyle: {
            color: 'white',
            fontSize: 22
          },
          subtextStyle: {
            color: 'white',
            fontSize: 22
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: this.data.pieData,
            hoverAnimation: false,
            label: {
              color: 'white',
              fontSize: 25
            },
            labelLine: {
              lineStyle: {
                color: 'white'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
