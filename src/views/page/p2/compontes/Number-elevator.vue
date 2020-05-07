<template>
    <div class="number-elevator full-height  full-width">
        <div class="w-1-2 full-height">
            <img src="./img/特种设备.png" alt="">
        </div>
        <div class="w-1-2 full-height text">
            <div class="name h-1-2">{{data.name}}</div>
            <div class="value h-1-2 number-font">{{data.value}}</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NumberElevator',
  props: ['data'],
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-elevator {

    text-align: center;

    img {
        width: 245px;
        height: 245px;
        margin-top: 100px;
    }

    .text {
        padding: 140px 0;

        .name {
            font-size: 24px;
        }

        .value {
            font-size: 72px;
            color: #79DFEF;
        }
    }
}
</style>
