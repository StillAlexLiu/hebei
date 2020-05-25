<template>
    <chart :options='options' ref="eci"/>
</template>

<script>
export default {
  name: 'ChartsGraph',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    Link: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      width: 0,
      img: require('./img/Group@2x.png')
    }
  },
  mounted () {
    this.width = this.$refs.eci.width
  },
  computed: {
    options () {
      const data = []
      const link = []
      const x = this.data[this.data.length - 1].index
      const more = []
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i]
        if (!more[item.index]) {
          more[item.index] = 1
        } else {
          more[item.index]++
        }
        if (item.index > 0) {
          for (let j = 0; j < this.data.length; j++) {
            const itemFor = this.data[j]
            if (item.index - 1 === itemFor.index) {
              link.push({
                source: j,
                target: i
              })
            }
          }
        }
      }
      let t = 0
      for (let i = 0; i < this.data.length; i++) {
        const item = this.data[i]
        item.x = this.width * (item.index + 1) / x
        if (more[item.index] === 1) {
          t = 0
          item.y = 0
        } else {
          t++
          item.y = 600 * t / (more[item.index] + 1) - 300
        }
        data.push(item)
      }
      const label = {
        show: true,
        position: 'inside',
        verticalAlign: 'middle',
        color: '#fff',
        formatter: (p) => {
          // '{b}\n\n{c}件',
          console.log(p)
          return '{name|' + p.data.name + '}' + '\n\n' + '{value|' + p.data.value + '件}' + ''
        },

        height: 80,
        width: 100,
        align: 'center',
        padding: 20,
        backgroundColor: { image: this.img },
        rich: {
          name: {
            fontSize: 26
          },
          value: {
            fontSize: 43,
            color: '#46CFFF',
            fontFamily: 'LESLIE'
          }
        }
      }
      return {
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            label: label,
            data: data,
            // data: [{
            //   name: '节点1',
            //   x: 300,
            //   y: 300
            // }, {
            //   name: '节点2',
            //   x: 800,
            //   y: 300
            // }, {
            //   name: '节点3',
            //   x: 550,
            //   y: 100
            // }, {
            //   name: '节点4',
            //   x: 550,
            //   y: 500
            // }],
            links: link,
            // links: [{
            //   source: 0,
            //   target: 1,
            //   symbolSize: [5, 20],
            //   label: {
            //     show: true
            //   },
            //   lineStyle: {
            //     width: 5,
            //     curveness: 0.2
            //   }
            // }, {
            //   source: '节点2',
            //   target: '节点1',
            //   label: {
            //     show: true
            //   },
            //   lineStyle: {
            //     curveness: 0.2
            //   }
            // }, {
            //   source: '节点1',
            //   target: '节点3'
            // }, {
            //   source: '节点2',
            //   target: '节点3'
            // }, {
            //   source: '节点2',
            //   target: '节点4'
            // }, {
            //   source: '节点1',
            //   target: '节点4'
            // }],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsGraph {
}
</style>
