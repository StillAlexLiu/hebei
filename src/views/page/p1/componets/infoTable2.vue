<template>
    <div class="table full-width">
        <div class="item" v-for="(value,key) in data" :key="key">
            <div class="key">{{key}}：</div>
            <div class="val">{{value}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'infoTable2',
  props: {
    data: {
      type: Object,
      return: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.table {
    width: 100%;
    overflow: hidden;
}

.item {
    width: 50%;
    float: left;
    line-height: 2rem;
    font-size: 1.2rem;

    > div {
        float: left;
    }

    .key {
        width: 30%;
        text-align: right;
    }

    .val {
        width: 70%;
        text-align: left;
    }
}
</style>
