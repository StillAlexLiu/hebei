<template>
    <div class="LeftTitle">
        <div v-for="(item,index) in data" :key="index" class="full-width">
            <div>
                <font-awesome-icon class="fa" icon='circle'/>
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LeftTitle',
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
.LeftTitle {
    > div {
        margin: auto 0;
        text-align: center;
        font-size: 24px;
        font-weight: bold;

        > div {
            writing-mode: vertical-rl;
            margin: 34px auto;
            cursor: pointer;
        }

        .fa {
            text-align: center;
            font-size: 12px;
        }
    }
}
</style>
