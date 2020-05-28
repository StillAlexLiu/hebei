<template>
    <div class="full ChartsPieIcon" :style="{backgroundImage:'url('+data.img+')'}">
        <chart :options='options'/>
    </div>
</template>

<script>
export default {
  name: 'ChartsPieIcon',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    colors: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    options () {
      const data = []
      for (let i = 0; i < this.data.data.length; i++) {
        const item = this.data.data[i]
        data.push({
          name: item.name,
          value: item.value,
          labelLine: {
            show: item.name !== ''
          }
        })
      }
      return {
        color: this.colors,
        series: [
          {
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['40%', '50%'],
            // hoverAnimation: false,
            // avoidLabelOverlap: true,
            label: {
              show: true,
              formatter: (params) => {
                if (params.name === '') {
                  return ''
                } else {
                  return '{name|' + params.name + '}' + '\n' + '{value|' + params.value + '}' + '\n' + '{value|' + params.percent + '%}'
                }
              },
              rich: {
                value: {
                  color: '#79DFEF',
                  fontSize: '24'
                },
                name: {
                  fontSize: '24'
                }
              },
              distanceToLabelLine: -20
            },
            data: data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsPieIcon {

    background-size: 64px 64px;
    background-position: 40% 50%;
    background-repeat: no-repeat;
}
</style>
