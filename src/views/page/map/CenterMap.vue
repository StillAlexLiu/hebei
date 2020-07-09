<template>
    <div class="CenterMap full">
        <a-map class="full-height full-width" selector :selector-data="currentSelector" :zoom="zoom"
               @getSelect="getSelect"
               @pointClick="pointClickDispatch"
               :center="center"
               :adcode="adcode"
               :depth="depth"
               :leafNodePoint="leafNodePoint"
               :isInGrid="true"
               :point="point"
               :id-key="idKey"
               :pointName="pointName"
        >

            <div slot="info">
                <!-- <roll-table v-if="routeName==='综合指挥'" :data="p0Info" :dimension="p0Dimension" class="full-width"/> -->
                <!-- <roll-table :data="p0Info" :dimension="p0Dimension" class="full-width"/> -->
                <EntityMapInfo v-if="selectInfoState" :data="selectInfo"/>
                <KeepOnRecordMapInfo v-if="routeName==='备案许可'" :data="p10Info"/>
                <!-- <SupervisionMapInfo v-if="routeName==='综合监管'" :data="p2InfoDetail" :table="p2Info"
                                    :dimension="p2Dimension" class="full-width"/> -->
                <WarningMapInfo v-if="routeName==='智能预警'" :data="p4Info"/>
                <AuditMapInfo v-if="routeName==='稽查办案'" :data="p6Info"/>
                <ComplaintMapInfo v-if="routeName==='投诉举报'" :data="p5Info"/>
            </div>
        </a-map>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Mock from 'mockjs'
import EntityMapInfo from '../p1/componets/EntityMapInfo'
import WarningMapInfo from '../p4/components/WarningMapInfo'
import AuditMapInfo from '../p6/components/AuditMapInfo'
import SupervisionMapInfo from '../p2/compontes/SupervisionMapInfo'
import ComplaintMapInfo from '../p5/compontes/ComplaintMapInfo'
import KeepOnRecordMapInfo from '../p10/components/KeepOnRecordMapInfo'
import Bus from '@/assets/bus.js'
import axios from 'axios'

import { stat } from 'fs'

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
  created () {
    Bus.$on('closeMainBox', target => {
      if (target === false) {
        this.selectInfoState = false
      }
    })
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
      pointName: [],
      leafNodePoint: false,
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
      commandDetail: {},
      mapTopType: '',
      city: [
        {
          name: '秦皇岛市',
          center: [119.586579, 39.942531]
        }, {
          name: '廊坊市',
          center: [116.704441, 39.523927]
        }, {
          name: '张家口市',
          center: [114.884091, 40.811901]
        }, {
          name: '唐山市',
          center: [118.175393, 39.635113]
        }, {
          name: '沧州市',
          center: [116.857461, 38.310582]
        }, {
          name: '承德市',
          center: [117.939152, 40.976204]
        }, {
          name: '邯郸市',
          center: [114.490686, 36.612273]
        }, {
          name: '石家庄市',
          center: [114.502461, 38.045474]
        }, {
          name: '邢台市',
          center: [114.508851, 37.0682]
        }, {
          name: '衡水市',
          center: [115.665993, 37.735097]
        }, {
          name: '保定市',
          center: [115.482331, 38.867657]
        }, {
          name: '辛集市',
          center: [115.217451, 37.92904]
        }, {
          name: '河北雄安新区',
          center: [115.867238, 39.043152]
        }
      ],
      latPoint: [],
      showThtee: false,
      icon: '',
      mainType: '',
      basicData: '',
      mainMessage: '',
      infoData: {
        营业执照: {
          企业名称: '',
          类型: '',
          统一社会信用代码: '',
          住所: '',
          登记机关: '',
          成立日期: '',
          经营期限自: '',
          经营期限至: '',
          注册资本: '',
          法定代表人: '',
          登记状态: '',
          经营范围: ''
        },
        个人营业执照: {
          统一社会信用代码: '',
          名称: '',
          类型: '',
          经营者: '',
          组成形式: '',
          登记机关: '',
          登记状态: '',
          经营场所: '',
          经营范围: '',
          注册日期: '',
          核准日期: ''
        }
      },
      selectInfo: '',
      selectInfoState: false
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
        if (this.globalMapSelect.items.length > 0) {
          this.mainType = this.globalMapSelect.items[0].type
        }
      }
    },
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        const find = this.$dataAll.config.mapTab.find(value => {
          return value.name === this.$route.name
        })
        if (this.$route.name !== '主体服务') {
          this.selectInfoState = false
        }
        this.point = []
        this.leafNodePoint = false
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
        // 清除地图点
        this.clearInfo()
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
      console.log(data, 'ssddd')
      this.point = []
      this.Dispatch(data)
      this.getSelectItem(data)
      this.setPageData({
        key: 'globalMapSelect',
        data: data
      })
    },
    getSelectItem (data) {
      console.log(data, '点击')
      this.clearInfo()
      const items = data.items
      this.point = []
      this.leafNodePoint = false
      if (items.length === 0) {
        this.pointName = []
      } else {
        this.pointName = []
        for (let i = 0; i < items.length; i++) {
          this.pointName.push(items[i].name)
          this.point = [...this.point, ...this.makeTreePoint(items[i], items[i].icon)]
        }
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
    makeTreePoint (number, icon) {
      const cliType = number.type
      console.log(cliType, 'clitype')
      const len = this.city.length
      this.latPoint = []
      if (this.$route.name === '远程监控') {
        const list = []
        for (let i = 0; i < len; i++) {
          const item = this.city[i]
          list.push({
            name: item.name,
            icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
            coordinate: item.center,
            points: [],
            index: i,
            typeIndex: 0
          })
        }
        // var newArray = []
        axios.get('/monitor/main/hyjk/getHyRegions').then(res => {
          const data = res.data.data
          console.log('海康', data)
          for (let i = 0; i < data.length; i++) {
            if (data[i].latitude) {
              this.latPoint.push(data[i])
            }
          }
          axios.get('/monitor/main/hik/getHikRegions').then(res => {
            const data = res.data.data
            console.log('华烨', data)
            for (let q = 0; q < data.length; q++) {
              if (data[q].latitude) {
                this.latPoint.push(data[q])
              }
            }
            for (let i = 0; i < this.latPoint.length; i++) {
              if (this.latPoint[i].userName) {
                if (cliType === Number(this.latPoint[i].enterpriseType)) {
                  // console.log(this.latPoint[i].orgName.substring(0, 2), list)
                  for (let l = 0; l < list.length; l++) {
                    if (this.latPoint[i].orgName.substring(0, 2) === list[l].name.substring(0, 2)) {
                      list[l].points.push({
                        name: this.latPoint[i].enterpriseName,
                        address: this.latPoint[i].address,
                        icon: icon,
                        coordinate: [this.latPoint[i].longitude, this.latPoint[i].latitude],
                        userName: this.latPoint[i].userName,
                        pwd: this.latPoint[i].userPwd
                      })
                    }
                  }
                }
              } else if (this.latPoint[i].indexCode) {
                if (cliType === 5) {
                  for (let l = 0; l < list.length; l++) {
                    if (this.latPoint[i].address.substring(0, 2) === list[l].name.substring(0, 2)) {
                      list[l].points.push({
                        address: this.latPoint[i].name,
                        name: this.latPoint[i].name,
                        icon: icon,
                        coordinate: [this.latPoint[i].longitude, this.latPoint[i].latitude],
                        regionsIndexCode: this.latPoint[i].indexCode
                      })
                    }
                  }
                }
              }
            }
          })
        })
        return list
      } else if (this.$route.name === '主体服务') {
        console.log('主体服务', number, icon)
        this.icon = icon
        const list = []
        for (let i = 0; i < len; i++) {
          const item = this.city[i]
          list.push({
            name: item.name,
            icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
            coordinate: item.center,
            points: [],
            index: i,
            typeIndex: 0,
            baseCount: 0,
            level: 0,
            ad_code: '',
            mainClass: ''
          })
        }
        if (number.mainClass) {
          axios.get('/monitor/main/getDistrictCount?adCode=130000&reportType=' + number.mainClass + '&entType=' + number.type).then(res => {
            const data = res.data.data
            console.log(data, '地图1层打点2')
            for (let i = 0; i < data.length; i++) {
              for (let o = 0; o < list.length; o++) {
                if (list[o].name === data[i].name) {
                  list[o].baseCount = data[i].baseCount
                  list[o].level = data[i].level
                  list[o].ad_code = data[i].ad_code
                  list[o].mainClass = number.mainClass
                  list[o].cliType = cliType
                }
              }
            }
          })
        } else {
          axios.get('/monitor/main/getDistrictCount?adCode=130000&reportType=' + cliType).then(res => {
            const data = res.data.data
            console.log(data, '地图1层打点2')
            for (let i = 0; i < data.length; i++) {
              for (let o = 0; o < list.length; o++) {
                if (list[o].name === data[i].name) {
                  list[o].baseCount = data[i].baseCount
                  list[o].level = data[i].level
                  list[o].ad_code = data[i].ad_code
                  list[o].cliType = cliType
                }
              }
            }
          })
        }
        console.log(list)
        return list
      } else if (this.$route.name === '稽查办案') {
        const list = []
        for (let i = 0; i < len; i++) {
          const item = this.city[i]
          list.push({
            name: item.name,
            icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
            coordinate: item.center,
            points: [],
            index: i,
            typeIndex: 0
          })
        }
        return list
      } else {
        const list = []
        for (let i = 0; i < len; i++) {
          const item = this.city[i]
          list.push({
            name: item.name,
            icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
            coordinate: item.center,
            points: [],
            index: i,
            typeIndex: 0
          })
        }
        return list
      }
    },
    getCaption (obj, state) {
      // console.log(obj, state)
      var index = obj.lastIndexOf('\,')
      if (state == 0) {
        obj = obj.substring(0, index)
      } else {
        obj = obj.substring(index + 1, obj.length)
      }
      return obj
    },
    addGrid () {
      // 初始化网格 用于限制点位置坐标用，可不写
      const find = this.geo.features.find(val => {
        return val.properties.name === '河北'
      })
      const coordinates = find.geometry.coordinates
      for (let i = 0; i < coordinates.length; i++) {
        const item = coordinates[i]
        this.grid.push({
          geo: item,
          border: 'rgba(0,0,0,0)',
          fill: 'rgba(0,0,0,0)'
        })
      }
    },
    Dispatch (data) {
      console.log(data, '点击title')
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
    beforeDestroy () {
      Bus.$emit('message')
    },
    // 第二层地图打点
    returnQu (item) {
      console.log(item, '第二层')
      if (item.ad_code) {
        if (item.mainClass) {
          axios.get('/monitor/main/getDistrictCount?adCode=' + item.ad_code + '&reportType=' + item.mainClass + '&entType=' + item.cliType).then(res => {
            console.log(res.data.data, '第二层')
            this.point = []
            this.leafNodePoint = false
            const data = res.data.data
            for (let i = 0; i < data.length; i++) {
              if (data[i].center) {
                this.point.push({
                  name: data[i].name,
                  coordinate: [this.getCaption(data[i].center, 0), this.getCaption(data[i].center, 1)],
                  icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
                  baseCount: data[i].baseCount,
                  level: data[i].level,
                  ad_code: data[i].ad_code,
                  typeIndex: 0,
                  mainClass: item.mainClass,
                  cliType: item.cliType
                })
              }
            }
          })
        } else {
          axios.get('/monitor/main/getDistrictCount?adCode=' + item.ad_code + '&reportType=' + this.mainType).then(res => {
            console.log(res.data.data, '第二层')
            this.point = []
            this.leafNodePoint = false
            const data = res.data.data
            for (let i = 0; i < data.length; i++) {
              if (data[i].center) {
                this.point.push({
                  name: data[i].name,
                  coordinate: [this.getCaption(data[i].center, 0), this.getCaption(data[i].center, 1)],
                  icon: require('../../../assets/images/mapTabs/p3/t1/集合图标.png'),
                  baseCount: data[i].baseCount,
                  level: data[i].level,
                  ad_code: data[i].ad_code,
                  typeIndex: 0,
                  cliType: item.cliType
                })
              }
            }
          })
        }
      }
    },
    // 第三层地图打点
    returnList (item) {
      console.log(item, this.icon, '第三层')
      if (item.ad_code) {
        if (item.mainClass) {
          axios.get('/monitor/main/getDistrictEntList?adCode=' + item.ad_code + '&reportType=' + item.mainClass + '&entType=' + item.cliType).then(res => {
            console.log('第三层1')
            this.point = []
            this.leafNodePoint = true
            const data = res.data.data
            for (let i = 0; i < data.length; i++) {
              this.point.push({
                name: data[i].entName,
                coordinate: [data[i].longitude, data[i].latitude],
                icon: this.icon,
                address: data[i].dom,
                pripId: data[i].PRIPID,
                cliType: item.cliType
              })
            }
            console.log(this.point, 'ppp11')
            // this.p1Select()
          })
        } else {
          // 11错误
          axios.get('/monitor/main/getDistrictEntList?adCode=' + item.ad_code + '&reportType=' + this.mainType).then(res => {
            console.log('第三层2')
            console.log('开始')
            console.log(new Date())
            this.point = []
            this.leafNodePoint = true
            const data = res.data.data
            for (let i = 0; i < data.length; i++) {
              this.point.push({
                name: data[i].entName,
                coordinate: [data[i].longitude, data[i].latitude],
                icon: this.icon,
                address: data[i].dom,
                pripId: data[i].PRIPID,
                cliType: item.cliType
              })
            }

            console.log('结束')
            console.log(new Date())
            // this.p1Select()
          })
        }
      }
    },
    pointClickDispatch (item) {
      console.log(item, item.cliType, '主体服务')
      switch (this.$route.name) {
        case '主体服务':
          if (item.level === '1' || item.level === '2') {
            this.returnQu(item)
          } else if (item.level === '3' || item.level === '4') {
            this.returnList(item)
          } else if (item.pripId) {
            console.log('第三')
            this.p1Select(item.pripId, item.cliType)
          }
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
            // console.log(this.p2InfoDetail)
          }
          if (this.p2Name === '智慧食品监管') {
            this.p2InfoDetail = {
              name: this.p2Name,
              data: item.data
            }
            // console.log(this.p2InfoDetail)
          }
          if (this.p2Name === '综合监管') {
            this.p2InfoDetail = {
              name: this.p2Name,
              data: item.data
            }
            // console.log(this.p2InfoDetail)
          }
          break
        case '投诉举报':
          this.p5Info = item.data
          break
        case '备案许可':
          this.p10Info = item
          break
        case '稽查办案':
          this.p6Info = item.data
          break
        case '远程监控':
          console.log('远程监控', item)
          if (item.points) {
            this.point = item.points
          } else if (!item.points) {
            Bus.$emit('message', item)
          }
          break
        default:
          break
      }
    },
    p1Select (pripId, cliType) {
      console.log(pripId, cliType, 'pp')
      let url
      if (cliType === 'AA') {
        url = 'getMainBaseGtData'
      } else {
        url = 'getMainBaseInfoData'
      }
      axios.get('/monitor/main/' + url + '?pripId=' + pripId).then(res => {
        console.log(res.data.data, '第一')
        this.basicData = res.data.data
        console.log(this.basicData, 'zz')
        axios.get('/monitor/main/getBaseZlggData?pripId=' + pripId).then(res2 => {
          console.log(res2.data.data, '右屏接口')
          this.mainMessage = res2.data.data
          this.getEntityById()
        })
      })
    },
    getEntityById () {
      // 获取主体信息
      this.p1Config[12].data().then(value => {
        this.p1Info = value.data
        // 右屏一企一档
        console.log(this.basicData, 'bbss')
        if (this.basicData.COMPFORM_CN === '个人经营') {
          this.p1Info['注册信息']['基本信息']['名称'] = this.basicData.TRANAME
          this.p1Info['注册信息']['基本信息']['类型'] = this.basicData.COMPFORM_CN
          this.p1Info['注册信息']['基本信息']['统一社会信用代码'] = this.basicData.UNISCID
          this.p1Info['注册信息']['基本信息']['注册号'] = this.basicData.REGNO
          this.p1Info['注册信息']['基本信息']['登记机关'] = this.basicData.REGORG_CN
          this.p1Info['注册信息']['基本信息']['注册日期'] = this.basicData.ESTDATE
          this.p1Info['注册信息']['基本信息']['核准日期'] = this.basicData.APPRDATE
          this.p1Info['注册信息']['基本信息']['经营期限'] = this.basicData.OPFROM
          this.p1Info['注册信息']['基本信息']['地址'] = this.basicData.OPLOC
          this.p1Info['注册信息']['基本信息']['注册资金'] = this.basicData.FUNDAM
          this.p1Info['注册信息']['基本信息']['法定代表人(经营者)'] = this.basicData.NAME
          this.p1Info['注册信息']['基本信息']['登记状态'] = this.basicData.REGSTATE_CN
          this.p1Info['注册信息']['基本信息']['所属监管所'] = this.basicData.LOCALADM
          // this.p1Info['注册信息']['基本信息']['经济性质'] = this.basicData.ENTTYPE_CN
          // this.p1Info['注册信息']['基本信息']['所属网格'] = ''
          // this.p1Info['注册信息']['基本信息']['信用分类'] = ''
          // this.p1Info['注册信息']['基本信息']['经纬度'] = ''
          // 右屏弹窗
          this.infoData['个人营业执照']['名称'] = this.basicData.TRANAME
          this.infoData['个人营业执照']['统一社会信用代码'] = this.basicData.UNISCID
          // this.p1Info['注册信息']['营业执照']['住所'] = this.basicData.DOM
          this.infoData['个人营业执照']['经营者'] = this.basicData.NAME
          this.infoData['个人营业执照']['登记状态'] = this.basicData.REGSTATE_CN
          this.infoData['个人营业执照']['类型'] = this.basicData.COMPFORM_CN
          this.infoData['个人营业执照']['登记机关'] = this.basicData.REGORG_CN
          this.infoData['个人营业执照']['组成形式'] = '个人经营'
          this.infoData['个人营业执照']['注册日期'] = this.basicData.ESTDATE
          this.infoData['个人营业执照']['核准日期'] = this.basicData.APPRDATE
          // this.p1Info['注册信息']['营业执照']['经营期限自'] = this.basicData.OPFROM
          // this.p1Info['注册信息']['营业执照']['经营期限至'] = this.basicData.OPTO
          // this.p1Info['注册信息']['营业执照']['组成形式'] = this.basicData.COMPFORM_CN
          // this.p1Info['注册信息']['营业执照']['注册资本'] = this.basicData.REGCAP + this.basicData.REGCAPCUR_CN
          console.log(this.selectInfo, '个人营业执照1')
          this.infoData['个人营业执照']['经营范围'] = this.basicData.OPSCOPE
          this.infoData['个人营业执照']['经营场所'] = this.basicData.OPLOC
          this.selectInfo = this.infoData['个人营业执照']
          this.selectInfoState = true
          console.log(this.selectInfo, '个人营业执照2')
        } else {
          this.p1Info['注册信息']['基本信息']['名称'] = this.basicData.ENTNAME
          this.p1Info['注册信息']['基本信息']['类型'] = this.basicData.ENTTYPE_CN
          this.p1Info['注册信息']['基本信息']['统一社会信用代码'] = this.basicData.UNISCID
          this.p1Info['注册信息']['基本信息']['注册号'] = this.basicData.REGNO
          this.p1Info['注册信息']['基本信息']['登记机关'] = this.basicData.REGORG_CN
          this.p1Info['注册信息']['基本信息']['注册日期'] = this.basicData.ESTDATE
          this.p1Info['注册信息']['基本信息']['核准日期'] = this.basicData.APPRDATE
          this.p1Info['注册信息']['基本信息']['经营期限'] = this.basicData.OPFROM
          this.p1Info['注册信息']['基本信息']['地址'] = this.basicData.DOM
          this.p1Info['注册信息']['基本信息']['注册资金'] = this.basicData.REGCAP + this.basicData.REGCAPCUR_CN
          this.p1Info['注册信息']['基本信息']['法定代表人(经营者)'] = this.basicData.NAME
          this.p1Info['注册信息']['基本信息']['登记状态'] = this.basicData.REGSTATE_CN
          this.p1Info['注册信息']['基本信息']['所属监管所'] = ''

          // this.p1Info['注册信息']['基本信息']['经济性质'] = this.basicData.ENTTYPE_CN
          // this.p1Info['注册信息']['基本信息']['所属网格'] = ''
          // this.p1Info['注册信息']['基本信息']['信用分类'] = ''
          // this.p1Info['注册信息']['基本信息']['经纬度'] = ''
          this.infoData['营业执照']['企业名称'] = this.basicData.ENTNAME
          this.infoData['营业执照']['统一社会信用代码'] = this.basicData.UNISCID
          this.infoData['营业执照']['住所'] = this.basicData.DOM
          this.infoData['营业执照']['法定代表人'] = this.basicData.NAME
          this.infoData['营业执照']['登记状态'] = this.basicData.REGSTATE_CN
          this.infoData['营业执照']['类型'] = this.basicData.ENTTYPE_CN
          this.infoData['营业执照']['登记机关'] = this.basicData.REGORG_CN
          this.infoData['营业执照']['成立日期'] = this.basicData.ESTDATE
          this.infoData['营业执照']['经营期限自'] = this.basicData.OPFROM
          this.infoData['营业执照']['经营期限至'] = this.basicData.OPTO
          this.infoData['营业执照']['注册资本'] = this.basicData.REGCAP + this.basicData.REGCAPCUR_CN
          this.infoData['营业执照']['经营范围'] = this.basicData.OPSCOPE
          this.selectInfo = this.infoData['营业执照']
          // 右上角弹窗
          this.selectInfoState = true
        }
        for (let i = 0; i < this.mainMessage.length; i++) {
          this.p1Info['监管信息']['质量公告'].push({
            // '生产企业': this.mainMessage[i].SCQY,
            产品名称: this.mainMessage[i].CPMC,
            规格: this.mainMessage[i].GG,
            结果: this.mainMessage[i].JG,
            批号: this.mainMessage[i].PH,
            类型: this.mainMessage[i].LX,
            年度: this.mainMessage[i].ND,
            被检单位: this.mainMessage[i].BJDW
            // '不合格项': this.mainMessage[i].BHG
            // '主体身份代码': this.mainMessage[i].UNISCID
          })
          console.log(this.mainMessage[i], this.p1Info['监管信息']['质量公告'], '非个体')
        }
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
