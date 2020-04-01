<template>
    <div class="number-elevator full-height  full-width">
        <p class="elevator_num">{{data.num}}</p>
        <p class="elevator_name">{{data.name}}</p>
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
    background-image: url('./img/特种设备.png');
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;

    .elevator_num {
        font-size: 5rem;
        font-weight: bold;
        text-align: left;
        color: #FE6941;
        width: 55%;
        float: right;
        margin: 7rem 0 10px 0;
    }

    .elevator_name {
        font-size: 3rem;
        text-align: left;
        width: 55%;
        float: right;
        margin: 0;
        color: #DFDDE4;
    }
}
</style>
