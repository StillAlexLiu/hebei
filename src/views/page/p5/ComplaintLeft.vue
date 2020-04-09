<template>
    <container-calc type='tb' :number='53' class='ComplaintLeft full  page-style'>
        <template slot='fix'>
            <RadioSimple :data='radioData' v-model='select' class='w-3-7 full-height radio '/>
        </template>
        <div slot='calc' class=' full' v-if='select.value'>
            <div title='投诉举报趋势分析' class='h-2-8'>
                <container title='投诉举报趋势分析' class='full-height w-1-3'>
                    <div class='complaints_box'>
                        <div class='event_cont'>
                            <p>事件总数(件)</p>
                            <span class='event_total'>{{eventTotal[select.value].value}}</span>
                        </div>
                        <div class='event_cont'>
                            <p>同比</p>
                            <span style='color:#F76B1C'>{{eventTotal[select.value].currentRatio}}%</span>
                            <img class='img' v-bind:src='eventTotal[select.value].eventImg' alt/>
                        </div>
                        <div class='event_cont'>
                            <p>环比</p>
                            <span style='color:#F76B1C'>{{eventTotal[select.value].relativeRatio}}%</span>
                            <img class='img' v-bind:src='eventTotal[select.value].eventImg' alt/>
                        </div>
                    </div>
                </container>
                <div class='full-height w-2-3'>
                    <complaintLine :xdata='chart5[select.value].xdata'
                                   :ydata='chart5[select.value].ydata'></complaintLine>
                </div>
            </div>
            <div class='h-3-8'>
                <container class='w-1-2 full-height' title='各市场所投诉举报分布'>
                    <complaintBar :xdata='chart6[select.value].xdata'
                                  :ydata='chart6[select.value].ydata'></complaintBar>
                </container>
                <container class='w-1-2 full-height' title='投诉举报来源分析'>
                    <complaintPie :data='chart7[select.value]'></complaintPie>
                </container>
            </div>
            <div class='h-3-8'>
                <container class='w-1-2 full-height' title='七类集中场所数据分布'>
                    <complaintCircle :data='chart8[select.value]'></complaintCircle>
                </container>
                <container class='w-1-2 full-height' title='商业综合体投诉举报top10'>
                    <div class='complain_spread'>
                        <table class='discharge_table'>
                            <thead>
                            <tr style='background:#12475E;'>
                                <th v-for='(item,index) in tableList' :key='index'>{{item.value}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class='tableTr' v-for='(item,index) in numList[select.value].list' :key='index'>
                                <td>{{index+1}}</td>
                                <td>{{item.place_name}}</td>
                                <td>{{item.complaint_num}}</td>
                                <td>{{item.report_num}}</td>
                                <td>{{item.total}}</td>
                                <td>{{item.career_counterfeit}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </container>
            </div>
        </div>
    </container-calc>
</template>

<script>
import complaintLine from './compontes/complaintLine'
import complaintBar from './compontes/complaintBar'
import complaintPie from './compontes/complaintPie'
import complaintCircle from './compontes/complaintCircle'

export default {
  name: 'ComplaintLeft',
  components: {
    complaintLine,
    complaintBar,
    complaintPie,
    complaintCircle
  },
  data () {
    return {
      radioData: [
        {
          name: '本年',
          value: '0'
        },
        {
          name: '本月',
          value: '1'
        },
        {
          name: '本周',
          value: '2'
        }
      ],
      eventTotal: [
        {
          value: '54010',
          currentRatio: '24',
          relativeRatio: '35',
          eventImg: require('./compontes/img/icon_mhzhjg_icon_market_fenleitongji_shangzhang@2x.png')
        },
        {
          value: '22310',
          currentRatio: '15',
          relativeRatio: '10',
          eventImg: require('./compontes/img/icon_mhzhjg_icon_market_fenleitongji_shangzhang@2x.png')
        },
        {
          value: '4010',
          currentRatio: '2',
          relativeRatio: '5',
          eventImg: require('./compontes/img/icon_mhzhjg_icon_market_fenleitongji_shangzhang@2x.png')
        }
      ],
      chart5: [
        {
          xdata: [
            '2019-02',
            '2019-03',
            '2019-04',
            '2019-05',
            '2019-06',
            '2019-07',
            '2019-08',
            '2019-09',
            '2019-10',
            '2019-11',
            '2019-12',
            '2020-01'
          ],
          ydata: [
            '9310',
            '3579',
            '5498',
            '4586',
            '4488',
            '3752',
            '3782',
            '3311',
            '3545',
            '3986',
            '3943',
            '4230'
          ]
        },
        {
          xdata: [
            '2019-02',
            '2019-03',
            '2019-04',
            '2019-05',
            '2019-06',
            '2019-07',
            '2019-08',
            '2019-09',
            '2019-10',
            '2019-11',
            '2019-12',
            '2020-01'
          ],
          ydata: [
            '2310',
            '3279',
            '5398',
            '1586',
            '2488',
            '4752',
            '3722',
            '3211',
            '1545',
            '2986',
            '3943',
            '3230'
          ]
        },
        {
          xdata: [
            '2019-02',
            '2019-03',
            '2019-04',
            '2019-05',
            '2019-06',
            '2019-07',
            '2019-08',
            '2019-09',
            '2019-10',
            '2019-11',
            '2019-12',
            '2020-01'
          ],
          ydata: [
            '3310',
            '1279',
            '2398',
            '1786',
            '2458',
            '4252',
            '7722',
            '2211',
            '5545',
            '4986',
            '2943',
            '6230'
          ]
        }
      ],
      chart6: [
        {
          xdata: [
            '石家庄市',
            '唐山市',
            '秦皇岛市',
            '邯郸市',
            '邢台市',
            '保定市',
            '张家口市',
            '承德市',
            '沧州市',
            '廊坊市',
            '衡水市'
          ],
          ydata: [
            '6',
            '6',
            '9',
            '10',
            '0',
            '14',
            '6',
            '8',
            '16',
            '6',
            '3',
            '5',
            '7',
            '2'
          ]
        },
        {
          xdata: [
            '石家庄市',
            '唐山市',
            '秦皇岛市',
            '邯郸市',
            '邢台市',
            '保定市',
            '张家口市',
            '承德市',
            '沧州市',
            '廊坊市',
            '衡水市'
          ],
          ydata: [
            '26',
            '7',
            '19',
            '10',
            '5',
            '4',
            '3',
            '8',
            '6',
            '6',
            '2',
            '6',
            '7',
            '1'
          ]
        },
        {
          xdata: [
            '石家庄市',
            '唐山市',
            '秦皇岛市',
            '邯郸市',
            '邢台市',
            '保定市',
            '张家口市',
            '承德市',
            '沧州市',
            '廊坊市',
            '衡水市'
          ],
          ydata: [
            '6',
            '6',
            '9',
            '0',
            '7',
            '14',
            '6',
            '8',
            '6',
            '6',
            '13',
            '5',
            '17',
            '7'
          ]
        }
      ],
      chart7: [
        [
          {
            name: '网络举报',
            value: '6332',
            percent: ''
          },
          {
            name: '药安食美平台',
            value: '1602',
            percent: ''
          },
          {
            name: '12315消费热线',
            value: '19557',
            percent: ''
          },
          {
            name: '96365质量热线',
            value: '1123',
            percent: ''
          }
        ],
        [
          {
            name: '网络举报',
            value: '1583',
            percent: ''
          },
          {
            name: '药安食美平台',
            value: '2602',
            percent: ''
          },
          {
            name: '12315消费热线',
            value: '15557',
            percent: ''
          },
          {
            name: '96365质量热线',
            value: '1023',
            percent: ''
          }
        ],
        [
          {
            name: '网络举报',
            value: '1583',
            percent: ''
          },
          {
            name: '药安食美平台',
            value: '2602',
            percent: ''
          },
          {
            name: '12315消费热线',
            value: '15557',
            percent: ''
          },
          {
            name: '96365质量热线',
            value: '3123',
            percent: ''
          }
        ]
      ],
      chart8: [
        [
          {
            name: '产业园区',
            value: 11
          },
          {
            name: '交易市场',
            value: 6
          },
          {
            name: '其它形式',
            value: 2
          },
          {
            name: '商务楼宇',
            value: 15
          },
          {
            name: '商业综合体',
            value: 21
          },
          {
            name: '网络平台',
            value: 7
          },
          {
            name: '镇（街道）招商平台',
            value: 8
          }
        ],
        [
          {
            name: '产业园区',
            value: 15
          },
          {
            name: '交易市场',
            value: 27
          },
          {
            name: '其它形式',
            value: 12
          },
          {
            name: '商务楼宇',
            value: 1
          },
          {
            name: '商业综合体',
            value: 23
          },
          {
            name: '网络平台',
            value: 11
          },
          {
            name: '镇（街道）招商平台',
            value: 15
          }
        ],
        [
          {
            name: '产业园区',
            value: 13
          },
          {
            name: '交易市场',
            value: 7
          },
          {
            name: '其它形式',
            value: 10
          },
          {
            name: '商务楼宇',
            value: 11
          },
          {
            name: '商业综合体',
            value: 23
          },
          {
            name: '网络平台',
            value: 6
          },
          {
            name: '镇（街道）招商平台',
            value: 5
          }
        ]
      ],
      tableList: [
        {
          value: '序号'
        },
        {
          value: '场所名称'
        },
        {
          value: '投诉'
        },
        {
          value: '举报'
        },
        {
          value: '合计'
        },
        {
          value: '职业打假'
        }
      ],
      numList: [
        {
          list: [
            {
              place_name: ' 电商物流港',
              place_property: '商业综合体',
              total: 72,
              career_counterfeit: 72,
              complaint_num: 48,
              report_num: 24
            },
            {
              place_name: ' 天地（商场）',
              place_property: '商业综合体',
              total: 53,
              career_counterfeit: 3,
              complaint_num: 38,
              report_num: 15
            },
            {
              place_name: '龙湖天街（商场）',
              place_property: '商业综合体',
              total: 51,
              career_counterfeit: 1,
              complaint_num: 39,
              report_num: 12
            },
            {
              place_name: '颛桥万达颛兴东路店',
              place_property: '商业综合体',
              total: 51,
              career_counterfeit: 0,
              complaint_num: 40,
              report_num: 11
            },
            {
              place_name: '莲花国际广场',
              place_property: '商业综合体',
              total: 46,
              career_counterfeit: 1,
              complaint_num: 40,
              report_num: 6
            },
            {
              place_name: '爱琴海',
              place_property: '商业综合体',
              total: 43,
              career_counterfeit: 0,
              complaint_num: 35,
              report_num: 8
            },
            {
              place_name: '南方商城',
              place_property: '商业综合体',
              total: 40,
              career_counterfeit: 1,
              complaint_num: 36,
              report_num: 4
            },
            {
              place_name: '新荟城(北建华清)',
              place_property: '商业综合体',
              total: 38,
              career_counterfeit: 1,
              complaint_num: 33,
              report_num: 5
            },
            {
              place_name: '华侨城',
              place_property: '商业综合体',
              total: 36,
              career_counterfeit: 0,
              complaint_num: 29,
              report_num: 7
            },
            {
              place_name: '大润发超市',
              place_property: '商业综合体',
              total: 25,
              career_counterfeit: 3,
              complaint_num: 21,
              report_num: 4
            }
          ]
        },
        {
          list: [
            {
              place_name: ' 电商物流港',
              place_property: '商业综合体',
              total: 72,
              career_counterfeit: 72,
              complaint_num: 48,
              report_num: 24
            },
            {
              place_name: ' 天地（商场）',
              place_property: '商业综合体',
              total: 53,
              career_counterfeit: 3,
              complaint_num: 38,
              report_num: 15
            },
            {
              place_name: '龙湖天街（商场）',
              place_property: '商业综合体',
              total: 51,
              career_counterfeit: 1,
              complaint_num: 39,
              report_num: 12
            },
            {
              place_name: '颛桥万达颛兴东路店',
              place_property: '商业综合体',
              total: 51,
              career_counterfeit: 0,
              complaint_num: 40,
              report_num: 11
            },
            {
              place_name: '莲花国际广场',
              place_property: '商业综合体',
              total: 46,
              career_counterfeit: 1,
              complaint_num: 40,
              report_num: 6
            },
            {
              place_name: '爱琴海',
              place_property: '商业综合体',
              total: 43,
              career_counterfeit: 0,
              complaint_num: 35,
              report_num: 8
            },
            {
              place_name: '南方商城',
              place_property: '商业综合体',
              total: 40,
              career_counterfeit: 1,
              complaint_num: 36,
              report_num: 4
            },
            {
              place_name: '新荟城(北建华清)',
              place_property: '商业综合体',
              total: 58,
              career_counterfeit: 1,
              complaint_num: 33,
              report_num: 5
            },
            {
              place_name: '华侨城',
              place_property: '商业综合体',
              total: 46,
              career_counterfeit: 0,
              complaint_num: 29,
              report_num: 7
            },
            {
              place_name: '大润发超市',
              place_property: '商业综合体',
              total: 35,
              career_counterfeit: 3,
              complaint_num: 21,
              report_num: 4
            }
          ]
        },
        {
          list: [
            {
              place_name: ' 电商物流港',
              place_property: '商业综合体',
              total: 22,
              career_counterfeit: 72,
              complaint_num: 48,
              report_num: 24
            },
            {
              place_name: ' 天地（商场）',
              place_property: '商业综合体',
              total: 13,
              career_counterfeit: 3,
              complaint_num: 38,
              report_num: 15
            },
            {
              place_name: '龙湖天街（商场）',
              place_property: '商业综合体',
              total: 61,
              career_counterfeit: 1,
              complaint_num: 39,
              report_num: 12
            },
            {
              place_name: '颛桥万达颛兴东路店',
              place_property: '商业综合体',
              total: 60,
              career_counterfeit: 0,
              complaint_num: 50,
              report_num: 11
            },
            {
              place_name: '莲花国际广场',
              place_property: '商业综合体',
              total: 58,
              career_counterfeit: 1,
              complaint_num: 20,
              report_num: 6
            },
            {
              place_name: '爱琴海',
              place_property: '商业综合体',
              total: 56,
              career_counterfeit: 4,
              complaint_num: 33,
              report_num: 8
            },
            {
              place_name: '南方商城',
              place_property: '商业综合体',
              total: 55,
              career_counterfeit: 1,
              complaint_num: 12,
              report_num: 4
            },
            {
              place_name: '新荟城(北建华清)',
              place_property: '商业综合体',
              total: 32,
              career_counterfeit: 2,
              complaint_num: 32,
              report_num: 1
            },
            {
              place_name: '华侨城',
              place_property: '商业综合体',
              total: 30,
              career_counterfeit: 2,
              complaint_num: 23,
              report_num: 3
            },
            {
              place_name: '大润发超市',
              place_property: '商业综合体',
              total: 22,
              career_counterfeit: 3,
              complaint_num: 19,
              report_num: 4
            }
          ]
        }
      ],

      select: {}
    }
  }
}
</script>

<style scoped lang='less'>
.ComplaintLeft {
    .complaints_box {
        padding-top: 2rem;
        height: 21rem;
        width: 45rem;
        margin-top: 2rem;
        border: 0.1rem solid #22aec5;
        font-size: 3rem;
        padding-left: 1rem;
        padding-right: 2rem;
        box-sizing: border-box;

        .event_cont {
            width: 100%;
            overflow: hidden;
            height: 5rem;
            margin-top: 0.5rem;

            .event_total {
                color: #1C92D2;
                margin-left: 2rem;
            }

            .img {
                width: 3rem;
                height: 3rem;
                margin-top: -1rem;
            }

            p {
                float: left;
                color: #fff;
                margin: 0;
            }

            span {
                color: #1c92d2;
                float: left;
                font-weight: bolder;
                margin-left: 8rem;
            }
        }
    }

    .complain_spread {
        .discharge_table {
            width: 98%;
            background: rgba(30, 141, 176, 0.2);
            margin-top: 1.5rem;
            border: 0.33rem solid #1c92d2;
            box-sizing: border-box;
            overflow: auto;
            position: relative;
            cursor: default;

            tbody {
                display: block;
                height: 30rem;
                overflow-y: auto;
                overflow-x: hidden;

                tr {
                    display: table;
                    width: 100%;
                    table-layout: fixed;
                }
            }

            thead {
                display: table;
                width: 100%;
                table-layout: fixed;
            }

            th {
                // width: 2.25rem;
                height: 4.2rem;
                font-size: 2.2rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 2rem;

                &:first-child {
                    width: 7rem;
                }

                &:nth-child(2) {
                    width: 20rem;
                }
            }

            tr {
                font-size: 2rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 3.2rem;
                text-align: center;

                td {
                    padding: 0.3rem;
                    font-size: 2rem;
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;

                    &:first-child {
                        width: 7rem;
                    }

                    &:nth-child(2) {
                        width: 20rem;
                    }
                }
            }

            .tableTr {
                border-bottom: 0.3rem solid rgba(black, 0.7);
            }
        }
    }
}
</style>
