<template>
    <div id="leftImgae">
        <div class="left">
            <div class="leftBox" v-for="(item, index) in data.list1Data" :key="index">
                <div>{{item.name}}</div>
                <span class="box_sp1 number-font" :style="{color:colors[index] }">{{item.num}}</span>
                <span class="box_sp2">{{item.dw}}</span>
            </div>
        </div>
        <div class="right">
            <ul>
                <li v-for="(item, index) in data.list2Data" :key="index">
                    <div class="name">{{item.name}}</div>
                    <div class="value number-font">{{item.num}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {
      colors: ['rgba(254, 105, 65, 1)', 'rgba(65, 200, 222, 1)']
    }
  }
}
</script>
<style scoped lang='less'>
#leftImgae {
    width: 100%;
    height: 100%;

    .left {
        width: 30%;
        height: 100%;
        float: left;
        text-align: center;

        .leftBox {
            width: 100%;
            height: 50%;

            > div {
                padding-top: 20px;
                font-size: 32px;
            }

            .box_sp1 {
                font-size: 48px;
                color: #BE483A;
            }

            .box_sp2 {
                font-size: 24px;
            }
        }
    }

    .right {
        width: 70%;
        height: 100%;
        background-image: url('../components/img/five.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        float: left;

        ul {
            width: 100%;
            height: 100%;
            list-style: none;

            li {
                float: left;
                width: 31%;
                height: 130px;
                text-align: center;
                font-size: 32px;
                padding-top: 30px;

                .name {
                    font-size: 32px;
                }

                .value {
                    font-size: 32px;
                    color: #fff;
                }
            }

            li:nth-child(4) {
                margin-left: 9rem;
            }

            li:nth-child(1) {
                margin-left: 0rem;
                margin-right: 2rem;
            }
        }
    }
}
</style>
