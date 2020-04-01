<template>
  <container-calc type='tb' :number='50' class='EffectivenessLeft full block-padding'>
    <template slot='fix'>
      <RadioSimple :data='radioData' v-model='select' class='w-4-7 full-height radio' />
    </template>
    <div slot='calc' class='border full'>
      <div class='h-2-8'>
        <div class='full-height w-1-2'>
          <ul>
            <li v-for='(item,index) in titleList[select.value]' :key='index'>
              <div>
                <p>{{item.value1}}</p>
                <p>{{item.name}}</p>
              </div>
              <div>
                <p>{{item.value}}</p>
                <p>{{item.name1}}</p>
              </div>
            </li>
          </ul>
        </div>
        <container class='full-height w-1-2' title='任务类别占比情况'>
          <EffectivenessPie :data='chart1[select.value]'></EffectivenessPie>
        </container>
      </div>
      <div class='h-3-8'>
        <container class='full-height w-1-2' title='检查任务趋势统计'>
          <EffectivenessLine :data='chart2[select.value]'></EffectivenessLine>
        </container>
        <container class='full-height w-1-2' title='重点任务巡查统计'>
          <EffectivenessCircle :data='chart3[select.value]'></EffectivenessCircle>
        </container>
      </div>
      <div class='h-3-8'>
        <container class='full-height w-1-2' title='各市任务分布分析'>
          <EffectivenessBar :data='chart4[select.value]'></EffectivenessBar>
        </container>
        <container class='full-height w-1-2' title='各市任务完成情况'>
          <EffectivenessSolving :data='textData[select.value]'></EffectivenessSolving>
        </container>
      </div>
    </div>
  </container-calc>
</template>

<script>
import EffectivenessPie from './compontes/EffectivenessPie';
import EffectivenessLine from './compontes/EffectivenessLine';
import EffectivenessCircle from './compontes/EffectivenessCircle';
import EffectivenessBar from './compontes/EffectivenessBar';
import EffectivenessSolving from './compontes/EffectivenessSolving';
export default {
  name: 'EffectivenessLeft',
  components: {
    EffectivenessPie,
    EffectivenessLine,
    EffectivenessCircle,
    EffectivenessBar,
    EffectivenessSolving
  },
  data() {
    return {
      select: {},
      radioData: [
        {
          name: '当日考核',
          value: '0'
        },
        {
          name: '月度考核',
          value: '1'
        },
        {
          name: '季度考核',
          value: '2'
        },
        {
          name: '年度考核',
          value: '3'
        }
      ],
      titleList: [
        [
          {
            name: '出勤人次',
            name1: '出勤率',
            value1: 27,
            value: '5.31%'
          },
          {
            name: '检查任务数量',
            name1: '件',
            value: 10
          },
          {
            name: '检查主体数量',
            name1: '户',
            value: 5
          }
        ],
        [
          {
            name: '出勤人次',
            name1: '出勤率',
            value1: 4914,
            value: '93.31%'
          },
          {
            name: '检查任务数量',
            name1: '件',
            value: 284
          },
          {
            name: '检查主体数量',
            name1: '户',
            value: 612
          }
        ],
        [
          {
            name: '出勤人次',
            name1: '出勤率',
            value1: 5914,
            value: '96.31%'
          },
          {
            name: '检查任务数量',
            name1: '件',
            value: 384
          },
          {
            name: '检查主体数量',
            name1: '户',
            value: 812
          }
        ],
        [
          {
            name: '出勤人次',
            name1: '出勤率',
            value1: 6214,
            value: '95.32%'
          },
          {
            name: '检查任务数量',
            name1: '件',
            value: 484
          },
          {
            name: '检查主体数量',
            name1: '户',
            value: 912
          }
        ]
      ],
      chart1: [
        [
          { name: '专项任务', value: 11 },
          { name: '无证无照', value: 6 }
        ],
        [
          { name: '专项任务', value: 15 },
          { name: '异地经营', value: 27 }
        ],
        [
          { name: '专项任务', value: 9 },
          { name: '无证无照', value: 8 }
        ],
        [
          { name: '专项任务', value: 25 },
          { name: '异地经营', value: 17 },
          { name: '无证无照', value: 5 },
          { name: '双随机任务', value: 9 }
        ]
      ],
      chart2: [
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
            '5310',
            '2579',
            '5498',
            '1586',
            '2488',
            '3752',
            '2782',
            '3311',
            '1545',
            '5986',
            '2943',
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
      chart3: [
        [
          { name: '药械化监管', value: 20 },
          { name: '食品监管', value: 15 }
        ],
        [
          { name: '食品监管', value: 5 },
          { name: '特种设备监管', value: 30 }
        ],
        [
          { name: '食品监管', value: 20 },
          { name: '特种设备监管', value: 10 }
        ],
        [
          { name: '药械化监管', value: 20 },
          { name: '食品监管', value: 15 },
          { name: '特种设备监管', value: 50 }
        ]
      ],
      chart4: [
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
            '1',
            '2',
            '4',
            '6',
            '12',
            '10',
            '6',
            '8',
            '12',
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
            '12',
            '7',
            '9',
            '8',
            '2',
            '10',
            '5',
            '8',
            '3',
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
            '20',
            '3',
            '9',
            '12',
            '5',
            '19',
            '6',
            '8',
            '12',
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
            '23',
            '31',
            '12',
            '15',
            '4',
            '6',
            '9',
            '8',
            '11',
            '6',
            '3',
            '5',
            '7',
            '2'
          ]
        }
      ],
      textData: [
        [
          { value2: 5, value1: 18, value3: '27.78', name: '邢台市' },
          { value2: 7, value1: 17, value3: '41.18', name: '承德市' },
          { value2: 12, value1: 16, value3: '75', name: '邢台市' },
          { value2: 5, value1: 14, value3: '35.71', name: '廊坊市' },
          { value2: 10, value1: 14, value3: '71.43', name: '沧州市' },
          { value2: 8, value1: 8, value3: '100', name: '石家庄市' },
        ],
        [
          { value2: 41, value1: 41, value3: '100', name: '秦皇岛市' },
          { value2: 23, value1: 30, value3: '76.67', name: '邯郸市' },
          { value2: 11, value1: 20, value3: '55', name: '保定市' },
          { value2: 9, value1: 18, value3: '50', name: '唐山市' },
          { value2: 5, value1: 18, value3: '27.78', name: '邢台市' },
          { value2: 7, value1: 17, value3: '41.18', name: '承德市' },
          { value2: 12, value1: 16, value3: '75', name: '邢台市' },
          { value2: 5, value1: 14, value3: '35.71', name: '廊坊市' },
          { value2: 10, value1: 14, value3: '71.43', name: '沧州市' },
          { value2: 8, value1: 8, value3: '100', name: '石家庄市' },
          { value2: 5, value1: 5, value3: '100', name: '衡水市' }
        ],
        [
          { value2: 41, value1: 41, value3: '100', name: '秦皇岛市' },
          { value2: 23, value1: 30, value3: '76.67', name: '唐山市' },
          { value2: 11, value1: 20, value3: '55', name: '邯郸市' },
          { value2: 9, value1: 18, value3: '50', name: '保定市' },
          { value2: 5, value1: 18, value3: '27.78', name: '邢台市' },
          { value2: 7, value1: 17, value3: '41.18', name: '张家口市' },
          { value2: 12, value1: 16, value3: '75', name: '承德市' },
          { value2: 5, value1: 14, value3: '35.71', name: '沧州市' },
          { value2: 10, value1: 14, value3: '71.43', name: '廊坊市' },
          { value2: 8, value1: 8, value3: '100', name: '衡水市' },
          { value2: 4, value1: 5, value3: '80', name: '石家庄市' }
        ],
        [
          { value2: 275, value1: 327, value3: '84.1', name: '石家庄市' },
          { value2: 293, value1: 305, value3: '96.07', name: '唐山市' },
          { value2: 252, value1: 252, value3: '100', name: '秦皇岛市' },
          { value2: 188, value1: 193, value3: '97.41', name: '邯郸市' },
          { value2: 172, value1: 179, value3: '96.09', name: '邢台市' },
          { value2: 145, value1: 152, value3: '95.39', name: '保定市' },
          { value2: 112, value1: 149, value3: '75.17', name: '张家口市' },
          { value2: 129, value1: 147, value3: '87.76', name: '承德市' },
          { value2: 101, value1: 104, value3: '97.12', name: '沧州市' },
          { value2: 68, value1: 73, value3: '93.15', name: '廊坊市' },
          { value2: 72, value1: 72, value3: '100', name: '衡水市' }
        ]
      ]
    };
  }
};
</script>

<style scoped lang='less'>
.EffectivenessLeft {
  ul {
    width: 75rem;
    height: 28rem;
    float: left;
    margin-bottom: 4rem;
    margin-top: 2rem;
    li {
      list-style-type: none;
      width: 23rem;
      height: 28rem;
      background-image: url(./compontes/img/img_mhzhjg_img_znyujing_card_yujingshuliang_bg3@2x.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      float: left;
      margin-left: 0.2rem;
      div:first-child {
        width: 24rem;
        height: 12rem;
        text-align: center;
        border: 1px solid transparent;
        p {
          font-size: 2.67rem;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: #fff;
          line-height: 6rem;
          text-align: center;
        }
      }
      div:last-child {
        width: 24rem;
        height: 8rem;
        margin-top: 2rem;
        text-align: center;
        p:first-child {
          font-size: 5rem;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: #b4ec51;
          line-height: 0.33rem;
          text-align: center;
        }
        p:last-child {
          font-size: 2.67rem;
          font-family: MicrosoftYaHei;
          color: rgba(241, 238, 244, 1);
          line-height: 1.5rem;
          text-align: center;
        }
      }
    }
    li:first-child {
      background-image: url(./compontes/img/img_mhzhjg_img_zhinengyujing_card_yujingshuliang_bg@2x.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      div:first-child {
        width: 24rem;
        height: 12rem;
        text-align: center;
        p:first-child {
          font-size: 4rem;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: #fff;
          line-height: 0.33rem;
          text-align: center;
        }
        p:last-child {
          font-size: 2.67rem;
          font-family: MicrosoftYaHei;
          color: rgba(241, 238, 244, 1);
          line-height: 0.33rem;
          text-align: center;
        }
      }
      div:last-child {
        width: 24rem;
        height: 12rem;
        margin-top: 2rem;
        text-align: center;
        p:first-child {
          font-size: 5rem;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
          color: #b4ec51;
          line-height: 0.33rem;
          text-align: center;
        }
        p:last-child {
          font-size: 2.67rem;
          font-family: MicrosoftYaHei;
          color: rgba(241, 238, 244, 1);
          line-height: 0.33rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
