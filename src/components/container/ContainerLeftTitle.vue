<template>
    <div class="Container">
        <div class="main">
            <div class="title">
                <div class="text">{{title}}</div>
                <div class="right">
                    <slot name="right"/>
                </div>
            </div>
            <div class="body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerLeftTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@TitleHeight: 53px;
@point: linear-gradient(0, #8D9FBD 0%, #8D9FBD 100%);
@line: linear-gradient(270deg, rgba(160, 180, 205, 0.24) 0%, rgba(103, 125, 159, 0.63) 100%);
@BgColor: linear-gradient(180deg, rgba(32, 35, 58, .5) 0%, rgba(36, 41, 66, .5) 100%);
@LeftLine: url("./img/left-line.png");
@RightLine: url("./img/right-line.png");
@BottomLine: url("./img/bottom-line.png");
@TopLeft: url("./img/top-left.png");
@TopRight: url("./img/top-right.png");
@BottomLeft: url("./img/bottom-left.png");
@BottomRight: url("./img/bottom-right.png");
.Container {
    padding: 9px 15px;

    > .main {
        height: 100%;
        width: 100%;
        /*background: linear-gradient(180deg, #20233A 0%, #242942 100%);*/
        /*background: linear-gradient(180deg, rgba(32, 35, 58, .5) 0%, rgba(36, 41, 66, .5) 100%);*/
        /*background:linear-gradient(180deg,rgba(32,35,58,1) 0%,rgba(36,41,66,1) 100%);*/
        background: @BgColor, @LeftLine 0 center no-repeat, @RightLine 100% center no-repeat, @BottomLine center 100% no-repeat, @TopLeft 0 0 no-repeat, @TopRight 100% 0 no-repeat, @BottomLeft 0 100% no-repeat, @BottomRight 100% 100% no-repeat;
        background-size: 100% 100%, 36px calc(100% - 84px), 36px calc(100% - 84px), calc(100% - 210px) 21px, 30px 26px, 30px 26px, 30px 26px, 30px 26px;

        > .title {
            height: @TitleHeight;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            background-image: url("./img/title-left.png");
            background-size: 500px 54px;
            background-position: 0 0;
            background-repeat: no-repeat;
            /*            background: @point 0 0 no-repeat, @point 100% 0 no-repeat, @point 0 100% no-repeat, @point 100% 100% no-repeat, @line 5px 2px no-repeat, @line 5px calc(~"100% - 2px") no-repeat, linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.365) 100%) center no-repeat; */
            /*            background-size: 5px 5px, 5px 5px, 5px 5px, 5px 5px, calc(~"100% - 10px") 1px, calc(~"100% - 10px") 1px, calc(~"100% - 4px") calc(~"100% - 4px"); */

            .text {
                font-size: 28px;
                line-height: @TitleHeight;
                text-indent: 22px;
                font-family: 'siyuan';
            }

            .slot {
                padding: 3px 5px;

                > * {
                    height: 100%;
                }
            }

            > div {
                flex-basis: auto;
            }
        }

        .body {
            height: calc(-@TitleHeight + ~"-3px + 100%");
            padding: 5px 10px;
        }
    }

}
</style>
