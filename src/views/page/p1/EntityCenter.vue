<template>
    <div class='SupervisionCenter'>
      <div class="close">
        <span @click="closeBox">×</span>
      </div>
      <div class="centerBox">
        <div class="full-width full-height">
          <oneDayTour :data='entApplyData' v-if='!totwoP' @toTwo="toTwo2"></oneDayTour>
          <oneDayDouble @toOne='toOneFun' v-else></oneDayDouble>
        </div>
        <!-- <div class="w-1-5 full-height">
          <Container class="full-width h-3-5" :title="'一日办地图'">
            <MapHebeiWithClick :data='mapList'></MapHebeiWithClick>
          </Container>
          <Container class="full-width h-2-5" :title="'数据对接监控'">
             <ChartsBarHorizontal :data="barData" :showLabel='false'  :yName="'单位：分'"
                :barBorderRadius="[20, 20, 20, 20]"
                :color="['#FE6941','#50E3C2','#FFD589','#4A90E2','#FE6941','#50E3C2','#FFD589','#4A90E2']"/>
          </Container>
        </div> -->
      </div>
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
import oneDayTour from './componets/oneDayTour'
import oneDayDouble from './componets/oneDayDouble'
import axios from 'axios'
// import MapHebeiWithClick from './componets/MapHebeiWithClick'

export default {
  name: 'SupervisionCenter',
  data () {
    return {
      totwoP: false,
      entApplyData: {
        // 企业申报总数
        entApply: '',
        applyDone: '',
        avgAppHours: '',
        gaDone: '',
        avggaHours: '',
        ssDOne: '',
        avgssHours: '',
        yhdone: '',
        avgyhHours: '',
        rsdone: '',
        avgrsHours: '',
        entDone: '',
        ssUnDOne: '',
        gaUnDone: '',
        rsUndone: '',
        gaff: '',
        swff: '',
        rsff: '',
        gafk: '',
        swfk: '',
        rsfk: ''
      },
      barData: [],
      mapList: [],
      interval: ''
    }
  },
  components: {
    oneDayTour,
    oneDayDouble
    // MapHebeiWithClick
  },
  created () {
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.mapTimeOut()
    this.interval = setInterval(() => {
      this.mapTimeOut()
    }, 300000)
    const date = new Date()
    const h = date.getFullYear()
    let m = date.getMonth() + 1
    let mm = date.getMonth() + 1
    let nowm = date.getDate() - 1
    let day = date.getDate()
    if (m < 10) {
      m = '0' + m
    }
    if (nowm === 0) {
      nowm = new Date(h, (m - 1) , 0).getDate()
      mm = mm - 1
    }
    if (mm === 0) {
      mm = '0' + mm
    }
    if (nowm < 10) {
      nowm = '0' + nowm
    }
    if (day < 10) {
      day = '0' + day
    }
    const other = `${h}-${mm}-${nowm} 00:00:00`
    const now = `${h}-${m}-${day} 00:00:00`
    // 税收已处理
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=ssUnDOne').then(res => {
      // console.log(res.data, '税收已处理')
      this.entApplyData.ssUnDOne = res.data.data.indexValue
    })
    // 公安已处理
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=gaUnDone').then(res => {
      // console.log(res.data, '公安已处理')
      this.entApplyData.gaUnDone = res.data.data.indexValue
    })
    // 人社已处理
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=rsUndone').then(res => {
      // console.log(res.data, '人社已处理')
      this.entApplyData.rsUndone = res.data.data.indexValue
    })
    // 企业申办总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=entApply').then(res => {
      // //  console.log(res.data.data, '企业申办总数')
      this.entApplyData.entApply = res.data.data.indexValue
    })
    // 市场监管成功总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=applyDone').then(res => {
      // //  console.log(res.data.data, '市场监管成功总数')
      this.entApplyData.applyDone = res.data.data.indexValue
    })
    // 市场监管平均时长
    axios.get('/monitor/info/detail?dataTime=' + other + '&indexCode=avgAppHours').then(res => {
      // //  console.log(res.data.data, '市场监管平均时长')
      this.entApplyData.avgAppHours = res.data.data.indexValue
    })
    // 公安办理总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=gaDone').then(res => {
      // //  console.log(res.data.data, '公安办理总数')
      this.entApplyData.gaDone = res.data.data.indexValue
    })
    // 公安办理时长
    axios.get('/monitor/info/detail?dataTime=' + other + '&indexCode=avggaHours').then(res => {
      // //  console.log(res.data.data, '公安办理时长')
      this.entApplyData.avggaHours = res.data.data.indexValue
    })
    // 税收办理总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=ssDOne').then(res => {
      // //  console.log(res.data.data, '税收办理总数')
      this.entApplyData.ssDOne = res.data.data.indexValue
    })
    // 税收办理时长
    axios.get('/monitor/info/detail?' + other + '&indexCode=avgssHours').then(res => {
      // //  console.log(res.data.data, '税收办理时长')
      this.entApplyData.avgssHours = res.data.data.indexValue
    })
    // 银行办理总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=yhdone').then(res => {
      // //  console.log(res.data.data, '银行办理总数')
      this.entApplyData.yhdone = res.data.data.indexValue
    })
    // 银行办理时长
    axios.get('/monitor/info/detail?dataTime=' + other + '&indexCode=avgyhHours').then(res => {
      // //  console.log(res.data.data, '银行办理时长')
      this.entApplyData.avgyhHours = res.data.data.indexValue
    })
    // 人社办理总数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=rsdone').then(res => {
      // //  console.log(res.data.data, '人社办理总数')
      this.entApplyData.rsdone = res.data.data.indexValue
    })
    // 人社办理时长
    axios.get('/monitor/info/detail?dataTime=' + other + '&indexCode=avgrsHours').then(res => {
      // //  console.log(res.data.data, '人社办理时长')
      this.entApplyData.avgrsHours = res.data.data.indexValue
    })
    // 分发给公安
    axios.get('/monitor/info/detail?indexCode=GAFF&dataTime=' + now).then(res => {
      this.entApplyData.gaff = res.data.data.indexValue
    })
    // 分发给税务
    axios.get('/monitor/info/detail?indexCode=SWFF&dataTime=' + now).then(res => {
      this.entApplyData.swff = res.data.data.indexValue
    })
    // 分发给人社
    axios.get('/monitor/info/detail?indexCode=RSFF&dataTime=' + now).then(res => {
      this.entApplyData.rsff = res.data.data.indexValue
    })
    // 反馈公安
    axios.get('/monitor/info/detail?indexCode=GAFK&dataTime=' + now).then(res => {
      this.entApplyData.rsfk = res.data.data.indexValue
    })
    // 税务反馈
    axios.get('/monitor/info/detail?indexCode=SWFK&dataTime=' + now).then(res => {
      this.entApplyData.swfk = res.data.data.indexValue
    })
    // 人社反馈
    axios.get('/monitor/info/detail?indexCode=RSFK&dataTime=' + now).then(res => {
      this.entApplyData.gafk = res.data.data.indexValue
    })
    // 开办成功数
    axios.get('/monitor/info/detail?dataTime=' + now + '&indexCode=entDone').then(res => {
      // this.entApplyData.applyDone = res.data.data.indexValue
      this.entApplyData.entDone = res.data.data.indexValue
    })
    // 数据对接监控柱状图
    axios.get('/monitor/info/apply/zzData?indexCodes=GAFF,RSFF,SWFF,GAFK,SWFK,RSFK').then(res => {
      console.log(res.data.data.data, '数据对接监控柱状图')
      const data = res.data.data.data
      this.barData = []
      for (let i = 0; i < data.length; i++) {
        this.barData.push({
          name: data[i].indexName,
          value: data[i].indexValue
        })
      }
    })
  },
  methods: {
    toTwo2 (data) {
      if (data[0].data.name === '开办成功') {
        this.totwoP = true
      }
    },
    toOneFun (data) {
      console.log(data)
      this.totwoP = data
    },
    closeBox () {
      Bus.$emit('getTarget', false)
    },
    mapTimeOut () {
      const date = new Date()
      const n = date.getFullYear()
      let m = date.getMonth() + 1
      let day = date.getDate()
      let h = date.getHours()
      let f = date.getMinutes()
      let otherF = date.getMinutes() - 5
      if (m < 10) {
        m = '0' + m
      }
      if (h < 10) {
        h = '0' + h
      }
      if (f < 10) {
        f = '0' + f
      }
      if (day < 10) {
        day = '0' + day
      }
      if (otherF < 0) {
        otherF = 60 + otherF
      } else if (otherF < 10) {
        otherF = '0' + otherF
      }
      const now = `${n}-${m}-${day} ${h}:${f}:00`
      const other = `${n}-${m}-${day} ${h}:${otherF}:00`
      //  console.log(now, other, '接口日期')
      // 一日办地图
      axios.get('/monitor/info/apply/onedayMap?beginTime=' + other + '&endTime=' + now).then(res => {
        //  console.log(res.data.data.mapList, '一日办地图')
        this.mapList = res.data.data.mapList
      })
    }
  }
}
</script>

<style scoped lang="less">
.SupervisionCenter{
    width: 100%;
    height: 97.5%;
    margin-top: 2.5%;
    // background: rgba(25,27,48,1);
      // background-image: url('./componets/img/编组 9@2x.png');
      // background-size: 100% 100%;
      // background-repeat: no-repeat;
    .close{
      width: 100%;
      height: 50px;
      padding-right: 2%;
      font-size: 40px;
      text-align: right;
      span {
        cursor: pointer;
      }
    }
    .centerBox{
      width: 100%;
      height: calc(~"100% - 50px - 4.5%");
    }
}
</style>
