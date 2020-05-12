<template>
    <div class="numberGroup">
        <div v-for="(item,index) in data" :key="index" class="full-height w-1-4">
            <div class="name">
                {{item.name}}
            </div>
            <img src="./img/Group5@2x.png">
            <div class="value number-font">
                {{item.value}}件
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'numberGroup',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.numberGroup {
    text-align: center;
    font-size: 24px;

    .name {
        margin-top: 80px;
        line-height: 60px;
    }

    img {
        width: 50px;
        margin: 20px 0;
    }

    .value {
        font-size: 54px;
        color: #fff;
        line-height: 130px;
        height: 123px;
        background-size: auto 100%;
        background-position: center;
        background-image: url("./img/bg.png");
        background-repeat: no-repeat;
    }
}
</style>
