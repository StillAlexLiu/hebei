<template>
    <div class="echartsTwoPie">
        <div class="twoHeader">
            <img :src="data.url" alt="">
            <span class="span_name">{{data.name}}</span>
            <span class="span_num">{{data.num}}</span>
        </div>
        <div class="w-1-2 heightH ">
            <slot name="slot1"></slot>
        </div>
        <div class="w-1-2 heightH">
            <slot name="slot2"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'echarts-twopie',
  props: ['data'],
  data () {
    return {}
  }
}
</script>

<style lang="less">
.echartsTwoPie {
    width: 100%;
    height: 100%;
    border-right: 3px solid rgb(1, 9, 99);
    padding-left: 2rem;

    .twoHeader {
        width: 70%;
        height: 30%;
        display: block;
        margin-left: 15%;

        img {
            width: 15%;
            height: 75%;
            margin-left: 18%;
            margin-top: 1.5%;
            float: left;
            margin-right: 3rem;
        }

        .span_name {
            font-size: 2.5rem;
            color: white;
            line-height: 5rem;
            display: block;
        }

        .span_num {
            color: rgb(254, 105, 65);
            font-size: 3rem;
            float: left;
            display: block;
        }
    }

    .heightH {
        width: 50%;
        height: 80%;
        float: left;
    }
}
</style>
