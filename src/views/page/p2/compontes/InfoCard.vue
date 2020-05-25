<template>
    <div class='InfoCard full'>
        <div class="h-2-9 top">
            <div v-for="(item,index) in data.data1" :key="index" class="item-t">
                <div class="name">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
            </div>
        </div>
        <div class="h-7-9 bottom">
            <div v-for="(item,index) in data.data2" :key="index" class="item-b">
                <div class="full">
                    <div class="h-2-5 img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="h-3-5 text">
                        <div class="name">{{ item.name }}</div>
                        <div class="value">{{ item.value }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoCard',
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
.InfoCard {

    .top {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;

        .item-t {
            flex: 1;
            background-image: url("./img/img／anzhi_img_tzsb_jljc_bg_default@2x.png");
            background-size: calc(100% - 10px) calc(100% - 10px);
            background-position: center;
            background-repeat: no-repeat;
            padding: 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .name {
                text-indent: 10px;
            }

            .value {
                text-align: right;
                padding-right: 10px;
            }
        }
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;

        > .item-b {
            flex: 1;
            padding: 5px;

            > div {
                border: 1px solid rgba(74, 144, 226, 0.31);
                text-align: center;
                padding: 0 50px;

                .img {
                    padding-top: 20px;
                    border-bottom: 1px solid #23416A;

                    img {
                        height: 92px;
                    }
                }
                .name{
                    padding-top: 20px;
                }
                .value{
                    padding-top: 10px;
                }
            }
        }
    }

    .name {
        font-size: 28px;
    }

    .value {
        font-size: 28px;
        color: #79DFEF;
    }
}
</style>
