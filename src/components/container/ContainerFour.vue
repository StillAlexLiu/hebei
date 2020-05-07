<template>
    <div class='ContainerFour'>
        <div class="body full">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerFour'
}
</script>

<style scoped lang="less">
@TopLeft: url("./img/矩形-左上@2x.png");
@TopRight: url("./img/矩形-右上@2x.png");
@BottomLeft: url("./img/矩形-左下@2x.png");
@BottomRight: url("./img/矩形-右下@2x.png");
.ContainerFour {
    background: @TopLeft 0 0 no-repeat, @TopRight 100% 0 no-repeat, @BottomLeft 0 100% no-repeat, @BottomRight 100% 100% no-repeat;
    background-size: 18px 18px, 18px 18px, 18px 18px, 18px 18px;
    padding: 10px;

    > .body {
        border: 2px solid #3D94D5;
        padding: 3px;
    }
}
</style>
