<template>
    <div class="info" :class="{full_hetght : flag}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MapInfoBlock',
  data () {
    return {
      flag: false
    }
  },
  mounted () {
    if (this.$route.fullPath === '/audit') {
      this.flag = true
    } else {
      this.flag = false
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/audit') {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.info {
    position: absolute;
    top: 60px;
    right: -15px;
    width: 1000px;
    // height: 95%;
    // overflow-y: auto;
}
.full_hetght{
    height: 60%;
}
</style>
