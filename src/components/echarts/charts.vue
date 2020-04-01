<template>
    <div class="charts">
        <v-chart :options='computedOptions' :autoresize='true' theme="screen" @click="this.handler"/>
        <!--        {{computedOptions}}-->
    </div>
</template>

<script>
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
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        grid: {
          // containLabel: true,
          left: 60,
          top: 60,
          right: 60,
          bottom: 40
        }
      }
    }
  },
  computed: {
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
