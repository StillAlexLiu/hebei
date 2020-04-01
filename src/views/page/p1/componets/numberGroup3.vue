<template>
    <div class="number-group ">
        <ContainerBorderStyle1 v-for="(item,index) in data" :key="index" class="w-1-2 item">
            <div class="w-2-5 img full-height">
                <span><img src="./img/png4.png" alt=""></span>
            </div>
            <div class="w-3-5 number full-height">
                <span>
                    <div class="name"> {{item.name}}</div>
                    <div class="num"> {{item.num}}</div>
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

    .img {
        text-align: center;
        display: table;

        span {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }

        img {
            width: 70%;
        }
    }

    .number {

        display: table;

        > span {
            display: table-cell;
            vertical-align: middle;
            text-align: left;

            .name {
                font-size: 2.5rem;
            }
            .num {
                font-size: 3rem;
                color: rgb(96, 171 , 223);
                font-weight: bold;
            }
            .value {
                font-weight: bold;
                font-size: 36px;
            }
        }

    }

    > .item {
        margin: 30px 0;

    }
}
</style>
