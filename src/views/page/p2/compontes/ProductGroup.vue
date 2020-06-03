<template>
    <div class='ProductGroup full'>
        <div v-for="(item,index) in data" :key="index" class="item">
            <div class="h-3-7 icon">
                <short class="full" :text="item.short" :color="item.img" :size="59" :font-size="33"/>
            </div>
            <div class="h-4-7">
                {{ item.name }}
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

    .item {
        flex: 1;
        background-image: url("./img/Pbg.png");
        background-repeat: no-repeat;
        background-size: calc(100% - 30px) calc(100% - 30px);
        background-position: center;
    }

    .icon {
        padding-top: 30px;
    }
}
</style>
