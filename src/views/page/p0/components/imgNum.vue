<template>
    <div class="imgNum full">
        <div v-for="(item,index) in data" :key="index" class="item">
            <div class="w-1-3 img full-height dt">
                <span class="dc"><img :src="item.img" alt=""></span>
            </div>
            <div class="w-2-3 text full-height dt">
                <div class="name dr"><span class="dc">{{item.name}}</span></div>
                <div class="value dr "><span class="dc number-font">{{item.value}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'imgNum',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
.imgNum {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .item {
        flex: 0.4;
        background-image: url('./img/bg-zf@2x.png');
        background-size: 100% 100%;
        padding: 30px 0;

        .img {
            text-align: center;

            img {
                height: 84px;
            }
        }

        .text {

            .name {
                font-size: 28px;
            }

            .value {
                > * {
                    font-size: 60px;
                }
            }
        }
    }

}
</style>
