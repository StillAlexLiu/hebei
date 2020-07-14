<template>
    <div class='Page4R'>
        <container class="h-1-3 w-1-2" title="特种设备安全监察力量">
            <NumberGroupPage4 class="w-1-3 full-height" :data="listData"/>
            <ContainerCenterTitle2 class="w-2-3 full-height" title="安全监察人员情况">
                <ChartsPie :double-pie="true" :data="pieData4"
                           :color="['#FFBF24','#FE6941','#55B0EE','#8A7CEF','#25DD54','#5FE7DC']" :show-value="true"/>
            </ContainerCenterTitle2>
        </container>
        <container class="h-1-3 w-1-2" title="特种设备检验检测力量">
            <!-- <ChartsScatter :dimensions="['name','value','size']" :data="scatterData" :base-size="8"
                           :unit="'个'"
                           :showX="false"
                           :colors="['#50E3C2','#FF9177','#00B1FA','#8A7CEF','#FFE17D','#00E138','#FF7B83']"/> -->
          <ChartsPie :data="pieData" :showLine="true"   :is-pie="true" :show-value="true"/>
        </container>
        <container class="h-1-3 w-1-2" title="特种设备生产和充装单位情况">
            <ChartsPiePiecewise :showValue='true' :data="pieData2" :title="'总数\n' + dataNum" :titleSize="48"/>
        </container>
        <container class="h-1-3 w-1-2" title="特种设备人员情况">
            <ChartsBarLine :data="linesData" :legend="['作业人员','检验人员','无损检测人员']"
                           :type="['line', 'line', 'line']"
                           :two-axis="false"
                           :units="['人']"
                           :colors="['#61EADF','#FF9177','#00B1FA']"
                           :dimensions="['name','value1','value2','value3']"/>
        </container>
        <container class="h-1-3 w-1-1" title="特种设备检验情况">
            <div class="w-2-10 full-height">
                <tab class="full" @active="select" :data="tabData"/>
            </div>
            <container-center-title2 class="w-3-10 full-height" title="检验对象分布">
                <ChartsPie :data="pieData3"  :is-pie="true" :show-legend="true" show-value unit="条"/>
            </container-center-title2>
            <container-center-title2 class="w-5-10 full-height" title="检验数量趋势">
                <ChartBar :data="barData" :dimensions="['name','value']"
                          :unit="'台'"/>
            </container-center-title2>
        </container>
    </div>
</template>

<script>
import NumberGroupPage4 from '../compontes/NumberGroupPage4'
import Mock from 'mockjs'
import Tab from '../compontes/Tab'
import ChartBar from '../compontes/ChartBar'
import axios from 'axios'

export default {
  name: 'Page4R',
  components: { ChartBar, Tab, NumberGroupPage4 },
  mounted () {
    this.pieData = []
    this.pieData2 = []
    this.dataNum = 0
    this.linesData = []
    this.pieData3 = []
    this.barData = []
    // 特种设备安全监察力量
    axios.get('/monitor/equpMent/getCheck').then(res => {
      const data = res.data.data[0]
      this.listData[0].value = data.fullOrganNum
      this.listData[1].value = data.partOrganNum
      this.pieData4[0].value = data.equpProvincialNum
      this.pieData4[1].value = data.equpCityNum
      this.pieData4[2].value = data.equpCountyNum
      this.pieData4[3].value = data.equpOrganNum
    })
    // 特种设备检验检测力量
    axios.get('/monitor/equpMent/getAbility').then(res => {
      const data = res.data.data
      // console.log(data, '特种设备检验检测力量11')
      this.pieData = []
      for (let i = 0; i < data.length; i++) {
        this.pieData.push({
          name: data[i].inspectionName,
          value: data[i].inspectionTypeNum
        })
      }
    })
    // // 特种设备生产和充装单位情况
    axios.get('/monitor/equpMent/getProduce').then(res => {
      const data = res.data.data[0]
      this.pieData2 = []
      this.dataNum = 0
      this.dataNum = data.bigPlayNum + data.carUseNum + data.airBottleNum + data.movePressureNum + data.pressureTunnelNum
      this.pieData2[0] = {
        name: '设计单位',
        value: data.bigPlayNum
      }
      this.pieData2[1] = {
        name: '制造单位',
        value: data.carUseNum
      }
      this.pieData2[2] = {
        name: '维保单位',
        value: data.airBottleNum
      }
      this.pieData2[3] = {
        name: '安装维修改造',
        value: data.movePressureNum
      }
      this.pieData2[4] = {
        name: '气瓶充装',
        value: data.pressureTunnelNum
      }
    })
    // 特种设备人员情况
    axios.get('/monitor/equpMent/getWorks').then(res => {
      const data = res.data.data
      this.linesData = []
      for (let i = 0; i < data.length; i++) {
        this.linesData.push({
          name: data[i].certificateDate,
          value1: data[i].gzryNum,
          value2: data[i].jyryNum,
          value3: data[i].wsjcNum
        })
      }
    })
    // 特种设备检查情况
    axios.get('/monitor/equpMent/getProblem?checkType=' + 1).then(res => {
      const data = res.data.data
      // console.log(data, '检验对象分布')
      this.pieData3 = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].typeNum) {
          this.pieData3.push({
            name: data[i].typeName,
            value: data[i].typeNum
          })
        }
      }
    //   this.pieData3 = [{
    //     name: '锅炉',
    //     value: data. otherNum
    //   }, {
    //     name: '压力容器',
    //     value: data.exFactoryNum
    //   }, {
    //     name: '机电',
    //     value: data.weldNum
    //   }, {
    //     name: '压力管道',
    //     value: data.materialNum
    //   }]
    })
    // 检验数量趋势
    axios.get('/monitor/equpMent/getNumber?checkType=' + 1).then(res => {
      const data = res.data.data
      this.barData = []
      for (let i = 0; i < data.length; i++) {
        this.barData.push({
          name: data[i].checkDate,
          value: data[i].checkNum
        })
      }
    })
  },
  methods: {
    select (data) {
      // 特种设备检查情况
      axios.get('/monitor/equpMent/getProblem?checkType=' + data).then(res => {
        const data = res.data.data
        this.pieData3 = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].typeNum) {
            this.pieData3.push({
              name: data[i].typeName,
              value: data[i].typeNum
            })
          }
        }
        // this.pieData3 = [{
        //   name: '锅炉',
        //   value: data. otherNum
        // }, {
        //   name: '压力容器',
        //   value: data.exFactoryNum
        // }, {
        //   name: '机电',
        //   value: data.weldNum
        // }, {
        //   name: '压力管道',
        //   value: data.materialNum
        // }]
      })
      // 检验数量趋势
      axios.get('/monitor/equpMent/getNumber?checkType=' + data).then(res => {
        const data = res.data.data
        this.barData = []
        for (let i = 0; i < data.length; i++) {
          this.barData.push({
            name: data[i].checkDate,
            value: data[i].checkNum
          })
        }
      })
    }
  },
  data () {
    return {
      dataNum: 0,
      tabData: [
        {
          name: '定期检验',
          value: '1'
        },
        {
          name: '监督检验',
          value: '2'
        }],
      listData: [{
        name: '专职监察机构/个',
        value: '0'
      }, {
        name: '兼职监察机构/个',
        value: '0'
      }],
      pieData4: [
        {
          name: '国家级',
          value: 0
        }, {
          name: '省级',
          value: 0
        }, {
          name: '地市级',
          value: 0
        }, {
          name: '区县级',
          value: 0
        }
      ],
      pieData: [
        {
          name: '综合检验机构',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '型式试验机构',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '无损检验机构',
          value: Mock.Random.natural(500, 1300)
        }, {
          name: '气瓶检验机构',
          value: Mock.Random.natural(500, 1300)
        }
      ],
      pieCenterData: [{
        name: 'A类',
        value: Mock.Random.natural(10, 200)
      }, {
        name: 'B类',
        value: Mock.Random.natural(10, 200)
      }],
      scatterData: [{
        name: '起重机械检验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '无损检测机',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '综合机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '设计文件鉴定机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '安全阀校验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '能效测试机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }, {
        name: '气瓶检验机构',
        value: Mock.Random.natural(10, 200),
        size: Mock.Random.natural(10, 200)
      }],
      pieData2: [{
        name: '锅炉',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力容器',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力管道',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '电梯',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '起重机械',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '安全附件',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '压力管道元件制造单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '移动式压力容器',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '气瓶充装单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '车用气瓶安装单位',
        value: Mock.Random.natural(10, 200)
      }, {
        name: '大型游乐设施安装改造单位',
        value: Mock.Random.natural(10, 200)
      }],
      linesData: [{
        name: '2019-12',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value1: Mock.Random.natural(10000, 50000),
        value2: Mock.Random.natural(10000, 50000),
        value3: Mock.Random.natural(10000, 50000)
      }],
      pieData3: [{
        name: '焊接方面',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '材料方面',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '出厂资料',
        value: Mock.Random.natural(10, 100)
      }, {
        name: '其他',
        value: Mock.Random.natural(10, 100)
      }],
      barData: [{
        name: '2019-12',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-01',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-02',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-03',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-04',
        value: Mock.Random.natural(10000, 50000)
      }, {
        name: '2020-05',
        value: Mock.Random.natural(10000, 50000)
      }]
    }
  }
}
</script>

<style scoped lang="less">
.Page4R {
}
</style>
