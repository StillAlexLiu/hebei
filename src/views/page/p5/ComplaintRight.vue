<template>
    <div class='ComplaintRight full page-style'>
        <div class='full-width h-2-8'>
            <container title='线索数量及处置期限情况' class='full-height w-1-2'>
                <div class='full-height w-2-3'>
                    <complaintPieR :data='chart1'></complaintPieR>
                </div>
                <div class='full-height w-1-3'>
                    <RightInfoBox :data="infoData1"/>
                </div>
            </container>
            <container title='案件数量及处置期限情况' class='full-height w-1-2'>
                <div class='full-height w-2-3'>
                    <complaintPieRT :data='chart2'></complaintPieRT>
                </div>
                <div class='full-height w-1-3'>
                    <RightInfoBox :data="infoData2"/>
                </div>
            </container>
        </div>
        <container title='市队举报线索处理情况' class='full-width h-3-8'>
            <comPlaintBarR :data='chart3' color="#41C8DE" :barWidth="80"></comPlaintBarR>
        </container>
        <div class='full-width h-3-8'>
            <container title='类型分布情况' class='w-1-2 full-height'>
                <echartsHollowPie :data='chart4'></echartsHollowPie>
            </container>
            <container title='市队食品生产类举报案件分布' class='w-1-2 full-height'>
                <complaintBarRH :xdata='chart5.xdata' :ydata='chart5.ydata'></complaintBarRH>
            </container>
        </div>
    </div>
</template>

<script>
import comPlaintBarR from './compontes/comPlaintBarR'
import complaintBarRH from './compontes/complaintBarRH'
import complaintPieR from './compontes/complaintPieR'
import complaintPieRT from './compontes/complaintPieRT'
import RightInfoBox from './compontes/RightInfoBox'
import echartsHollowPie from '../p2/compontes/echartsHollowPie'

export default {
  name: 'ComplaintRight',
  components: {
    RightInfoBox,
    comPlaintBarR,
    complaintBarRH,
    complaintPieR,
    complaintPieRT,
    echartsHollowPie
  },
  data () {
    return {
      infoData1: {
        name: '平均处置期限',
        value: '6.5',
        img: require('./compontes/img/icon／mhzhjg_icon_tousujubao_xiansuoqixian_default@2x.png')
      },
      infoData2: {
        name: '平均处置期限',
        value: '94.7',
        img: require('./compontes/img/icon／mhzhjg_icon_tousujubao_anjianqixian_default@2x.png')
      },
      averager: '平均处置期限',
      averageDay: '28.7',
      averageDay1: '76.1',
      chart1: [
        { name: '立案', value: 389 },
        { name: '不予立案', value: 456 }
      ],
      chart2: [
        { name: '不予行政处罚', value: 22 },
        { name: '给予行政处罚', value: 80 },
        { name: '移送其他\n行政管理部门', value: 21 },
        { name: '移送司法机关', value: 0 },
        { name: '不得给予\n行政处罚（销案）', value: 19 }
      ],
      chart3: {
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
          '10',
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
      chart4: [
        { count: 0, name: '认证认可', value: '9' },
        { count: 1, name: '特种设备', value: '7' },
        { count: 1, name: '药械化', value: '6' },
        { count: 2, name: '计量', value: '12' },
        { count: 3, name: '产品质量', value: '8' },
        { count: 4, name: '食品生产', value: '5' },
        { count: 8, name: '价格', value: '10' },
        { count: 9, name: '不正当竞争', value: '3' },
        { count: 10, name: '其他', value: '11' },
        { count: 13, name: '食品经营', value: '4' },
        { count: 36, name: '商标', value: '1' },
        { count: 85, name: '广告', value: '2' }
      ],
      chart5: {
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
          '6',
          '8',
          '12',
          '6',
          '3',
          '5',
          '7',
          '2'
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.ComplaintRight {
    .complainCircle {
        width: 100%;
        height: 100%;
        float: left;
        cursor: pointer;

        .fakeBig,
        .fakeBigTwo {
            border-radius: 100rem;
            width: 9rem;
            height: 9rem;
            z-index: 10000;
            position: absolute;
            top: 13rem;
            left: 18rem;
        }

        .fakeBigTwo {
            left: 86rem;
        }

        .circleOne {
            float: left;
            width: 55rem;
            height: 100%;
        }

        .average_day {
            background: url('./compontes/img/img_mhzhjg_img_zhutixinxi_pingjunshoumingbg_default@2x.png');
            background-size: 100% 100%;
            width: 17rem;
            height: 20rem;
            float: right;
            margin-right: 5rem;
            // background: rgba(#113f4c, 0.2);
            // margin-left: 55rem;
            margin-top: 2rem;

            & > p {
                width: 17rem;
                text-align: center;
                height: 2.58rem;
                font-size: 2rem;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                line-height: 2.58rem;
            }

            img {
                width: 3rem;
                height: 3rem;
                margin-top: 2rem;
                margin-left: 7rem;
                margin-bottom: 2rem;
            }

            .day {
                font-weight: bolder;
                color: #79dfef;
                font-size: 4rem;
                width: 100%;
                text-align: center;
                margin-top: 3rem;
            }
        }
    }
}
</style>
