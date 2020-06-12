<template>
    <div class="SupervisionRight full page-style" v-if="globalMapSelect.tab">
        <div v-if="selectName ==='综合监管'||selectName ==='综合监管'" :dimension="select.value" class="full">
            <!-- <img src="./compontes/img/综合监管右侧.png" alt="" class="img_width"> -->
            <Page1R></Page1R>
        </div>
        <Page2R v-if="selectName ==='智慧食品监管'" :dimension="select.value" class="full" :name="selectItem.name"/>
        <div v-if="selectName ==='智慧药械监管'" :dimension="select.value" class="full">
            <img src="./compontes/img/河北监管系统.png" alt="" class="img_width">
        </div>
        <Page4R v-if="selectName ==='特种设备监管'" class="full"/>
        <Page3R v-if="selectName==='产品质量监管'" class="full"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Page2R from './pages/page2R'
import Page4R from './pages/Page4R'
import Page3R from './pages/Page3R'
import Page1R from './pages/Page1R'
export default {
  name: 'SupervisionRight',
  components: {
    Page3R,
    Page4R,
    Page2R,
    Page1R
  },
  data () {
    return {
      select: {},
      pageIndex: 0,
      selectName: '综合监管',
      selectItem: {}
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
