<template>
    <div class="NativeAmap">
        <div class="full-width full-height" :id="'container'+idKey"></div>
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
      mapZoom: 10,
      mapDepth: 1
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
              this.mass.off('click', this.clickHandler)
              this.mass.clear()
            } catch (e) {
              console.log(e)
            }
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
      if (oldZoom > newZoom && newZoom === 8 && this.mapDepth === 2) {
        const layers = this.map.getLayers()
        console.log(layers)
        for (let i = 0; i < layers.length; i++) {
          if (layers[i].CLASS_NAME === 'AMap.DistrictLayer.Province') {
            this.map.remove(layers[i])
          }
        }
        this.disProvince(this.adcode, this.depth)
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
        autoRotation: true,
        center: this.center,
        mapStyle: 'amap://styles/grey'
        // mapStyle: 'amap://styles/7ac2f867a34cdfd376071d2c69b126bd'
      })
      const self = this

      this.map.on('zoomend', this.zoomListener)
      this.map.on('click', this.clickListener)

      window.AMap.plugin('AMap.DistrictLayer', function () { // 异步加载插件
        self.disProvince(self.adcode, self.depth)
      })
    },
    clickHandler (data) {
      console.log(data)
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
    addMassMarks (data) { // 海量点
      console.log('海量点')
      const style = [{
        // url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        url: data[0].icon ? data[0].icon : 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        anchor: new AMap.Pixel(0, 0),
        size: data[0].icon ? new AMap.Size(36, 36) : new AMap.Size(36, 20)
      }]
      console.log(style)
      const points = []
      for (let i = 0; i < data.length; i++) {
        const marker = data[i]
        const coordinate = this.transCoordinate(marker.coordinate)
        if (coordinate) {
          marker.lnglat = coordinate
          points.push(marker)
        }
      }
      this.pointNumber = points.length
      if (points.length > 0) {
        this.mass = new window.AMap.MassMarks(points, {
          opacity: 0.8,
          zIndex: 111,
          cursor: 'pointer',
          style: style
        })
        this.mass.on('click', this.clickHandler)
        this.mass.setMap(this.map)
      }
    },
    disProvince (adcode, depth) { // 省份图层
      this.mapDepth = depth
      const self = this
      this.disProvinceLayer = new window.AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: adcode,
        depth: depth,
        styles: {
          fill: 'rgba(34,174 ,197,.1)', // 中国地级市边界
          'province-stroke': 'cornflowerblue',
          'city-stroke': function (properties) {
            // properties为可用于做样式映射的字段，包含
            // NAME_CHN:中文名称
            // adcode_pro
            // adcode_cit
            // adcode
            const adcode = properties.adcode
            return self.getColorByAdcode(adcode)
          },
          'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
        }
      })
      this.disProvinceLayer.setMap(this.map)
    },
    zoomListener () {
      this.mapZoom = this.map.getZoom()
    },
    clickListener (ev) {
      const px = ev.pixel
      // 拾取所在位置的行政区
      const props = this.disProvinceLayer.getDistrictByContainerPos(px)
      if (props) {
        this.removeEvent()
        this.disProvince([props.adcode], 2)
        this.map.setZoomAndCenter(9, [props.x, props.y])
      }
    },
    removeEvent () {
      const layers = this.map.getLayers()
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].CLASS_NAME === 'AMap.DistrictLayer.Province') {
          this.map.remove(layers[i])
        }
      }
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
}
</style>
