<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartPie3',
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
    },
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    icons: {
      type: String,
      default: null
    },
    max: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#3DB9CF'
    }
  },
  computed: {
    options () {
      return {
        title: [{
          subtext: this.data.name,
          x: 'center',
          bottom: '44%',
          textStyle: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 28,
            fontWeight: 'normal'
          }
        }, {
          text: (this.data.value / this.max * 100).toFixed(2) + '%',
          x: 'center',
          bottom: '16%',
          textStyle: {
            color: this.color,
            fontSize: 40,
            fontFamily: 'LESLIE',
            fontWeight: 'normal'
          }
        }, {
          text: this.data.value + '户',
          x: 'center',
          bottom: '8%',
          textStyle: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'normal'
          }
        }],
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: this.icons,
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
            data: [
              {
                value: this.data.value,
                name: this.data.name,
                itemStyle: {
                  color: this.color
                }
              },
              {
                value: this.max - this.data.value,
                name: 'rose2',
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          },
          {
            name: this.data.name,
            type: 'pie',
            z: 0,
            radius: ['70%', '80%'],
            center: this.center,
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
            data: [
              {
                value: 1,
                itemStyle: {
                  color: '#434857'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
