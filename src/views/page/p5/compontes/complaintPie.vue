<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartPie',
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
        color: ['#4A90E2', '#54AFED', '#22AEC5', '#22C4B6', '#205420', '#61EADF', '#F09077'],
        series: [
          {
            name: '',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: this.data,
            hoverAnimation: false,
            label: {
              formatter: '{b}: {c}',
              color: 'white',
              fontSize: 20
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
