<template>
    <div class="ChatItem full-width">
        <div class="w-1-6 header">
            <img :src="data.header" alt="">
        </div>
        <div class="w-5-6">
            <div>{{data.name}}{{data.date}}</div>
            <ChatInfo>
                <template v-if="data.info.imgs&&data.info.imgs.length>0">
                    <img :src="item" v-for="(item,index) in data.info.imgs"
                         alt=""
                         class="full-width"
                         :key="index">
                </template>
                {{data.info.text}}
            </ChatInfo>
        </div>
    </div>
</template>

<script>
import ChatInfo from './ChatInfo'

export default {
  name: 'ChatItem',
  components: { ChatInfo },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChatItem {
    display: block;
    overflow: hidden;

    .header {
        text-align: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }
    }

    .info-img {
        width: 80%;
    }
}
</style>
