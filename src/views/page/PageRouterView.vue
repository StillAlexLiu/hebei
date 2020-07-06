<template>
    <div class="PageRouterView">
        <div class="w-2-7 full-height">
            <!--                左侧标题-->
            <LeftTitle class="full-height float-left left-title" :data="leftTitle"/>
            <!--            右侧路由出口-->
            <div class="full-height float-left right-container">
                <router-view name="left"/>
            </div>
        </div>
        <div class="w-3-7 full-height" style="position: relative">
            <div class="view">
                <router-view name="center"/>
                <CenterMap class="full-height full-width" v-if="centerFlag && !personageBox && !zhduTab"/>
                <div class="full"  v-if="personageBox">
                  <EntityCenter />
                </div>
                <div class="full" v-if="zhduTab" style="position: relative">
                    <div class="cuohao" @click="zhduTab = false">
                      ×
                    </div>
                    <iframe src="http://60.205.208.38/vdis/?user=4580000&passwd=4580000&auto=2" frameborder="0" width="100%" height="100%"></iframe>
                </div>
            </div>
            <HeaderTab class="tab" :data="headerData" v-model="selectIndex" @change="routeTo" v-if="!zhduTab"/>
        </div>
        <div class="w-2-7 full-height">
            <router-view name="right"/>
        </div>
    </div>
</template>

<script>
import CenterMap from './map/CenterMap'
import LeftTitle from './PageRouterView/LeftTitle'
import EntityCenter from './p1/EntityCenter.vue'
import Bus from '@/assets/bus.js'

export default {
  name: 'PageRouterView',
  components: {
    LeftTitle,
    CenterMap,
    EntityCenter
  },
  data () {
    return {
      headerData: [],
      selectIndex: null,
      leftTitle: this.$dataAll.config.leftTitle,
      centerFlag: false,
      personageBox: false,
      zhduTab: false
    }
  },
  mounted () {
    this.initTab()
  },
  watch: {
    '$route.name': {
      deep: false,
      immediate: false,
      handler: function () {
        this.selectIndex = this.headerData.findIndex((value) => {
          return value.name === this.$route.name
        })
      }
    },
    $route: {
      deep: false,
      immediate: true,
      handler: function () {
        this.$nextTick(() => {
          // 用于判断是否显示中间地图
          this.centerFlag = !this.$route.matched[this.$route.matched.length - 1].instances.center
          if (this.personageBox) {
            if (this.$route.name !== '主体服务') {
              this.personageBox = false
            }
          }
        })
      }
    }
  },
  created () {
    Bus.$on('getTarget', target => {
      this.personageBox = target
    })
    Bus.$on('zhduTab', target => {
      this.zhduTab = target
    })
    Bus.$on('oneDay', target => {
      this.personageBox = target
    })
  },
  methods: {
    initTab () {
      // 加载tab数据
      this.headerData = this.$router.options.routes[0].children
      this.selectIndex = this.headerData.findIndex((value) => {
        return value.name === this.$route.name
      })
    },
    routeTo (item) {
      this.safeRoute(item.name)
    },
    to () {
      this.safeRoute('主体服务')
    },
    safeRoute (name) { // 路由安全跳转，同一路由不二次跳转，否则报错
      if (this.$route.name !== name) {
        console.log(name)
        this.$router.push({ name: name })
      }
    }
  }
}
</script>

<style scoped lang="less">
@height: 10px;
@padding: 10px;
@titleWidth: 100px;
.PageRouterView {

    .tab {
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .view {
        height: calc(@height + ~"100%");
        box-sizing: border-box;
        padding: 0
    }

    .left-title {
        width: @titleWidth;
        border-right: 3px solid #0f4551;
    }

    .right-container {

        width: calc(-@titleWidth + ~"100%");
    }
    .cuohao {
      font-size: 40px;
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
}
</style>
