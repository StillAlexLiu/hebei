<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="h-1-3  full-width">
            <div class="w-1-5 img full-height">
                <span><img src="./img/png4.png" alt=""></span>
            </div>
            <div class="w-4-5 number full-height">
                <span>
                    <div class="name"> {{item.name}}</div>
                    <div class="value">{{item.value}}</div>
                </span>
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
    padding: 30px 0;

    .img {
        text-align: center;
        display: table;
        padding-left: 2rem;
        span {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }

        img {
            width: 100%;
            display: inline-block;
            margin-left:1.5rem;
        }
    }

    .number {

        display: table;

        > span {
            vertical-align: middle;
            text-align: left;
            margin-left: 3rem;
            display: inline-block;
            margin-top: 1.2rem;

            .name {
                font-size: 1.5rem;
                line-height: 3rem;
                color: rgb(118, 217, 239)!important;
            }

            .value {
                font-weight: bold;
                font-size: 2rem;
                color: rgb(118, 217, 239)!important;
            }
        }

    }

    > .item {
        margin: 30px 0;

    }
}
</style>
