<template>
    <div class="number-group full-height  full-width">
        <ContainerFourDash v-for="(item,index) in data" :key="index" class="item">
            <div class="full" style="padding: 15px">
                <ContainerOnlyTitle class="title">
                    {{item.name}}
                </ContainerOnlyTitle>
                <div class="text">
                    <div class="w-1-2 full-height">
                        <div class="name">本年</div>
                        <div class="value number-font">{{item.yearData}}</div>
                    </div>
                    <div class="w-1-2 full-height">
                        <div class="name">累计</div>
                        <div class="value number-font">{{item.addup}}</div>
                    </div>
                </div>
            </div>
        </ContainerFourDash>
    </div>
</template>

<script>

export default {
  name: 'InfoGroup',
  props: ['data'],
  data: () => {
    return {}
  }
}
</script>
<style scoped lang="less">
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > .item {
        flex-grow: 1;
        margin: 30px 40px;
    }

    .title {
        height: 125px;
        font-size: 56px;
    }

    .text {
        height: calc(100% - 125px);
        text-align: center;

        .name {
            font-size: 32px;
            height: 50%;
            line-height: 60px;
        }

        .value {
            font-size: 54px;
            color: #F5A623;
            height: 50%;
        }
    }
}
</style>
