<template>
    <ContainerFour class="full">
        <div class='InfoBox full-height'>
            <div class='event_cont h-1-3'>
                <div class="name"><span>事件总数(件)</span></div>
                <div class='value '><span class="number-font ">{{data.value}}</span></div>
                <div class="img"></div>
            </div>
            <div class='event_cont h-1-3'>
                <div class="name"><span>同比</span></div>
                <div class=" value">
                    <span class="number-font" style='color:#F76B1C'> {{data.currentRatio}}%</span>
                </div>
                <div class="img">
                    <span><img :src='data.eventImg' alt/></span>
                </div>
            </div>
            <div class='event_cont h-1-3'>
                <div class="name">环比</div>
                <div class=" value"><span class="number-font" style='color:#F76B1C'>{{data.relativeRatio}}%</span></div>
                <div class='img'>
                    <img :src='data.eventImg' alt/>
                </div>
            </div>
        </div>
    </ContainerFour>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.InfoBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 20px 0 20px;

    .event_cont {
        width: 100%;
        flex: 1;
        overflow: hidden;
        display: table;

        > div {
            display: table-cell;
            height: 100%;
            float: left;
            vertical-align: middle;

            > * {
                display: table-cell;
            }
        }

        .number-font {
            font-size: 36px !important;
        }

        .name {
            font-size: 24px;
            width: 50%;
            text-indent: 30px;
        }

        .value {
            width: 30%;
        }

        .img {
            width: 20%;

            img {
                height: 50%;
            }
        }
    }
}
</style>
