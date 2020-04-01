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
        calculable: true,
        series: [
          {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            startAngle: 0,
            endAngle: 135,
            roseType: 'area',
            selectedMode: 'single',
            label: {
              normal: {
                show: true,
                formatter: function (par) {
                  if (par.value === 0) {
                    par.value = ''
                  } else {
                    return par.name + '\n' + par.value + '台'
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                show: false,
                smooth: false
              },
              emphasis: {
                show: false
              }
            },
            data: data.data
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
