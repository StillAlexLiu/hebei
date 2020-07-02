<template>
    <div class="number-group4 ">
        <ContainerBorderStyle1 class="h-2-3  full-width">
            <div class="full-width img h-1-3">
                <span><img src="../../p0/components/img/png4.png" alt=""></span>
            </div>
            <div class="full-width number h-2-3">
                <div class="name"> {{data[0].name}}</div>
                <div class="value number-font">{{data[0].value}}</div>
            </div>
        </ContainerBorderStyle1>
    </div>
</template>

<script>

export default {
  name: 'NumberGroup4',
  props: ['data'],
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="less">
.number-group4 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 5px 0;
    margin: 60px 0;
    text-align: center;
    .img {
        text-align: center;
        display: table;
        margin-top: 10px;
        span {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            text-indent: 10px;
        }

        img {
            height: 104px;
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
