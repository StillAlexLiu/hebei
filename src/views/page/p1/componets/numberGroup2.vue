<template>
    <div class="number-group full-height  full-width">
        <container-border32 v-for="(item,index) in data" :key="index" class="item full-height"
                            :class="'w-1-'+data.length">
            <div class="h-2-4 cell full-width span_name">
                {{item.name1}}
            </div>
            <div class="num_p1 h-1-4 cell  full-width span_num">{{item.num1}}</div>
        </container-border32>
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
    .span_name{
        font-size: 3rem;
        line-height: 17rem;
    }
    .span_num{
        font-size: 3rem;
        line-height: 17rem;
    }
    img {
        height: 60%;
        margin-top: 10%;
    }

    .name_p1 {
        font-size: 26px;
    }

    .num_p1 {
        color: rgb(82, 198, 239);
        font-size: 48px;
        font-weight: bold;
    }

    > .item {
    }
}
</style>
