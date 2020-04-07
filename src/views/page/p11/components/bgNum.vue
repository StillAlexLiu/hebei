<template>
    <div id="bgNum">
        <div class="bgList" v-for="(item, index) in data" :key="index" :style="{'background-image': 'url(' + item.img + ')'}">
            <p class="name">{{item.name}}</p>
            <p class="num">{{item.num}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'bgNum',
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
    #bgNum{
        width: 100%;
        height: 100%;
        .bgList{
            width: 23%;
            height: 45%;
            float: left;
            margin:2% 2% 2% 0;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .name{
            font-size: 2rem;
            margin: 8rem 0 0 0;
            text-align: center;
        }
        .num{
            font-size: 2.3rem;
            margin: 0.5rem 0 0 0;
            text-align: center;
        }
    }
</style>
