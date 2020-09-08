<template>
  <div class="NativeAmap">
    <div class="a-map full-width full-height" :id="'container'+idKey" :style="style"></div>
    <MapSelector
      v-if="selector&&selectorData.length>0"
      :data="selectorData"
      @getSelect="getSelect"
    />
    <MapInfoBlock>
      <slot name="info"></slot>
    </MapInfoBlock>
    <MapCenterTable>
      <slot name="tableList"></slot>
    </MapCenterTable>
    <SearchBox :number="pointNumber" @inputData="inputFocus" :zoom="zoom2" />
    <warningBox @close="close" v-if="warning" :wData="warningData" :title="caseTitle" />
    <overBox
      @closeOverBox="closeOverBox"
      :caseType="caseType"
      v-if="over"
      :type="overType"
      :title="overTitle"
    />
  </div>
</template>

<script>
import MapSelector from "./MapSelector";
import MapInfoBlock from "./MapInfoBlock";
import SearchBox from "./searchBox";
import warningBox from "./warningBox";
import overBox from "./overBox";
import Mock from "mockjs";
import Bus from "@/assets/bus.js";
import axios from "axios";
import MapCenterTable from "./MapCenterTable";

export default {
  name: "NativeAmap",
  components: {
    SearchBox,
    MapInfoBlock,
    MapSelector,
    warningBox,
    overBox,
    MapCenterTable,
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
      proDepth: 1,
      mapZoom: {
        type: "",
        zoom: 0,
      },
      markers: [],
      zoom2: 0,
      inputData: [],
      warning: false,
      warningData: "",
      over: false,
      style: {},
      caseTitle: "案件详情",
      overType: "",
      overTitle: "",
      caseType: 0,
      listData: "",
      infoWindow: '',
      Hmarkers: ''
    };
  },
  props: {
    zoom: {
      // 缩放
      type: Number,
      default: 8,
    },
    pointName: {
      type: Array,
      default: () => {
        return [116.407387, 39.904179];
      },
    },
    depth: {
      // 缩放
      type: Number,
      default: 0,
    },
    center: {
      // 中心点
      type: Array,
      default: () => {
        return [116.407387, 39.904179];
      },
    },
    adcode: {
      // 中心点
      type: Array,
      default: () => {
        return [130000];
      },
    },
    point: {
      // 点集合
      type: Array,
      default: () => {
        return [];
      },
    },
    isInGrid: {
      type: Boolean,
      default: false,
    },
    leafNodePoint: {
      type: Boolean,
      default: false,
    },
    selector: {
      type: Boolean,
      default: false,
    },
    selectorData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    idKey: {
      type: Number,
      default: 0,
    }
  },
  watch: {
    pointName: {
      deep: true,
      immediate: false,
      handler: function () {
        this.$nextTick(() => {
          this.loadAMap(() => {
            if (this.proDepth === 0) {
            } else {
              this.map.setZoomAndCenter(this.zoom, this.center);
              this.SearchDistrict(this.adcode[0], 0);
            }
          });
        });
      },
    },
    point: {
      deep: true,
      immediate: false,
      handler: function () {
        this.warning = false;
        this.over = false;
        this.$nextTick(() => {
          this.loadAMap(() => {
            try {
              this.removeMassMarks();
            } catch (e) {}
            // this.map.setZoomAndCenter(9, this.center)
            // this.pointNumber = 0
            if (this.point.length > 0) {
              const areaName = this.point[0].name.charAt(
                this.point[0].name.length - 1
              );
              if (areaName !== "市") {
                this.addMassMarks(this.point);
              } else if (areaName === "市") {
                // this.removeDisProvinceLayer()
                // this.SearchDistrict(this.adcode[0], 0)
                this.addMassMarks(this.point);
              }
            } else {
              // this.removeDisProvinceLayer()
              // this.SearchDistrict(this.adcode[0], 0)
            }
          });
        });
      },
    },
    $route(to, from) {
      // 清除所有图层包括网格
      this.map.clearMap();
      // 重画网格
      this.SearchDistrict(this.adcode[0], 0);
      this.map.setZoomAndCenter(this.zoom, this.center);
      if (to.path !== "/audit") {
        this.warning = false;
        this.over = false;
      } else {
        this.warning = false;
        this.over = false;
      }
    },
  },
  mounted() {
    this.loadAMap(() => {
      this.initMap();
    });
    // 预警列表弹框
    Bus.$on("waringData", (data) => {
      // console.log(data.caseId, 'id')
      if (data) {
        this.$get("/monitor/check/detailCase?caseId=" + data.caseId)
          .then((data) => {
            // console.log(data.data.caseNo, '编号')
            this.warningData = data.data;
            this.warning = true;
            this.over = false;
            this.caseTitle = "案件详情";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    // 累计结案弹框
    Bus.$on("overBox", (data) => {
      console.log(data, "结案");
      if (data) {
        this.overType = "6";
        this.overTitle = "已办结案件";
        this.over = true;
        this.warning = false;
      }
    });
    Bus.$on("zoom", (data) => {
      const zoom = 1 / data;
      // this.$set(this.style, 'transform', 'scale(' + zoom + ',' + zoom + ')')
      var map = document.getElementsByClassName("amap-maps")[0];
      map.style.transform = "scale(" + zoom + "," + zoom + ")";
    });
    Bus.$on("zoom2", (data) => {
      // const zoom = 1 / data
      // this.$set(this.style, 'transform', 'scale(' + zoom + ',' + zoom + ')')
      var map = document.getElementsByClassName("amap-maps")[0];
      map.style.transform = "scale(" + data.x + "," + data.y + ")";
    });
    Bus.$on("caseOn", (data) => {
      if (data) {
        // this.warningData = data
        // this.warning = true
        // this.over = false
        // this.caseTitle = '处理中案件详情'
        this.$get("/monitor/check/detailCase?caseId=" + data.caseId)
          .then((res) => {
            this.warningData = res.data;
            this.warning = true;
            this.over = false;
            this.caseTitle = "处理中案件详情";
            this.caseTitle = "案件详情";
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    Bus.$on("case", (data) => {
      console.log(data, "ddddss");
      // if (data.name === '线索') {
      //   this.overType = data.type
      //   this.overTitle = data.name
      //   this.over = true
      //   this.warning = false
      // } else if (data.name === '办案完成') {
      //   this.overType = data.type
      //   this.overTitle = data.name
      //   this.over = true
      //   this.warning = false
      //   this.caseType = 6
      // } else {
      this.caseType = 2;
      this.overType = data.type;
      this.overTitle = data.name;
      this.over = true;
      this.warning = false;
      // }
      // if (data) {
      //   this.overType = data.type
      //   ths.overTitle = data.name
      //   this.over = true
      //   this.warning = false
      // this.$get('/monitor/check/detailCase?caseId=' + data.caseId).then(res => {
      //   this.warningData = res.data
      // this.overType = data.type
      // this.overTitle = data.name
      // this.over = true
      // this.warning = false
      // }).catch(err => {
      //   console.log(err)
      // })
      // }
    });
  },
  methods: {
    close(data) {
      this.warning = data;
    },
    closeOverBox(data) {
      this.over = data;
    },
    inputFocus(data) {
      // console.log(data, '搜索')
      // 一企一档
      if (this.$route.name === "主体服务") {
        axios
          .get("/monitor/main/getMainBaseDataByCon?entName=" + data)
          .then((res) => {
            const data = res.data.data;
            console.log(data, "搜索数据");
            // this.rollList = []
            for (let i = 0; i < data.length; i++) {
              // console.log(data[i], 'iiiii')
              if (data[i].type === "AA") {
                this.listData = {
                  address: data[i].OPLOC,
                  cliType: data[i].type,
                  longitude: data[i].longitude,
                  latitude: data[i].latitude,
                  coordinate: [data[i].longitude, data[i].latitude],
                  icon: require("../../assets/images/mapTabs/p1/t1/撒点.png"),
                  name: data[i].TRANAME,
                  pripId: data[i].S_EXT_SEQUENCE,
                  level: 5,
                  sousuo: true,
                };
                this.$emit("sendPripId", this.listData);
                this.mapPoint(this.listData);
              } else {
                this.listData = {
                  address: data[i].DOM,
                  cliType: data[i].ENTTYPE,
                  longitude: data[i].longitude,
                  latitude: data[i].latitude,
                  coordinate: [data[i].longitude, data[i].latitude],
                  icon: require("../../assets/images/mapTabs/p1/t1/撒点.png"),
                  name: data[i].ENTNAME,
                  pripId: data[i].PRIPID,
                  level: 5,
                  sousuo: true,
                };
                this.$emit("sendPripId", this.listData);
                this.mapPoint(this.listData);
              }
              // console.log(this.rollList, '搜索data')
            }
          });
      } else if (this.$route.name === "远程监控") {
        Bus.$emit("message", data);
        this.mapPoint(data);
      }
      // 第三层点击获取视频
      // this.$emit('pointClick', list)
    },
    // 统一地图打点方法
    mapPoint(data) {
      // 清除所有图层包括网格
      this.map.clearMap();
      // 重画网格
      this.SearchDistrict(this.adcode[0], 0);
      var list = [];
      list.push(data);
      this.addMassMarks(list);
      this.map.setZoomAndCenter(16, [data.longitude, data.latitude]);
    },
    loadAMap(callback) {
      if (!window.AMap) {
        /// / console.log('地图未加载')
        this.$AMapBus.$on("onAMapLoad", () => {
          /// / console.log('地图加载完毕')
          callback();
        });
      } else {
        /// / console.log('地图已加载')
        callback();
      }
    },
    initMap() {
      // console.log('初始化地图')
      this.map = new window.AMap.Map("container" + this.idKey, {
        resizeEnable: true,
        rotateEnable: true,
        pitchEnable: true,
        zoom: this.zoom,
        draggable: true,
        zoomEnable: true,
        viewMode: "3D",
        // 滚轮开关
        scrollWheel: true,
        autoRotation: true,
        center: this.center,
        mapStyle: "amap://styles/grey",
        // mapStyle: 'amap://styles/7ac2f867a34cdfd376071d2c69b126bd'
      });
      const self = this;
      // this.map.on('zoomend', this.zoomListener)
      // this.map.on('click', this.clickListener)
      window.AMap.plugin(
        [
          "AMap.DistrictLayer",
          "AMap.DistrictSearch",
          "AMap.MarkerClusterer",
          "AMap.ToolBar",
        ],
        function () {
          // 异步加载插件
          const toolbar = new window.AMap.ToolBar({
            position: "RB",
            offset: new AMap.Pixel(30, 10),
          });
          toolbar.on("zoomchanged", self.zoomchanged);
          self.map.addControl(toolbar);
          // self.SearchDistrict(self.adcode[0], self.depth)
        }
      );
    },
    zoomchanged(zoomObject) {
      const zoom = this.map.getZoom();
      if (
        zoomObject.type === "zoomout" &&
        zoom <= this.zoom + 1 &&
        this.proDepth > 0
      ) {
        if (zoom === this.zoom + 1) {
          // console.log(this.tempData)
          this.clickAction(this.tempData, this.tempData.coordinate);
        } else {
          this.SearchDistrict(this.adcode[0], 0);
          this.map.setZoomAndCenter(this.zoom, this.center);
          this.removeMassMarks(); // 删除点
          this.$emit("pointClick", {
            mainClass: "AA",
            level: "1",
            ad_code: this.adcode,
          });
        }
      }
    },
    // zoomListener () {
    //  // console.log(arguments)
    // },
    clickHandler(e) {
      if (this.$route.name === '综合监管') {
        this.mouseoutClick(e)
        this.Hmarkers = new AMap.Marker({content: ' ', map: this.map});
      }
      let data = {};
      let center = [];
      if (e.data) {
        data = e.data;
        center = data.coordinate;
      } else {
        data = e.target.getExtData();
        center = [e.lnglat.lng, e.lnglat.lat];
      }
      // this.tempData = adcode
      // console.log(data)
      this.clickAction(data, center);
    },
    // 地图画网格必备
    clickAction(data, center) {
      console.log(data, center, "ddd");
      if (this.$route.name === "远程监控") {
        if (data.points) {
          this.action(data, center);
        }
      } else if ((this.$route.name === "主体服务") & !data.pripId) {
        this.action(data, center);
      } else if ((this.$route.name === "稽查办案") & (Number(data.level) < 4)) {
        this.action(data, center);
      } else if (Number(data.level) < 4) {
        this.action(data, center);
      }
      // 判断是不是第三层打点
      // if (!this.leafNodePoint || data.leafNodePoint) {
      //   this.action()
      // }
      this.$emit("pointClick", data);
    },
    action(data, center) {
      if (data.level === "2") {
        this.tempData = data;
      }
      this.proDepth++;
      // console.log(data, data.name, this.proDepth)
      let zoom = 0;
      if (data.level) {
        zoom = data.level * 1 + this.zoom - 1;
      } else {
        zoom = this.map.getZoom() + 1;
      }
      console.log(this.adcode[0], 0, "节点~~");
      this.SearchDistrict(data.ad_code, this.proDepth);
      this.map.setZoomAndCenter(zoom, center);
      this.removeMassMarks();
    },
    contentMaker (data) {
      /// / console.log(data, '地图打点')
      if (data.baseCount) {
        if (data.typeIndex === 0) {
          const count = data.baseCount ? '<div style="width: 100%;text-align: center">' + data.baseCount + '</div>' : ''
          return '<div style="width: 70px; position: relative;"><span style="position: absolute;top:0px;display:inline-block;width:60px;text-align:center;color:#000000;height:34px;line-height:26px;font-size:18px;">' + count + '</span><img style="width: 100%" alt="" src="' + data.icon + '"/>' + '</div>'
        } else {
          const count = data.baseCount ? '<div style="width: 100%;text-align: center">' + data.baseCount + '</div>' : ''
          return '<div style="width: 40px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
        }
      } else {
        if (data.typeIndex === 0) {
          const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
          return '<div style="width: 70px; position: relative;"><span style="position: absolute;top:0px;display:inline-block;width:60px;text-align:center;color:#000000;height:34px;line-height:26px;font-size:18px;">' + count + '</span><img style="width: 100%" alt="" src="' + data.icon + '"/>' + '</div>'
        } else {
          const count = data.points && data.points.length > 0 ? '<div style="width: 100%;text-align: center">' + data.points.length + '</div>' : ''
          return '<div style="width: 40px"><img style="width: 100%" alt="" src="' + data.icon + '"/>' + count + '</div>'
        }
      }
    },
    getPointNumber(data) {},
    addMassMarks(data) {
      // 海量点
      const newArray = [];
      if (this.$route.name === "远程监控") {
        if (data[0].points) {
          for (let z = 0; z < data.length; z++) {
            if (data[z].points.length) {
              newArray.push(data[z]);
            }
          }
          this.pointMap(newArray);
        } else {
          this.pointMap(data);
        }
      } else if (this.$route.name === "主体服务") {
        this.pointMap(data);
      } else {
        this.pointMap(data);
      }
    },
    pointMap(data) {
      console.log("海量点", data);
      this.markers = [];
      this.pointNumber = 0;
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!data[i].sousuo) {
          if (item.baseCount) {
            this.pointNumber += item.baseCount;
          } else if (item.points) {
            this.pointNumber += item.points.length;
          } else {
            // console.log('最后一级')
            this.pointNumber = data.length;
          }
        }
        if (item.ad_code !== '') {
          if (this.$route.name !== '综合监管') {
            const marker = new window.AMap.Marker({
              content: this.contentMaker(item),
              position: item.coordinate,
              icon: item.icon,
              zIndex: 101,
              title: item.name,
              extData: item,
            });
            marker.on("click", this.clickHandler);
            this.markers.push(marker);
          } else {
            console.log(item, 'iiikkktt')
            const marker = new window.AMap.Marker({
              content: this.contentMaker(item),
              position: item.coordinate,
              // icon: item.icon,
              zIndex: 101,
              // title: item.name,
              extData: item,
            });
            // const marker = new AMap.Marker({
            //     icon: item.icon,
            //     position: item.coordinate,
            //     zIndex: 101,
            //   extData: item
            // });
            this.Hmarkers = new AMap.Marker({content: ' ', map: this.map});
            marker.on("mouseover", this.mouseoverClick);
            marker.on("mouseout", this.mouseoutClick);
            marker.on("click", this.clickHandler);
            this.markers.push(marker);
          }
        }
      }
      if (this.leafNodePoint) {
        // 判断是否是最后的叶子节点，即主体
        // this.cluster = new window.AMap.MarkerClusterer(this.map, this.markers, {
        //   gridSize: 300
        // })
        const style = [
          {
            // url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            url: data[0].icon
              ? data[0].icon
              : "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            anchor: new AMap.Pixel(0, 0),
            size: data[0].icon ? new AMap.Size(36, 36) : new AMap.Size(36, 20),
          },
        ];
        const points = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].coordinate[0]!== undefined & data[i].coordinate[0]!=='0E-7') {
            const marker = data[i];
            marker.lnglat = marker.coordinate;
            points.push(marker);
          }
        }
        // this.pointNumber = points.length
        if (points.length > 0) {
          this.mass = new window.AMap.MassMarks(points, {
            opacity: 0.8,
            zIndex: 111,
            cursor: "pointer",
            style: style,
          });
          this.Hmarkers = new AMap.Marker({content: ' ', map: this.map});
          this.mass.on("mouseover", this.mouseoverClick);
          this.mass.on("mouseout", this.mouseoutClick);
          this.mass.on("click", this.clickHandler);
          console.log(7, this.mass)
          this.mass.setMap(this.map);
        }
      } else {
        this.map.add(this.markers);
      }
    },
    mouseoverClick(e) {
      this.Hmarkers = new AMap.Marker({content: ' ', map: this.map});
      if (e.data) {
        this.Hmarkers.setPosition(e.data.coordinate);
        this.Hmarkers.setLabel({content: this.createBox(e.data)})
      } else if (e.target.w.extData) {
        const point = e.target.w.extData
        let num1, num2
        if (point.level < 3) {
          num1 = 0.4
          num2 = 0.1
        } else {
          num1 = 0.2
          num2 = 0
        }
        this.$get("/monitor/baseDistrict/countThreeLevelGridNum?pkidP=" + point.pkidP)
          .then((res2) => {
            point.yj = res2.data.yj
            point.ej = res2.data.ej
            point.sj = res2.data.sj
            console.log(num1, num2)
            const zb = [String(Number(point.coordinate[0]) + num1), String(Number(point.coordinate[1])- num2)]
            this.Hmarkers.setPosition(zb);
            this.Hmarkers.setLabel({content: this.createBox(point), zIndex: 99999})
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    createBox (e) {
      console.log(e)
      const img1 = require('./img/矩形.png')
      if (this.$route.name === '综合监管' & e.level <= 3) {
        const data = '<div style="background-image:url('+ img1 +'); background-size: 100% 100%; background-repeat:no-repeat; width:140px; z-index: 99999999">' + 
        `<span style='width:60%;text-align: right;font-size: 15px;display: inline-block;line-height: 30px;'>县级网格:</span><span style='width:40%;text-align: left;font-size: 15px;display: inline-block;line-height: 30px;'>${e.yj}</span><br/>`+
        `<span style='width:60%;text-align: right;font-size: 15px;display: inline-block;line-height: 30px;'>乡镇级网格:</span><span style='width:40%;text-align: left;font-size: 15px;display: inline-block;line-height: 30px;'>${e.ej}</span><br/>`+
        `<span style='width:60%;text-align: right;font-size: 15px;display: inline-block;line-height: 30px;'>村级网格:</span><span style='width:40%;text-align: left;font-size: 15px;display: inline-block;line-height: 30px;'>${e.sj}</span></div>`
        return data
      } else {
        return `<div style="background: black; width: 110%; line-height: 35px; font-size: 15px; padding: 0 5%;">${e.name}</div>`
      }
    },
    mouseoutClick(e) {
      if (e.data) {
        this.Hmarkers.setPosition(e.data.coordinate);
        this.Hmarkers.setLabel({content: ''})
      } else if (e.target.w.extData) {
        const point = e.target.w.extData
        const zb = [String(Number(point.coordinate[0]) + 0.4), String(Number(point.coordinate[1])-0.1)]
        this.Hmarkers.setPosition(zb);
        this.Hmarkers.setLabel({content: ''})
      }
    },
    removeMassMarks() {
      try {
        this.cluster.setMap(null);
      } catch (e) {}
      try {
        this.mass.clear();
      } catch (e) {}
      try {
        this.map.remove(this.markers);
      } catch (e) {}
    },
    makePolygon(path, data) {
      const polygon = new window.AMap.Polygon({
        path: path,
        strokeColor: "#fff",
        strokeWeight: 1,
        strokeOpacity: 0.2,
        fillOpacity: 0.3,
        fillColor: this.getColorByAdcode(data.adcode),
        zIndex: 50,
        extData: data,
      });
      return polygon;
    },
    geoFeaturesToOverlayGroup(features, depth) {
      const polygons = [];
      for (let k = 0; k < features.length; k++) {
        for (let i = 0; i < features[k].geometry.coordinates.length; i++) {
          const geometry = features[k].geometry;
          const data = {
            name: features[k].properties.name,
            adcode: features[k].properties.code,
            depth: depth,
          };
          if (geometry.type === "MultiPolygon") {
            for (let j = 0; j < geometry.coordinates[i].length; j++) {
              const path = features[k].geometry.coordinates[i][j];
              polygons.push(this.makePolygon(path, data));
            }
          } else if (geometry.type === "Polygon") {
            const path = features[k].geometry.coordinates[i];
            polygons.push(this.makePolygon(path, data));
          }
        }
      }
      this.removeDisProvinceLayer();
      this.disProvinceLayer = new window.AMap.OverlayGroup(polygons);
      this.map.add(this.disProvinceLayer);
    },
    SearchDistrict(adcode, depth) {
      // pCode为指定父节点搜索方式
      this.proDepth = depth;
      // 搜索所有省/直辖市信息
      this.$geoLoader(adcode)
        .then((result) => {
          this.geoFeaturesToOverlayGroup(result.features, depth);
        })
        .catch((e) => {
          // catch里面执行子元素查询
          this.$geoLoader(this.tempData.ad_code).then((result) => {
            const features = result.features.filter((value) => {
              return value.properties.code === adcode;
            });
            this.geoFeaturesToOverlayGroup(features, depth);
          });
        });
    },
    removeDisProvinceLayer() {
      // console.log('removeDisProvinceLayer')
      try {
        this.map.remove(this.disProvinceLayer);
      } catch (e) {
        // console.log(e)
      }
    },
    getColorByAdcode(adcode) {
      if (!this.colors[adcode]) {
        this.colors[adcode] = Mock.mock("@color");
      }
      return this.colors[adcode];
    },
    getSelect(list) {
      // 清除所有图层包括网格
      // console.log(list.items[0], this.map)
      if (this.map.CLASS_NAME) {
        // this.map.clearMap()
        // 重画网格
        // this.SearchDistrict(this.adcode[0], 0)
        this.map.setZoomAndCenter(this.zoom, this.center);
      }
      // 发送地图下方的选择器事件
      this.$emit("getSelect", list);
    },
  },
  beforeDestroy() {
    try {
      this.mass.clear();
    } catch (e) {}
    this.map.destroy();
  },
};
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
.amap-markers .amap-marker-label {
  background: none!important;
  border: none!important;
}
</style>
