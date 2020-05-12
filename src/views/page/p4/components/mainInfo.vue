<template>
    <div class="mainInfo">
        <div class="info_title">{{data.title}}</div>
        <div class="item"><span class="sp1">地址</span><span class="sp2">{{data.address}}</span></div>
        <div class="item"><span class="sp1">法定代表人</span><span class="sp2">{{data.people}}</span></div>
        <div class="item"><span class="sp1">注册时间</span><span class="sp2">{{data.time}}</span></div>
        <div class="item"><span class="sp1">管辖单位</span><span class="sp2">{{data.dw}}</span></div>
        <div class="item"><span class="sp1">网格员</span><span class="sp2">{{data.wgy}}</span></div>
    </div>
</template>
<script>
export default {
  name: 'mainInfo',
  props: ['data'],
  data () {
    return {}
  }
}
</script>

<style lang="less">
.mainInfo {
    width: 100%;
    height: 100%;
    font-weight: bold;
    text-align: center;
    padding: 30px 10px;

    .info_title {
        line-height: 50px;
        height: 50px;
        display: block;
        font-size: 34px;
        background-color: rgba(34, 84, 197, 0.25);
    }

    .item {
        line-height: 50px;
        height: 50px;
        font-size: 22px;
        background-color: #071631;
        margin-top: 2px;
    }

    .sp1 {
        width: 30%;
        text-align: right;
        display: inline-block;
        letter-spacing: 8px
    }

    .sp2 {
        width: 65%;
        text-align: left;
        display: inline-block;
        margin-left: 5%;;
        letter-spacing: 4px
    }
}
</style>
