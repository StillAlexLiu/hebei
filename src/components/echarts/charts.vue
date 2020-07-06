·<template>
    <div class="charts">
        <v-chart :options='computedOptions' ref="ec" :autoresize='true' theme="screen" @click="this.handler"/>
        <!--        {{computedOptions}}-->
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
export default {
  name: 'charts',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      defaultOption: {
        title: {
          textStyle: {
            fontSize: 24,
            fontWeight: 'normal'
          }
        },
        grid: {
          containLabel: true,
          left: 10,
          top: 60,
          right: 10,
          bottom: 10
        }
      }
    }
  },
  computed: {
    width () {
      return this.$refs.ec.width
    },
    computedOptions () {
      if (!this.options.grid) {
        const assign = {
          grid: this.defaultOption.grid
        }
        Object.assign(this.options, assign)
      }
      if (this.options.title) {
        Object.assign(this.options.title, this.defaultOption.title)
      }
      return this.options
    }
  },
  methods: {
    addLinePoint () {

    },
    handler (...params) {
      console.log(params, 'pp')
      if (this.$route.name === '稽查办案' & params[0].seriesType === 'pie') {
        if (params[0].data.name === this.$store.state.pieDataTab.name) {
          this.$store.state.pieDataTab = {
            name: '',
            type: ''
          }
        } else {
          this.$store.state.pieDataTab = params[0].data
        }
      } else if (this.$route.name === '主体服务' && params[0].data.name === '开办成功') {
        Bus.$emit('toTwo', true)
      }
      this.$emit('click', params)
    }
  }
}
</script>

<style scoped lang="less">
.charts {
    width: 100%;
    height: 100%;
}
</style>
