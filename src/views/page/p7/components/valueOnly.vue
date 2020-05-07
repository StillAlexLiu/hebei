<template>
    <div class="valueOnly">
        <div class="value number-font">{{data.value}}<span>户</span></div>
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
    background: url("./img/标准化建设-icon@2x.png") no-repeat 30% 50%, url("./img/标准化建设-bg@2x.png") no-repeat 50% 80%;
    background-size: 201px 201px, 487px 164px;
    padding-left: 270px;
    padding-top: 170px;

    .value {
        color: #FE6941;
        font-size: 56px;

        > span {
            font-size: 24px;
        }
    }

    .name {
        font-size: 24px;
    }
}
</style>
