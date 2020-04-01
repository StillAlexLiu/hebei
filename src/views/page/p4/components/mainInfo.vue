<template>
    <div class="mainInfo">
        <p class="info_title">{{data.title}}</p>
        <p><span class="sp1">地址</span><span class="sp2">{{data.address}}</span></p>
        <p><span class="sp1">法定代表人</span><span class="sp2">{{data.people}}</span></p>
        <p><span class="sp1">注册时间</span><span class="sp2">{{data.time}}</span></p>
        <p><span class="sp1">管辖单位</span><span class="sp2">{{data.dw}}</span></p>
        <p><span class="sp1">网格员</span><span class="sp2">{{data.wgy}}</span></p>
    </div>
</template>
<script>
export default {
    name: 'mainInfo',
    props: ['data'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="less">
    .mainInfo{
        width: 100%;
        height: 100%;
        background-image: url('../../p2/compontes/img/img.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        font-weight: bold;
        padding: 2rem 2rem;
        font-size: 2.5rem;
        text-align: center;
        .info_title{
            line-height: 5rem;
            display: block;
            background-color: rgb(12, 53, 76);
            margin-bottom: 3rem;
        }
        p{
            margin: 0;
            line-height: 4rem;
        }
        .sp1{
            width: 30%;
            text-align: right;
            display: inline-block;
            letter-spacing:8px
        }
        .sp2{
            width: 65%;
            text-align: left;
            display: inline-block;
            margin-left: 5%;
            letter-spacing:4px
        }
    }
</style>