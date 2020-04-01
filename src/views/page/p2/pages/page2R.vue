<template>
    <div class="Page2 full">
        <Page21 :dimension="dimension" v-if="selected==='生产'"/>
        <Page22 :dimension="dimension" v-if="selected==='流通'"/>
        <Page23 :dimension="dimension" v-if="selected==='餐饮'"/>
    </div>
</template>

<script>

import Page21 from './page2R1'
import Page22 from './page2R2'
import Page23 from './page2R3'

export default {
  name: 'Page2R',
  components: {
    Page21,
    Page22,
    Page23
  },
  data () {
    return {
      selected: '生产'
    }
  },
  watch: {
    name: {
      immediate: true,
      deep: true,
      handler: function () {
        if (this.name === '生产' || this.name === '流通' || this.name === '餐饮') {
          this.selected = this.name
        }
      }
    }
  },
  props: {
    dimension: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: '生产'
    }
  }
}
</script>

<style scoped lang="less">
.Page2 {

}
</style>
