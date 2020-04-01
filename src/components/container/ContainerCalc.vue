<template>
    <div class="ContainerCalc">
        <div :style="styleCalcReverse" v-if="type==='bt'||type==='rl'">
            <slot name="calc"/>
        </div>
        <div :style="styleFix">
            <slot name="fix"/>
        </div>
        <div :style="styleCalc" v-if="type==='tb'||type==='lr'">
            <slot name="calc"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerCalc',
  props: {
    type: {
      type: String,
      default: 'tb'
    },
    number: {
      type: Number,
      default: 0
    }
  },
  watch: {
    number: {
      immediate: true,
      deep: true,
      handler: function () {
        this.calc()
      }
    }
  },
  data () {
    return {
      styleFix: {},
      styleCalc: {},
      styleCalcReverse: {}
    }
  },
  methods: {
    calc () {
      if (this.type === 'tb' || this.type === 'bt') {
        this.$set(this.styleFix, 'height', this.number + 'px')
        this.$set(this.styleFix, 'width', '100%')
        this.$set(this.styleCalc, 'width', '100%')
        this.$set(this.styleCalcReverse, 'width', '100%')
        if (this.type === 'tb') {
          this.$set(this.styleCalc, 'height', 'calc(-' + this.number + 'px + 100%)')
        }
        if (this.type === 'bt') {
          this.$set(this.styleCalcReverse, 'height', 'calc(-' + this.number + 'px + 100%)')
        }
      }
      if (this.type === 'lr' || this.type === 'rl') {
        this.$set(this.styleFix, 'width', this.number + 'px')
        this.$set(this.styleFix, 'float', 'left')
        this.$set(this.styleCalc, 'float', 'left')
        this.$set(this.styleCalcReverse, 'float', 'left')
        this.$set(this.styleFix, 'height', '100%')
        this.$set(this.styleCalc, 'height', '100%')
        this.$set(this.styleCalcReverse, 'height', '100%')
        if (this.type === 'lr') {
          this.$set(this.styleCalc, 'width', 'calc(-' + this.number + 'px + 100%)')
        }
        if (this.type === 'rl') {
          this.$set(this.styleCalcReverse, 'width', 'calc(-' + this.number + 'px + 100%)')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.ContainerCalc {

}
</style>
