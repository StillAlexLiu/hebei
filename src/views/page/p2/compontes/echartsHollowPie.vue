<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'ChartBar',
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
      return {
        graphic: {
          elements: [
            {
              type: 'image',
              style: {
                image: this.img,
                height: 120,
                width: 120
              },
              left: 'center',
              top: 'middle'
            }
          ]
        },
        title: {
          text: this.title,
          x: 'center',
          y: 'center',
          textStyle: {
            color: 'white',
            fontSize: 22
          },
          subtextStyle: {
            color: 'white',
            fontSize: 22
          }
        },
        grid: {
          left: 0
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['65%', '70%'],
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
