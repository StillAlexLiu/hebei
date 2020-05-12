<template>
    <chart :options='options'/>
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
      return {
        graphic: {
          elements: elements
        },
        title: {
          text: this.title,
          x: 'center',
          y: 'center',
          textStyle: {
            color: 'red',
            fontSize: 200
          }
        },
        legend: {
          show: this.showLegend
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.isPie ? [0, '62%'] : ['40%', '62%'],
            center: ['50%', '50%'],
            // position: ['60%', '50%'],
            top: 20,
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              fontSize: 22,
              align: 'left',
              alignTo: 'edge',
              margin: 10,
              formatter: (params) => {
                if (params.name !== '') {
                  if (this.showAll) {
                    return params.name + '\n{white|' + params.value + '}' + '\n{white|' + params.percent + '%}'
                  } else if (this.showValue) {
                    return params.name + '\n{white|' + params.value + '}'
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
                  color: '#79DFEF',
                  fontSize: 22,
                  align: 'left'
                }
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

<style scoped lang="less">
.ChartPieCircle {
}
</style>
