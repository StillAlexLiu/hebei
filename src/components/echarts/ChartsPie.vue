<template>
    <chart :options='options' @click="cli"/>
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
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    isPie: {
      type: Boolean,
      default: false
    },
    showAll: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    legendPosition: {
      type: String,
      default: 'top'
    },
    img: {
      type: String,
      default: ''
    },
    imgSize: {
      type: Array,
      default: () => {
        return [120, 120]
      }
    },
    centerValue: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    doublePie: {
      type: Boolean,
      default: false
    },
    centerData: {
      type: Array,
      default: () => {
        return []
      }
    },
    roseType: {
      type: String,
      default: ''
    },
    showLegend: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cli (data) {
      this.$emit('pieCli', data[0])
    }
  },
  computed: {
    options () {
      const elements = []
      const img = {
        type: 'image',
        style: {
          image: this.img,
          height: this.imgSize[0],
          width: this.imgSize[1]
        },
        left: 'center',
        top: 'middle'
      }
      const text = {
        type: 'text',
        left: 'center',
        top: 'center',
        z: 100,
        style: {
          fill: '#fff',
          textAlign: 'center',
          text: this.centerValue,
          font: ' 52px LESLIE'
        }
      }
      if (this.img !== '') {
        elements.push(img)
      }
      if (this.centerValue !== '') {
        elements.push(text)
      }
      const series = []
      let left = 0
      let right = 0
      const center = ['50%', '50%']
      const legend = {
        show: this.showLegend,
        selectedMode: true,
        // width:40,
        height:480,
        textStyle: {
          color: 'rgba(304, 304, 304, 0.9)',
          fontSize: 20
        }
      }
      switch (this.legendPosition) {
        case 'top':
          legend.orient = 'horizontal'
          break
        case 'left':
          legend.orient = 'vertical'
          legend.left = 10
          legend.top = 'center'
          legend.itemGap = 30
          left = '20%'
          break
        case 'right':
          legend.orient = 'vertical'
          legend.right = 10
          legend.top = 'center'
          legend.itemGap = 30
          left = '0%'
          right = '30%'
          break
        default:
          break
      }
      if (this.doublePie) {
        series.push({
          name: '',
          type: 'pie',
          radius: [0, '35%'],
          roseType: this.roseType,
          center: center,
          top: 20,
          left: left,
          right: right,
          label: {
            show: true,
            position: 'inside',
            color: 'white',
            align: 'right',
            width: 80,
            alignTo: 'edge',
            margin: 10,
            formatter: (params) => {
              if (params.name !== '') {
                if (this.showAll) {
                  return params.name + '\n{white|' + params.value + this.unit + '}' + '\n{white|' + params.percent + '%}'
                } else if (this.showValue) {
                  return params.name + '\n{white|' + params.value + this.unit + '}'
                } else {
                  return params.name + '\n{white|' + params.percent + '%}'
                }
              } else {
                return ''
              }
              // return params.percent
            },
            rich: {
              white: {
                color: 'white',
                fontSize: 22,
                align: 'left'
              }
            }
          },
          data: this.centerData
        })
      }
      series.push({
        name: '',
        type: 'pie',
        roseType: this.roseType,
        minAngle: 20,
        radius: this.isPie ? [0, '62%'] : ['45%', '63%'],
        center: center,
        top: 20,
        left: left,
        right: right,
        labelLine: {
          show: false,
          length: 20,
          length2: 0,
          smooth: false
        },
        label: {
          show: false,
          position: 'outside',
          color: '#ddd',
          fontSize: 22,
          align: 'right',
          width: 30,
          // alignTo: 'edge',
          margin: 0,
          formatter: (params) => {
            if (this.legendPosition === 'right') {
              return params.name + '\n{white|' + params.value + this.unit + '}'
            } else if (params.name !== '') {
              if (this.showAll) {
                return params.name + '\n{white|' + params.value + this.unit + '}' + '\n{white|' + params.percent + '%}'
              } else if (this.showValue) {
                return params.name + '\n{white|' + params.value + this.unit + '}'
              } else {
                return 'white|' + params.name + '\n{white|' + params.percent + '%}'
              }
            } else {
              return ''
            }
            // return params.percent
          },
          rich: {
            white: {
              color: '#79DFEF',
              fontSize: 18,
              align: 'left'
            }
          }
        },
        data: this.data
      })
      return {
        color: this.color.length > 0 ? this.color : null,
        graphic: {
          elements: elements
        },
        title: {
          text: this.title,
          x: 'center',
          y: 'center',
          textStyle: {
            color: 'red',
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
          // formatter: '{a}{b} : <br/>{c} ({d}%)'
          formatter: function (params) {
            let str = ''
            // 　　　　params.forEach((item) => {
            return　str += `<span style="font-size: 20px;color: rgba(304, 304, 304, 0.9);">${params.name}<span style="font-size: 22px;">：${params.value}<br />`
            // 　　　　})
          }
        },
        legend: legend,
        series: series
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
}
</style>
