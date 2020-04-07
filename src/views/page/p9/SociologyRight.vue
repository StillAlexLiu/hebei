<template>
    <div class="SociologyRight full">
        <container class="h-2-8" title="企业办事统计">
            <div class="list full">
                <div class="list_box  full-height" v-for="(item,index) in List" :key="index">
                    <div class="img"></div>
                    <div class="main">
                        <p>{{item.zhibiaoName}}</p>
                        <p>
                            <span>{{item.value}}</span>次
                        </p>
                    </div>
                </div>
            </div>
        </container>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="本月电梯维保情况统计">
                <div class="border_box">
                    <SociologyBarRH :xdata="SociologyBarHData.xdata" :ydata="SociologyBarHData.ydata"></SociologyBarRH>
                </div>
                <div class="border_box">
                    <div class="title_box"><P>完成率</p></div>
                    <div class="Liquidfill_box">
                        <SociologyLiquidfill :data='liquidfull'></SociologyLiquidfill>
                    </div>

                </div>
            </container>
            <container class="w-1-2 full-height" title="各市电梯维保情况">
                <SociologyBarR :data="SociologyBarData"></SociologyBarR>
            </container>
        </div>
        <div class="h-3-8">
            <container class="w-1-2 full-height" title="各市执照遗失办理">
                <SociologyLineR :xdata="SociologyLineData.xdata" :ydata="SociologyLineData.ydata"></SociologyLineR>
            </container>
            <container class="w-1-2 full-height" title="广告类别上传占比">
                <SociologyCircleR :data="SociologyPieData.pieData" :url="SociologyPieData.imgUrl"></SociologyCircleR>
            </container>
        </div>
    </div>
</template>

<script>
import SociologyLineR from "./compontes/SociologyLineR"
import SociologyBarR from "./compontes/SociologyBarR"
import SociologyCircleR from "./compontes/SociologyCircleR"
import SociologyBarRH from "./compontes/SociologyBarRH"
import SociologyLiquidfill from "./compontes/SociologyLiquidfill"


export default {
  name: "SociologyRight",
  components: {
    SociologyLineR,
    SociologyBarR,
    SociologyCircleR,
    SociologyBarRH,
    SociologyLiquidfill
  },
  data () {
    return {
      List: [
        {zhibiaoName: "执照遗失办理", value: 382},
        {zhibiaoName: "电梯维保管理", value: 124417},
        {zhibiaoName: "广告企业上传", value: 10}
      ],
      SociologyLineData: {
        xdata: [
          "石家庄市",
          "唐山市",
          "秦皇岛市",
          "邯郸市",
          "邢台市",
          "保定市",
          "张家口市",
          "承德市",
          "沧州市",
          "廊坊市",
          "衡水市"
        ],
        ydata: [
          "12",
          "7",
          "9",
          "8",
          "2",
          "10",
          "6",
          "8",
          "12",
          "6",
          "3",
          "5",
          "7",
          "2"
        ]
      },
      SociologyBarData: {
        xdata: [
          "石家庄市",
          "唐山市",
          "秦皇岛市",
          "邯郸市",
          "邢台市",
          "保定市",
          "张家口市",
          "承德市",
          "沧州市",
          "廊坊市",
          "衡水市"
        ],
        ydata: [
          "15",
          "12",
          "4",
          "2",
          "23",
          "15",
          "5",
          "24",
          "14",
          "1",
          "6",
          "15",
          "17",
          "24"
        ]
      },
      SociologyPieData: {
        imgUrl: './compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x_5.png',
        pieData: [
          {name: "房地产", value: 2},
          {name: "药品", value: 7},
          {name: "医疗器械", value: 1}
        ]
      },
      SociologyBarHData: {
        xdata: [
          "已完成",
          "维保数"
        ],
        ydata: [
          "12",
          "234"
        ]
      },
      liquidfull: [['完成率', 80]]
    }
  }
}
</script>

<style scoped lang="less">
.SociologyRight {
    .list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px 0;
    }

    .list_box {
        flex-basis: 30%;
        background-image: url(./compontes/img/img_mhzhjg_img_zhutixinxi_zhucedating_bg_default@2x.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        float: left;

        .img {
            width: 7rem;
            height: 7rem;
            background-image: url(./compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x3.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-left: 8rem;
            margin-top: 8rem;
            margin-right: 5rem;
            float: left;
        }

        .main {
            float: left;
            width: 26rem;
            height: 12rem;
            margin-top: 0rem;

            p:first-child {
                height: 4.92rem;
                font-size: 3.67rem;
                font-family: MicrosoftYaHei;
                color: rgba(255, 255, 255, 1);
                line-height: 4.92rem;
            }

            p:last-child {
                // width: 3rem;
                // height: 3.92rem;
                font-size: 3rem;
                font-family: MicrosoftYaHei;
                color: rgba(254, 105, 65, 1);
                line-height: 3.92rem;
                display: inline;
            }

            p:last-child span {
                font-size: 5.33rem;
                font-family: MicrosoftYaHei-Bold;
                font-weight: bold;
                color: rgba(254, 105, 65, 1);
                line-height: 7.08rem;
                padding-right: 1rem;
            }
        }
    }

    .list_box:nth-child(2) {
        .img {
            background-image: url(./compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x4.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .list_box:nth-child(3) {
        .img {
            background-image: url(./compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x_5.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .border_box {
        width: 50%;
        float: left;
        box-sizing: border-box;
        height: 100%;

        .title_box {
            width: 100%;
            height: 8%;
            background-image: url(./compontes/img/img_mhzhjg_img_zhifaliliang_chart_bg_style04@2x.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;

            p {
                font-size: 20px;
                text-align: center;
            }
        }

        .Liquidfill_box {
            width: 80%;
            height: 80%;
            margin-left: 5%;
            margin-top: 5%;
        }
    }
}
</style>
