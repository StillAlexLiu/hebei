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
            radius: '90%',
            center: ['50%', '50%'],
            data: this.data,
            label: {
              formatter: '{b}: {c}户次',
              color: 'white',
              fontSize: 20
            },
            color: [
              '#69DF68',
              '#CCFF98',
              '#AEA6F7',
              '#4A90E2',
              '#FE5C70',
              '#F5A623',
              '#61EADF'
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
