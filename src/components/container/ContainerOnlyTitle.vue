<template>
    <div class='ContainerOnlyTitle'>
        <div class="c-dt full">
            <div class="c-dc">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerOnlyTitle'
}
</script>

<style scoped lang="less">
.ContainerOnlyTitle {
    background-image: url("./img/info.png");
    background-size: 326px 124px;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

    .c-dt {
        display: table;

        .c-dc {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }
    }
}
</style>
