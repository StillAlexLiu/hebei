<template>
    <div class="Chat">
        <ChatItem class="item" v-for="(item,index) in data" :data="item" :key="index"/>
    </div>
</template>

<script>
import ChatItem from './ChatItem'

export default {
  name: 'Chat',
  components: { ChatItem },
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
.Chat {
    background-image: url("./img/chat.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 20px;

    .item {
        margin: 10px 0;
    }
}
</style>
