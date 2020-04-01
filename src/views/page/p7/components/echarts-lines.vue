<template>
  <v-chart class="full-width" :autoresize='true' :options='option'/>
</template>

<script>
export default {
  name: 'p1-echarts-slopexBar',
  props: ['data'],
  data: () => {
    return {
      option: {}
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        this.option = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      var nodes = [
        {
          x: '10',
          y: '52',
          name: this.data.name1
        },
        {
          x: '150',
          y: '32',
          name: this.data.name
        },
        {
          x: '290',
          y: '32',
          name: this.data.name2
        }
      ]
      var links = [
        {
          source: this.data.name1,
          target: this.data.name,
          name: this.data.line1Name,
          data: this.data.line1Num
        },
        {
          source: this.data.name,
          target: this.data.name2,
          name: this.data.line2Name,
          data: this.data.line2Num
        }
      ]
      var charts = {
        nodes: [],
        links: [],
        linesData: []
      }
      var dataMap = new Map()
      for (var j = 0; j < nodes.length; j++) {
        var x = parseInt(nodes[j].x)
        var y = parseInt(nodes[j].y)
        var node = {
          name: nodes[j].name,
          value: [x, y],
          symbolSize: 100,
          itemStyle: {
            normal: {
              color: '#12b5d0'
            }
          }
        }
        dataMap.set(nodes[j].name, [x, y])
        charts.nodes.push(node)
      }
      for (var i = 0; i < links.length; i++) {
        var link = {
          source: links[i].source,
          target: links[i].target,
          label: {
            normal: {
              show: true,
              fontSize: 20,
              formatter: links[i].name + '\n' + links[i].data,
              color: 'white'
            }
          },
          lineStyle: {
            normal: {
              color: '#00FFFF'
            }
          }
        }
        charts.links.push(link)
        // 组装动态移动的效果数据
        var lines = [
          {
            coord: dataMap.get(links[i].source)
          },
          {
            coord: dataMap.get(links[i].target)
          }
        ]
        charts.linesData.push(lines)
      }
      let option = {
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [
          {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                position: 'inside',
                fontSize: 20,
                color: 'white'
              }
            },
            lineStyle: {
              width: 2,
              shadowColor: 'none',
              curveness: '0.5',
              color: '#10A9C5'
            },
            data: charts.nodes,
            links: charts.links,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function (item) {
                    return item.data.name
                  }
                }
              }
            }
          },
          {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: {
              show: true,
              trailLength: 0,
              symbol: 'arrow',
              color: '#00FFFF',
              symbolSize: 8
            },
            lineStyle: {
              width: 2,
              shadowColor: 'none',
              curveness: '0.5',
              color: '#10A9C5'
            },
            data: charts.linesData
          }
        ]
      }
      return option
    }
  }
}
</script>

<style scoped lang='less'>
</style>
