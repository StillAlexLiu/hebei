<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartPie',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    isCircle: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: () => {
        return ['#AEA6F7', '#519EF8', '#73F572', '#519EF8', '#61EADF', '#308FD1']
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
        this.options = this.getOption(this.data, this.colors, this.isCircle)
      }
    }
  },
  methods: {
    getOption (data, color, isCircle) {
      return {
        color: color,
        series: [
          {
            type: 'pie',
            radius: isCircle ? ['50%', '60%'] : '60%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              show: true,
              formatter: '{b}\n{c}',
              fontSize: 20
            },
            data: data
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
