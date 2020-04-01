<template>
    <div id="NumberBorder">
        <div class="NumberCon" v-for="(item, index) in data" :key="index">
            <p class="Con_title">
                {{item.name}}
            </p>
            <p class="Con_num">
                {{item.num}}
            </p>
        </div>
    </div>
</template>
<script>

export default {
  name: 'NumberGroup',
  props: ['data'],
  data: () => {
    return {
    }
  }
}
</script>

<style lang="less">
    #NumberBorder{
        width: 100%;
        height: 100%;
        .NumberCon{
            background-image: url('../compontes/img/border.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            width: 19%;
            height: 100%;
            float: left;
            margin-right: 1%;
        }
        .Con_title{
            width: 100%;
            height: 13rem;
            font-size: 3rem;
            color: white;
            text-align: center;
            overflow-y: hidden;
            margin: 0;
            line-height: 7rem;
            margin-bottom: 3rem;
            font-weight: bold;
        }
        .Con_num{
            width: 100%;
            height: 10rem;
            text-align: center;
            display: inline-block;
            font-size: 4rem;
            color: rgb(180,230,80);
            font-weight: bold;
        }
    }
</style>
