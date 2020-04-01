<template>
    <div class="ChatInfo">
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'ChatInfo'
}
</script>

<style scoped lang="less">
.ChatInfo {
    background-image: url("./img/chat-t.png"), url("./img/chat-c.png"), url("./img/chat-b.png");
    display: block;
    background-position: top center, center 19px, bottom center;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 100% 20px, 100% calc(~"100% - 48px"), 100% 30px;
    min-height: 80px;
    padding: 20px;
}
</style>
