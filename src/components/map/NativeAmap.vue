<template>
    <div class="NativeAmap">
        <!-- {{zoom}} -->
        <div class="a-map full-width full-height" :id="'container'+idKey"></div>
        <MapSelector v-if="selector&&selectorData.length>0" :data="selectorData" @getSelect="getSelect"/>
        <MapInfoBlock>
            <slot name="info"></slot>
        </MapInfoBlock>
        <SearchBox :number="pointNumber" @inputData='inputFocus' :zoom="zoom2"/>
    </div>
</template>

<script>
import MapSelector from './MapSelector'
import MapInfoBlock from './MapInfoBlock'
import SearchBox from './searchBox'
import Mock from 'mockjs'
export default {
  name: 'NativeAmap',
  components: {
    SearchBox,
    MapInfoBlock,
    MapSelector
  },
  data: () => {
    return {
      map: {},
      mass: [],
      paths: [],
      colors: {},
      pointNumber: 0,
      tempData: {},
      disProvinceLayer: {},
      proDepth: 0,
      mapZoom: {
        type: '',
        zoom: 0
      },
      markers: [],
      zoom2: 0,
      inputData: []
    }
  },
  props: {
    zoom: { // 缩放
      type: Number,
      default: 8
    },
    pointName: {
      type: Array,
      default: () => {
        return [116.407387, 39.904179]
      }
    },
    depth: { // 缩放
      type: Number,
      default: 1
    },
    center: { // 中心点
      type: Array,
      default: () => {
        return [116.407387, 39.904179]
      }
    },
    adcode: { // 中心点
      type: Array,
      default: () => {
        return [130000]
      }
    },
    point: { // 点集合
      type: Array,
      default: () => {
        return []
      }
    },
    isInGrid: {
      type: Boolean,
      default: false
    },
    leafNodePoint: {
      type: Boolean,
      default: false
    },
    selector: {
      type: Boolean,
      default: false
    },
    selectorData: {
      type: Array,
      default: () => {
        return []
      }
    },
    idKey: {
      type: Number,
      default: 0
    }
  },
  watch: {
    pointName: {
      deep: true,
      immediate: false,
      handler: function () {
        this.$nextTick(() => {
          this.loadAMap(() => {
            console.log(this.proDepth)
            console.log(this.pointName)
            if (this.proDepth === 0) {
            } else {
              this.map.setZoomAndCenter(this.zoom, this.center)
              this.SearchDistrict(this.adcode[0], 0)
            }
          })
        })
      }
    },
    point: {
      deep: true,
      immediate: false,
      handler: function () {
        this.$nextTick(() => {
          this.loadAMap(() => {
            try {
              this.removeMassMarks()
            } catch (e) {
              console.log(e)
            }
            // this.map.setZoomAndCenter(9, this.center)
            // this.pointNumber = 0
            console.log(this.point, 'ppooo')
            if (this.point.length > 0) {
              const areaName = this.point[0].name.charAt(this.point[0].name.length - 1)
              console.log(areaName, 'area')
              if (areaName !== '市') {
                this.addMassMarks(this.point)
              } else if (areaName === '市') {
                // this.removeDisProvinceLayer()
                // this.SearchDistrict(this.adcode[0], 0)
                this.addMassMarks(this.point)
              }
            } else {
              // this.removeDisProvinceLayer()
              // this.SearchDistrict(this.adcode[0], 0)
            }
          })
        })
      }
    }
  },
  mounted () {
    this.loadAMap(() => {
      this.initMap()
    })
  },
  methods: {
    inputFocus (data) {
      console.log(data, '搜索')
      var list = []
      list.push(data)
      this.addMassMarks(list)
      this.map.setZoomAndCenter(17, [data.longitude, data.latitude])
      // // this.point = []
      // axios.get('/monitor/main/getMainBaseDataByCon?entName=' + data).then(res => {
      //   const data = res.data.data
      //   console.log(data, '搜索数据')
      //   this.inputData = []
      //   for (let i = 0; i < data.length; i++) {
      //     console.log(data[i], 'iiiii')
      //     this.inputData.push({
      //       address: data[i].DOM,
      //       cliType: data[i].ENTTYPE,
      //       coordinate: [data[i].longitude, data[i].latitude],
      //       icon: require('../../assets/images/mapTabs/p1/t1/撒点.png'),
      //       name: data[i].ENTNAME,
      //       pripId: data[i].PRIPID,
      //       level: 5
      //     })
      //     console.log(this.inputData, '搜索data')
      //     // 打点
      //     this.addMassMarks(this.inputData)
      //     // 调整中心视角
      //     this.map.setZoomAndCenter(17, [data[i].longitude, data[i].latitude])
      //   }
      // })
    },
    loadAMap (callback) {
      if (!window.AMap) {
        // console.log('地图未加载')
        this.$AMapBus.$on('onAMapLoad', () => {
          // console.log('地图加载完毕')
          callback()
        })
      } else {
        // console.log('地图已加载')
        callback()
      }
    },
    initMap () {
      console.log('初始化地图')
      this.map = new window.AMap.Map('container' + this.idKey, {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: this.zoom,
        draggable: true,
        zoomEnable: true,
        viewMode: '3D',
        // 滚轮开关
        scrollWheel: true,
        autoRotation: true,
        center: this.center,
        mapStyle: 'amap://styles/grey'
        // mapStyle: 'amap://styles/7ac2f867a34cdfd376071d2c69b126bd'
      })
      const self = this
      // this.map.on('zoomend', this.zoomListener)
      // this.map.on('click', this.clickListener)
      window.AMap.plugin(['AMap.DistrictLayer', 'AMap.DistrictSearch', 'AMap.MarkerClusterer', 'AMap.ToolBar'], function () { // 异步加载插件
        const toolbar = new window.AMap.ToolBar({
          position: 'RB',
          offset: new AMap.Pixel(30, 10)
        })
        toolbar.on('zoomchanged', self.zoomchanged)
        self.map.addControl(toolbar)
        self.SearchDistrict(self.adcode[0], self.depth)
      })
    },
    zoomchanged (zoomObject) {
      const zoom = this.map.getZoom()
      if (zoomObject.type === 'zoomout' && zoom <= this.zoom + 1 && this.proDepth > 0) {
        if (zoom === this.zoom + 1) {
          console.log(this.tempData)
          this.clickAction(this.tempData, this.tempData.coordinate)
        } else {
          this.SearchDistrict(this.adcode[0], 0)
          this.map.setZoomAndCenter(this.zoom, this.center)
          this.removeMassMarks() // 删除点
          this.$emit('pointClick', {
            mainClass: 'AA',
            level: '1',
            ad_code: this.adcode
          })
        }
      }
    },
    // zoomListener () {
    //   console.log(arguments)
    // },
    clickHandler (e) {
      console.log('clickHandler')
      const data = e.target.getExtData()
      // this.tempData = adcode
      console.log(data)
      const center = [e.lnglat.lng, e.lnglat.lat]
      this.clickAction(data, center)
    },
    clickAction (data, center) {
      console.log(data, center, '点击最后一层')
       if (this.$route.name === '远程监控') {
        if (data.points) {
          console.log('最后一层')
          this.removeDisProvinceLayer()
          this.SearchDistrict(data.name, this.proDepth)
          this.map.setZoomAndCenter(this.zoom, center)
          this.removeMassMarks()
        }
      } else if (this.$route.name === '主体服务' & !data.pripId){
        this.removeDisProvinceLayer()
        this.SearchDistrict(data.name, this.proDepth)
        this.map.setZoomAndCenter(this.zoom, center)
        this.removeMassMarks()
      }
      if (data.level === '2') {
        this.tempData = data
      }
      this.proDepth++
      console.log(data.name, this.proDepth)
      // this.addMassMarks(data.points)
      let zoom = 0
      if (data.level) {
        zoom = data.level * 1 + this.zoom - 1
      } else {
        zoom = this.map.getZoom() + 1
      }
      console.log(this.zoom)
      console.log(zoom)
      // this.SearchDistrict(data.name, this.proDepth)
      // this.map.setZoomAndCenter(zoom, center)
      // this.removeMassMarks()
      this.$emit('pointClick', data)
    },
    contentMaker (data) {
      // console.log(data, '地图打点')
      if (data.baseCount) {
        if (data.typeIndex === 0) {
          const count = data.baseCount ? '<div style="width: 100%;text-align: center">' + data.baseCount + '</div>' : ''
          return '<div style="width: 70px; position: relative;"><span style="position: absolute;top:0px;display:inline-block;width:70px;text-align:center;color:#000000;height:34px;line-height:34px;font-size:20px;">' + count + '</span><img style="width: 100%" alt="" src="' + data.icon + '"/>' + '</div>'
        } else {
          const count = data.baseCount ? '<div style="width: 100%;text-align: center">' + data.baseCount + '</div>' : ''
          return '<div style="width: 36px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
        }
      } else {
        if (data.typeIndex === 0) {
          const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
          return '<div style="width: 70px; position: relative;"><span style="position: absolute;top:0px;display:inline-block;width:70px;text-align:center;color:#000000;height:34px;line-height:34px;font-size:20px;">' + count + '</span><img style="width: 100%" alt="" src="' + data.icon + '"/>' + '</div>'
        } else {
          const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
          return '<div style="width: 36px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
        }
      }
    },
    addMassMarks (data) { // 海量点
      console.log(data, '海量点')
      this.pointNumber = 0
      for (let i = 0; i < data.length; i++) {
        if (data[i].baseCount) {
          this.pointNumber += data[i].baseCount
        } else if (data[i].points) {
          this.pointNumber += data[i].points.length
        } else {
          this.pointNumber = data.length
        }
      }
      const newArray = []
      if (this.$route.name === '远程监控') {
        if (data[0].points) {
          for (let z = 0; z < data.length; z++) {
            if (data[z].points.length) {
              newArray.push(data[z])
            }
          }
          this.pointMap(newArray)
        } else {
          this.pointMap(data)
        }
      } else if (this.$route.name === '主体服务') {
        var newPoint = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].name !== '河北雄安新区') {
            newPoint.push(data[i])
          }
        }
        this.pointMap(newPoint)
      } else {
        this.pointMap(data)
      }
    },
    pointMap (data) {
      this.markers = []
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const marker = new window.AMap.Marker({
          content: this.contentMaker(item),
          position: item.coordinate,
          zIndex: 101,
          title: item.name,
          extData: item
        })
        marker.on('click', this.clickHandler)
        this.markers.push(marker)
      }
      if (this.leafNodePoint) { // 判断是否是最后的叶子节点，即主体
        this.cluster = new window.AMap.MarkerClusterer(this.map, this.markers, {
          gridSize: 300
        })
        // var mass = new AMap.MassMarks(citys, {
        //   opacity: 0.8,
        //   zIndex: 111,
        //   cursor: 'pointer',
        //   style: style
        // });
        // console.log('海量点')
        // const style = [{
        //   // url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        //   url: data[0].icon ? data[0].icon : 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        //   anchor: new AMap.Pixel(0, 0),
        //   size: data[0].icon ? new AMap.Size(36, 36) : new AMap.Size(36, 20)
        // }]
        // console.log(style)
        // const points = []
        // for (let i = 0; i < data.length; i++) {
        //   const marker = data[i]
        //   marker.lnglat = marker.coordinate
        //   points.push(marker)
        // }
        // this.pointNumber = points.length
        // if (points.length > 0) {
        //   this.mass = new window.AMap.MassMarks(points, {
        //     opacity: 0.8,
        //     zIndex: 111,
        //     cursor: 'pointer',
        //     style: style
        //   })
        //   this.cluster = new window.AMap.MarkerClusterer(this.map, this.markers, {
        //     gridSize: 800
        //   })
        // this.mass.on('click', this.clickHandler)
        // this.mass.setMap(this.map)
        // }
      } else {
        this.map.add(this.markers)
      }
      // this.map.add(this.markers)
    },
    removeMassMarks () {
      try {
        this.cluster.setMap(null)
      } catch (e) {
      }
      try {
        this.mass.clear()
      } catch (e) {
      }
      try {
        this.map.remove(this.markers)
      } catch (e) {
      }
    },
    searchFunc (adcode) { // 网格搜索方法，调用amap的api，无需修改
      // console.log(adcode, 'adddd')
      const districtSearch = new window.AMap.DistrictSearch({
        // 关键字对应的行政区级别，country表示国家
        level: 'street',
        //  显示下级行政区级数，1表示返回下一级行政区
        extensions: 'all',
        showbiz: true,
        subdistrict: 1
      })
      return new Promise(resolve => {
        districtSearch.search(adcode, (status, result) => {
          // console.log(result)
          // console.log(result.districtList[0].name)
          // console.log([result.districtList[0].center.lng, result.districtList[0].center.lat].toString())
          resolve(result)
        })
      })
    },
    SearchDistrict (adcode, depth) { // 搜索adcode下所有网格
      console.log(adcode, depth)
      this.proDepth = depth
      // 搜索所有省/直辖市信息
      this.searchFunc(adcode).then(result => {
        const list = result.districtList[0].districtList
        const polygons = []
        const promiseList = []
        if (list.length > 0) {
          //     console.log(1)
          for (let j = 0; j < list.length; j++) {
            const item = list[j]
            if (item.level === 'street') {
              if (j === 0) {
                promiseList.push(this.searchFunc(item.adcode))
              }
            } else {
              promiseList.push(this.searchFunc(item.adcode))
            }
          }
        }
        Promise.all(promiseList).then(value => {
          for (let i = 0; i < value.length; i++) {
            const item = value[i]
            for (let j = 0; j < item.districtList[0].boundaries.length; j++) {
              const bounds = item.districtList[0].boundaries[j]
              const name = item.districtList[0].name
              const adcode = item.districtList[0].adcode
              const polygon = new window.AMap.Polygon({
                // map: this.map,
                // strokeWeight: 1,
                // path: bounds[i],
                // fillOpacity: 0.7,
                // fillColor: '#CCF3FF',
                // strokeColor: '#CC66CC'
                path: bounds,
                strokeColor: '#fff',
                strokeWeight: 1,
                strokeOpacity: 0.2,
                fillOpacity: 0.3,
                fillColor: this.getColorByAdcode(adcode),
                zIndex: 50,
                extData: {
                  name,
                  adcode,
                  depth
                }
              })
              polygon.on('click', this.layerClick)
              polygons.push(polygon)
            }
          }
          this.removeDisProvinceLayer()
          this.disProvinceLayer = new window.AMap.OverlayGroup(polygons)
          this.map.add(this.disProvinceLayer)
          // 地图自适应
          // this.map.setFitView()
        })
      })
    },
    layerClick (layer) {
      console.log('移除图层点击')
      // 暂时移除图层点击
      // console.log(layer)
      // const target = layer.target
      // console.log(target)
      // const data = target.getExtData()
      // this.removeDisProvinceLayer() // 先移除图层
      // this.SearchDistrict(data.adcode, data.depth + 1)
      // this.map.setAndCenter(9, [layer.lnglat.lng, layer.lnglat.lat])
    },
    refreshDisProvinceLayer () {
    },
    removeDisProvinceLayer () {
      console.log('removeDisProvinceLayer')
      try {
        this.map.remove(this.disProvinceLayer)
      } catch (e) {
        console.log(e)
      }
    },
    getColorByAdcode (adcode) {
      // console.log(adcode, 'aaddss')
      if (!this.colors[adcode]) {
        this.colors[adcode] = Mock.mock('@color')
      }
      return this.colors[adcode]
    },
    getSelect (list) { // 发送地图下方的选择器事件
      console.log('selector click')
      this.$emit('getSelect', list)
    }
  },
  beforeDestroy () {
    try {
      this.mass.clear()
    } catch (e) {
    }
    this.map.destroy()
  }
}
</script>

<style scoped lang="less">
.NativeAmap {
    position: relative;
    overflow: hidden;
    > .a-map {
        position: absolute;
    }
}
</style>

<style lang="less">
.amap-toolbar {
    zoom: 2;
}
</style>