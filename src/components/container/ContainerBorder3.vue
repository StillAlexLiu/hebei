<template>
  <div class="container-border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerBorder3'
}
</script>

<style scoped lang="less">
.container-border {
  background-image: url("asset/img/container-center-line.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
  padding: 1rem;
}
</style>
