<template>
    <div class="number-group full-height  full-width">
        <ContainerFourDash v-for="(item,index) in data" :key="index" class="item">
            <div class="full" style="padding: 15px">
                <ContainerOnlyTitle class="title">
                    {{item.name}}
                </ContainerOnlyTitle>
                <div class="text">
                    <div class="w-1-2 full-height">
                        <div class="name">{{item.name}}</div>
                        <div class="value number-font">{{item.num}}</div>
                    </div>
                    <div class="w-1-2 full-height">
                        <div class="name">累计</div>
                        <div class="value number-font" @click="overBox(item)">{{item.addup}}</div>
                    </div>
                </div>
            </div>
        </ContainerFourDash>
    </div>
</template>

<script>
import Bus from '@/assets/bus.js'
export default {
  name: 'InfoGroup',
  props: ['data', 'name'],
  data: () => {
    return {}
  },
  methods: {
      overBox (data) {
        if (data.name === '结案') {
          Bus.$emit('overBox', data.type)
        }
      }
  }
}
</script>
<style scoped lang="less">
.number-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > .item {
       width: 27%;
       height: 90%;
       margin: 1% 3%;
    }

    .title {
        height: 125px;
        font-size: 52px;
    }

    .text {
        height: calc(100% - 125px);
        text-align: center;

        .name {
            font-size: 32px;
            height: 50%;
            line-height: 60px;
        }

        .value {
            font-size: 54px;
            color: #F5A623;
            height: 50%;
        }
    }
}
</style>
