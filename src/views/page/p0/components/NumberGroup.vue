<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="h-1-3  full-width">
            <div class="w-1-3 img full-height">
                <span><img src="./img/png4.png" alt=""></span>
            </div>
            <div class="w-2-3 number full-height">
                <div class="name h-1-2"> {{item.name}}</div>
                <div class="value h-1-2 number-font">{{item.value}}</div>
            </div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup',
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
    flex-wrap: wrap;
    padding: 5px 0;

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

    .number {
        .name {
            font-size: 24px;
            line-height: 60px;
        }

        .value {
            font-size: 36px;
        }

    }

}
</style>
