<template>
    <div class="DispatchLeft full">
        <div class="full-height w-1-6" style="text-align: center">
            <img src="./components/img/pngLeft.png" style="width: 235px;margin-top:20px">
        </div>
        <div class="full-height w-5-6" style="padding-top: 11px">
            <div class="h-1-3">
                <container title="领导组" class="w-2-5  full-height">
                    <img class="info-img" src="./components/img/png1.png">
                    <img class="info-img" src="./components/img/png2.png">
                </container>
                <container title="人员信息" class="w-3-5  full-height">
                    <ContainerInfo class="full">
                        <div class="full" style="padding: 10px">
                            <img src="./components/img/信息.png" class="full-width">
                            <div
                                style="width:234px;height:49px;line-height:49px;text-align:center;background:rgba(61,148,213,0.25);margin-top: 20px;">
                                AG12642
                            </div>
                        </div>
                    </ContainerInfo>
                </container>
            </div>
            <container title="位置" class="h-2-3">
                <div class="full" style="padding: 30px 0">
                    <img src="./components/img/位置@2x.png" class="full-width">
                    <!--                        <a-map class="full-height full-width" :zoom="zoom"-->
                    <!--                               :center="center"-->
                    <!--                               :adcode="adcode"-->
                    <!--                               :depth="depth"-->
                    <!--                               :id-key="13"-->
                    <!--                        />-->

                </div>
            </container>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DispatchLeft'
}
</script>

<style scoped lang="less">
.DispatchLeft {

    .info-img {
        height: 164px;
        margin: 10px;
    }
}
</style>
