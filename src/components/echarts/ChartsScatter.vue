<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsScatter',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dimensions: {
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
    baseSize: {
      type: Number,
      default: 1
    },
    unit: {
      type: String,
      default: ''
    },
    showX: {
      type: Boolean,
      default: true
    },
    showSize: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '5e1'
    }
  },
  computed: {
    options () {
      return {
        tooltip: {
          show: true,
          formatter: (params) => {
            const data = params.data
            if (this.showSize) {
              return params.name + '\n' + data.value
            } else {
              return params.name + '\n' + params.data[this.dimensions[2]] + this.unit
            }
            // return params.name + '\n' + params.data[this.dimensions[2]] + this.unit
          },
          textStyle: {
            fontSize: 28
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            show: this.showX,
            interval: 0
            // rotate: -12
          }
        },
        yAxis: {},
        dataset: {
          dimensions: this.dimensions,
          source: this.data
        },
        series: [{
          symbolSize: (data) => {
            if (this.showSize) {
              // return 120
              if (data.value < 10000) {
                return data.value * 0.01 + 50
              } else {
                return data.value * 0.0008 + 80
              }
            } else {
              return Math.sqrt(data[this.dimensions[2]]) * this.baseSize
            }
          },
          label: {
            show: true,
            formatter: (params) => {
              const data = params.data
              if (this.showSize) {
                return params.name + '\n' + data.value
              } else {
                return params.name + '\n' + params.data[this.dimensions[2]] + this.unit
              }
              // return params.name + '\n' + params.data[this.dimensions[2]] + this.unit
            },
            fontSize: 14,
            color: '#FFFFFF'
          },
          itemStyle: {
            color: (params) => {
              return this.colors[params.dataIndex % this.colors.length]
            },
            borderWidth: 4,
            borderColor: ''
          },
          type: 'scatter'
        }]
      }
    }
  }
}
</script>
