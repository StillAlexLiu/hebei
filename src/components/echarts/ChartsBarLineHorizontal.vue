<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsBarLineHorizontal',
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
    dimensions: {
      type: Array,
      default: () => {
        return null
      }
    },
    units: {
      type: Array,
      default: () => {
        return []
      }
    },
    colors: {
      type: Array,
      default: () => {
        return null
      }
    },
    type: {
      type: Array,
      default: () => {
        return []
      }
    },
    legend: {
      type: Array,
      default: () => {
        return null
      }
    },
    borderRadius: {
      type: Boolean,
      default: true
    },
    barWidth: {
      type: Number,
      default: 20
    },
    twoAxis: {
      type: Boolean,
      default: true
    },
    lineWithCircle: {
      type: Boolean,
      default: true
    },
    isArea: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: 0
    }
  },
  computed: {
    options () {
      const series = []
      const xAxis = []
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          label: {
            show: true,
            position: 'right',
            fontSize: 20,
            color: 'rgba(304, 304, 304, 0.9)',
            formatter: (value) => {
              return value.value.value + this.units[i]
            }
          },
          itemStyle: {
            normal: {}
          }
        }
        if (this.twoAxis) {
          item.xAxisIndex = i
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth

          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [0, 30, 30, 0]
          }
        }
        if (this.type[i] === 'line') {
          if (this.lineWithCircle) {
            item.symbolSize = 8
            item.itemStyle = {
              borderColor: '#fff',
              borderWidth: 1
            }
          } else {
            item.symbolSize = 0
          }

          if (this.isArea) {
            item.areaStyle = {}
          }
        }
        series.push(item)
        if (this.twoAxis) {
          xAxis.push({
            // name: this.units[i],
            min: 0,
            nameLocation: 'end',
            nameGap: 6,
            nameTextStyle: {
              fontSize: 20,
              color: 'rgba(304, 304, 304, 0.9)'
            },
            splitLine: {
              show: i === 0
            },
            axisLabel: {
              interval: 0,
              fontSize: 20,
              color: 'rgba(304, 304, 304, 0.9)'
              // rotate: -12
            },
            show: true,
            // x: 'center',
            type: 'value'
          })
        } else {
          if (i === 0) {
            xAxis.push({
              // name: this.units[i],
              min: 0,
              nameLocation: 'end',
              nameGap: 6,
              nameTextStyle: {
                fontSize: 20,
                color: 'rgba(304, 304, 304, 0.9)'
              },
              splitLine: {
                show: i === 0
              },
              axisLabel: {
                interval: 0,
                fontSize: 20,
                color: 'rgba(304, 304, 304, 0.9)'
                // rotate: -12
              },
              show: true,
              // x: 'center',
              type: 'value'
            })
          }
        }
      }
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        grid: {
          left: 100,
          top: 60,
          right: 60,
          bottom: 40
        },
        legend: {
          show: true,
          left: 'right',
          selectedMode: false,
          itemWidth: 13,
          itemHeight: 7,
          data: this.legend
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        xAxis: xAxis,
        yAxis: {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            interval: 0,
            fontSize: 20,
            color: 'rgba(304, 304, 304, 0.9)'
            // rotate: -12
          }
        },
        series: series
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.ChartBar {

}
</style>
