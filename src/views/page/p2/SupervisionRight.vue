<template>
    <div class="SupervisionRight full" v-if="globalMapSelect.tab">
        <div v-if="selectName ==='综合监管'||selectName ==='综合监管'" :dimension="select.value" class="full">
            <img src="./compontes/img/综合监管右侧.png" alt="" class="img_width">
        </div>
        <Page2R v-if="selectName ==='智慧食品监管'" :dimension="select.value" class="full" :name="selectItem.name">

        </Page2R>
        <div v-if="selectName ==='智慧药械监管'" :dimension="select.value" class="full">
            <img src="./compontes/img/河北监管系统.png" alt="" class="img_width">
        </div>
        <div v-if="selectName ==='特种设备监管'" :dimension="select.value" class="full"
             style="text-align: center;padding: 10px">
            <RadioSimple :data="tab4Data" style="height: 50px"/>
            <img src="./compontes/img/电梯右侧.png" alt="" style="height: calc(100% - 50px)">
        </div>
        <div v-if="selectName ==='双随机监管'" :dimension="select.value" class="full" style="position: relative">
            <page5-center
                style="position: absolute;width: 150%;right: calc( 100% + 10px);height:calc( 100% - 110px);top:100px;"
                class="full"/>
            <page5-right/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Page5Center from './pages/page5Center'
import Page5Right from './pages/page5Right'
import Page2R from './pages/page2R'

export default {
  name: 'SupervisionRight',
  components: {
    Page2R,
    Page5Right,
    Page5Center
  },
  data () {
    return {
      select: {},
      pageIndex: 0,
      selectName: '综合监管',
      selectItem: {},
      tab4Data: [
        {
          name: '基础数据',
          value: '1'
        },
        {
          name: '二维码',
          value: '2'
        },
        {
          name: ' 老旧特种设备',
          value: '3'
        },
        {
          name: '智能预警',
          value: '4'
        },
        {
          name: ' 社会共治',
          value: '5'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      globalMapSelect: 'globalMapSelect'
    })
  },
  watch: {
    globalMapSelect: {
      immediate: true,
      deep: true,
      handler: function () {
        this.selectName = this.globalMapSelect.tab.name
        if (this.globalMapSelect.items.length > 0) {
          this.selectItem = this.globalMapSelect.items[0]
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.SupervisionRight {
    .img_width {
        width: 100%;
        height: 100%;
    }

}
</style>
