<template>
    <chart :options='options' class='ChartsPiePercentMode'/>
</template>

<script>
export default {
  name: 'ChartsPiePercentMode',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    options () {
      const data = []
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i]
        item.label = {
          show: true,
          formatter: (params) => {
            if (params.name === '') {
              return ''
            } else {
              return '{value|' + params.value + '}' + '\n' + '{name|' + params.name + '}'
            }
          },
          rich: {
            value: {
              color: '#79DFEF',
              fontSize: '28'
            },
            name: {
              fontSize: '28'
            }
          },
          distanceToLabelLine: -20
        }
        item.labelLine = {
          length: 10,
          length2: 10,
          // smooth: true
          show: item.name !== ''
        }
        data.push(item)
      }
      console.log(this.colors)
      return {
        color: this.colors,
        legend: {
          orient: 'vertical',
          bottom: 10,
          left: 10,
          textStyle: {
            fontSize: '18'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '45%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            avoidLabelOverlap: true,
            data: data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsPiePercentMode {
}
</style>
