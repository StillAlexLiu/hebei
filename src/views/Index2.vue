<template>
    <div class=" ft">
        <TopHeader class="header full-width"/>
        <PageRouterView class="view full-width"/>
    </div>
</template>

<script>
import TopHeader from './header/TopHeader'
import PageRouterView from './page/PageRouterView2'

export default {
  name: 'Index',
  components: { PageRouterView, TopHeader }
}
</script>

<style scoped lang="less">
.ft {
    overflow: hidden;
    width: 1920*7/2px;
    height: 1080*3/2px;
    background-color: #1A1A2C;
}

@height: 100px;
.header {
    height: @height;
}

.view {
    height: calc(-@height + ~"100%")
}
</style>
