<template>
  <div class="container-border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerInfoCard'
}
</script>
<style scoped lang="less">
.container-border {
  height: 100%;
  width: 100%;
  background-image: url("asset/img/container-info-card.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  padding: 1.5rem;
}
</style>
