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
    }
  },
  computed: {
    options () {
      return {
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
            return Math.sqrt(data[this.dimensions[2]]) * this.baseSize
          },
          label: {
            show: true,
            formatter: (params) => {
              return params.name + '\n' + params.data[this.dimensions[2]] + this.unit
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
