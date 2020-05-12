<template>
    <div class='KeyValueInfo'>
        <div class="name h-1-2">{{ data.name }}</div>
        <div class="value h-1-2 number-font">{{ data.value }}</div>
    </div>
</template>

<script>
export default {
  name: 'KeyValueInfo',
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
.KeyValueInfo {
    height: 84px;
    background-image: url("./img/info-bg.png");
    background-size: 180px 84px;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

    .name {
        font-size: 20px;
        line-height: 42px;
    }

    .value {
        font-size: 42px;
        line-height: 42px;
    }
}
</style>
