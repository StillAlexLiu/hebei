<template>
    <div class="PageRouterView">
        <div class="w-2-7 full-height">
            <!--                左侧标题-->
            <LeftTitle class="full-height float-left left-title" :data="leftTitle"/>
            <!--            右侧路由出口-->
            <div class="full-height float-left right-container">
                <div class="full-height w-1-6" style="text-align: center">
                    <img src="./p0/components/img/左侧.png" style="height: 97%;margin-top:20px">
                </div>
                <div class="full-height w-5-6">
                    <div class="h-1-3">
                        <div class="w-1-2 full-height">
                            <div class="info-title">领导组</div>
                            <img class="info-img" src="./p0/components/img/info1.png">
                            <img class="info-img" src="./p0/components/img/info2.png">
                        </div>
                        <container title="人员信息" class="w-1-2  full-height">
                            <ContainerInfo class="full">
                                <img src="./p0/components/img/信息.png" class="full-width">
                            </ContainerInfo>
                        </container>
                    </div>
                    <container title="位置" class="h-2-3">
                        <a-map class="full-height full-width" :zoom="zoom"
                               :center="center"
                               :adcode="adcode"
                               :depth="depth"
                               :id-key="13"
                        />
                    </container>
                </div>
            </div>
        </div>
        <div class="w-3-7 full-height">
            <HeaderTab class="tab" :data="headerData" v-model="selectIndex" @change="routeTo"/>
            <div class="view">
                <div class="full-height w-1-5">
                    <div class="info-can">
                        <div class="title">已接入参会方</div>
                    </div>

                </div>
                <div class="full-height w-3-5">
                    <img src="./p0/components/img/指挥.png" class="full">
                </div>
                <div class="full-height w-1-5">
                    <container title="即时信息" class="full">
                        <chat class="full" :data="chatData"/>
                    </container>
                </div>
            </div>
        </div>
        <div class="w-2-7 full-height" style="padding: 20px">
            <img src="./p0/components/img/指挥2.png" class="full">
        </div>
    </div>
</template>

<script>
import LeftTitle from './PageRouterView/LeftTitle'
import Chat from './p0/components/Chat'

export default {
  name: 'PageRouterView',
  components: {
    Chat,
    LeftTitle
  },
  data () {
    return {
      headerData: [],
      selectIndex: null,
      leftTitle: this.$dataAll.config.leftTitle,
      centerFlag: false,
      zoom: this.$dataAll.config.map.zoom,
      center: this.$dataAll.config.map.center,
      adcode: this.$dataAll.config.map.adcode,
      depth: this.$dataAll.config.map.depth,
      selectorData: this.$dataAll.config.mapTab,
      chatData: [
        {
          name: '王磊',
          header: require('./p0/components/img/header.jpg'),
          date: '13:35:51',
          info: {
            text: '文字文字文字文字文字文字文字文字'
          }
        },
        {
          name: '王磊',
          header: require('./p0/components/img/header.jpg'),
          date: '13:35:51',
          info: {
            imgs: [require('./p0/components/img/img.jpg')]
          }
        }, {
          name: '王磊',
          header: require('./p0/components/img/header.jpg'),
          date: '13:35:51',
          info: {
            text: '文字文字文字文字文字文字文字文字，文字文字文字文字文字文字文字文字，文字文字文字文字文字文字文字文字，文字文字文字文字文字文字文字文字'
          }
        }]
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
        this.selectIndex = this.headerData.findIndex((value, index) => {
          return value.name === this.$route.name
        })
      }
    },
    '$route': {
      deep: false,
      immediate: true,
      handler: function () {
        this.$nextTick(() => {
          // 用于判断是否显示中间地图
          this.centerFlag = !this.$route.matched[this.$route.matched.length - 1].instances.center
        })
      }
    }
  },
  methods: {

    initTab () {
      // 加载tab数据
      this.headerData = this.$router.options.routes[0].children
      this.selectIndex = this.headerData.findIndex((value, index) => {
        return value.name === this.$route.name
      })
    },
    routeTo (item, index) {
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
@height: 100px;
@padding: 10px;
@titleWidth: 100px;
.PageRouterView {

    .tab {
        height: @height;
    }

    .view {
        height: calc(-@height + ~"100%");
        box-sizing: border-box;
        padding: 0 @padding @padding @padding;
    }

    .left-title {
        width: @titleWidth;
        border-right: 3px solid #0f4551;
    }

    .right-container {

        width: calc(-@titleWidth + ~"100%");
    }

    .info-title {
        height: 50px;
        font-size: 34px;
        margin-top: 20px;
        color: #5BC9C9;
        margin-bottom: 10px;
    }

    .info-img {
        height: 160px;
        margin-right: 20px;
    }

    .info-can {
        background-image: url("./p0/components/img/chat.png");
        background-size: 98% 100%;
        background-position: center;
        text-align: center;
        background-repeat: no-repeat;
        height: 100%;
        padding: 20px;

        > .title {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 26px;
            background-color: #0A3754;
            width: 96%;
            margin: 0 auto;
        }
    }
}
</style>
