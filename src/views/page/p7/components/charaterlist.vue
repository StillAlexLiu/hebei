<template>
    <div class="charaterlist full">
        <div class="list_header">
            {{data.name}}
        </div>
        <div class="list_botton" v-for="(item, index) in data.data" :key="index">
            <div class="name ">{{item.name}}</div>
            <div class="value number-font">{{item.num}}</div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['data'],
  data () {
    return {}
  }
}
</script>
<style scoped lang='less'>
.charaterlist {
    text-align: center;
    width: 100%;
    padding: 40px 0;

    .list_header {
        width: 100%;
        height: 62px;
        line-height: 62px;
        font-size: 24px;
        font-weight: bold;
        background-image: url("./img/title.png");
        background-size: 202px 62px;
        background-position: center;
        background-repeat: no-repeat;
    }

    .list_botton {
        width: 100%;

        text-align: left;
        padding: 0 60px;

        .name {
            font-size: 24px;
            margin-top: 20px;
        }

        .value {
            font-size: 42px;
            color: #FE6941;
        }
    }
}
</style>
