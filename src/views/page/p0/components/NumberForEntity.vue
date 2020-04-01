<template>
    <div class="NumberForEntity">
        <ContainerBorder3 v-for="(item,index) in data" :key="index" class="full-height w-1-3">
            <div class="h-1-2">
                <img :src="item.icon" alt="">
            </div>
            <div class="h-1-2">
                <div class="h-2-5 name">
                    {{item.name}}
                </div>
                <div class="h-3-5 value">
                    {{item.value}}
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

    img {
        height: 60%;
        margin-top: 10%;
    }

    .name {
        font-size: 24px;
    }

    .value {
        font-size: 48px;
    }
}
</style>
