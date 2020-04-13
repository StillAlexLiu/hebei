<template>
  <div class='SociologyLeft full page-style'>
    <container class='h-2-8' title='使民服务统计使用情况'>
      <div class='list'>
        <div class='list_box' v-for='(item,index) in List' :key='index'>
          <div class='img'></div>
          <div class='main'>
            <p>{{item.zhibiaoName}}</p>
            <p>
              <span>{{item.value}}</span>次
            </p>
          </div>
        </div>
      </div>
    </container>
    <container class='h-3-8' title='电梯问题处理情况统计'>
      <div class='full-height w-1-2'>
        <div class='socialSolving'>
          <ul>
            <li v-for='(item,index) in progressList' :key='index'>
              <div class='socialSolvingtitle'>
                <span>总量</span>
                <span>{{item.value1}}件</span>
              </div>
              <div class='problemLeft'>{{item.name}}</div>
              <div class='problemRight'>
                <div class='progress'>
                  <div class='progressTop' :style="'width:' + item.value3+'%'"></div>
                  <div class='progressBottom'></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class='full-height w-1-2'>
        <div class='list_card' v-for='(item,index) in ListCard' :key='index'>
            <div class='left_card'>
              <p>
                <span>已处理</span>
                <span>{{item.value2}}件</span>
              </p>
            </div>
            <div class='right_card'>
              <p>
                <span>处理率</span>
                <span>{{item.value3}}%</span>
              </p>
            </div>
          </div>
      </div>
    </container>
    <div class='h-3-8'>
      <container class='w-1-2 full-height' title='用户认证区域分布'>
        <SociologyBar :xdata='SociologyData.xdata' :ydata='SociologyData.ydata'></SociologyBar>
      </container>
      <container class='w-1-2 full-height' title='小额有奖举报情况'>
         <SociologyLine :xdata='SociologyData1.xdata' :ydata='SociologyData1.ydata'></SociologyLine>
      </container>
    </div>
  </div>
</template>

<script>
import SociologyBar from './compontes/SociologyBar'
import SociologyLine from './compontes/SociologyLine'
export default {
  name: 'SociologyLeft',
  components: {
    SociologyBar,
    SociologyLine
  },
  data () {
    return {
      List: [
        { zhibiaoName: '电梯问题反馈', value: 1299 },
        { zhibiaoName: '用户认证备案', value: 229 },
        { zhibiaoName: '小额有奖举报', value: 51 }
      ],
      progressList: [
        { value2: 266, value1: 344, value3: '77.33', name: '举报投诉' },
        { value2: 658, value1: 875, value3: '75.2', name: '故障报修' },
        { value2: 61, value1: 80, value3: '76.25', name: '应急救援' }
      ],
      ListCard: [
        { value2: 266, value1: 344, value3: '77.33', name: '举报投诉' },
        { value2: 658, value1: 875, value3: '75.2', name: '故障报修' },
        { value2: 61, value1: 80, value3: '76.25', name: '应急救援' }
      ],
      SociologyData: {
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
      },
      SociologyData1: {
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
      }
    }
  }
}
</script>

<style scoped lang='less'>
.SociologyLeft {
  .list_box {
    width: 48rem;
    height: 23rem;
    background-image: url(./compontes/img/img_mhzhjg_img_zhutixinxi_zhucedating_bg_default@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 1rem;
    margin-top: 1rem;
    float: left;
    .img {
      width: 7rem;
      height: 7rem;
      background-image: url(./compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x.png);
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
      margin-top: 0;
      p:first-child {
        height: 4.92rem;
        font-size: 3.67rem;
        color: rgba(255, 255, 255, 1);
        line-height: 4.92rem;
      }
      p:last-child {
        // width: 3rem;
        // height: 3.92rem;
        font-size: 3rem;
        color: rgba(254, 105, 65, 1);
        line-height: 3.92rem;
        display: inline;
      }
      p:last-child span {
        font-size: 5.33rem;
        font-weight: bold;
        color: rgba(254, 105, 65, 1);
        line-height: 7.08rem;
        padding-right: 1rem;
      }
    }
  }
  .list_box:nth-child(2) {
    .img {
      background-image: url(./compontes/img/mhzhjg_icon_zhengzhaoqixian_map_point_xukezheng@2x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .list_box:nth-child(3) {
    .img {
      background-image: url(./compontes/img/icon_mhzhjg_icon_jgquanjing_quanjuguanjian_banjielv@2x2.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .socialSolving {
    width: 100%;
    ul {
      width: 100%;
      margin-top: 3.2rem;
      li {
        overflow: hidden;
        width: 95%;
        margin-bottom: 5rem;
        padding-right: 1rem;
        .socialSolvingtitle {
          text-align: right;
          font-size: 2rem;
          color: rgba(255, 255, 255, 1);
          line-height: 2rem;
          margin-bottom: 0.5rem;
          padding-right: 1rem;
          span {
            padding-left: 2rem;
          }
        }
        .problemLeft {
          float: left;
          width: 12rem;
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 1);
          line-height: 2.5rem;
          text-align: right;
        }
        .problemRight {
          float: right;
          width: calc(100% - 13rem);
          .progress {
            position: relative;
            div {
              position: absolute;
              left: 0;
              top: 0;
              height: 2rem;
              border-radius: 3rem;
              background: -webkit-linear-gradient(
                left,
                #3cbaff,
                #0073a9
              ); /* Safari 5.1 - 6.0 */
              background: -o-linear-gradient(
                right,
                #3cbaff,
                #0073a9
              ); /* Opera 11.1 - 12.0 */
              background: -moz-linear-gradient(
                right,
                #3cbaff,
                #0073a9
              ); /* Firefox 3.6 - 15 */
              background: linear-gradient(
                to right,
                #3cbaff,
                #0073a9
              ); /* 标准的语法 */
              z-index: 10;
              &.progressBottom {
                width: 100%;
                background: #999;
                z-index: 9;
              }
            }
          }
        }
      }
      li:nth-child(2) {
        margin-top: 8rem;
        .progress {
          div {
            background: linear-gradient(
              to right,
              #ff5b69,
              #a52b3d
            ); /* 标准的语法 */
            &.progressBottom {
              width: 100%;
              background: #999;
              z-index: 9;
            }
          }
        }
      }
      li:nth-child(3) {
        margin-top: 9rem;
        .progress {
          div {
            background: linear-gradient(
              to right,
              #ffb210,
              #c7652d
            ); /* 标准的语法 */
            &.progressBottom {
              width: 100%;
              background: #999;
              z-index: 9;
            }
          }
        }
      }
    }
  }
  .list_card {
  width: 73rem;
  height: 10rem;
  float: left;
  background-image: url(./compontes/img/img_mhzhjg_img_zhifaliliang_chart_bg_style04@2x.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 3rem;
  .left_card,
  .right_card {
    width: 50%;
    height: 6rem;
    float: left;
    margin-top: 1.5rem;
    p {
      span:first-child {
        height: 6rem;
        font-size: 3rem;
        color: rgba(255, 255, 255, 1);
        line-height: 6rem;
        padding-left: 20%;
        vertical-align: middle;
      }
      span:last-child {
        font-size: 4.5rem;
        font-weight: bold;
        color: rgba(255, 148, 0, 1);
        line-height: 6rem;
        padding-left: 2rem;
        vertical-align: middle;
      }
    }
  }
  .right_card {
    p {
      span:last-child {
        color: #7ed321;
      }
    }
  }
}
}
</style>
