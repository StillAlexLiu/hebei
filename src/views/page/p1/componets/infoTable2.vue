<template>
    <div class="table full-width">
      <div v-if="data[0]">
        <CommonTable :data="data" :headers="['产品名称','规格','结果','批号','类型','年度','被检单位']" :show-order="false"/>
        <!-- <div v-for="(value,index) in data" :key="index" class="item2">
          <div class="item"  v-for="(item,key) in value" :key="key">
            <div class="key">{{key}}：</div>
            <div class="val">{{item}}</div>
          </div>
        </div> -->
      </div>
      <div v-else>
        <div class="item"  v-for="(value,key) in data" :key="key">
            <div class="key">{{key}}：</div>
            <div class="val">{{value}}</div>
        </div>
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
.item2 {
  width: 100%;
  display: inline-block;
  border-bottom: 1px solid #0A3051;
  padding: 20px 0;
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
