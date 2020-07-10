<template>
    <div class="info full-height">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MapInfoBlock'
}
</script>

<style scoped lang="less">
.info {
    position: absolute;
    top: 60px;
    right: -15px;
    // width: 1000px;
    // height: 95%;
    overflow-y: auto;
    >div{
        height: 100%;
    }
}
</style>
