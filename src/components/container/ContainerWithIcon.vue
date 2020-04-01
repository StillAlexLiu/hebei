<template>
    <div class="container">
        <div class="c-header">
            <img :src="icon">
            {{title}}
        </div>
        <div class="c-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerWithIcon',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="less">
@title-height: 60px;
.container {
    padding: 10px;

    > .c-header {
        background-image: url("./img/container-icon.png");
        background-position: left;
        background-repeat: no-repeat;
        background-size: 100% @title-height;
        text-indent: 30px;
        /*background-color: #1e8db0;*/
        font-weight: bold;
        height: @title-height;
        line-height: @title-height;
        text-align: left;
        font-size: 28px;
        >img{
            height: 62%;
            vertical-align: middle;
        }
    }

    > .c-body {
        margin-top: 5px;
        height: ~"calc(100% - (@{title-height}) - 5px)";
    }
}
</style>
