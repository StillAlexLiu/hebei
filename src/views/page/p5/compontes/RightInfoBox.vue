<template>
    <div class="RightInfoBox full">
        <ContainerFour class="full">
            <div class="full RightInfoBox-in">
                <img :src='data.img' alt/>
                <div class="name">{{data.name}}</div>
                <div class='value number-font'>{{data.value}}<span class="unit">天</span></div>
            </div>
        </ContainerFour>
    </div>

</template>

<script>
export default {
  name: 'RightInfoBox',
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
.RightInfoBox {
    padding: 10px 40px;
    text-align: center;

    .RightInfoBox-in {
        padding: 20px 0;
    }

    img {
        width: 50px;
        height: 50px;
    }

    .name {
        font-size: 24px;
        line-height: 50px;
    }

    .value {
        font-size: 60px;
        line-height: 100px;

        > .unit {
            font-size: 24px;
        }
    }
}
</style>
