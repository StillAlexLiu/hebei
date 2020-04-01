<template>
    <div class="container-border">
      <slot name='echarts'></slot>
      <slot name="name"></slot>
    </div>
</template>

<script>
export default {
  name: 'ContainerBorder21'
}
</script>

<style scoped lang="less">
.container-border{
  background-image: url("asset/img/container-simple-border-2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
  padding: 1rem;
}
</style>
