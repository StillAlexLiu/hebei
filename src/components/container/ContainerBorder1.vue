<template>
    <div class="container-border">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'ContainerBorder1'
}
</script>

<style scoped lang="less">
.container-border {
    background-image: url("./asset/img/container-border.png");
    background-size: 95% 95%;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
