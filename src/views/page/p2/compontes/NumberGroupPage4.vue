<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="h-1-3  full-width">
            <div class="name h-1-2"> {{item.name}}</div>
            <div class="value h-1-2 number-font">{{item.value}}</div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>

export default {
  name: 'NumberGroupPage4',
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
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 5px;
    text-align: center;

    > div {
        /*flex: 1;*/
    }

    .img {
        text-align: center;
        display: table;

        span {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            text-indent: 10px;
        }

        img {
            height: 84px;
        }
    }

    .name {
        font-size: 24px;
        line-height: 60px;
    }

    .value {
        font-size: 42px;
    }

}
</style>
