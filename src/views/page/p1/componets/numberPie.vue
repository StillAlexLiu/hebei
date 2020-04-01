<template>
    <div class="numberPie">
        <div class="number" v-for="(item, index) in data2" :key="index">
            <p class="number_name" :style="{'background-image': 'url(' + item.img + ')'}">
                {{item.num}}
            </p>
            <p class="number_p">
                {{item.name}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'numberPie',
    props: ['data2'],
    data() {
        return {

        }
    }
}
</script>
<style lang="less">
    .numberPie{
        width: 100%;
        height: 100%;
        padding: 3% 5%;
        .number{
            width: 23.3%;
            margin-right: 5%;
            margin-left: 5%;
            height: 90%;
            float: left;
        }
        .number_name{
            width: 100%;
            line-height: 23rem;
            height: 90%;
            text-align: center;
            font-size: 3rem;
            color: white;
            border-radius: 50%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .number_p{
            width: 100%;
            height: 10%;
            text-align: center;
            line-height: 100%;
            font-size: 3rem;
            color: white;
        }
    }
</style>