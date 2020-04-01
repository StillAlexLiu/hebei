<template>
    <div class="charts">
        <v-chart :options='options' :autoresize='true'/>
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
  }
}
</script>

<style scoped lang="less">
.charts {

}
</style>
