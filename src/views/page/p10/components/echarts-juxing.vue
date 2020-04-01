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
    xdata: {
      immediate: true,
      deep: true,
      handler: function () {
        this.options = this.getOption()
      }
    }
  },
  methods: {
    getOption () {
      return {
        color: ['#4A90E2', '#54AFED', '#22AEC5', '#22C4B6', '#61EADF', '#F09077'],
        title: {
          show: false
        },
        calculable: true,
        series: [{
          type: 'treemap',
          roam: false, // 是否开启拖拽漫游（移动和缩放）
          nodeClick: false, // 点击节点后的行为,false无反应
          label: {
            normal: {
              textStyle: {
                fontWeight: 'bold',
                fontSize: '25',
                color: '#e5ddb8'
              }
            }
          },
          breadcrumb: {
            show: false
          },
          itemStyle: {
            normal: {
              gapWidth: 10,
              borderColor: 'rgba(0,0,0,0)',
              label: {
                show: true,
                formatter: '{b}\n\n{c}',
                fontSize: 30
              }
            }

          },
          data: this.data
        }]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
