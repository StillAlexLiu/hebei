<template>
    <div id="app" class="full" :style="style2">
        <div :style="style" class="view">
            <router-view/>
        </div>
        <div class="btn-group-main" :class="flag?'move':'move-back'">
            <div @click="setStyle(0)">原始尺寸</div>
            <div @click="setStyle(1)">全屏适应</div>
            <div @click="setStyle(2)">宽度适应</div>
            <div @click="setStyle(3)">高度适应</div>
            <!--            <div @click="setTheme(0)">科技灰</div>-->
            <!--            <div @click="setTheme(1)">天空蓝</div>-->
            <div class="arrow" @click="flag=!flag">
                {{flag?'收起':''}}
            </div>
        </div>
    </div>
</template>
<script>
import Bus from '@/assets/bus.js'
export default {
  data () {
    return {
      height: 1620,
      width: 6720,
      style: {},
      flag: false,
      style2: {
        overflow: 'hidden'
      }
    }
  },
  mounted () {
    this.setStyle(0)
    // window.onresize = () => {
    //   return this.setStyle()
    // }
  },
  methods: {
    setTheme (index) {
      this.$bus.$emit('theme', index)
    },
    setStyle (i) {
      this.style = {}
      this.style2 = {}
      if (i === 0) {
        this.setOriginal()
      }
      if (i === 1) {
        this.setCover()
      }
      if (i === 2) {
        this.setAdaptWidth()
      }
      if (i === 3) {
        this.setAdaptHeight()
      }
    },
    setOriginal () {
      this.style = {}
      this.style2 = {}
    },
    setAdaptWidth () {
      const bWidth = window.innerWidth
      const bHeight = window.innerHeight
      this.$set(this.style, 'width', this.width + 'px')
      const zoom = bWidth / this.width
      this.$set(this.style, 'transform', 'scale(' + zoom + ',' + zoom + ')')
      this.$set(this.style, 'margin-top', bHeight / 2 - this.height * zoom / 2 + 'px')
      this.$set(this.style, 'overflow', 'hidden')
      this.$set(this.style, 'transform-origin', 'left top')
      this.$set(this.style2, 'overflow', 'hidden')
      Bus.$emit('zoom', zoom)
    },
    setAdaptHeight () {
      const bHeight = window.innerHeight
      this.$set(this.style, 'height', this.height + 'px')
      const zoom = bHeight / this.height
      this.$set(this.style, 'transform', 'scale(' + zoom + ',' + zoom + ')')
      this.$set(this.style2, 'overflow-y', 'hidden')
      this.$set(this.style, 'transform-origin', 'left top')
      Bus.$emit('zoom', (bHeight / this.height))
    },
    setCover () {
      const bHeight = window.innerHeight
      const bWidth = window.innerWidth
      this.$set(this.style, 'height', this.height + 'px')
      this.$set(this.style, 'width', this.width + 'px')
      const scaleX = bWidth / this.width
      const scaleY = bHeight / this.height
      this.$set(this.style, 'transform', 'scale(' + scaleX + ',' + scaleY + ')')
      this.$set(this.style, 'transform-origin', 'left top')
      this.$set(this.style, 'overflow', 'hidden')
      this.$set(this.style2, 'overflow', 'hidden')
      const zoom = {
        x: 1 / scaleX,
        y: 1 / scaleY
      }
      Bus.$emit('zoom2', zoom)
    }
  }
}
</script>
<style lang="less">

/*width: 1920*7/2px;*/
/*height: 1080*3/2px;*/
#app {
    background-color: #1A1A2C;

    .move {
        animation: moveTo 1s ease-in-out 0s alternate forwards;
    }

    .move-back {
        animation: moveBack 1s ease-in-out 0s alternate forwards;
    }

    @keyframes moveTo {
        from {
            top: -150px;
        }
        to {
            top: 0;
        }
    }
    @keyframes moveBack {
        from {
            top: 0;
        }
        to {
            top: -150px;
        }
    }

    .btn-group-main {
        position: fixed;
        top: -150px;
        right: 10px;

        > div {
            height: 30px;
            line-height: 30px;
            background-color: #1E8DB0;
            margin-bottom: 5px;
            padding: 0 10px;
            cursor: pointer;
            color: #fff;
            /*border-radius: 10px;*/
        }

        .arrow {
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-bottom-left-radius: 500px;
            border-bottom-right-radius: 500px;
        }
    }
}
</style>
