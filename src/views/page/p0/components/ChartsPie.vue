<template>
    <chart :options='options'/>
</template>

<script>

export default {
  name: 'ChartsPie',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    isPie: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: this.title
        },
        legend: {
          show: true
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.isPie ? [0, '62%'] : ['40%', '62%'],
            center: ['50%', '50%'],
            // position: ['60%', '50%'],
            top: 20,
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              fontSize: 22,
              align: 'left',
              alignTo: 'edge',
              margin: 10,
              formatter: function (params) {
                if (params.name !== '') {
                  return '{title|' + params.name + '}' + '\n{white|' + params.percent + '%}'
                } else {
                  return ''
                }
                // return params.percent
              },
              rich: {
                title: {
                  color: 'rgba(304, 304, 304, 0.9)',
                  fontSize: 20,
                  align: 'left'
                },
                white: {
                  color: '#79DFEF',
                  fontSize: 22,
                  align: 'left'
                }
              }
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
}
</style>
