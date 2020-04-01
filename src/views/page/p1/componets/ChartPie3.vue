<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
</template>

<script>
export default {
  name: 'ChartPie3',
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
        this.options = this.getOption(this.data, this.dimensions, this.icons, this.max, this.color)
      }
    }
  },
  methods: {
    getOption (data, dimensions, icons, max, color) {
      return {
        title: [{
          text: data.value,
          subtext: data.name,
          x: 'center',
          bottom: '32%',
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
          text: (data.value / max * 100).toFixed(2) + '%',
          x: 'center',
          bottom: '12%',
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
                width: 60,
                height: 60
              },
              left: 'center',
              top: '35%'
            }
          ]
        },
        series: [
          {
            name: data.name,
            type: 'pie',
            radius: [80, 100],
            center: ['50%', '50%'],
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
                value: data.value,
                name: data.name,
                itemStyle: {
                  color: color
                }
              },
              {
                value: max - data.value,
                name: 'rose2',
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          },
          {
            name: data.name,
            type: 'pie',
            z: 0,
            radius: [85, 95],
            center: ['50%', '50%'],
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
