<template>
  <div class="container-border" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerWarning',
  props: {
    level: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      bgGroup: [
        require('./asset/img/warning_red.png'),
        require('./asset/img/warning_orange.png'),
        require('./asset/img/warning_yellow.png')
      ],
      style: {}
    }
  },
  mounted () {
    this.$set(this.style, 'background-image', 'url(' + this.bgGroup[this.level] + ')')
  }
}
</script>
<style scoped lang="less">
.container-border {
  height: 100%;
  width: 100%;
  /*background-image: url("./../assets/img/warning_orange.png");*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
}
</style>
