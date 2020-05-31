<template>
    <div class="CenterMap full">
        <a-map class="full-height full-width" selector :selector-data="currentSelector" :zoom="zoom"
               @getSelect="getSelect"
               @pointClick="pointClickDispatch"
               :center="center"
               :adcode="adcode"
               :depth="depth"
               :grid="grid"
               :isInGrid="true"
               :point="point"
               :id-key="idKey"
        >

            <div slot="info">
                <roll-table v-if="routeName==='综合指挥'" :data="p0Info" :dimension="p0Dimension" class="full-width"/>
                <!-- <roll-table :data="p0Info" :dimension="p0Dimension" class="full-width"/> -->
                <EntityMapInfo v-if="p1Info" :data="p1Info['注册信息']['基本信息']"/>
                <KeepOnRecordMapInfo v-if="routeName==='备案许可'" :data="p10Info"/>
                <SupervisionMapInfo v-if="routeName==='综合监管'" :data="p2InfoDetail" :table="p2Info"
                                    :dimension="p2Dimension" class="full-width"/>
                <WarningMapInfo v-if="routeName==='智能预警'" :data="p4Info"/>
                <AuditMapInfo v-if="routeName==='稽查办案'" :data="p6Info"/>
                <ComplaintMapInfo v-if="routeName==='投诉举报'" :data="p5Info"/>
            </div>
        </a-map>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Mock from 'mockjs'
import EntityMapInfo from '../p1/componets/EntityMapInfo'
import WarningMapInfo from '../p4/components/WarningMapInfo'
import AuditMapInfo from '../p6/components/AuditMapInfo'
import SupervisionMapInfo from '../p2/compontes/SupervisionMapInfo'
import ComplaintMapInfo from '../p5/compontes/ComplaintMapInfo'
import KeepOnRecordMapInfo from '../p10/components/KeepOnRecordMapInfo'

export default {
  name: 'CenterMap',
  components: {
    KeepOnRecordMapInfo,
    ComplaintMapInfo,
    SupervisionMapInfo,
    AuditMapInfo,
    WarningMapInfo,
    EntityMapInfo
  },
  props: {
    idKey: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // zoom: 5,
      zoom: this.$dataAll.config.map.zoom,
      center: this.$dataAll.config.map.center,
      adcode: this.$dataAll.config.map.adcode,
      depth: this.$dataAll.config.map.depth,
      selectorData: this.$dataAll.config.mapTab,
      currentSelector: [],
      geo: this.$dataAll.geo,
      grid: [],
      point: [],
      p1Config: this.$dataAll.p1,
      p0Info: [],
      p0Dimension: [],
      p1Info: null,
      p1Id: 0,
      p2Info: [],
      p2Dimension: [],
      p4Info: {},
      p4Name: '食品预警',
      p2Name: '',
      p2InfoDetail: {},
      p5Info: {},
      p6Info: {},
      p10Info: null,
      routeName: '',
      showIndex: '',
      commandName: '',
      commandDetail: {}
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        const find = this.$dataAll.config.mapTab.find(value => {
          return value.name === this.$route.name
        })
        // 清除地图点
        this.point = []
        this.clearInfo()
        if (find) {
          this.routeName = find.name
          this.currentSelector = find.children
        } else {
          this.currentSelector = []
        }
        this.getSelect({
          tab: find,
          items: []
        })
      }
    }
  },
  mounted () {
    this.addGrid()
    this.makeP0Data()
    this.makeP2Data()
  },
  methods: {
    ...mapActions([
      'setPageData'
    ]),
    getSelect (data) { // 分发全局map select 事件
      console.log(data)
      this.Dispatch(data)
      this.getSelectItem(data)
      this.setPageData({
        key: 'globalMapSelect',
        data: data
      })
    },
    getSelectItem (data) {
      this.clearInfo()
      const items = data.items
      this.point = []
      for (let i = 0; i < items.length; i++) {
        this.point = [...this.point, ...this.makePoint(items[i].number, items[i].icon)]
      }
    },
    clearInfo () {
      // 切换清除右上角
      this.p1Info = null
      this.setPageData({
        key: 'p1',
        data: null
      })
    },
    addPoints (name, number, icon) {
      this.point = this.makePoint(30)
      console.log(this.point)
    },
    makePoint (number, icon) {
      const rtn = []
      for (let i = 0; i < number; i++) {
        rtn.push({
          name: '河北' + Mock.mock('@cword(3)') + '有限责任公司',
          icon: icon,
          coordinate: [Mock.mock('@float(113.784594, 119.54143)'), Mock.mock('@float(36.359861, 42.578391)')]
        })
      }
      return rtn
    },
    addGrid () {
      // 初始化网格 用于限制点位置坐标用，可不写
      const find = this.geo.features.find(val => {
        return val.properties.name === '河北'
      })
      const coordinates = find.geometry.coordinates
      console.log(coordinates)
      for (let i = 0; i < coordinates.length; i++) {
        const item = coordinates[i]
        console.log(item)
        this.grid.push({
          geo: item,
          border: 'rgba(0,0,0,0)',
          fill: 'rgba(0,0,0,0)'
        })
      }
    },
    Dispatch (data) {
      console.log(data)
      this.commandName = ''
      this.p2InfoDetail = {}
      this.p4Info = {}
      this.p5Info = {}
      this.p6Info = {}
      this.p10Info = {}
      switch (this.$route.name) {
        case '综合指挥':
          this.commandClick(data.tab.name)
          break
        case '智能预警':
          this.p4Name = data.tab.name
          break
        case '综合监管':
          this.p2Name = data.tab.name
          break
        default:
          break
      }
    },
    pointClickDispatch (item) {
      console.log(item)
      switch (this.$route.name) {
        case '主体服务':
          this.p1Select()
          break
        case '智能预警':
          this.p4Info = {
            name: this.p4Name,
            data: item.data
          }
          break
        case '综合监管':
          if (this.p2Name === '特种设备监管') {
            this.p2InfoDetail = {
              name: this.p2Name,
              data: item.data
            }
            console.log(this.p2InfoDetail)
          }
          if (this.p2Name === '智慧食品监管') {
            this.p2InfoDetail = {
              name: this.p2Name,
              data: item.data
            }
            console.log(this.p2InfoDetail)
          }
          if (this.p2Name === '综合监管') {
            this.p2InfoDetail = {
              name: this.p2Name,
              data: item.data
            }
            console.log(this.p2InfoDetail)
          }
          break
        case '投诉举报':
          this.p5Info = item.data
          break
        case '备案许可':
          this.p10Info = item.data
          break
        case '稽查办案':
          this.p6Info = item.data
          break
        default:
          break
      }
    },
    p1Select () {
      this.p1Id++
      this.getEntityById(this.p1Id % 2)
    },
    getEntityById (id) {
      // 获取主体信息
      this.p1Config[12].data(id).then(value => {
        this.p1Info = value.data
        this.setPageData({
          key: 'p1',
          data: this.p1Info
        })
      })
    },
    makeP0Data () {
      this.p0Info = []
      for (let i = 0; i < 20; i++) {
        this.p0Info.push({
          type: '证照临期预警',
          text: '营业执照临期',
          name: '河北' + Mock.mock('@cword(3)') + '有限责任公司',
          time: '2020-02-02 23:00:00'
        })
      }
      this.p0Dimension = [{
        name: '类型',
        value: 'type'
      }, {
        name: '内容',
        value: 'text'
      }, {
        name: '名称',
        value: 'name'
      }, {
        name: '时间',
        value: 'time'
      }]
    },
    makeP2Data () {
      this.p2Info = []
      for (let i = 0; i < 20; i++) {
        this.p2Info.push({
          people: Mock.mock('@cname()'),
          name: '河北' + Mock.mock('@cword(3)') + '有限责任公司',
          text: '无证无照',
          time: '2020-02-02 23:00:00'
        })
      }
      this.p2Dimension = [{
        name: '企业名称',
        value: 'name'
      }, {
        name: '检查人员',
        value: 'people'
      }, {
        name: '检查结果',
        value: 'text'
      }, {
        name: '检查时间',
        value: 'time'
      }]
    },
    commandClick (data) {
      if (data === '指挥调度') {
        this.$router.push({ path: '/dispatch' })
      }
      // this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped lang="less">
.CenterMap {

}
</style>
