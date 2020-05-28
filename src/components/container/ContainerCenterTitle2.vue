<template>
    <div class='ContainerCenterTitle2'>
        <div class="can full">
            <div class="title">{{ title }}</div>
            <div class="sub-body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerCenterTitle2',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.ContainerCenterTitle2 {
    text-align: center;
    padding: 10px;

    > .can {
        border: 3px solid;
        border-image: linear-gradient(180deg, rgba(83, 116, 170, 1), rgba(27, 29, 51, 1), rgba(26, 28, 50, 1), rgba(87, 122, 178, 0.6)) 1 1;

        > .title {
            height: 38px;
            font-size: 24px;
            background-image: url("./img/img／mhzhjg_img_xukebg_default@2x.png");
            background-size: 230px 38px;
            background-position: center;
            background-repeat: no-repeat;
        }

        > .sub-body {
            height: calc(100% - 38px);
        }
    }
}
</style>
