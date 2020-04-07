<template>
    <div class="numberPie2">
        <div class="number2" v-for="(item, index) in data2" :key="index">
            <p class="number_name2" :style="{'background-image': 'url(' + item.img + ')'}">
                {{item.num}}
            </p>
            <p class="number_p2">
                {{item.name}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'numberPie',
  props: ['data2'],
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
    .numberPie2{
        width: 100%;
        height: 100%;
        padding: 3% 3%;
        .number2{
            width: 23.3%;
            margin-right: 5%;
            margin-left: 5%;
            height: 90%;
            float: left;
        }
        .number_name2{
            width: 125%;
            line-height: 22rem;
            height: 80%;
            text-align: center;
            font-size: 3rem;
            color: white;
            border-radius: 50%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .number_p2{
            width: 100%;
            height: 10%;
            text-align: center;
            line-height: 100%;
            font-size: 3rem;
            color: white;
            margin-left: 11%;
        }
    }
</style>
