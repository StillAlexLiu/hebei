<template>
    <div class="NumberTop">
        <div class="top">
            预警历史情况
        </div>
        <div class="btn">
            {{data}}
        </div>
    </div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
    .NumberTop{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            height: 20%;
            margin-top: 5%;
            text-align: center;
            font-size: 3rem;
            background-image: url('./img/png2.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            line-height: 6rem;
        }
        .btn{
            font-size: 8rem;
            text-align: center;
            color: #e84729;
            line-height: 20rem;
        }
    }
</style>
