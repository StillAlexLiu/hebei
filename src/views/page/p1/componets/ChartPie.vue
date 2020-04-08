<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartPie',
  data () {
    return {
      center: ['50%', '40%']
    }
  },
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
      return {
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: this.data.icon,
                width: 80,
                height: 80
              },
              left: 'center',
              top: '25%'
            }
          ]
        },
        series: [
          {
            name: this.data.name,
            type: 'pie',
            radius: ['67%', '83%'],
            center: this.center,
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false,
                position: 'center'
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

<style scoped>
</style>
