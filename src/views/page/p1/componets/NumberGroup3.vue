<template>
    <div class="NumberGroup2">
        <div class="bd full">
            <div class="w-1-3 full-height left">
                <img :src="data.img" alt="">
                <div>{{ data.name }}</div>
                <div class="number-font value">{{ data.value }}</div>
            </div>
            <div class="w-2-3 full-height right">
                <div v-for="(item,index) in data.data" :key="index">
                    <div class="name">{{ item.name }}</div>
                    <div class="value number-font">{{
                        item.value.toLocaleString('zh',{style:'decimal',maximumFractionDigits:2}) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup3',
  props: {
    data: {
      type: Object,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
@bg: radial-gradient(ellipse, rgba(0, 0, 0, 0), rgba(216, 216, 216, 0), rgba(152, 192, 228, 0.02), rgba(91, 169, 239, 1));
.NumberGroup2 {
    padding: 40px 10px;

    .bd {
        background-image: url("./img/bg4.png");
        background-size: 100% 100%;
        background-position: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: #1B1C32;

        .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > img {
                width: 84px;
                height: 84px;
            }

            > div {
                font-size: 24px;
            }
            .value {
                font-size: 36px;
            }
        }

        .right {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-content: space-around;
            padding: 10px 10px 10px 0;
            text-align: center;

            > div {
                flex-basis: 30%;
                flex-grow: 1;
                height: 80px;

                .name {
                    font-size: 24px;
                }

                .value {
                    font-size: 36px;
                }
            }
        }

        .img {
            text-align: center;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-left: 10px;

            img {
                width: 86%;
            }
        }

        > .item {
            margin: 10px 0;
        }
    }
}
</style>
