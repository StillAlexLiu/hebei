<template>
    <div class='ContainerFour'>
        <div class="body full">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerFourDash'
}
</script>

<style scoped lang="less">
@TopLeft: url("./img/dash-left-top.png");
@TopRight: url("./img/dash-right-top.png");
@BottomLeft: url("./img/dash-left-bottom.png");
@BottomRight: url("./img/dash-right-bottom.png");
.ContainerFour {
    background: @TopLeft 0 0 no-repeat, @TopRight 100% 0 no-repeat, @BottomLeft 0 100% no-repeat, @BottomRight 100% 100% no-repeat;
    background-size: 44px 44px, 44px 44px, 44px 44px, 44px 44px;
    padding: 10px;

    > .body {
        border: 2px dotted #3D94D5;
        padding: 3px;
        background-color: #152642;
    }
}
</style>
