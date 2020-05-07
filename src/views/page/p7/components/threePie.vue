<template>
    <div id="dobulePie">
        <div class="w-1-3 full-height pieClass" v-for="(item, index) in data" :key="index">
            <div :style="{'background-image':'url('+item.img+')'}">
                <span>{{item.num}}</span>
            </div>
            <p>{{item.name}}</p>
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
#dobulePie {
    width: 100%;
    height: 100%;

    .pieClass {
        //   padding: 10% 0 0 10%;
        div {
            width: 80%;
            height: 50%;
            background-size: 180px 180px;
            background-position: center;
            background-repeat: no-repeat;
            margin: 30% 0 0 10%;
            line-height: 20rem;
            text-align: center;

            span {
                text-align: center;
                line-height: 140px;
                font-size: 32px;
                color: white;
                font-weight: bold;
            }
        }

        p {
            font-size: 32px;
            font-weight: bold;
            margin: 10px 0 0 0;
            text-align: center;
        }
    }
}
</style>
