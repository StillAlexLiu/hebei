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
        color: [
          '#4A90E2',
          '#55B0EE',
          '#22AEC5',
          '#22C5B7',
          '#4BD61D',
          '#60B404',
          '#61EADF',
          '#B8E986',
          '#6EE86D',
          '#FF997D',
          '#FFBF24',
          '#EDA3B3',
          '#87A0F6',
          '#AEA6F7',
          '#6B72E1',
          '#8A7CEF',
          '#B576ED',
          '#FE6941',
          '#FFD86D'
        ],
        title: {
          text: this.data.name1,
          subtext: this.data.name2,
          x: 'center',
          y: 'center',
          textStyle: {
            color: 'white',
            fontSize: 20
          },
          subtextStyle: {
            color: 'white',
            fontSize: 20
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['35%', '70%'],
            center: ['50%', '50%'],
            data: this.data.pieData,
            label: {
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
