<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartsPiePiecewise',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    showValue: {
      type: Boolean,
      default: false
    },
    imgSize: {
      type: Array,
      default: () => {
        return [120, 120]
      }
    },
    imgPosition: {
      type: Array,
      default: () => {
        return ['center', 'middle']
      }
    },
    titlePosition: {
      type: Array,
      default: () => {
        return ['center', 'center']
      }
    },
    titleSize: {
      type: Number,
      default: 50
    }
  },
  computed: {
    options () {
      const rich = {
        white: {
          color: '#79DFEF',
          fontSize: 22,
          align: 'left',
          padding: [0, 0]
        }
      }
      const placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      const data = []
      let max = 0
      for (let i = 0; i < this.data.length; i++) {
        max += this.data[i].value * 1
      }
      for (let i = 0; i < this.data.length; i++) {
        data.push({
          value: this.data[i].value,
          name: this.data[i].name,
          itemStyle: {
            normal: {
              borderWidth: 1
              // borderColor: color[i]
            }
          }
        }, {
          value: max / 50,
          name: '',
          itemStyle: placeHolderStyle
        })
      }
      const elements = []
      const image = {
        type: 'image',
        style: {
          image: this.img,
          height: this.imgSize[0],
          width: this.imgSize[1]
        },
        left: this.imgPosition[0],
        top: this.imgPosition[1]
      }
      const text = {
        type: 'text',
        left: this.titlePosition[0],
        top: this.titlePosition[1],
        z: 100,
        style: {
          fill: '#fff',
          text: this.title,
          font: this.titleSize + 'px LESLIE'
        }
      }
      if (this.img !== '') {
        elements.push(image)
      }
      if (this.title !== '') {
        elements.push(text)
      }
      return {
        graphic: {
          elements: elements
        },
        // title: {
        //   text: this.title,
        //   x: 'center',
        //   y: 'center',
        //   textStyle: {
        //     color: 'white',
        //     fontSize: 22
        //   },
        //   subtextStyle: {
        //     color: 'white',
        //     fontSize: 22
        //   }
        // },
        grid: {
          left: 0
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['57%', '62%'],
            center: ['50%', '50%'],
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              // label: {
              //   color: 'white',
              fontSize: 22,
              // },
              align: 'left',
              alignTo: 'edge',
              margin: 20,
              formatter: (params) => {
                if (params.name !== '') {
                  if (this.showValue) {
                    return params.name + '\n{white|' + params.value + '}'
                  } else {
                    return params.name + '\n{white|' + params.percent + '%}'
                  }
                } else {
                  return ''
                }
                // return params.percent
              },
              rich: rich
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
.ChartBar {
}
</style>
