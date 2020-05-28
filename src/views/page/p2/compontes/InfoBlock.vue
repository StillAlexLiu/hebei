<template>
    <ContainerCenterTitle2 :title="data.title" class='InfoBlock'>
        <div class="img"><img :src="data.img" alt=""></div>
        <div class="value number-font">{{ data.value }}</div>
        <div class="name">{{ data.name }}</div>
    </ContainerCenterTitle2>
</template>

<script>
export default {
  name: 'InfoBlock',
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
.InfoBlock {
    .img {
        padding-top: 30px;

        img {
            width: 144px;
        }
    }

    .value {
        font-size: 72px;
        color: #FE6941;
    }

    .name {
        font-size: 24px;
    }

}
</style>
