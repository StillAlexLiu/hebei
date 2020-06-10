<template>
    <div class="NativeAmap">
        <div class="a-map full-width full-height" :id="'container'+idKey"></div>
        <MapSelector v-if="selector&&selectorData.length>0" :data="selectorData" @getSelect="getSelect"/>
        <MapInfoBlock>
            <slot name="info"></slot>
        </MapInfoBlock>
        <search-box :number="pointNumber"/>
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
      disProvinceLayer: {},
      proDepth: 0,
      mapZoom: 10,
      markers: []
    }
  },
  props: {
    zoom: { // 缩放
      type: Number,
      default: 10
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
    grid: { // 网格集合
      type: Array,
      default: () => {
        return []
      }
    },
    isInGrid: {
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
    point: {
      deep: true,
      immediate: true,
      handler: function () {
        this.$nextTick(() => {
          this.loadAMap(() => {
            try {
              this.removeMassMarks()
            } catch (e) {
              console.log(e)
            }
            this.map.setZoomAndCenter(9, this.center)
            this.pointNumber = 0
            if (this.point.length > 0) {
              this.addMassMarks(this.point)
            }
          })
        })
      }
    },
    grid: {
      deep: true,
      immediate: true,
      handler: function () {
        if (this.grid.length > 0) {
          this.paths = []
          for (let i = 0; i < this.grid.length; i++) {
            this.paths.push([...this.grid[i].geo])
          }
          console.log(this.paths)
          this.$nextTick(() => {
            this.loadAMap(() => {
              // this.initMap()
              // 先注释掉
              // this.addGrid(this.grid)
            })
          })
        }
      }
    },
    mapZoom (newZoom, oldZoom) { // 缩放复位
      console.log('zoom:' + newZoom)
      console.log(this.proDepth)
      if (oldZoom > newZoom && newZoom === 8 && this.proDepth > 0) {
        const layers = this.map.getLayers()
        console.log(layers)
        this.removeDisProvinceLayer()
        // for (let i = 0; i < layers.length; i++) {
        //   // if (layers[i].CLASS_NAME === 'AMap.DistrictLayer.Province') {
        //   //   this.map.remove(layers[i])
        //   // }
        // }
        this.removeMassMarks()
        this.addMassMarks(this.point)
        this.SearchDistrict(this.adcode[0], 0)
      }
    }
  },
  mounted () {
    this.loadAMap(() => {
      this.initMap()
    })
  },
  methods: {
    loadAMap (callback) {
      if (!window.AMap) {
        console.log('地图未加载')
        this.$AMapBus.$on('onAMapLoad', () => {
          console.log('地图加载完毕')
          callback()
        })
      } else {
        console.log('地图已加载')
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
        viewMode: '3D',
        autoRotation: true,
        center: this.center,
        mapStyle: 'amap://styles/grey'
        // mapStyle: 'amap://styles/7ac2f867a34cdfd376071d2c69b126bd'
      })
      const self = this

      this.map.on('zoomend', this.zoomListener)
      // this.map.on('click', this.clickListener)

      window.AMap.plugin(['AMap.DistrictLayer', 'AMap.DistrictSearch'], function () { // 异步加载插件
        // self.disProvince(self.adcode, self.depth)
        self.SearchDistrict(self.adcode[0], self.depth)
      })
    },
    clickHandler (e) {
      const data = e.target.getExtData()
      if (data.points && data.points.length > 0) {
        this.removeDisProvinceLayer()
        console.log(this.proDepth++)
        this.SearchDistrict(data.name, this.proDepth)
        this.map.setZoomAndCenter(9, [e.lnglat.lng, e.lnglat.lat])
        this.removeMassMarks()
        this.addMassMarks(data.points)
      }
      this.$emit('pointClick', data)
    },
    isPointInRing (point) {
      let find = false
      for (let i = 0; i < this.paths.length; i++) {
        const path = this.paths[i]
        const check = window.AMap.GeometryUtil.isPointInRing(point, path)
        if (check) {
          find = point
        }
      }
      return find
    },
    isPointInPolygon (point) {
      const check = window.AMap.GeometryUtil.isPointInPolygon(point, this.paths)
      if (check) {
        return point
      } else {
        return false
      }
    },
    transCoordinate (str) {
      if (str && str.length === 2 && str[0] > 0 && str[1] > 0) {
        if (this.isInGrid) {
          return this.isPointInRing(str)
        } else {
          return str
        }
      } else {
        return false
      }
    },
    addGrid (data) {
      console.log(data)
      if (data) {
        const grids = []
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          const polygon = new window.AMap.Polygon({
            path: item.geo,
            strokeColor: item.border ? item.border : '#fff',
            strokeWeight: 1,
            strokeOpacity: 0.2,
            fillOpacity: 0.4,
            fillColor: item.fill ? item.fill : '#eee',
            zIndex: 50
          })
          grids.push(polygon)
        }
        const overlayGroups = new window.AMap.OverlayGroup(grids)
        this.map.add(overlayGroups)
      }
    },
    contentMaker (data) {
      if (data.userName) {
        const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
        return '<div style="width: 36px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
      } else if (this.$route.name === '远程监控') {
        const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
        return '<div style="width: 70px; position: relative;"><span style="position: absolute;top:0px;display:inline-block;width:70px;text-align:center;color:#000000;">' + count + '</span><img style="width: 100%" alt="" src="' + data.icon + '"/>' + '</div>'
      } else {
        const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
        return '<div style="width: 36px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
      }
    },
    addMassMarks (data) { // 海量点
      console.log('海量点')
      console.log(data)
      var newArray = []
      if (this.$route.name === '远程监控') {
        if (data[0].points) {
          for (let z = 0; z < data.length; z++) {
            if (data[z].points.length) {
              newArray.push(data[z])
            }
          }
          this.markers = []
          // console.log(newArray, 'oo')
          for (let i = 0; i < newArray.length; i++) {
            const item = newArray[i]
            // console.log(item)
            const marker = new window.AMap.Marker({
              content: this.contentMaker(item),
              position: this.transCoordinate(item.coordinate),
              zIndex: 101,
              title: item.name,
              extData: item
            })
            console.log(marker)
            marker.on('click', this.clickHandler)
            this.markers.push(marker)
          }
          this.map.add(this.markers)
        } else {
          this.markers = []
          for (let i = 0; i < data.length; i++) {
            const item = data[i]
            // console.log(item)
            const marker = new window.AMap.Marker({
              content: this.contentMaker(item),
              position: this.transCoordinate(item.coordinate),
              zIndex: 101,
              title: item.name,
              extData: item
            })
            // console.log(marker)
            marker.on('click', this.clickHandler)
            this.markers.push(marker)
          }
          this.map.add(this.markers)
        }
      } else {
        this.markers = []
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          // console.log(item)
          const marker = new window.AMap.Marker({
            content: this.contentMaker(item),
            position: this.transCoordinate(item.coordinate),
            zIndex: 101,
            title: item.name,
            extData: item
          })
          // console.log(marker)
          marker.on('click', this.clickHandler)
          this.markers.push(marker)
        }
        this.map.add(this.markers)
      }
    },
    // 整理的函数
    // ponitMap (data) {
    //   this.markers = []
    //   for (let i = 0; i < data.length; i++) {
    //     const item = data[i]
    //     // console.log(item)
    //     const marker = new window.AMap.Marker({
    //       content: this.contentMaker(item),
    //       position: this.transCoordinate(item.coordinate),
    //       zIndex: 101,
    //       title: item.name,
    //       extData: item
    //     })
    //     // console.log(marker)
    //     marker.on('click', this.clickHandler)
    //     this.markers.push(marker)
    //   }
    //   this.map.add(this.markers)
    // },
    removeMassMarks () {
      this.map.remove(this.markers)
    },
    searchFunc (adcode) {
      const districtSearch = new window.AMap.DistrictSearch({
        // 关键字对应的行政区级别，country表示国家
        level: 'district',
        //  显示下级行政区级数，1表示返回下一级行政区
        extensions: 'all',
        subdistrict: '2'
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
    SearchDistrict (adcode, depth) {
      this.proDepth = depth

      // 搜索所有省/直辖市信息
      this.searchFunc(adcode).then(result => {
        const list = result.districtList[0].districtList
        const polygons = []
        const promiseList = []
        console.log(list)

        if (list.length > 0) {
          //     console.log(1)
          for (let j = 0; j < list.length; j++) {
            const item = list[j]
            promiseList.push(this.searchFunc(item.adcode))
          }
        }
        Promise.all(promiseList).then(value => {
          console.log(value)
          for (let i = 0; i < value.length; i++) {
            const item = value[i]
            const bounds = item.districtList[0].boundaries
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
              fillOpacity: 0.4,
              fillColor: this.getColorByAdcode(adcode),
              zIndex: 50,
              extData: {
                name, adcode, depth
              }
            })
            polygon.on('click', this.layerClick)
            polygons.push(polygon)
          }
          this.disProvinceLayer = new window.AMap.OverlayGroup(polygons)
          this.map.add(this.disProvinceLayer)
          // 地图自适应
          // this.map.setFitView()
        })
      })
    },
    layerClick (layer) {
      console.log(layer)
      const target = layer.target
      console.log(target)
      const data = target.getExtData()
      this.removeDisProvinceLayer() // 先移除图层
      this.SearchDistrict(data.adcode, data.depth + 1)
      this.map.setZoomAndCenter(9, [layer.lnglat.lng, layer.lnglat.lat])
    },
    zoomListener () {
      this.mapZoom = this.map.getZoom()
    },
    removeDisProvinceLayer () {
      this.map.remove(this.disProvinceLayer)
    },
    getColorByAdcode (adcode) {
      if (!this.colors[adcode]) {
        this.colors[adcode] = Mock.mock('@color')
      }
      return this.colors[adcode]
    },
    getSelect (list) { // 发送地图下方的选择器事件
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
