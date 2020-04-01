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
        series: [
          {
            type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '50%'],
            data: this.data.pieData,
            hoverAnimation: false,
            label: {
              color: 'white',
              fontSize: 20,
              show: true,
              position: 'center',
              formatter: function (p) {
                console.error()
                if (p.name !== '') {
                  return p.name + '\n\n' + p.value
                } else {
                  return ''
                }
              }
            },
            color: ['rgb(251,186,194,0.8)', 'rgb(254,142,156,0.8)'],
            labelLine: {
              show: false,
              length: 0,
              length1: 0,
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
