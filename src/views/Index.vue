<template>
    <div class="full-width full-height">
        <TopHeader class="header full-width"/>
        <PageRouterView class="view full-width"/>
    </div>
</template>

<script>
import TopHeader from './header/TopHeader'
import PageRouterView from './page/PageRouterView'

export default {
  name: 'Index',
  components: { PageRouterView, TopHeader }
}
</script>

<style scoped lang="less">
@height: 100px;
.header {
    height: @height;
}

.view {
    height: calc(-@height + ~"100%")
}
</style>
