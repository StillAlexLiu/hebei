<template>
    <div class="nameOnly">
        <div v-for="(item,index) in data" :key="index" class="item full-height">
            <p> {{item.name}}<br>{{item.value}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'nameOnly',
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
.nameOnly {
    background-image: url("./img/1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    padding-left: 15px;

    .item {
        font-size: 32px;
        text-align: center;
        float: left;
        width: 135px;

        &:nth-child(2n) {
            > p {
                margin-top: 110px;
            }
        }

        &:nth-child(2n+1) {
            > p {
                margin-top: 290px;
            }
        }
    }
}
</style>
