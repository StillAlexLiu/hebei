<template>
    <div class="table  full-width">
        <div class="item" v-for="(value,key) in data" :key="key">
            <div class="key w-1-6">{{key}}</div>
            <div class="value w-5-6">{{value}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'infoTable',
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
    background: linear-gradient(180deg, rgba(32, 35, 58, 1) 0%, rgba(36, 41, 66, 1) 100%);
    display: flex;
    height: 400px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.item {
    flex-basis: 49.6%;
    float: left;
    height: 50px;
    font-size: 22px;

    > div {
        float: left;
        height: 100%;
        line-height: 50px;
    }

    .key {
        text-align: right;
        background-color: #0B3053;
        padding-right: 15px;
    }

    .value {
        text-indent: 25px;
        text-align: left;
        background: rgba(0, 32, 59, 1);
    }
}
</style>
