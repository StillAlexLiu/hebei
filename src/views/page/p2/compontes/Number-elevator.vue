<template>
    <div class="number-elevator full-height  full-width">
        <div class="w-1-2 full-height">
            <img src="./img/特种设备.png" alt="" v-if="type === '特种设备'">
            <img src="./img/dianti@2x.png" alt="" v-if="type === '电梯'">
            <img src="./img/guolu@2x.png" alt="" v-if="type === '锅炉'">
            <img src="./img/yali@2x.png" alt="" v-if="type === '压力容器'">
            <img src="./img/guandao@2x.png" alt="" v-if="type === '压力管道'">
            <img src="./img/qizhong@2x.png" alt="" v-if="type === '起重机械'">
            <img src="./img/suodao@2x.png" alt="" v-if="type === '客运索道'">
            <img src="./img/motianlun@2x.png" alt="" v-if="type === '大型游乐设施'">
            <img src="./img/car@2x.png" alt="" v-if="type === '场（厂）内专用车辆'">
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
  props: ['data', 'type'],
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
