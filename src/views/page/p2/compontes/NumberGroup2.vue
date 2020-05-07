<template>
    <div class="number-group full-height  full-width">
        <container-border31 v-for="(item,index) in data" :key="index" class="item">
            <div class="full item-in">
                <div class="h-2-5 b-line">
                    <div class="img" :style="{backgroundImage:'url('+item.img+')'}">
                        {{ item.short }}
                    </div>
                </div>
                <div class="h-3-5">
                    <div class="h-1-2 sub-block">
                        <div class="name h-1-2">{{item.name}}</div>
                        <div class="value h-1-2 number-font">{{item.value}}</div>
                    </div>
                    <div class="h-1-2 sub-block">
                        <div class="name h-1-2">{{item.name1}}</div>
                        <div class="value h-1-2 number-font">{{item.value1}}</div>
                    </div>
                </div>
            </div>
        </container-border31>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup2',
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
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

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

            .sub-block {
                padding: 10px 0;

                .name {
                    font-size: 24px;
                    text-align: center;
                    line-height: 60px;
                }

                .value {
                    color: #79DFEF;
                    font-size: 36px;
                }
            }
        }
    }
}
</style>
