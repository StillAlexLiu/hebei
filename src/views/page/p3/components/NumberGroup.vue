<template>
    <div class="number-group full-height  full-width">
        <container-border3 v-for="(item,index) in data" :key="index" class="item full-height"
                           :class="'w-1-'+data.length">
            <div class="h-2-4 cell full-width">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="name_p1 h-1-4 cell  full-width">{{item.name1}}</div>
            <div class="num_p1 h-1-4 cell  full-width">{{item.num1}}<span class="sub">户</span></div>
        </container-border3>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup2',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-group {
    display: flex;
    flex-direction: row;
    // justify-content: space-around;
    text-align: center;

    img {
        height: 60%;
        margin-top: 10%;
    }

    .name_p1 {
        font-size: 26px;
    }

    .num_p1 {
        color: #FE6145;
        font-size: 48px;
        font-weight: bold;

        > .sub {
            font-size: 24px;
            color: #FE6145;
        }
    }

    > .item {
    }
}
</style>
