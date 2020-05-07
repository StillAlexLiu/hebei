<template>
    <div class="ChartsFunnel full">
        <div class="title">
            <div class="value">{{ max }}件</div>
            <div class="name">处置数量</div>
        </div>
        <div class="body">
            <div v-for="(item,index) in data" :key="index" class="item h-1-4">
                <div class="w-1-2 full-height left number-font">{{ (item.value).toLocaleString('zh', { style: 'decimal'
                    }) }}
                </div>
                <div class="w-1-2 full-height right">
                    <div class="h-1-2 name">{{ item.name}}</div>
                    <div class="h-1-2 percent">{{ (item.value/max).toLocaleString('zh', { style:
                        'percent' }) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChartsFunnel',
  computed: {
    max () {
      let max = 0
      for (let i = 0; i < this.data.length; i++) {
        max += this.data[i].value * 1
      }
      console.log(max)
      return max
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartsFunnel {
    background-image: url("./img/img／mhzhjg_park_yuanquyouzhi_loudoutu_style01@2x.png");
    background-size: 100% auto;
    background-position: bottom;
    background-repeat: no-repeat;

    .title {
        height: 130px;
        text-align: center;
        padding-top: 50px;
        padding-right: 140px;

        .name {
            font-size: 24px;
        }

        .value {
            font-size: 32px;
        }
    }

    .body {
        height: calc(100% - 130px);

        .item {
            text-align: right;

            .left {
                font-size: 36px;
                padding-right: 40px;
                line-height: 80px;
                color: #fff;
            }

            .right {
                padding: 10px 20px;

                > div {
                    line-height: 40px;
                    font-size: 18px;
                }

                .name {

                }

                .percent {
                    color: rgba(113, 191, 254, 1);
                }
            }
        }
    }
}
</style>
