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
        color: ['#AEA6F7', '#519EF8', '#73F572', '#519EF8', '#61EADF', '#308FD1'],
        series: [
          {
            type: 'pie',
            radius: ['0%', '60%'],
            center: ['50%', '50%'],
            data: this.data.pieData,
            hoverAnimation: false,
            label: {
              color: 'white',
              fontSize: 20
            },
            labelLine: {
              length: 5,
              length2: 5,
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
