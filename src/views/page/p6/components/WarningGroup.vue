<template>
    <div class="number-group full-height  full-width">
        <ContainerWarning v-for="(item,index) in data" :key="index" class="item" :level="index">
            <div class="full" @click="cli(item)">
                <div class="value number-font" :style="{'color':item.color}" >{{item.num}}</div>
                <div class="name-div">
                    <div class="item_color" :style="{'background':item.color}"></div>
                    <div class="name">{{item.colorName}}</div>
                </div>
            </div>
        </ContainerWarning>
    </div>
</template>

<script>

export default {
  name: 'WarningGroup',
  props: ['data'],
  data: () => {
    return {}
  },
  methods: {
    cli (item) {
        this.$emit('cliBox', item)
    }
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
        margin: 25px;
        padding-top: 80px;

    }

    .value {
        font-size: 90px;
        text-align: center;
    }

    .name-div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > div {
            float: left;
            margin: 5px;
        }

        .item_color {
            width: 23px;
            height: 23px;
            border-radius: 50%;
        }

        .name {
            font-size: 32px;
        }

    }
}
</style>
