<template>
    <div class="Round full">
        <div class="full-height w-1-2" style="text-align: right;padding-top: 100px">
            <img src="./img/icon.png" style="width: 192px">
        </div>
        <div class="full-height w-1-2 text">
            <div class="name">{{ data.name }}</div>
            <div class="value">{{ data.value }}</div>
            <div class="percent">同比<span>{{ data.percent }}</span><img src="./img/down.png"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Round',
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
.Round {
    display: table;
    text-align: center;
    background-image: url("./img/31.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 80%;

    .text {
        padding-top: 140px;
        padding-left: 20px;
        text-align: left;

        .name {
            font-size: 24px;
        }

        .value {
            font-size: 48px;
        }

        .percent {
            font-size: 30px;

            > span {
                color: #429321;
                font-weight: bold;
                margin-left: 10px;
                margin-right: 10px;
            }
            img{
                width: 40px;
                vertical-align: middle;
            }
        }
    }
}
</style>
