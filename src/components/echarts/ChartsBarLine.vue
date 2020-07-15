<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsBarLine',
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
    smooth: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: 0
    },
    dataIndex: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    options () {
      const series = []
      const yAxis = []
      for (let i = 0; i < this.type.length; i++) {
        const item = {
          type: this.type[i],
          name: this.legend[i],
          itemStyle: {
            normal: {}
          }
        }
        if (this.twoAxis) {
          if (this.dataIndex.length > 0) {
            item.yAxisIndex = this.dataIndex[i]
          } else {
            item.yAxisIndex = i
          }
        }
        if (this.type[i] === 'bar') {
          item.barWidth = this.barWidth

          if (this.borderRadius) {
            item.itemStyle.normal.barBorderRadius = [30, 30, 0, 0]
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
          if (this.smooth) {
            item.smooth = true
          }
          if (this.isArea) {
            item.areaStyle = {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: this.colors[i]
                }, {
                  offset: 1, color: 'rgba(0,0,0,0)'
                }],
                global: false
              }
            }
          }
        }
        series.push(item)
        if (this.twoAxis) {
          yAxis.push({
            name: this.units[i],
            min: 0,
            nameLocation: 'end',
            nameGap: 6,
            nameTextStyle: {
              fontSize: 20,
              color: 'white'
            },
            splitLine: {
              show: i === 0
            },
            axisLabel: {
              color: 'rgba(304, 304, 304, 0.9)',
              fontSize: 20
            },
            show: true,
            // x: 'center',
            type: 'value'
          })
        } else {
          if (i === 0) {
            yAxis.push({
              name: this.units[i],
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
                color: 'rgba(304, 304, 304, 0.9)',
                fontSize: 20
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
          left: '7%',
          top: '10%',
          right: '2%',
          bottom: '10%'
        },
        legend: {
          show: true,
          left: 'right',
          selectedMode: false,
          itemWidth: 15,
          itemHeight: 15,
          data: this.legend,
          textStyle: {
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 20
          }
        },
        tooltip: {
          show: true,
          textStyle: {
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 20
          }
        },
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            interval: 0,
            color: 'rgba(304, 304, 304, 0.9)',
            fontSize: 14
            // rotate: -12
          }
        },
        yAxis: yAxis,
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
