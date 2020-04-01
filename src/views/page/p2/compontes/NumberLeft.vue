<template>
    <div class="NumberForEntity">
        <ContainerBorder3 v-for="(item,index) in data" :key="index" class="full-height full-width">
            <div class="h-2-5 box_top">
                {{item.name}}
            </div>
            <div class="h-3-5">
                <div class="h-2-5 name">
                    {{item.num}}
                </div>
                <div class="h-3-5 value">
                    {{item.dw}}
                </div>
            </div>
        </ContainerBorder3>
    </div>
</template>

<script>
export default {
  name: 'NumberForEntity',
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
.NumberForEntity {
    text-align: center;
    width: 100%;
    height: 100%;
    .box_top{
        line-height: 15rem;
        font-size: 3rem;
    }
    .name {
        font-size: 4rem;
        line-height: 13rem;
        color: rgb(137,206,60)
    }

    .value {
        font-size: 48px;
        line-height: 9rem;
    }
}
</style>
