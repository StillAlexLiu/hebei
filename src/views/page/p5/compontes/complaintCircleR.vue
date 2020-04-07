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
        console.log(this.data)
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption () {
      return {
        title: {
          text: '案件类型\n\n分布',
          x: 'center',
          y: '40%',
          grid: {
            top: '5%',
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
          },
          textStyle: {
            color: '#fff',
            fontSize: 30
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            data: this.data,
            label: {
              formatter: '{b}: {c}',
              color: 'white',
              fontSize: 20
            },
            color: [
              '#FFBF24',
              '#FE977E',
              '#AEA6F7',
              '#FE6941',
              '#FFD86D',
              '#55B0EE',
              '#50E3C2',
              '#FF5B5F',
              '#B8E986',
              '#87A0F6',
              '#61EADF'
            ],
            labelLine: {
              lineStyle: {
                color: 'white'
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50
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
