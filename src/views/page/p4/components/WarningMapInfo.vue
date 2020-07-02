<template>
    <container-info class="WarningMapInfo full-width" v-if="item">
        <div class="title">{{data.name}}</div>
        <div class="full-width can">
            <div class="w-2-5 img">
                <img src="./img/1.jpg" alt=""/>
            </div>
            <div class="w-3-5 text">
                <div class="sub-title">异常类型：<span>发现动物</span></div>
                <div class="row">
                    <div class="name w-1-4">预警时间</div>
                    <div class="value w-3-4">2020-01-03 00:41:35</div>
                </div>
                <div class="row">
                    <div class="name w-1-4">异常原因</div>
                    <div class="value w-3-4">发现动物</div>
                </div>
                <div class="row">
                    <div class="name w-1-4">预警地址</div>
                    <div class="value w-3-4">石家庄市新华区市庄路265号</div>
                </div>
                <div class="row">
                    <div class="name w-1-4">预警主体</div>
                    <div class="value w-3-4" v-if="data.data !== undefined">{{data.data.name}}</div>
                </div>
            </div>
        </div>
    </container-info>
</template>

<script>
export default {
  name: 'WarningMapInfo',
  data () {
    return {
      item: false
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    data: {
      deep: true,
      immediate: false,
      handler: function () {
        if (this.data.name) {
          this.item = true
        }
        // if (this.data && this.data.items && this.data.items.length > 0) {
        //   this.item = this.items[0]
        // }
      }
    }
  }
}
</script>

<style scoped lang="less">
.WarningMapInfo {
    height: 400px;

    > .title {
        font-size: 24px;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
    }

    .can {
        height: 300px;

        .img {
            height: 100%;

            > img {
                height: 100%;
                width: 100%;
            }
        }

        .text {
            padding: 0 10px;

            .sub-title {
                text-indent: 20px;
                height: 40px;
                font-size: 20px;
                line-height: 40px;
                background-color: rgba(34, 174, 197, .25);

                > span {
                    color: #fe6941;
                }
            }
        }

        .row {
            font-size: 20px;
            height: 30px;
            margin: 30px 0;
        }
    }
}
</style>
