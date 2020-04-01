<template>
    <v-chart class="full-width" :autoresize='true' :options='options'/>
    <!--    <div>{{img.toString()}}</div>-->
</template>

<script>
export default {
  name: 'ChartTree',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      options: {},
      img: require('./img/Group@2x.png')
    }
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function () {
        this.options = this.getOption(this.data)
      }
    }
  },
  methods: {
    getOption (data) {
      let label = {
        position: 'inside',
        verticalAlign: 'middle',
        color: '#fff',
        formatter: '{b}\n\n{c}件',
        fontSize: 20,
        height: 60,
        width: 80,
        align: 'center',
        padding: 20,
        backgroundColor: { image: this.img },
        rich: {}
      }
      return {
        series: [
          {
            type: 'tree',
            data: data,
            symbolSize: 1,
            initialTreeDepth: 10,
            label: label,
            leaves: {
              label: label
            },
            lineStyle: {
              color: '#5C745C'
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartTree {

}
</style>
