<template>
    <div class="numberGroup2 full">
        <container-border31 v-for="(item,index) in data" :key="index" class="item">
            <div class="full item-in">
                <div class="h-2-4 b-line">
                    <div class="img" :style="{backgroundImage:'url('+item.img+')'}">
                        {{ item.short }}
                    </div>
                    <div class="title">
                        {{ item.name }}
                    </div>
                </div>
                <div class="h-2-4 text">
                    <div v-for="(item2,index) in item.data" :key="index">
                        <div class="name w-1-2">{{ item2.name }}</div>
                        <div class="value w-1-2 number-font">{{ item2.value }}</div>
                    </div>
                </div>
            </div>
        </container-border31>
    </div>
</template>

<script>
export default {
  name: 'numberGroup2',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.numberGroup2 {
    display: flex;
    justify-content: space-around;
    /*align-items: center;*/
    flex-direction: row;

    > .item {
        flex-grow: 1;
        text-align: center;

        .item-in {
            padding: 10px;

            .b-line {
                border-bottom: 2px solid rgba(74, 144, 226, 0.31);
                padding-top: 35px;
            }

            .img {
                width: 84px;
                height: 84px;
                margin: 0 auto;
                background-size: 84px 84px;
                line-height: 84px;
                font-weight: bold;
                font-size: 40px;
            }

            .text {
                padding: 10px 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;

                > div {
                    flex: 1;
                }

                .name {
                    font-size: 24px;
                    text-align: left;
                    line-height: 60px;
                }

                .value {
                    color: #79DFEF;
                    font-size: 36px;
                    text-align: right;
                    line-height: 60px;
                }
            }
        }
    }

    .title {
        padding-top: 10px;
        font-size: 24px;
    }
}
</style>
