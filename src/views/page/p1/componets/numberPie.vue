<template>
    <div class="numberPie full">
        <div class="item all" :style="{'background-image': 'url(' + data.all.img + ')'}">
            <div class="value value2 number-font">
                {{data.all.value}}
            </div>
            <div class="name name2">
                {{data.all.name}}
            </div>
        </div>
        <div class="item" v-for="(item, index) in data.list" :key="index"
             :style="{'background-image': 'url(' + item.img + ')'}">
            <div class="value number-font">
                {{item.value}}
            </div>
            <div class="name">
                {{item.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'numberPie',
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
<style lang="less" scoped>
.numberPie {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
        flex-grow: 1;
        background-size: 84% auto;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;

        .name {
            font-size: 32px;
            line-height: 32px;
        }

        .value {
            color: #fff;
            font-size: 60px;
            line-height: 120px;
        }

        .name2 {
            line-height: 0;
        }

        .value2 {
            color: #fff;
            font-size: 60px;
            line-height: 280px;
        }
    }

    .all {
        background-size: 80% auto;
    }
}
</style>
