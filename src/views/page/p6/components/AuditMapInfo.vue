<template>
    <div class="AuditMapInfo full">
        <radio-simple :data="radio" v-model="select" style="height: 60px"/>
        <roll-table :tableData="table[0]"
        :dimension="dimensions[select.value]" class="full-width" v-show="select.value === 0"/>
        <roll-table :tableData="table[1]" :dimension="dimensions[select.value]" class="full-width" v-show="select.value === 1"/>
        <div class="full-width table" v-if="data.name" style="text-align: center">
            <div v-for="(item,index) in info" :key="index">
                <div>{{item.name}}</div>
                <div>{{item.value}}</div>
            </div>
            <img src="./img/qrcode.png" style="height: 130px">
        </div>
    </div>
</template>

<script>
// import Mock from 'mockjs'
import axios from 'axios'

export default {
  name: 'AuditMapInfo',
  data () {
    return {
      radio: [{
        name: '处理中案件 552 件',
        value: 0
      }
      // , {
      //   name: '处理中线索 142 件',
      //   value: 1
      // }
      ],
      select: {},
      dimensions: [[
        {
          name: '立案时间',
          value: 'time'
        },
        {
          name: '案件名称',
          value: 'name'
        },
        {
          name: '状态',
          value: 'status'
        }
      ], [
        {
          name: '登记时间',
          value: 'time'
        },
        {
          name: '线索名称',
          value: 'name'
        },
        {
          name: '状态',
          value: 'status'
        }
      ]],
      table: [],
      info: [{
        name: '案件名称',
        value: '好施实业有限公司利用互联网发布违法广告案'
      }, {
        name: '案忤编号',
        value: '监管闵立案字 (2019] 第122019010585号'
      }, {
        name: '立案时间',
        value: '2019-01-07'
      }, {
        name: '案件类型',
        value: '广告'
      }, {
        name: '案发地',
        value: '金都路1128号3幢3536室'
      }, {
        name: '当事人',
        value: '上海好施实业有限公司'
      }, {
        name: '办案人员',
        value: '金新华,姚姚'
      }]
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    const arr1 = []
    const arr2 = []
    // 案件
    axios.get('/monitor/check/getCasesProcessData').then(res => {
      const data = res.data.data
      // console.log(data, '案件')
      this.radio[0].name = '处理中案件' + data[0].caseSum + '件'
      for (let i = 0; i < data.length; i++) {
        arr1.push({
          status: data[i].caseStaus,
          name: data[i].caseName,
          time: data[i].caseTime
        })
      }
    })
    // 线索
    axios.get('/monitor/check/getCluesProcessData').then(res => {
      const data = res.data.data
      // console.log(data, '线索')
      this.radio[1].name = '处理中线索' + data.length + '件'
      for (let i = 0; i < data.length; i++) {
        arr2.push({
          status: data[i].clueStaus,
          name: data[i].clueName,
          time: data[i].clueTime
        })
      }
    })
    // for (let i = 0; i < 20; i++) {
    //   arr1.push({
    //     status: '调查取证',
    //     name: '河北' + Mock.mock('@cword(3,6)') + '有限责任公1司',
    //     time: '2020-02-02 23:00:00'
    //   })
    //   arr2.push({
    //     status: '线索核查',
    //     name: '河北' + Mock.mock('@cword(3,6)') + '有限责任公2司',
    //     time: '2020-02-02 23:00:00'
    //   })
    // }
    this.table = [arr1, arr2]
  }
}
</script>

<style scoped lang="less">
.AuditMapInfo {
    .table {
        display: block;
        overflow: hidden;
        margin-bottom: 5px;
        margin-top: 20px;
        padding: 20px;
        background-color: rgba(17, 17, 23, .7);

        > div {
            width: 100%;
            font-size: 16px;
            display: block;
            overflow: hidden;

            > div {
                float: left;
                display: block;
                overflow: hidden;
                margin-bottom: 5px;

                &:nth-child(1) {
                    color: #1e8db0;
                    width: 8rem;
                    /*
                    text-align: right;*/
                    text-align: justify;
                    text-align-last: justify;

                    &:after {
                        content: "";
                        display: inline;
                        width: 100%;
                    }
                }

                &:nth-child(2) {
                    text-align: left;
                    padding-left: 2rem;
                    width: calc(~"100% - 8rem");
                }
            }
        }
    }
}
</style>
