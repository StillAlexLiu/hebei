<template>
    <div class="full ChartPieCircle">
        <div class="full-height w-1-2">
            <chart :options='options'/>
        </div>
        <div class="full-height w-1-2 text">
            <div v-for="(item,index) in data" :key="index" class="item">
                <div class="point" :style="{backgroundColor:colors[index]}"></div>
                <div class="name"> {{ item.name }}：</div>
                <div class="value"> {{ item.value }}件</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ChartsPieValueLegend',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    isPie: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    textPosition: {
      type: Array,
      default: () => {
        return ['center', 'center']
      }
    },
    textSize: {
      type: Number,
      default: 22
    },
    colors: {
      type: Array,
      default: () => {
        return ['#77FFE7', '#3078CD', '#00E5E4']
      }
    }
  },
  computed: {
    options () {
      const elements = []
      const text = {
        type: 'text',
        left: this.textPosition[0],
        top: this.textPosition[1],
        z: 100,
        style: {
          fill: '#fff',
          text: this.text,
          font: this.textSize + 'px LESLIE'
        }
      }
      if (this.text !== '') {
        elements.push(text)
      }
      return {
        graphic: {
          elements: elements
        },
        color: this.colors,
        title: {
          text: this.title
        },
        legend: {
          show: false
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: this.isPie ? [0, '62%'] : ['40%', '62%'],
            center: ['50%', '50%'],
            // position: ['60%', '50%'],
            top: 20,
            label: {
              show: false
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartPieCircle {
    .point {
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }

    .name {
        font-size: 26px;
        text-indent: 10px;
    }

    .value {
        font-size: 26px;
        color: #79DFEF;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        > .item {
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
        }
    }
}
</style>
