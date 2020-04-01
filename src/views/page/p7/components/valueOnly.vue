<template>
    <div class="valueOnly">
        <div class="value">{{data.value}}<span>户</span></div>
        <div class="name">{{data.name}}</div>
    </div>
</template>

<script>
export default {
  name: 'valueOnly',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.valueOnly {
    background-image: url("./img/标准示范企业.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 60%;
    padding-left: 200px;
    padding-top: 70px;

    .value {
        color: #FE6941;
        font-size: 80px;

        > span {
            font-size: 34px;
        }
    }

    .name {
        font-size: 40px;
    }
}
</style>
