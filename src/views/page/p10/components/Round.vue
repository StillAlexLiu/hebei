<template>
    <div class="Round full">
        <div>
            {{data.name}}
            <br>
            {{data.value}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Round',
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
.Round {
    display: table;
    text-align: center;
    background-image: url("./img/31.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 80%;

    > div {
        vertical-align: middle;
        font-size: 40px;
        line-height: 60px;
        display: table-cell;
    }
}
</style>
