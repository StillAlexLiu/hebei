<template>
    <div class="number-group full-height  full-width">
        <container-border3 v-for="(item,index) in data" :key="index" class="item">
            <div class="full item-in">
                <div class="h-1-2 b-line">
                    <img :src="item.img" alt="" class="title_img">
                </div>
                <div class="h-1-2">
                    <div class="title_name">{{item.name}}</div>
                    <span class="title_num number-font">{{item.value}}</span>
                    <span class="title_unit">{{item.unit}}</span>
                </div>
            </div>
        </container-border3>
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
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    > .item {
        flex-basis: 245px;
        height: 232px;
        text-align: center;

        .item-in {
            padding: 10px;

            .b-line {
                border-bottom: 2px solid rgba(74, 144, 226, 0.31);
            }
        }

        .title_img {
            width: 80px;
            height: 80px;
        }

        .title_name {
            font-size: 24px;
            height: 60px;
            line-height: 60px;
        }

        .title_num {
            font-size: 36px;
            color: #79DFEF;
        }

        .title_unit {
            font-size: 20px;
            color: #fff;
        }
    }
}
</style>
