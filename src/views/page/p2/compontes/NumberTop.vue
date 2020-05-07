<template>
    <div class="number-group full-height  full-width">
        <container-border31 v-for="(item,index) in data" :key="index" class="item">
            <div class="full item-in">
                <div class="h-1-2 b-line">
                    <div class="w-1-2 full-height">
                        <div class="img" :style="{backgroundImage:'url('+item.img+')'}">
                            {{ item.short }}
                        </div>
                    </div>
                    <div class="w-1-2 full-height title">
                        {{ item.title }}
                    </div>
                </div>
                <div class="h-1-2">
                    <div class="h-1-2 sub-block">
                        <div class="name w-1-2">{{item.data[0].name}}</div>
                        <div class="value w-1-2 number-font">{{item.data[0].value}}</div>
                    </div>
                    <div class="h-1-2 sub-block">
                        <div class="name w-1-2">{{item.data[1].name}}</div>
                        <div class="value w-1-2 number-font">{{item.data[1].value}}</div>
                    </div>
                </div>
            </div>
        </container-border31>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0;

    > .item {
        text-align: center;
        flex: 1;

        .item-in {
            padding: 10px;

            .b-line {
                border-bottom: 2px solid rgba(74, 144, 226, 0.31);
                padding-top: 35px;
            }

            .title {
                font-size: 24px;
                line-height: 84px;
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

            .sub-block {
                padding: 10px 30px;

                .name {
                    font-size: 24px;
                    text-align: left;
                    line-height: 60px;
                }

                .value {
                    color: #79DFEF;
                    line-height: 60px;
                    text-align: right;
                    font-size: 36px;
                }
            }
        }
    }
}
</style>
