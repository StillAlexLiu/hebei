<template>
    <div class='ContainerSmallTitle'>
        <div class="title">{{ title }}</div>
        <div class="body full">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerSmallTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.ContainerSmallTitle {

    > .title {
        height: 30px;
        background-image: url("./img/small-title.png");
        background-size: 456px 30px;
        background-position: center;
        background-repeat: no-repeat;
        font-size: 24px;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
    }

    > .body {
        height: calc(100% - 30px);
        padding: 3px;
    }
}
</style>
