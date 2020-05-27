<template>
    <div class="Page3 full">
        产品质量左侧
    </div>
</template>

<script>

export default {
  name: 'Page3',
  props: {
    dimension: {
      type: Number,
      default: 0
    }
  },
  components: {
  },
  data () {
    return {
      rightLine: [{
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            20,
            19,
            11,
            20
          ],
          [
            3,
            4,
            4,
            9
          ],
          [
            5,
            4,
            5,
            8
          ]
        ]
      }, {
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            60,
            19,
            38,
            30
          ],
          [
            30,
            40,
            40,
            45
          ],
          [
            51,
            41,
            51,
            19
          ]
        ]
      }, {
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            40,
            39,
            31,
            30
          ],
          [
            37,
            47,
            47,
            97
          ],
          [
            51,
            41,
            51,
            58
          ]
        ]
      }],
      rightLine2: [{
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            50,
            59,
            51,
            50
          ],
          [
            47,
            44,
            44,
            42
          ],
          [
            49,
            34,
            35,
            38
          ]
        ]
      }, {
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            80,
            89,
            81,
            80
          ],
          [
            88,
            74,
            54,
            98
          ],
          [
            51,
            24,
            35,
            81
          ]
        ]
      }, {
        legend: [
          '药品',
          '化妆品',
          '医疗器械'
        ],
        xdata: [
          '2015年',
          '2016年',
          '2017年',
          '2018年'
        ],
        ydata: [
          [
            10,
            19,
            21,
            20
          ],
          [
            3,
            14,
            24,
            9
          ],
          [
            5,
            24,
            35,
            8
          ]
        ]
      }],
      chart1: [[
        {
          name1: '监管户数',
          num1: 56
        },
        {
          name1: '监管户数',
          num1: 2537
        }
      ], [
        {
          name1: '监管户数',
          num1: 96
        },
        {
          name1: '监管户数',
          num1: 2117
        }
      ], [
        {
          name1: '监管户数',
          num1: 76
        },
        {
          name1: '监管户数',
          num1: 2267
        }
      ]],

      borderData: [[
        {
          name: '药品零售单位',
          num: '408'
        },
        {
          name: '医疗器械经营单位',
          num: '1456'
        },
        {
          name: '医疗机构',
          num: '480'
        },
        {
          name: '医疗器械追溯申报上报率',
          num: '93.98%'
        },
        {
          name: '国产/进口非特殊化妆品备案数',
          num: '2038/398'
        }
      ], [
        {
          name: '药品零售单位',
          num: '458'
        },
        {
          name: '医疗器械经营单位',
          num: '1413'
        },
        {
          name: '医疗机构',
          num: '410'
        },
        {
          name: '医疗器械追溯申报上报率',
          num: '90.98%'
        },
        {
          name: '国产/进口非特殊化妆品备案数',
          num: '2298/318'
        }
      ], [
        {
          name: '药品零售单位',
          num: '378'
        },
        {
          name: '医疗器械经营单位',
          num: '1956'
        },
        {
          name: '医疗机构',
          num: '500'
        },
        {
          name: '医疗器械追溯申报上报率',
          num: '83.98%'
        },
        {
          name: '国产/进口非特殊化妆品备案数',
          num: '2138/311'
        }
      ]],
      radioData2: [
        {
          name: '三级监管A',
          value: 0
        },
        {
          name: '三级监管B',
          value: 1
        },
        {
          name: '二级监管',
          value: 2
        },
        {
          name: '二类备案',
          value: 3
        },
        {
          name: '医疗机构检查',
          value: 4
        }
      ],
      acrossBar: [[[{
        ydata: ['石家庄市'],
        xdata: [960],
        hecha: 5,
        jianguan: 36
      }, {
        ydata: ['唐山市'],
        xdata: [160],
        hecha: 35,
        jianguan: 36
      }, {
        ydata: ['秦皇岛市'],
        xdata: [360],
        hecha: 25,
        jianguan: 36
      }, {
        ydata: ['邯郸市'],
        xdata: [560],
        hecha: 15,
        jianguan: 36
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 53,
        jianguan: 36
      }], [{
        ydata: ['石家庄市'],
        xdata: [860],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['唐山市'],
        xdata: [360],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [660],
        hecha: 75,
        jianguan: 76
      }, {
        ydata: ['邯郸市'],
        xdata: [860],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['保定市'],
        xdata: [770],
        hecha: 48,
        jianguan: 29
      }], [{
        ydata: ['石家庄市'],
        xdata: [1160],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [860],
        hecha: 95,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [560],
        hecha: 125,
        jianguan: 136
      }, {
        ydata: ['邯郸市'],
        xdata: [1560],
        hecha: 115,
        jianguan: 316
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 53,
        jianguan: 36
      }]], [[{
        ydata: ['石家庄市'],
        xdata: [660],
        hecha: 65,
        jianguan: 16
      }, {
        ydata: ['唐山市'],
        xdata: [260],
        hecha: 25,
        jianguan: 26
      }, {
        ydata: ['秦皇岛市'],
        xdata: [350],
        hecha: 55,
        jianguan: 55
      }, {
        ydata: ['邯郸市'],
        xdata: [550],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['保定市'],
        xdata: [755],
        hecha: 55,
        jianguan: 35
      }], [{
        ydata: ['石家庄市'],
        xdata: [865],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [350],
        hecha: 55,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [655],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['邯郸市'],
        xdata: [850],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['保定市'],
        xdata: [775],
        hecha: 45,
        jianguan: 25
      }], [{
        ydata: ['石家庄市'],
        xdata: [1560],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [860],
        hecha: 95,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [560],
        hecha: 125,
        jianguan: 136
      }, {
        ydata: ['邯郸市'],
        xdata: [1560],
        hecha: 115,
        jianguan: 316
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 13,
        jianguan: 26
      }]], [[{
        ydata: ['石家庄市'],
        xdata: [920],
        hecha: 5,
        jianguan: 36
      }, {
        ydata: ['唐山市'],
        xdata: [130],
        hecha: 35,
        jianguan: 86
      }, {
        ydata: ['秦皇岛市'],
        xdata: [380],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['邯郸市'],
        xdata: [590],
        hecha: 15,
        jianguan: 36
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 53,
        jianguan: 36
      }], [{
        ydata: ['石家庄市'],
        xdata: [860],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['唐山市'],
        xdata: [360],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [660],
        hecha: 75,
        jianguan: 76
      }, {
        ydata: ['邯郸市'],
        xdata: [860],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['保定市'],
        xdata: [770],
        hecha: 48,
        jianguan: 29
      }], [{
        ydata: ['石家庄市'],
        xdata: [1160],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [860],
        hecha: 95,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [560],
        hecha: 125,
        jianguan: 136
      }, {
        ydata: ['邯郸市'],
        xdata: [1560],
        hecha: 115,
        jianguan: 316
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 53,
        jianguan: 36
      }]], [[{
        ydata: ['石家庄市'],
        xdata: [960],
        hecha: 5,
        jianguan: 36
      }, {
        ydata: ['唐山市'],
        xdata: [160],
        hecha: 35,
        jianguan: 36
      }, {
        ydata: ['秦皇岛市'],
        xdata: [360],
        hecha: 25,
        jianguan: 36
      }, {
        ydata: ['邯郸市'],
        xdata: [560],
        hecha: 15,
        jianguan: 36
      }, {
        ydata: ['保定市'],
        xdata: [760],
        hecha: 53,
        jianguan: 36
      }], [{
        ydata: ['石家庄市'],
        xdata: [860],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['唐山市'],
        xdata: [360],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [270],
        hecha: 75,
        jianguan: 76
      }, {
        ydata: ['邯郸市'],
        xdata: [589],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['保定市'],
        xdata: [178],
        hecha: 48,
        jianguan: 29
      }], [{
        ydata: ['石家庄市'],
        xdata: [1370],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [760],
        hecha: 95,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [169],
        hecha: 125,
        jianguan: 136
      }, {
        ydata: ['邯郸市'],
        xdata: [1560],
        hecha: 115,
        jianguan: 316
      }, {
        ydata: ['保定市'],
        xdata: [728],
        hecha: 53,
        jianguan: 46
      }]], [[{
        ydata: ['石家庄市'],
        xdata: [948],
        hecha: 5,
        jianguan: 36
      }, {
        ydata: ['唐山市'],
        xdata: [160],
        hecha: 35,
        jianguan: 36
      }, {
        ydata: ['秦皇岛市'],
        xdata: [385],
        hecha: 25,
        jianguan: 36
      }, {
        ydata: ['邯郸市'],
        xdata: [560],
        hecha: 15,
        jianguan: 36
      }, {
        ydata: ['保定市'],
        xdata: [726],
        hecha: 53,
        jianguan: 36
      }], [{
        ydata: ['石家庄市'],
        xdata: [827],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['唐山市'],
        xdata: [360],
        hecha: 15,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [150],
        hecha: 75,
        jianguan: 76
      }, {
        ydata: ['邯郸市'],
        xdata: [860],
        hecha: 85,
        jianguan: 86
      }, {
        ydata: ['保定市'],
        xdata: [770],
        hecha: 48,
        jianguan: 29
      }], [{
        ydata: ['石家庄市'],
        xdata: [1160],
        hecha: 55,
        jianguan: 56
      }, {
        ydata: ['唐山市'],
        xdata: [819],
        hecha: 11,
        jianguan: 16
      }, {
        ydata: ['秦皇岛市'],
        xdata: [540],
        hecha: 115,
        jianguan: 136
      }, {
        ydata: ['邯郸市'],
        xdata: [1540],
        hecha: 125,
        jianguan: 316
      }, {
        ydata: ['保定市'],
        xdata: [740],
        hecha: 43,
        jianguan: 26
      }]]],
      select: {
        value: 0
      }
    }
  }
}
</script>

<style scoped lang="less">
.Page3 {

}
</style>
