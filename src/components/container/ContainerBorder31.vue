<template>
  <div class="container-border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerBorder31'
}
</script>
<style scoped lang="less">
.container-border {
  background-image: url("asset/img/container-new-style2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
  padding: 10px;
}
</style>
