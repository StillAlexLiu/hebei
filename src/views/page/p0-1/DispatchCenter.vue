<template>
    <div class="DispatchCenter full">
        <div class="full-height w-1-5">
            <div class="info-can">
                <!--                        <div class="title">已接入参会方</div>-->
            </div>

        </div>
        <div class="full-height w-3-5">
            <img src="./components/img/指挥.png" class="full">
        </div>
        <div class="full-height w-1-5">
            <!--                    <container title="即时信息" class="full">-->
            <!--                        <chat class="full" :data="chatData"/>-->
            <!--                    </container>-->
            <div class="full" style="padding-left:30px">
                <img src="./components/img/chat-can-bg.png" class=" " style="width:489px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DispatchCenter'
}
</script>

<style scoped lang="less">
.DispatchCenter {
    padding-top: 80px;
    .info-can {
        background-image: url("./components/img/info-can-bg.png");
        background-size: 98% 100%;
        background-position: center;
        text-align: center;
        background-repeat: no-repeat;
        height: 100%;
        padding: 20px;

        > .title {
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 26px;
            background-color: #0A3754;
            width: 96%;
            margin: 0 auto;
        }
    }
}
</style>
