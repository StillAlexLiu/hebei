<template>
    <v-chart class='full-width' :autoresize='true' :options='options'/>
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
        title: [   
        {
            text: '线索',
            subtext:  845+'件',
            textStyle:{
                fontSize: 24,
                color: '#fff'
            },
            subtextStyle: {
                fontSize: 20,
                color: '#fff'
            },
            textAlign: 'center',
            x: '50%',
            y: '40%',
        }],
        // legend: {
        //   orient: 'vertical',
        //   icon: 'circle',
        //   top: 'center',
        //   right: '2%',
        //   textStyle: {
        //     fontSize: 20,
        //     color: '#fff'
        //   },
        // },
        color: ['#43A1E2', '#3078CD', '#77FFE7', '#4DE1E2'],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['70', '80%'],
            center: ['50%', '50%'],
            data: this.data,
            label: {
              show: true,
              formatter: '{b}: {c}',
              color: 'white',
              fontSize: 20
            },
            labelLine: {
              show: true,
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

<style scoped lang='less'>
.ChartBar {

}
</style>
