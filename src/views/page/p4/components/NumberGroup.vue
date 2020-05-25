<template>
    <div class="NumberGroup">
        <container-border32 v-for="(item,index) in data" :key="index" class="item full-height"
                            :class="'w-1-'+data.length">
            <div class="h-2-4  full-width">
                <div class="w-2-5 cell full-height" style="display: table">
                    <span style="display: table-cell;vertical-align: middle;text-align: center">
                        <img :src="item.icon" alt="" style="height: 50%">
                    </span>
                </div>
                <div class="w-3-5 cell full-height text-left">
                    <div class="h-3-5 number-font" style="font-size: 72px;color: #46CFFF;padding-top: 20px">
                        {{item.value}}
                    </div>
                    <div class="h-2-5" style="font-size: 32px">
                        {{item.name}}
                    </div>
                </div>
            </div>
            <div class="h-1-2 pd">
                <div class=" h-1-2   full-width">
                    <div class="w-1-2 full-height key">已处理</div>
                    <div class="w-1-2 full-height text-left value c1 number-font">{{item.value1}}</div>
                </div>
                <div class=" h-1-2   full-width">
                    <div class="w-1-2 full-height key">待处理</div>
                    <div class="w-1-2 full-height text-left value c2 number-font">{{item.value2}}</div>
                </div>
            </div>
        </container-border32>
    </div>
</template>

<script>
export default {
  name: 'NumberGroup',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.NumberGroup {
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
    text-align: center;

    .key {
        font-size: 32px;
        line-height: 44px;
    }

    .value {
        font-size: 44px;
        line-height: 44px;
        font-weight: bold;
    }

    .c1 {
        color: #b4ec51;
    }

    .c2 {
        color: #f87623;
    }

    > .item {
    }

    .pd {
        padding: 10px 0;
    }
}
</style>
