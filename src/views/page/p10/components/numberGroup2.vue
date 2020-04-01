<template>
    <div class="numberGroup2 full">
        <container-info-card v-for="(item,index) in data" :key="index" class="item">
            <div class="name">
                <div>{{item.name}}</div>
            </div>
            <div class="value">
                <div>累计有效</div>
                <div class="c1">{{item.value1}}</div>
            </div>
            <div class="value">
                <div>已处理</div>
                <div class="c2">{{item.value2}}</div>
            </div>
            <div class="value">
                <div>待处理</div>
                <div class="c3">{{item.value3}}</div>
            </div>
        </container-info-card>
    </div>
</template>

<script>
export default {
  name: 'numberGroup2',
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
.numberGroup2 {
    display: flex;
    direction: ltr;
    justify-content: space-around;
    flex-flow: nowrap;
    align-items: center;

    > .item {
        height: 80%;
        background-repeat: no-repeat;
        background-size: 90% 100%;
        background-position: center;
        flex-grow: 0;
        flex-basis: 40%;
        text-align: center;
        padding: 20px 0;

        .name {
            font-size: 30px;
            line-height: 130px;
            height: 130px;
        }

        .value {
            height: calc(~"(100% - 130px)/3");
            width: 100%;

            > div {
                float: left;
                width: 50%;

                &:nth-child(1) {
                    text-align: right;
                }

                &:nth-child(2) {
                    text-indent: 10px;
                    text-align: left;
                }
            }
        }
    }

    .c1 {
        color: #22AEC5;
    }

    .c2 {
        color: #44D7B6;
    }

    .c3 {
        color: #FA6400;
    }
}
</style>
