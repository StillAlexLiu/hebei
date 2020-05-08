<template>
    <div class="pieGroup full-height">
        <container-border31 class="full-height">
            <div class="full-height bg" :style="{backgroundImage:'url('+data.img+')'}">
                <chart :options='options'/>
            </div>
        </container-border31>
    </div>
</template>

<script>
export default {
  name: 'ChartPie3',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    options () {
      return {
        legend: {
          orient: 'vertical',
          bottom: 10,
          left: 10,
          textStyle: {
            fontSize: '18'
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '45%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            avoidLabelOverlap: true,
            label: {
              show: true,
              formatter: (params) => {
                if (params.name === '') {
                  return ''
                } else {
                  return '{value|' + params.value + '}' + '\n' + '{name|' + params.name + '}'
                }
              },
              rich: {
                value: {
                  color: '#79DFEF',
                  fontSize: '28'
                },
                name: {
                  fontSize: '28'
                }
              },
              distanceToLabelLine: -20
            },
            labelLine: {
              length: 10,
              length2: 20
              // smooth: true
            },
            data: this.data.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.pieGroup {
    padding: 10px;

    .bg {
        background-size: 64px 64px;
        background-position: center;
        background-repeat: no-repeat;
    }

    .echarts {
        height: 80% !important;
    }

    .p_name {
        width: 100%;
        text-align: center;
        margin: 0;
        font-size: 2rem;
    }
}
</style>
