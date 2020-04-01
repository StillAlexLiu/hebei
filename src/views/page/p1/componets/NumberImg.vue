<template>
    <div class="number-groap full-height  full-width">
        <div class="w-1-2 full-height left1_div">
            <p class="data_img h-1-3"><img :src="img.img1" alt=""></p>
            <p class="data_num">{{data[0].num}}</p>
            <p class="data_name ">{{data[0].name}}</p>
        </div>
        <div class="w-1-2 full-height">
            <p class="data_img h-1-3"><img :src="img.img2" alt=""></p>
            <p class="data_num">{{data[1].num}}</p>
            <p class="data_name ">{{data[1].name}}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NumberImg',
  props: ['data', 'img'],
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-groap {
    width: 100%;
    height: 100%;
    text-align: center;

    .left1_div {
        background-image: url('./img/png9.png');
        background-size: 5px 200px;
        background-position: right;
        background-repeat: no-repeat;
    }

    .data_img > img {
        width: 50px;
        height: 40px;
        margin-top: 50px;
    }

    .data_num {
        color: #79DFEF;
        font-size: 30px;
    }

    .data_name {
        color: white;
        font-size: 2.33rem;
    }
}
</style>
