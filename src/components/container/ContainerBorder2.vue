<template>
    <div class="container-border">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ContainerBorder2'
}
</script>

<style scoped lang="less">
.container-border{
  background-image: url("asset/img/container-simple-border.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
  padding: 1rem;
}
</style>
