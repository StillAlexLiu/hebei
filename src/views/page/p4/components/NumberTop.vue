<template>
    <div class="NumberTop">
        <div class="top">
            预警历史情况
        </div>
        <div class="btn number-font">
            {{data}}
        </div>
    </div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {}
  }
}
</script>

<style lang="less">
.NumberTop {
    width: 100%;
    height: 100%;
    background-image: url('./img/png2.png');
    background-size: 580px 301px;
    background-position: center;
    background-repeat: no-repeat;
    padding: 150px 0 20px 260px;

    .top {
        width: 100%;
        height: 20%;
        font-size: 26px;
    }

    .btn {
        font-size: 70px;
        color: #e84729;
    }
}
</style>
