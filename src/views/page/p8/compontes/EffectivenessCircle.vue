<template>
  <v-chart class='full-width' :autoresize='true' :options='options' />
</template>

<script>
export default {
  name: 'ChartPie',
  props: ['data'],
  data() {
    return {
      options: {}
    };
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function() {
        this.options = this.getOption(this.data);
      }
    }
  },
  methods: {
    getOption(data) {
      return {
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['50%', '50%'],
            data: this.data,
            label: {
              formatter: '{b}: {c}户次',
              color: 'white',
              fontSize: 20
            },
            color: [
              '#FF7641',
              '#60E8DD',
              '#38B7D5',
              '#EDA3B3',
              '#849DF2',
              '#FEBE23',
              '#FFD86D'
            ],
            labelLine: {
              lineStyle: {
                color: 'white'
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang='less'>
.ChartBar {
}
</style>
