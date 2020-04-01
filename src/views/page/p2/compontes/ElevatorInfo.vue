<template>
    <ContainerInfo class="ElevatorInfo">
        <div class="full-width" style="height: 30px">
            <div class="c float-left full-height"></div>
            <div class="float-left full-height">正常</div>
        </div>
        <div class="title full-width">
            [31103101122006100306]
        </div>
        <div class="full-width" style="overflow:hidden;">
            <div class="w-2-3 table">
                <div v-for="(item,index) in info" :key="index">
                    <div>{{item.name}}</div>
                    <div>{{item.value}}</div>
                </div>
            </div>
            <div class="w-1-3" style="text-align: center">
                <img src="./img/qrcode.png">
            </div>
        </div>
        <div class="full-width">
            <div class="w-1-3 item" v-for="(item,index) in list" :key="index">
                <div class="top">{{item.name}}</div>
                <div class="center"></div>
                <div class="bottom">{{item.value}}</div>
            </div>
        </div>
        <div class="full-width table">
            <div class="title">设备信息</div>
            <div v-for="(item,index) in info1" :key="index">
                <div>{{item.name}}</div>
                <div>{{item.value}}</div>
            </div>
        </div>
        <div class="full-width table">
            <div class="title">设备评估</div>
            <div v-for="(item,index) in info2" :key="index">
                <div>{{item.name}}</div>
                <div>{{item.value}}</div>
            </div>
        </div>
    </ContainerInfo>
</template>

<script>
export default {
  name: 'ElevatorInfo',
  data () {
    return {
      info: [{
        name: '地址',
        value: '新华区古美街道东兰路751号14#(祜欣公寓)'
      }, {
        name: '维保公司',
        value: '河北承丰电梯电气有限公司'
      }, {
        name: '维保负责人',
        value: '王华'
      }, {
        name: '监管单位',
        value: '新华所'
      }, {
        name: '维保电话',
        value: '13341801601'
      }, {
        name: '网格员',
        value: '马增艳,孙颖，汤源龙，詹愉乐'
      }],
      list: [
        {
          name: '已使用年龄',
          value: '18年7个月'
        },
        {
          name: '下一次维保时间',
          value: '2019年9月13日'
        }, {
          name: '下一次检验时间',
          value: '2020年3月13日'
        }
      ],
      info1: [
        {
          name: '设备类型',
          value: '曳引驱动乘客电梯'
        },
        {
          name: '设备品种',
          value: '曳引驱动乘客电梯'
        }, {
          name: '设备名称',
          value: '曳引驱动乘客电梯'
        }
      ],
      info2: [
        {
          name: '评估状态',
          value: ''
        },
        {
          name: '评估结果',
          value: '无问题'
        }
      ]
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.ElevatorInfo {
    overflow: hidden;
    font-size: 24px;

    .c {
        background-color: #0ce251;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin: 5px 10px;
    }

    .title {
        background-color: #0C3A44;
        height: 50px;
        line-height: 50px;
        text-indent: 30px;
        font-size: 24px;
    }

    .table {
        display: block;
        overflow: hidden;
        margin-bottom: 5px;

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

    .item {
        padding: 20px;
        text-align: center;

        > .top {
            background-color: #33AAC2;
            height: 60px;
            line-height: 60px;
        }

        > .center {
            height: 10px;
            background-image: url("./img/twobar.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }

        > .bottom {
            height: 100px;
            line-height: 100px;
            background-color: #144E64;
        }
    }
}
</style>
