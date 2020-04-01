<template>
    <div class="echartsTwoPie2">
        <img src="../components/img/图标.png" alt="">
        <span class="span_name2">{{data.name}}</span>
        <span class="span_num2">{{data.num}} </span>
    </div>
</template>
<script>
export default {
    name: 'echarts-imgNum',
    props: ['data'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less">
    .echartsTwoPie2{
        width: 100%;
        height: 37%;
        border: 3px solid rgb(1,9,99);
        margin: 8% 0 0 0;
        background-image: url('./img/背景框.png');
        background-size:100% 100%;
        background-repeat: no-repeat;
            img{
                width: 25%;
                height: 67%; 
                margin-top: 5.5%;
                float: left;
                margin-right: 5rem;
                margin-left: 3rem;
            }
            .span_name2{
                font-size: 2.5rem;
                color: white;
                line-height: 4rem;
                display: block;
                margin-top: 2.5rem;
                font-weight: bold;
            }
            .span_num2{
                color:rgb(121 ,223, 299);
                font-size: 3rem;
                float: left;
                display: block;
                margin-top: 1rem;
                font-weight: bold;
            }
    }
</style>