<template>
    <div class="Banner" :style="{'line-height':height+'px' }">
        <div class="text full-height w-1-6">
            <img src="src/views/page/p0/components/img/icon_mhzhjg_icon_jgquanjing_jinritixing@2x.png">
            今日提醒
        </div>
        <div class="an full-height w-5-6" ref="banner">
            <div class="roll full-height" ref="roll"
                 :style="{'transition':width===widthB?'right ':'left '+time+'s linear','left':width+'px '}">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      width: 0,
      time: 0,
      timer: 0,
      offset: 0.4,
      show: false,
      widthB: 0,
      height: 0
    }
  },
  mounted () {
    this.height = this.$refs.roll.offsetHeight
    this.time = this.$refs.roll.offsetWidth / 200
    this.widthB = this.$refs.banner.offsetWidth
    this.width = this.widthB
    this.start(this.time, this.offset)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    start (time, offset) {
      const dom = this.$refs.roll
      const self = this
      setTimeout(function () {
        self.width = -dom.offsetWidth
      }, offset * 1000)
      this.timer = setInterval(function () {
        // 初始化位置
        self.width = self.widthB
        setTimeout(function () {
          self.width = -dom.offsetWidth
        }, offset * 1000)
      }, (time + offset) * 1000)
    }
  }
}
</script>

<style scoped lang="less">
.Banner {
    font-size: 30px;
    height: 100%;
    background-image: url("./img/img_mhzhjg_img_jgquanjing_jinritixing_bg@2x.png");
    background-size: 100% 100%;
    padding: 0 20px;

    .text {
        font-size: 36px;
        font-weight: 700;
        background-image: url("./img/img_mhzhjg_img_jgquanjing_jinritixing_title_bg@2x.png");
        background-size: 90% 80%;
        background-position: center;
        background-repeat: no-repeat;

        img {
            height: 60%;
            vertical-align: middle;
        }
    }

    .an {
        overflow: hidden;
        position: relative;

        .roll {
            position: absolute;
            white-space: nowrap;
            font-size: 50px;
            /*animation: keyframes 20s infinite;*/
        }
    }

}
</style>
