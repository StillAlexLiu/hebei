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
        legend: {
          right: 0,
          data: data.legend,
          width: 20,
          height: 10,
          top: 10,
          textStyle: {
            fontSize: 20,
            color: 'white'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['45%', '50%'],
            data: this.data.pieData,
            hoverAnimation: false,
            label: {
              color: 'white',
              fontSize: 20,
              formatter: '{b}：{c}'
            },
            labelLine: {
              length: 5,
              length2: 15,
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
