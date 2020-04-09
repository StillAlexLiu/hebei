<template>
    <container-calc type="tb" :number="53" class="SupervisionLeft full-width full-height page-style">
        <template slot="fix">
            <RadioSimple :data="radioData" v-model="select" class="w-3-7 full-height radio"/>
        </template>
        <div slot="calc" class=" full-width full-height sub" v-if="globalMapSelect.tab">
            <Page1 v-if="selectName ==='综合监管'||selectName ==='综合监管'" :dimension="select.value"/>
            <Page2 v-if="selectName ==='智慧食品监管'" :dimension="select.value" :name="selectItem.name"/>
            <Page3 v-if="selectName ==='智慧药械监管'" :dimension="select.value"/>
            <Page4 v-if="selectName ==='特种设备监管'" :dimension="select.value"/>
            <Page5 v-if="selectName ==='双随机监管'" :dimension="select.value"/>
        </div>
    </container-calc>
</template>

<script>
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import { mapState } from 'vuex'

export default {
  name: 'SupervisionLeft',
  data () {
    return {
      radioData: [
        {
          name: '本年',
          value: 0
        },
        {
          name: '本月',
          value: 1
        },
        {
          name: '本周',
          value: 2
        }
      ],
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
      immediate: false,
      deep: true,
      handler: function () {
        this.selectName = this.globalMapSelect.tab.name
        if (this.globalMapSelect.items.length > 0) {
          this.selectItem = this.globalMapSelect.items[0]
        }
      }
    }
  },
  components: {
    Page5,
    Page4,
    Page3,
    Page2,
    Page1
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped lang="less">
.SupervisionLeft {
}
</style>
