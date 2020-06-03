<template>
    <div class='ProductGroup full'>
        <div v-for="(item,index) in data" :key="index" class="item">
            <div class="h-3-7 icon">
                <short class="full" :text="item.short" :color="item.img" :size="59" :font-size="33"/>
            </div>
            <div class="h-4-7 text">
                <div class="name"> {{ item.name }}</div>
                <div class="value number-font"> {{ item.value }} <span class="unit">{{ item.unit}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductGroup',
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
.ProductGroup {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    padding: 10px 0;

    text-align: center;

    .item {
        flex: 1;
        background-image: url("./img/Pbg.png");
        background-repeat: no-repeat;
        background-size: calc(100% - 30px) calc(100% - 30px);
        background-position: center;
        padding: 30px;
    }

    .icon {
    }

    .name {
        font-size: 18px;
    }

    .value {
        font-size: 40px;
        color: #FF6142;
        text-align: right;
    }

    .unit {
        font-size: 16px;
        color: #FF6142;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        padding: 5px 0 3px 0;
    }
}
</style>
